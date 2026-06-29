import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import {
  collection,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";

export default function Admin() {
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // ============================
  // Real-time Firestore Listener
  // ============================

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "bookings"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setBookings(data);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  // ============================
  // Delete Booking
  // ============================

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this booking?")) return;

    try {
      await deleteDoc(doc(db, "bookings", id));
    } catch (err) {
      alert(err.message);
    }
  };

  // ============================
  // Update Booking Status
  // ============================

  const handleStatusChange = async (id, status) => {
    try {
      await updateDoc(doc(db, "bookings", id), {
        status,
      });
    } catch (err) {
      alert(err.message);
    }
  };

  // ============================
  // Firebase Logout
  // ============================

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  // ============================
  // WhatsApp
  // ============================

  const sendWhatsApp = (phone, booking) => {
    const message = `🚖 MRM Travels

Hello ${booking.name},

Your booking details:

Vehicle: ${booking.vehicle}
Service: ${booking.service}
Pickup: ${booking.starting}
Destination: ${booking.destination}
Journey Date: ${booking.date}
Pickup Time: ${booking.time}

Thank you for choosing MRM Travels.`;

    window.open(
      `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  // ============================
  // Call Customer
  // ============================

  const callCustomer = (phone) => {
    window.open(`tel:+91${phone}`);
  };

  // ============================
  // Export Excel
  // ============================

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(bookings);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Bookings");

    XLSX.writeFile(workbook, "MRM_Travels_Bookings.xlsx");
  };

  // ============================
  // Search Filter
  // ============================

  const filteredBookings = bookings.filter((booking) =>
    (
      booking.name +
      booking.phone +
      booking.destination +
      booking.starting
    )
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // ============================
  // Dashboard Statistics
  // ============================

  const totalBookings = bookings.length;

  const pendingBookings = bookings.filter(
    (b) => b.status === "Pending"
  ).length;

  const confirmedBookings = bookings.filter(
    (b) => b.status === "Confirmed"
  ).length;

  const completedBookings = bookings.filter(
    (b) => b.status === "Completed"
  ).length;

  const cancelledBookings = bookings.filter(
    (b) => b.status === "Cancelled"
  ).length;

  const cardStyle = {
    flex: 1,
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
  };
  return (
  <div className="min-h-screen bg-gray-100 p-6">

    {/* Header */}
    <div className="flex flex-col md:flex-row justify-between items-center mb-6">

      <h1 className="text-3xl font-bold text-blue-700">
        🚖 MRM Travels Admin Dashboard
      </h1>

      <div className="flex gap-3 mt-4 md:mt-0">

        <button
          onClick={exportToExcel}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
        >
          📄 Export Excel
        </button>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

    </div>

    {/* Dashboard Cards */}

    <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mb-8">

      <div className="bg-blue-600 text-white rounded-xl p-5 text-center shadow-lg">
        <h2 className="text-lg">Total Bookings</h2>
        <p className="text-4xl font-bold mt-2">{totalBookings}</p>
      </div>

      <div className="bg-yellow-500 text-white rounded-xl p-5 text-center shadow-lg">
        <h2 className="text-lg">Pending</h2>
        <p className="text-4xl font-bold mt-2">{pendingBookings}</p>
      </div>

      <div className="bg-green-600 text-white rounded-xl p-5 text-center shadow-lg">
        <h2 className="text-lg">Confirmed</h2>
        <p className="text-4xl font-bold mt-2">{confirmedBookings}</p>
      </div>

      <div className="bg-indigo-600 text-white rounded-xl p-5 text-center shadow-lg">
        <h2 className="text-lg">Completed</h2>
        <p className="text-4xl font-bold mt-2">{completedBookings}</p>
      </div>

      <div className="bg-red-600 text-white rounded-xl p-5 text-center shadow-lg">
        <h2 className="text-lg">Cancelled</h2>
        <p className="text-4xl font-bold mt-2">{cancelledBookings}</p>
      </div>

    </div>

    {/* Search */}

    <div className="mb-6">

      <input
        type="text"
        placeholder="🔍 Search Name, Phone, Pickup or Destination..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-96 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

    </div>

    {/* Loading */}

    {loading ? (

      <div className="text-center text-2xl font-bold py-20">
        Loading Bookings...
      </div>

    ) : (

      <div className="overflow-x-auto bg-white rounded-xl shadow-lg">

        <table className="min-w-full border-collapse">

          <thead className="bg-blue-600 text-white">

            <tr>

              <th className="p-3">Name</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Vehicle</th>
              <th className="p-3">Service</th>
              <th className="p-3">Pickup</th>
              <th className="p-3">Destination</th>
              <th className="p-3">Journey Date</th>
              <th className="p-3">Pickup Time</th>
              <th className="p-3">Message</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>

            </tr>

          </thead>

          <tbody>            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="border-b hover:bg-gray-50 text-center"
                >
                  <td className="p-3">{booking.name}</td>

                  <td className="p-3">{booking.phone}</td>

                  <td className="p-3">{booking.vehicle || "-"}</td>

                  <td className="p-3">{booking.service || "-"}</td>

                  <td className="p-3">{booking.starting || "-"}</td>

                  <td className="p-3">{booking.destination || "-"}</td>

                <td className="p-3">
  {booking.date?.seconds
    ? new Date(booking.date.seconds * 1000).toLocaleDateString()
    : "-"}
</td>
                  <td className="p-3">{booking.time || "-"}</td>

                  <td className="p-3">
                    {booking.message || "-"}
                  </td>

                  <td className="p-3">
                    <select
                      value={booking.status || "Pending"}
                      onChange={(e) =>
                        handleStatusChange(
                          booking.id,
                          e.target.value
                        )
                      }
                      className="border rounded-lg px-2 py-2"
                    >
                      <option value="Pending">
                        🟡 Pending
                      </option>

                      <option value="Confirmed">
                        🟢 Confirmed
                      </option>

                      <option value="Completed">
                        🔵 Completed
                      </option>

                      <option value="Cancelled">
                        🔴 Cancelled
                      </option>
                    </select>
                  </td>

                  <td className="p-3">

                    <div className="flex flex-wrap gap-2 justify-center">

                      <button
                        onClick={() =>
                          sendWhatsApp(
                            booking.phone,
                            booking
                          )
                        }
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg"
                      >
                        WhatsApp
                      </button>

                      <button
                        onClick={() =>
                          callCustomer(booking.phone)
                        }
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg"
                      >
                        Call
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(booking.id)
                        }
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg"
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="11"
                  className="text-center py-10 text-gray-500 text-lg"
                >
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>

        </table>

      </div>

    )}

  </div>
);
}
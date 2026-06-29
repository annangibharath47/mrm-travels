import { useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";

export default function Booking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [service, setService] = useState("");
  const [starting, setStarting] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 🔍 Check duplicate booking (same vehicle + date)
      const q = query(
        collection(db, "bookings"),
        where("vehicle", "==", vehicle),
        where("date", "==", date)
      );

      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        alert("⚠️ This vehicle is already booked for this date!");
        return;
      }

      // 💾 Save booking to Firebase
      await addDoc(collection(db, "bookings"), {
        name,
        phone,
        vehicle,
        service,
        starting,
        destination,
        date,
        time,
        message,
        status: "Pending",
        createdAt: serverTimestamp(),
      });

      // 📲 WhatsApp message
      const whatsappMessage = `
🚖 *MRM Travels Booking*

👤 Name: ${name}
📞 Phone: ${phone}
🚗 Vehicle: ${vehicle}
🧳 Service: ${service}
📍 Pickup: ${starting}
📍 Destination: ${destination}
📅 Journey Date: ${date}
🕒 Pickup Time: ${time}
📝 Message: ${message}
      `;

      const whatsappURL = `https://wa.me/919550541694?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      window.open(whatsappURL, "_blank");

      alert("✅ Booking Submitted Successfully!");

      // 🧹 Reset form
      setName("");
      setPhone("");
      setVehicle("");
      setService("");
      setStarting("");
      setDestination("");
      setDate("");
      setTime("");
      setMessage("");

    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-6 sm:mt-10 bg-white shadow-lg rounded-xl p-4 sm:p-8">
      
      <h1 className="text-2xl sm:text-4xl font-bold text-center text-blue-700 mb-6 sm:mb-8">
        🚖 Book Your Trip
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border border-gray-300 rounded-lg p-3 text-base sm:text-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border border-gray-300 rounded-lg p-3 text-base sm:text-lg"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        {/* 🚗 Vehicle Dropdown (Swift Dzire removed) */}
        <select
          className="w-full border border-gray-300 rounded-lg p-3 text-base sm:text-lg"
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
          required
        >
          <option value="">Select Vehicle</option>
          <option>Toyota Etios</option>
          <option>Maruti Suzuki Ertiga</option>
          <option>Innova Crysta</option>
          <option>Tempo Traveller</option>
        </select>

        <select
          className="w-full border border-gray-300 rounded-lg p-3 text-base sm:text-lg"
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
        >
          <option value="">Select Service</option>
          <option>Airport Pickup</option>
          <option>Airport Drop</option>
          <option>Outstation Trip</option>
          <option>Tirupati Trip</option>
          <option>Wedding Travel</option>
          <option>Corporate Travel</option>
          <option>Tour Package</option>
        </select>

        <input
          type="text"
          placeholder="Pickup Location"
          className="w-full border border-gray-300 rounded-lg p-3 text-base sm:text-lg"
          value={starting}
          onChange={(e) => setStarting(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Destination"
          className="w-full border border-gray-300 rounded-lg p-3 text-base sm:text-lg"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />

        <input
          type="date"
          className="w-full border border-gray-300 rounded-lg p-3 text-base sm:text-lg"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <input
          type="time"
          className="w-full border border-gray-300 rounded-lg p-3 text-base sm:text-lg"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />

        <textarea
          rows="4"
          placeholder="Additional Message (Optional)"
          className="w-full border border-gray-300 rounded-lg p-3 text-base sm:text-lg"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold active:scale-95 transition"
        >
          Submit Booking
        </button>

      </form>
    </div>
  );
}
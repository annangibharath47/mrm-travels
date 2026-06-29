import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">Contact MRM Travels</h1>
          <p className="mt-4 text-xl">
            We're here to help you with your travel needs.
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Side */}
          <div>

            <h2 className="text-3xl font-bold text-blue-700 mb-6">
              Get In Touch
            </h2>

            <div className="space-y-6 text-lg">

              <div className="flex items-center gap-4">
                <span className="text-3xl">📞</span>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a
                    href="tel:+919550541694"
                    className="text-blue-600 hover:underline"
                  >
                    +91 95505 41694
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-3xl">📧</span>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a
                    href="mailto:mrmtravels@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    mrmtravels@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-3xl">📍</span>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p>Andhra Pradesh, India</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-3xl">🕒</span>
                <div>
                  <h3 className="font-semibold">Working Hours</h3>
                  <p>24 × 7 Available</p>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-xl rounded-xl p-8">

            <h2 className="text-2xl font-bold text-blue-700 mb-6">
              Send a Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-lg p-3"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border rounded-lg p-3"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* Google Map */}
      <section className="max-w-6xl mx-auto px-6 pb-16">

        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Our Location
        </h2>

        <div className="rounded-xl overflow-hidden shadow-lg">

          <iframe
            title="MRM Travels Location"
            src="https://www.google.com/maps?q=Tirupati,Andhra%20Pradesh&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

        </div>

      </section>

      {/* Call To Action */}
      <section className="bg-blue-700 text-white py-14">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Ready to Book Your Trip?
          </h2>

          <p className="mt-4 text-lg">
            Call us now or book online for a safe and comfortable journey.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">

            <a
              href="tel:+919550541694"
              className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-300"
            >
              📞 Call Now
            </a>

            <a
              href="/booking"
              className="bg-green-600 px-8 py-3 rounded-lg font-bold hover:bg-green-700"
            >
              🚖 Book Now
            </a>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}
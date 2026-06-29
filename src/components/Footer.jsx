export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-yellow-400">
              🚖 MRM Travels
            </h2>

            <p className="mt-4 text-gray-300">
              Safe, Comfortable and Affordable Travel Services.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Our Services
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>✈ Airport Pickup & Drop</li>
              <li>🏙 Local Trips</li>
              <li>🛣 Outstation Trips</li>
              <li>🛕 Tirupati / Tirumala Trips</li>
              <li>💍 Wedding Travel</li>
              <li>🏢 Corporate Travel</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact Us
            </h3>

            <p>📍 Podalakur, Nellore District</p>
            <p>Andhra Pradesh - 524345</p>

            <p className="mt-3">
              📞 +91 9550541694
            </p>

            <a
              href="https://wa.me/919550541694"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg font-semibold"
            >
              WhatsApp Us
            </a>
          </div>

        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-center text-gray-400">
          © 2026 MRM Travels. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}
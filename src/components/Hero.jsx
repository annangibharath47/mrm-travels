import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-500 text-white py-24">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h1 className="text-6xl font-bold">
          Welcome to MRM Travels
        </h1>

        <p className="mt-6 text-xl">
          Safe • Comfortable • Affordable Travel
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            to="/booking"
            className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg"
          >
            Book Now
          </Link>

          <a
            href="tel:+919550541694"
            className="bg-yellow-400 text-black hover:bg-yellow-300 px-8 py-3 rounded-lg"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
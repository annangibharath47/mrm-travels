import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">About MRM Travels</h1>
          <p className="mt-4 text-xl">
            Your Trusted Travel Partner for Safe, Comfortable & Affordable
            Journeys.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800"
            alt="MRM Travels"
            className="rounded-xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              Who We Are
            </h2>

            <p className="text-gray-700 leading-8">
              MRM Travels is dedicated to providing reliable, comfortable,
              and affordable travel services. Whether you need airport
              transfers, outstation trips, Tirupati packages, wedding
              transportation, or corporate travel, we ensure every journey
              is safe and enjoyable.
            </p>

            <p className="text-gray-700 leading-8 mt-4">
              Our experienced drivers, well-maintained vehicles, and
              customer-first approach have helped us earn the trust of
              hundreds of happy travelers.
            </p>
          </div>

        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="font-bold text-xl">Safe Travel</h3>
              <p className="mt-2 text-gray-600">
                Professional and experienced drivers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-5xl mb-4">🚖</div>
              <h3 className="font-bold text-xl">Clean Vehicles</h3>
              <p className="mt-2 text-gray-600">
                Well-maintained and comfortable cars.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="font-bold text-xl">24/7 Service</h3>
              <p className="mt-2 text-gray-600">
                Available anytime for your travel needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="font-bold text-xl">Affordable Pricing</h3>
              <p className="mt-2 text-gray-600">
                Best travel service at competitive prices.
              </p>
            </div>

          </div>

        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
            Our Mission
          </h2>

          <p className="text-center text-gray-700 text-lg leading-8 max-w-4xl mx-auto">
            Our mission is to make every journey comfortable, affordable,
            and memorable by delivering exceptional travel experiences
            through quality service, punctuality, and customer satisfaction.
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}
export default function Testimonials() {
  const reviews = [
    {
      name: "Ramesh",
      review: "Excellent service. Clean vehicle and polite driver.",
    },
    {
      name: "Suresh",
      review: "Booked for Tirupati trip. Very comfortable journey.",
    },
    {
      name: "Priya",
      review: "Affordable prices and on-time pickup. Highly recommended!",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Customer Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold">{item.name}</h3>

              <p className="text-yellow-500 text-xl my-2">
                ⭐⭐⭐⭐⭐
              </p>

              <p>{item.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
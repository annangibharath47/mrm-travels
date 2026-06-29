export default function Map() {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center mb-8">
        Our Location
      </h2>

      <div className="max-w-6xl mx-auto px-6">
        <iframe
          title="MRM Travels Location"
          src="https://www.google.com/maps?q=Podalakur,Nellore&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
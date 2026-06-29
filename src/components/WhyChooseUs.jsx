export default function WhyChooseUs() {
  return (
    <section style={{ padding: "60px", textAlign: "center" }}>
      <h2>Why Choose MRM Travels?</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          marginTop: "40px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h3>🚖 Clean Vehicles</h3>
          <p>Well-maintained and sanitized vehicles.</p>
        </div>

        <div>
          <h3>👨‍✈️ Experienced Drivers</h3>
          <p>Professional and courteous drivers.</p>
        </div>

        <div>
          <h3>💰 Affordable Pricing</h3>
          <p>Transparent rates with no hidden charges.</p>
        </div>
      </div>
    </section>
  );
}
export default function Services() {
  const services = [
    "✈️ Airport Pickup & Drop",
    "🏙️ Local Trips",
    "🛣️ Outstation Trips",
    "🛕 Tirupati / Tirumala Trips",
    "💍 Wedding Travel",
    "🏢 Corporate Travel",
    "🌄 Tour Packages",
  ];

  return (
    <section
      style={{
        padding: "60px 20px",
        background: "#f8fafc",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "36px", marginBottom: "30px" }}>
        Our Services
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {services.map((service) => (
          <div
            key={service}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            {service}
          </div>
        ))}
      </div>
    </section>
  );
}
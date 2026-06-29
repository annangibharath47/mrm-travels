export default function VehicleCard({
  name,
  seats,
  price,
  image,
}) {
  return (
    <div
      style={{
        width: "320px",
        background: "white",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 5px 15px rgba(0,0,0,.15)",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "20px" }}>
        <h2>{name}</h2>
        <p>Seats: {seats}</p>
        <h3>{price}</h3>

        <button
          onClick={() =>
            window.open(
              "https://wa.me/919550541694?text=Hi%20MRM%20Travels,%20I%20want%20to%20book%20this%20vehicle.",
              "_blank"
            )
          }
          style={{
            width: "100%",
            marginTop: "15px",
            padding: "12px",
            background: "#25D366",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Book on WhatsApp
        </button>
      </div>
    </div>
  );
}
import VehicleCard from "../components/VehicleCard";

import etios from "../assets/vehicles/etios.jpg";
import ertiga from "../assets/vehicles/ertiga.jpg";
import tempo from "../assets/vehicles/tempo.jpg";

export default function Fleet() {
  return (
    <div style={{ padding: "50px" }}>
      <h1 style={{ textAlign: "center" }}>Our Fleet</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "40px",
        }}
      >
        <VehicleCard
          name="Toyota Etios"
          seats="4 Seats"
          price="₹12/km"
          image={etios}
        />

        <VehicleCard
          name="Maruti Suzuki Ertiga"
          seats="7 Seats"
          price="₹15/km"
          image={ertiga}
        />

        <VehicleCard
          name="Tempo Traveller"
          seats="12 Seats"
          price="₹22/km"
          image={tempo}
        />
      </div>
    </div>
  );
}
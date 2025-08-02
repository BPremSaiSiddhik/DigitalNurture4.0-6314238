import React from "react";
import "./App.css";
import officeImage from "./office.jpg";

function App() {
  const heading = "Office Space";

  const jsxImage = (
    <img
      src={officeImage}
      width="30%"
      height="30%"
      alt="Office Space"
      style={{ marginTop: "20px" }}
    />
  );

  const officeItem = { Name: "DBS", Rent: 50000, Address: "Chennai" };

  const formattedRent = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(officeItem.Rent);

  const rentClass = officeItem.Rent <= 60000 ? "rent-red" : "rent-green";

  return (
    <div className="App">
      <h1>{heading}, at Affordable Range</h1>
      {jsxImage}

      <div style={{ marginTop: "20px", textAlign: "left", paddingLeft: "35%" }}>
        <h2>
          <strong>Name:</strong> {officeItem.Name}
        </h2>
        <h3 className={rentClass}>
          <strong>Rent:</strong> {formattedRent}
        </h3>
        <h3>
          <strong>Address:</strong> {officeItem.Address}
        </h3>
      </div>
    </div>
  );
}

export default App;

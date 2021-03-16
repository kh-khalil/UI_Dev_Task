import BikeCard from "./components/BikeCard";

function App() {
  return (
    <div className="App">
      {/* Page Title */}
      <div className="page_title text-center">
        <h1>Bikes in San Francisco</h1>
      </div>

      {/* Card Container */}
      <div className="p-0 card_container text-center">
        {/* Bike Card Component*/}
        <BikeCard
          imgClass="big" // big for selected renter & small for other renters
          make=""
          model=""
          location=""
          shopName=""
          renterName=""
          rating=""
          price=""
          otherRenters=""
        ></BikeCard>

        {/* Other Renters */}
        <div className="other_renters text-left">
          <div className="other_renters_label d-flex">
            <i class="fas fa-bars "></i>
            <p className="other_renters_number">6 Other Renters</p>
            <p className="other_renters_price">from $120 /day</p>
          </div>
        </div>
      </div>

      {/* Card Container */}
      <div className="p-0 card_container text-center">
        {/* Bike Card Component*/}
        <BikeCard
          imgClass="big" // big for selected renter & small for other renters
          make=""
          model=""
          location=""
          shopName=""
          renterName=""
          rating=""
          price=""
          otherRenters=""
        ></BikeCard>

        {/* Other Renters */}
        <div className="other_renters text-left">
          <div className="other_renters_label d-flex">
            <i class="fas fa-bars "></i>
            <p className="other_renters_number">6 Other Renters</p>
            <p className="other_renters_price">from $120 /day</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

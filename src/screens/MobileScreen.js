import React from "react";
import BikeCard from "../components/BikeCard";

export default function MobileScreen() {
  return (
    <>
      ({/* Page Title */}
      <div className="page_title text-center">
        <h1>Bikes in San Francisco</h1>
      </div>
      {/* Card Container */}
      <div className="p-0 card_container text-center">
        {/* Bike Card Component*/}
        <BikeCard
          imgClass="big" // big for selected renter & small for other renters
          makeAndModel="show" // choose between show or hide
          location=""
          shopName=""
          renterName=""
          rating=""
          price=""
          otherRenters=""
        ></BikeCard>

        {/* Other Renters */}
        <div className="other_renters_container text-left">
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
          makeAndModel="show" // choose between show or hide
          location=""
          shopName=""
          renterName=""
          rating=""
          price=""
          otherRenters=""
        ></BikeCard>

        {/* Other Renters */}
        <div className="other_renters_container text-left">
          <div className="other_renters_label d-flex">
            <i class="fas fa-bars "></i>
            <p className="other_renters_number">6 Other Renters</p>
            <p className="other_renters_price">from $120 /day</p>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import BikeCard from "../components/BikeCard";

export default function DesktopScreen() {
  return (
    <>
      {/* Page Title */}
      <div className="page_title text-center">
        <h1>Bikes in San Francisco</h1>
      </div>

      <div className="d-flex">
        {/* Card Container */}
        <div className="p-0 card_container text-center row">
          {/* Bike Card Component*/}
          <BikeCard
            smallCard="false" // true or false according to the card size that you want
            model="Fat Boy® Classic"
          ></BikeCard>

          {/* Other Renters */}
          <div className="col other_renters_container text-left">
            <div className="other_renters_label">
              <p className="other_renters_number">6 Other Renters</p>
            </div>
            {/* Bike Card Component*/}
            <div className="renters_details_div">
              <BikeCard
                smallCard="true" // true or false according to the card size that you want
                renterName="Matt Clarkson"
                shopLocation="Near China Town, SF"
              ></BikeCard>
              <BikeCard
                smallCard="true" // true or false according to the card size that you want
                renterName="Matt Clarkson"
                shopLocation="Near China Town, SF"
              ></BikeCard>
              <BikeCard
                smallCard="true" // true or false according to the card size that you want
                renterName="Matt Clarkson"
                shopLocation="Near China Town, SF"
              ></BikeCard>
              <BikeCard
                smallCard="true" // true or false according to the card size that you want
                renterName="Matt Clarkson"
                shopLocation="Near China Town, SF"
              ></BikeCard>
            </div>
          </div>
        </div>

        <div className="place_holder_section">This is place holder section</div>
      </div>
    </>
  );
}

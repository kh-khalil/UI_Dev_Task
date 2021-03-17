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
            // className="col-3"
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
          <div className="col other_renters_container text-left">
            <div className="other_renters_label">
              <p className="other_renters_number">6 Other Renters</p>
            </div>

            {/* Bike Card Component*/}
            <BikeCard
              className="bike_card_small"
              imgClass="small" // big for selected renter & small for other renters
              makeAndModel="hide" // choose between show or hide
              location=""
              shopName=""
              renterName=""
              rating=""
              price=""
              otherRenters=""
            ></BikeCard>
          </div>
        </div>

        <div className="place_holder_section">This is place holder section</div>
      </div>
    </>
  );
}

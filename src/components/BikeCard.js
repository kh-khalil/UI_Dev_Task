import React from "react";
import fatboy from "./fatboy.jpg";
import star from "./pointy_star.svg";

export default function BikeCard(props) {
  return props.smallCard === "false" ? (
    // Big Bike Card
    <div>
      <img src={fatboy} className="p-0 m-0 col-12 img_big" alt="fatboy" />

      {/* Details Section */}
      <div className="px-4 m-0 mt-4 d-grid">
        <div className="mb-4 text-left m-0 row">
          <h5 className="make p-0 col-12">Harley Davidson</h5>
          <h3 className="model m-0 p-0 col-12">Fat Boy Classic</h3>
        </div>

        <div className="row justify-content-between w-100 m-0 mb-4">
          <div className="col m-0 mr-auto location_and_shop">
            <i className="far fa-circle row ">
              <p className="m-0 p-0 pl-2 location">San Francisco, CA</p>
            </i>
            <i className="fas fa-arrow-left row">
              <p className="m-0 p-0 pl-2 shop_name">EagleRider San Francisco</p>
            </i>
          </div>
          <div className="col price m-0 p-0">
            {" "}
            <span className="price_amount helvetica_bold">$154</span> / day
          </div>
        </div>
      </div>
    </div>
  ) : (
    // Small Bike Card
    <div className="bike_card_small d-flex">
      <img src={fatboy} className="p-0 m-0 small_img" alt="fatboy" />

      {/* Details Section */}
      <div className="p-0 m-0 details_section_small">
        <div className="row">
          <i className="fas fa-user"></i>
          <p className="m-0 p-0 renter_name">{props.renterName}</p>
          <div className="ml-auto rating_div">
            <span className="rating_num">5.0</span>{" "}
            <img src={star} className="star" alt="star" />
          </div>
        </div>

        <div className="row">
          <i className="far fa-circle"></i>
          <p className="m-0 p-0 location">{props.shopLocation}</p>
        </div>

        <div className="price_small_card"><span className="price_amount_num">$154</span> / day
        </div>
      </div>
    </div>
  );
}

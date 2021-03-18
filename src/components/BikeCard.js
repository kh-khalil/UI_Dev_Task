import React from "react";
import fatboy from "./fatboy.jpg";
import star from "./pointy_star.svg";

export default function BikeCard(props) {
  return props.smallCard === "false" ? (
    // Big Bike Card
    <div className="bike_card_big">
      <img src={fatboy} className="p-0 m-0 col-12 img_big" alt="fatboy" />

      {/* Details Section */}
      <div className="px-4 m-0 mt-4 d-grid">
        <div className="mb-4 text-left m-0 row">
          <h5 className="make p-0 col-12">Harley Davidson</h5>
          <h3 className="model m-0 p-0 col-12">{props.model}</h3>
        </div>

        <div className="row justify-content-between w-100 m-0 mb-4">
          <div className="col m-0 location_and_shop">
            <div className="row m-0 p-0 loc_row">
              <i className="far fa-circle"></i>
              <p className="m-0 p-0 location">San Francisco, CA</p>
            </div>
            <div className="row m-0 p-0 shop_row">
              <i className="fas fa-arrow-left"></i>
              <p className="m-0 p-0 shop_name">
                EagleRider <span className="sf_bold">San Francisco</span>
              </p>
            </div>
          </div>
          <div className="col price m-0 p-0">
            {" "}
            <span className="price_amount">$154</span> / day
          </div>
        </div>
      </div>
    </div>
  ) : (
    // Small Bike Card
    <div className="hover_effect">
      <div className="bike_card_small d-flex">
        <div className="small_img_container">
          <img src={fatboy} className="small_img" alt="fatboy" />
        </div>

        {/* Details Section */}
        <div className="d-grid w-100 no_hover">
          <div className="row details_row row1 no_hover">
            <i className="fas fa-user user_icon no_hover"></i>

            <p className="m-0 p-0 renter_smallcard no_hover">
              {props.renterName}
            </p>

            <div className="rating_div d-flex no_hover">
              <span className="rating_num no_hover">5.0</span>{" "}
              <img src={star} className="star no_hover" alt="star" />
            </div>
          </div>

          <div className="row details_row row2 no_hover">
            <i className="far fa-circle no_hover"></i>
            <p className="m-0 p-0 shop_name_small_card no_hover">{props.shopLocation}</p>
          </div>

          <div className="row details_row row3 no_hover">
            <span className="price_amount no_hover">$154 </span> / day
          </div>
        </div>
      </div>
    </div>
  );
}

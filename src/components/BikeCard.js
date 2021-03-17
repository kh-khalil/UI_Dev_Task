import React from "react";
import fatboy from "./fatboy.jpg";

export default function BikeCard(props) {
  return (
    <div className={props.className}>
      <img
        src={fatboy}
        className={
          props.imgClass === "big"
            ? `p-0 m-0 col-12 ${props.imgClass}`
            : `p-0 m-0 col ${props.imgClass}`
        }
        alt="fatboy"
      />

      {/* Details Section */}
      <div
        className={
          props.imgClass === "big" ? "px-4 m-0 mt-4 d-grid" : "p-0 m-0 col"
        }
      >
        {props.makeAndModel === "show" && (
          <div className="mb-4 text-left m-0 row">
            <h5 className="make p-0 col-12">Harley Davidson</h5>
            <h3 className="model m-0 p-0 col-12">Fat Boy Classic</h3>
          </div>
        )}

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
  );
}

import React from "react";
import BikeCard from "../components/BikeCard";

export default function MobileScreen() {
  // const otherRentersAction = () => {
  //   document.getElementById("overlay").style.display = "block";
  // };
  // const off = () => {
  //   document.getElementById("overlay").style.display = "none";
  // };
  return (
    <>
      <div className="page_title text-center">
        <h1>Bikes in San Francisco</h1>
      </div>

      {/* Card Container */}
      <div className="p-0 card_container text-center">
        {/* Bike Card Component*/}
        <BikeCard
          model="Fat Boy® Classic"
          smallCard="false" // true or false according to the card size that you want
        ></BikeCard>

        {/* Other Renters */}
        {/* <div type="button" id="overlay" onclick={off}>
          <div id="text">Overlay Text</div>
        </div> */}
        <div
          // type="button"
          // onClick={otherRentersAction}
          className="other_renters_container text-left"
        >
          <div className="other_renters_label d-flex">
            <i class="fas fa-bars "></i>
            <p className="other_renters_number">6 Other Renters</p>
            <p className="other_renters_price">from $120 /day</p>
          </div>
        </div>
      </div>

      {/* 

                                     second Card 
      
      */}

      {/* Card Container */}
      <div className="p-0 card_container text-center">
        {/* Bike Card Component*/}
        <BikeCard
          model="Fat Boy® Classic"
          smallCard="false" // true or false according to the card size that you want
        ></BikeCard>

        {/* Other Renters */}
        <button type="button" className="other_renters_container text-left">
          <div className="other_renters_label d-flex">
            <i class="fas fa-bars "></i>
            <p className="other_renters_number">6 Other Renters</p>
            <p className="other_renters_price">from $120 /day</p>
          </div>
        </button>
      </div>
    </>
  );
}

import React, {useState} from "react";
import { Link } from "react-router-dom";
import one from "../img/1.webp"
import two from "../img/2.webp"
import three from "../img/3.webp"
import img from "../img/Hocus-Pocus-Airbnb-01-Exterior-Credit-Helynn-Ospina-.webp"
import four from "../img/4.webp"

function Home() {
  return (
    <>
      <div className="container">
        <div className="invite">
          <div className="row">
            <div className="col-md-6">
              <div>
                <span>September 28, 2022</span>
                <h1>The Sanderson Sisters invite brave souls to book a stay at the Hocus Pocus cottage, now on Newradiance</h1>
                <Link to="/Rooms" >Read More</Link>
              </div>
            </div>
            <div className="col-md-6">
              <img src={img} />
            </div>
          </div>
        </div>
        <div className="news">
          <div className="row">
            <div className="col-md-12"><h1>Latest news</h1></div>
            <div className="col-md-6">
              <div className="last">
                <img src={one} />
                <div>
                  <h1>Purr-fect Stays: Over 3 million pets have traveled on Airbnb since November</h1>
                  <span>October 4, 2022</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="last">
                <img src={two} />
                <div>
                  <h1>Supporting Virginia’s new tax collection and remittance law</h1>
                  <span>October 3, 20222</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="last">
                <img src={three} />
                <div>
                  <h1>Airbnb.org announces support for hurricane relief efforts</h1>
                  <span>October 2, 2022</span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="last">
                <img src={four} />
                <div>
                  <h1>An update on our progress to net zero</h1>
                  <span>September 27, 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
);
}

export default Home;
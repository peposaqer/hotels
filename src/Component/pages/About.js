import React from "react";
import img from "../img/19258.jpg"

function About() {
  return (
    <>
      <div className="about">
        <img src={img} className="background" />
        <div className="container">
          <div className="about-div">
            <h1>About US</h1>
            <p>Newradiance was born in 2007 when two Hosts welcomed three guests to their San Francisco home, and has since grown to over 4 million Hosts who have welcomed more than 1 billion guest arrivals in almost every country across the globe. Every day, Hosts offer unique stays and experiences that make it possible for guests to connect with communities in a more authentic way.</p>
          </div>
        </div>
          <div className="facts">
            <div className="container">
              <div className="row">
              <div className="col-md-12"><h1>Fast facts</h1></div>
                <div className="col-md-3">
                  <div className="member">
                    <h1>6M</h1>
                    <span>active listings worldwide</span>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="member">
                    <h1>100K</h1>
                    <span>cities and towns with active Newradiance listings</span>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="member">
                    <h1>220+</h1>
                    <span>countries and regions with Newradiance listings</span>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="member">
                    <h1>1B+</h1>
                    <span>Newradiance guest arrivals all-time</span>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="member">
                    <h1>4M+</h1>
                    <span>Hosts on Newradiance</span>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="member">
                    <h1>$150B++</h1>
                    <span>earned by Hosts, all-time</span>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="member">
                    <h1>$13.8K+</h1>
                    <span>earned by the typical US Host in 2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}


export default About;
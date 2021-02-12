import React from "react";
import "./DataAnalysis.css";

export default function DataAnalysis() {
  return (
    <div>
      <div>
        <figure className="pie-chart">
          <h2>World electricity generation by source</h2>
          <figcaption>
            Coal 38<span style={{ color: "#4e79a7" }}></span>
            <br />
            Natural Gas 23<span style={{ color: "#f28e2c" }}></span>
            <br />
            Hydro 16<span style={{ color: "#e15759" }}></span>
            <br />
            Nuclear 10<span style={{ color: "#76b7b2" }}></span>
            <br />
            Renewable 6<span style={{ color: "#59a14f" }}></span>
            <br />
            Other 7<span style={{ color: "#edc949" }}></span>
          </figcaption>
          <cite>International Energy Agency</cite>
        </figure>
      </div>
 
        <div className="box">
          <div className="container"></div>
          <div className="container"></div>
          <div className="container"></div>
          <div className="container"></div>
          <div className="container"></div>
          <div className="container"></div>
          <div className="skill-name"></div>
          <div className="skill-name"></div>
          <div className="skill-name"></div>
          <div className="skill-name"></div>
          <div className="skill-name"></div>
          <div className="skill-name"></div>
         
        </div>
     
    </div>
  );
}

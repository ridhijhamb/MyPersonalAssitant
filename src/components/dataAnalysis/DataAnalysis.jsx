import React from "react";
import "./DataAnalysis.css";

export default function DataAnalysis() {
  return (
    <div>
      <div>
        <figure className="pie-chart">
          <h2>Personal Assistant Telemetry</h2>
          <figcaption>
            Focus time<span style={{ color: "#4e79a7" }}></span>
            <br />
            Meeting Time<span style={{ color: "#f28e2c" }}></span>
            <br />
            Breaks<span style={{ color: "#e15759" }}></span>
            <br />
            Sleep<span style={{ color: "#76b7b2" }}></span>
            <br />
            Fun Activites<span style={{ color: "#59a14f" }}></span>
            <br />
            Other <span style={{ color: "#edc949" }}></span>
          </figcaption>
          <cite>User Stats </cite>
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

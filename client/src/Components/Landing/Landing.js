import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing">
      <div className="title">PokéMoN </div>
      <Link to="/home">
        <button className="btn-home"> HOME </button>
      </Link>
      <div className="by">by Tomás Casco</div>
    </div>
  );
}

export default Landing;

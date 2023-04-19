import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

function Card({ item }) {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item.isNew && <span>New Season</span>}
          <img src={item.img} alt="" className="mainImg" />
          <img src={item.img2} alt="" className="secondImg" />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>${item.oldprice}</h3>
          <h1>${item.price}</h1>
        </div>
      </div>
      ;
    </Link>
  );
}

export default Card;

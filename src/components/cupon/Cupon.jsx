import React from "react";
import "./Cupon.scss";

const Cupon = ({name, discount}) => {
  return (
    <div className="coupon">
      <div className="coupon__tag">✶ Coupon ✶</div>
      <div className="coupon__body">
        <div className="coupon__title">{name}</div>
        <div className="coupon__value">
          <strong>{discount}</strong>
        </div>
      </div>
    </div>
  );
};

export default Cupon;

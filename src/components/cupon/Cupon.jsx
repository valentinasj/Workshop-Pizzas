import React from "react";
import "./Cupon.scss";

const Cupon = ({name, discount}) => {
  return (
    <div class="coupon">
      <div class="coupon__tag">✶ Coupon ✶</div>
      <div class="coupon__body">
        <div class="coupon__title">{name}</div>
        <div class="coupon__value">
          <strong>{discount}</strong>
        </div>
      </div>
    </div>
  );
};

export default Cupon;

import React from "react";

const Price = () => {
  return (
    <div className="price">
      <div className="price-container">
        <div className="price-head">PRICING</div>

        <div className="price-content">
          <div className="price-img1">
            <div>$20.00</div>
            <div>
              <p>Comfort Congee</p>
              <p>An Asianfavorite</p>
            </div>
          </div>
          <div className="price-img2">
            <div>$21.50</div>
            <div>
              <p>Spicy Laksa</p>
              <p>Hearty witha zing</p>
            </div>
          </div>
          <div className="price-img3">
            <div>$19.00</div>
            <div>
              <p>VeganFeast</p>
              <p>Healthy& wholesome</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;

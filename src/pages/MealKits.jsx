import React from "react";

const MealKits = () => {
  return (
    <div className="kits">
      <div className="kits-container">
        {/* heading */}
        <div className="kits-heading">
          <div> FRESHLO</div>
          <div className="kits-heading-pera">
            <div>
              Take home the Kitchen Comforts experience. Try our Meal Kits and
              unleash your inner chef!
            </div>
          </div>
        </div>

        {/* image */}
        <div className="kits-content price-content">
          <div className="kits-item">
            <div className="kits-img1"></div>
            <div>Hearty, wholesome meals for the whole family</div>
            <div>
              <button>TRY OUR FAMILY FEAST KITS</button>
            </div>
          </div>
          <div className="kits-item">
            <div className="kits-img2"></div>
            <div>Vegan favorites with a delicious twist</div>
            <div>
              <button>VIEW OUR VEGAN OPTIONS</button>
            </div>
          </div>
          <div className="kits-item">
            <div className="kits-img3"></div>
            <div>Asian delights to take you on a culinary trip</div>
            <div>
              <button>EAT YOUR WAY TO ASIA</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealKits;

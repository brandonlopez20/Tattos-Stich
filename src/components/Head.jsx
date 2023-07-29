import React from "react";
import logo2 from "../../public/images/logo2.png";
import logo3 from "../../public/images/logo3.png";
import logo4 from "../../public/images/logo4.png";

function Head() {
  return (

      <div className="container-fluid bg-options pb-5">
        <div className="container text-center ">
          <div className="row">
            <div className="col">
              <h3>Diseños</h3>
              <img src={logo4} alt="image" width={200} className="imgOptions" />
            </div>

            <div className="col">
              <h3>Ofertas</h3>
              <img src={logo2} alt="image" width={300} className="imgOptions" />
            </div>
            <div className="col">
              <h3>Combos en Pareja</h3>
              <img src={logo3} alt="image" width={300} className="imgOptions" />
            </div>
          </div>
        </div>
      </div>

  );
}

export default Head;

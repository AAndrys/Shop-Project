import React from "react";

const Home = () => {
  return (
    <div className="content">
      <div className="home-container">
        <section className="top-home-container">
          <div className="top-home-image">
            <div className="top-home-background"></div>
            <div className="top-home-image-text">
              <h1>WITAJ W SKLEPIE!</h1>
              <p>SPRAWDŹ NASZE WSZYSTKIE PRODUKTY.</p>
            </div>
            <div className="top-image-holder">
              <img src={require("../assets/images/car.png")} alt="Top" />
            </div>
          </div>
        </section>
        <section className="bottom-home-container">
          <div className="bottom-men-box">
            <div className="bottom-men-image-text">
              <h1>MĘŻCZYŹNI</h1>
            </div>
            <div className="men-image-up"></div>
            <img src={require("../assets/images/men.png")} alt="Men" />
          </div>
          <div className="bottom-women-box">
            <div className="bottom-women-image-text">
              <h1>KOBIETY</h1>
            </div>
            <div className="women-image-up"></div>
            <img src={require("../assets/images/women.png")} alt="Women" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="header1">
        <img className="img2" src="netflix-logo.png" />
        <Link to="/SignIn" className="signinbtn">
          Sign In
        </Link>
        <div className="div1">
          <img className="img1" src="backgroundImage.jpg" alt="backgroundImage"/>
          <h1>Unlimited movies, TV shows, and more</h1>
          <h4>Watch anywhere. Cancel anytime.</h4>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <input type="email" placeholder="   Email address" required></input>
          <a href="#" className="getStarted">
            Get Started{" "}
          </a>
        </div>
      </header>
      <section className="section2">
        <h1>Enjoy on your TV</h1>
        <br/>
        <h3>
          Watch on Smart TVs, Playstation, Xbox, Chromecast,
          <br /> Apple TV, Blu-ray players, and more.
        </h3>
        <div id="carouselExampleControls" className="carousel slide mb-7 float-right custom-carousel" data-bs-ride="carousel">
  <div className="carousel-inner mb-5">
    <div className="carousel-item active mt-10">
      <img src="back1.jpg" className="d-block custom-image" alt="..." />
    </div>
    <div className="carousel-item mt-10">
      <img src="back2.jpg" className="d-block custom-image" alt="..." />
    </div>
    <div className="carousel-item mt-10">
      <img src="back3.jpg" className="d-block custom-image" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

      </section>
    </>
  );
}

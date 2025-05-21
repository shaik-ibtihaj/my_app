import React, { useEffect } from "react";
import Header from "../Header";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

const Home = () => {
  const navigate = useNavigate();
  const jwtToken = Cookies.get("jwt_token");

  useEffect(() => {
    if (jwtToken === undefined) {
      navigate("/register");
    }
  }, [jwtToken, navigate]);

  if (jwtToken === undefined) {
    return null;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Header />
      <div className="home-container">
        <h1 className="home-heading">
          HealthPlus: Fast Symptom Assessment & Personalized Medication Advice
        </h1>
        <p className="home-description">
          HealthPlus provides rapid symptom assessment and personalized
          medication advice. Enter your symptoms, and our advanced algorithm
          swiftly analyzes them to deliver a comprehensive diagnosis. Our
          platform offers tailored recommendations designed to address your
          specific health concerns.
        </p>
      </div>
      <div className="features-container">
        <h1 className="features-heading">What HealthPlus Can Do</h1>
        <Slider {...settings}>
          <div className="each-feature">
            <a href="/newHome">
              <img
                src="https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/19865782/Symptoms.jpg?quality=90&strip=all&crop=23.46450617284%2C0%2C53.070987654321%2C100&w=2400"
                className="features-img"
                alt="Select Symptoms"
              />
            </a>
            <div className="feature-description">
              Choose your symptoms from the available list.
            </div>
          </div>
          <div className="each-feature">
            <a href="/newHome">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbZqkYQoHWvzq7jgL7sCZwnKeTpNFQvPn-UQ&s"
                alt="Diagnosis"
              />
            </a>
            <div className="feature-description">
              We analyze your symptoms and present a clear diagnosis.
            </div>
          </div>
          <div className="each-feature">
            <a href="/newHome">
              <img
                src="https://englisharchives.mathrubhumi.com/image/contentid/policy:1.4654409:1644591693/image.jpg?$p=0f6e831&w=852&q=0.8"
                className="features-img"
                alt="Medication Suggestions"
              />
            </a>
            <div className="feature-description">
              Receive personalized medication recommendations tailored to your
              diagnosis.
            </div>
          </div>
        </Slider>
      </div>
      <div className="copy-right-container">
        <div className="each-option">
          <h1 className="option-head">HealthPlus</h1>
          <p className="option-desc">Home</p>
          <p className="option-desc">Health Tips</p>
          <p className="option-desc">Contact</p>
        </div>
        <div className="each-option">
          <h1 className="option-head">Our Concerns</h1>
          <p className="option-desc">General checkup</p>
          <p className="option-desc">Diagnosis</p>
          <p className="option-desc">Medication Suggestions</p>
        </div>
        <div className="each-option">
          <h1 className="option-head">Copyrights</h1>
          <p className="option-desc">© All rights reserved Shaik Ibtihajulla Sha</p>
          <p className="option-desc">
            gmail: 
            shaikibtihaj07@gmail.com
          </p>
        </div>
        <div className="each-option">
          <h1 className="option-head">For Developers</h1>
          <p className="option-desc">Inspect the Code</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

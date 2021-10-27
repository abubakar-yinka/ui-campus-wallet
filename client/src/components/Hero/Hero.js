import React from "react";
import { Link } from "react-router-dom";
import phoneImg from "../../assets/images/phone.svg";
import { FaChevronRight } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import "./Hero.css";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>
            Financial platform <br />
            connecting all UItes
          </h1>
          <p className="hero-text">
          A financial app that subsidize entrepreneurs in need by giving repayable microloans at a lower interest than banks, based on a personal/mutual agreement without the intervention of a third party. It will be lucrative to student investors looking to monetize their funds.
          </p>
          <span className="group">
            <Link className="btnn" to={'/register'}>
              Start now{" "}
              <span className="right-arrow">
                <FaChevronRight />
              </span>
            </Link>
            <div className="contact">
              Get app{" "}
              <span className="right-arrow">
                <FaChevronRight />
              </span>
            </div>
          </span>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="prototype of the application" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;

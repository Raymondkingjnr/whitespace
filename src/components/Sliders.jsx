import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { clients } from "./data";

export default function Sliders() {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  };

  return (
    <Conatiner>
      <Slider {...settings} className="slides">
        {clients.map((clinet, index) => {
          const { name, text, company, img } = clinet;

          return (
            <div className="client" key={index}>
              <img src={img} alt="" />
              <p>{text}</p>
              <p>{name}</p>
              <p>{company}</p>
            </div>
          );
        })}
      </Slider>
    </Conatiner>
  );
}

const Conatiner = styled.div`
  width: 100%;
  img {
    width: 30px;
    border: 100%;
  }
  .slides {
    width: 500px;
    /* max-width: 1300px; */
    /* height: 700px; */
    padding-top: 2rem;
    margin: auto;
    display: flex;
    position: relative;
    gap: 20px;
    padding-bottom: 2rem;
    flex-wrap: wrap;
    /* background-color: gray; */
  }
`;

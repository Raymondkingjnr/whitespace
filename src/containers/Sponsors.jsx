import React from "react";
import styled from "styled-components";
import { microsoft, slack, apple, google } from "../images";

export const Sponsors = () => {
  const images = [microsoft, slack, google];

  return (
    <Container>
      <h1>Our sponsors</h1>
      <div className="imgs">
        <img src={apple} alt="" className="apple-img" />
        {images.map((item, index) => {
          return (
            <div className="img-contain" key={index}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  h1 {
    color: #000;
    font-size: 40px;
  }
  .imgs {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5rem;
    flex-wrap: wrap;
    /* border: #000 2px solid; */
    gap: 3rem;
  }
  img {
    width: 200px;
  }
  @media screen and (max-width: 600px) {
    img {
      width: 100px;
    }
  }
  .apple-img {
    width: 50px;
    padding-right: 1.5rem;
    padding-bottom: 0.5rem;
  }

  @media screen and (max-width: 600px) {
    .apple-img {
      width: 30px;
      padding-right: 0.5rem;
    }
  }
`;

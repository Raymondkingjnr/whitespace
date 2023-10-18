import React from "react";
import { styled } from "styled-components";
import { BsArrowRight } from "react-icons/bs";

export const Article = ({
  title,
  text,
  button,
  imgurl,
  reverse,
  titleColor,
  textColor,
}) => {
  return (
    <ArticleContainer reverse={reverse}>
      <TextContent>
        <h2 style={{ color: titleColor }}>{title}</h2>
        <p style={{ color: textColor }}>{text}</p>
        <button className="btn">
          {button} <BsArrowRight style={{ fontSize: "1rem" }} />
        </button>
      </TextContent>
      <ImageContainer>
        <img src={imgurl} alt="" />
      </ImageContainer>
    </ArticleContainer>
  );
};

const ArticleContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: row;
  padding-left: 1rem;
  padding-right: 1rem;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  justify-content: space-between;
  gap: 2rem;
  height: 550px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const TextContent = styled.div`
  width: 700px;
  padding-top: 7rem;
  text-align: left;
  gap: 0;

  @media screen and (max-width: 870px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 3rem;
  }
  @media screen and (max-width: 600px) {
    align-items: center;
    width: 100%;
    text-align: center;
    padding-top: 0;
  }
`;

const ImageContainer = styled.div`
  width: 500px;
  height: 500px;
  padding-top: 5rem;

  @media screen and (max-width: 600px) {
    width: 100%;
    padding-top: 3rem;
  }
`;

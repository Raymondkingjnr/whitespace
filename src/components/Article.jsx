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
  max-width: 1300px;
  margin: auto;
  display: flex;
  flex-direction: row;
  padding-left: 1rem;
  padding-right: 1rem;
  gap: 20px;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  justify-content: space-between;
  height: 600px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const TextContent = styled.div`
  width: 600px;
  /* padding-top: 1rem; */
  text-align: left;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 500px;
  height: 500px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

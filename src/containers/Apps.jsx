import React from "react";
import styled from "styled-components";
import app from "../images/Apps.png";
import { Article } from "../components/Article";

export const Apps = () => {
  return (
    <Container>
      <Article
        imgurl={app}
        button="Read More"
        title="Work with Your Favorite Apps Using whitepace"
        reverse={true}
        textColor="#fff"
        titleColor="#fff"
        text="Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success."
      />
    </Container>
  );
};

const Container = styled.div`
  padding-top: 2rem;
  margin-top: 7rem;
  padding-bottom: 2rem;
  height: 500px;
  background-color: #043873;

  @media screen and (max-width: 600px) {
    height: 650px;
  }
`;

import React from "react";
import { Article } from "./Article";
import hero from "../images/hero.png";
import styled from "styled-components";

export const Hero = () => {
  return (
    <Container>
      <Article
        imgurl={hero}
        button="Try Whitespace Free"
        title="Get More Done with whitepace"
        reverse={false}
        textColor="#fff"
        titleColor="#fff"
        text="Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks"
      />
    </Container>
  );
};

const Container = styled.div`
  padding-top: 8rem;
  height: 500px;

  @media screen and (max-width: 600px) {
    padding-top: 7rem;
  }
`;

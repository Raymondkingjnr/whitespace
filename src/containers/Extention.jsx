import React from "react";
import styled from "styled-components";
import extentionImg from "../images/extention.png";
import { Article } from "../components/Article";

export const Extention = () => {
  return (
    <Container>
      <Article
        imgurl={extentionImg}
        button="Let's Go"
        title="Use as Extension"
        reverse={false}
        textColor="#fff"
        titleColor="#fff"
        text="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."
      />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 7rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  height: 450px;
  background-color: #043873;

  @media screen and (max-width: 600px) {
    height: 550px;
    padding-top: 0;
  }
`;

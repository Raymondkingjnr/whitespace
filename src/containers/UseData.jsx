import React from "react";
import styled from "styled-components";
import elementImg from "../images/Element.png";
import { Article } from "../components/Article";

export const UseData = () => {
  return (
    <Container>
      <Article
        imgurl={elementImg}
        button="Read More"
        title="100% your data"
        reverse={false}
        textColor="#000"
        titleColor="#000"
        text="The app is open source and your notes are saved to an open format, 
        so you'll always have access to them.
         Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them."
      />
    </Container>
  );
};

const Container = styled.div``;

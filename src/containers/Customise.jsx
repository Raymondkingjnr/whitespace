import React from "react";
import styled from "styled-components";
import customize from "../images/customize.png";
import { Article } from "../components/Article";

export const Customise = () => {
  return (
    <Container>
      <Article
        imgurl={customize}
        button="Let's Go"
        title="Customise it to your needs"
        reverse={true}
        textColor="#000"
        titleColor="#000"
        text="Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API."
      />
    </Container>
  );
};

const Container = styled.div``;

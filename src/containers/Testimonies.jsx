import React from "react";
import styled from "styled-components";
import Sliders from "../components/Sliders";

export const Testimonies = () => {
  return (
    <Container>
      <h1>See what our trusted users Say</h1>
      <Sliders />
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 5rem;
  background: #000;
  h1 {
    color: #000;
  }
`;

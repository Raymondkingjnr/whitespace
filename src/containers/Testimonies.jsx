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
  border: 2px red solid;
  h1,
  p {
    color: #000;
  }
`;

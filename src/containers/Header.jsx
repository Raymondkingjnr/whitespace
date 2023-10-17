import React from "react";
import styled from "styled-components";
import { Hero } from "../components/Hero";
import { NavBar } from "../components/NavBar";

export const Header = () => {
  return (
    <Container>
      <div className="header">
        <NavBar />
        <Hero />
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: #043873;
  position: relative;
`;

import React from "react";
import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";
export const Remote = () => {
  return (
    <Container>
      <h1>Your work, everywhere you are</h1>
      <p>
        Access your notes from your computer, phone or tablet by synchronising
        with various services, including whitepace, Dropbox and OneDrive. The
        app is available on Windows, macOS, Linux, Android and iOS. A terminal
        app is also available!
      </p>
      <button className="btn rmt-btn">
        Try Taskey{" "}
        <span>
          <BsArrowRight />
        </span>
      </button>
    </Container>
  );
};

const Container = styled.div`
  background-color: #043873;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 3rem;
  margin-top: 5rem;
  align-items: center;

  p {
    width: 90%;
    font-weight: 800;
  }
  h1 {
    font-size: 30px;
  }
`;

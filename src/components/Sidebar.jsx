import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";

export const Sidebar = ({ Links }) => {
  return (
    <Section>
      <div className="nav-links">
        <ul className="links">
          {Links.map((link, index) => {
            return (
              <li key={index}>
                {link.text}
                <span style={{ marginTop: "0.3rem" }}>
                  <RiArrowDropDownLine style={{ fontSize: "2rem" }} />
                </span>
              </li>
            );
          })}
        </ul>
        <div className="log-ins">
          <button className=" nav-btn log-btn">Login</button>
          <button className="nav-btn">
            Try Whitespace Free <BsArrowRight style={{ fontSize: "1.2rem" }} />{" "}
          </button>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.div``;

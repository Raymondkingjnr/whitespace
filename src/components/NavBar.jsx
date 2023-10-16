import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import { BsArrowRight } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";

export const NavBar = () => {
  const Links = [
    {
      text: "Products",
    },
    {
      text: "Solutions",
    },
    {
      text: "Resource",
    },
    {
      text: "Pricing",
    },
  ];

  return (
    <Container>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
          <h1>WhiteSpace</h1>
        </div>
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
              Try Whitespace Free{" "}
              <BsArrowRight style={{ fontSize: "1.2rem" }} />{" "}
            </button>
          </div>
        </div>

        <input
          type="checkbox"
          id="checkbox1"
          class="checkbox1 visuallyHidden"
        />
        <label for="checkbox1">
          <div class="hamburger hamburger1">
            <span class="bar bar1"></span>
            <span class="bar bar2"></span>
            <span class="bar bar3"></span>
            <span class="bar bar4"></span>
          </div>
        </label>
      </nav>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: auto;
  position: fixed;
  background-color: #043873;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1500px;
    margin: auto;
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .logo img {
    width: 30px;
  }
  .logo {
    display: flex;
    gap: 10px;
    align-items: center;
    h1 {
      font-size: 20px;
      color: #fff;
      font-weight: 900;
    }
  }

  @media screen and (max-width: 450px) {
    .logo img {
      width: 20px;
    }
    .logo h1 {
      font-size: 15px;
    }
  }

  .links {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    li {
      display: flex;
      gap: 10px;
      align-items: center;
      list-style: none;
      text-decoration: none;
      color: #fff;
      cursor: pointer;
      font-family: "inter";
    }
  }
  .nav-links {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    .log-ins {
      gap: 20px;
      display: flex;
      .log-btn {
        background-color: #ffe492;
        color: #000;
        margin-top: 0;
      }
    }
  }

  @media screen and (max-width: 870px) {
    .nav-links {
      display: none;
    }

    nav {
      padding-left: 2rem;
      /* padding-right: 2.5rem; */
      /* border: 2px red solid; */
      height: 70px;
    }
  }
  @media screen and (max-width: 600px) {
    .nav-links {
      display: none;
    }

    nav {
      padding-left: 10px;
    }
  }
`;

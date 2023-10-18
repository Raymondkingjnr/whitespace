import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import { BsArrowRight } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Sidebar } from "./Sidebar";

export const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);

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
          <div
            class="hamburger hamburger1"
            onClick={() => setShowLinks(!showLinks)}
          >
            <span class="bar bar1"></span>
            <span class="bar bar2"></span>
            <span class="bar bar3"></span>
            <span class="bar bar4"></span>
          </div>
        </label>
      </nav>

      <div className={`${showLinks ? "sidebar show-sidebar" : "sidebar"}`}>
        <Sidebar Links={Links} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: fixed;
  background-color: #043873;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 2rem;
    padding-right: 2rem;
    max-width: 1300px;
    margin: auto;
    /* border: red 2px solid; */
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
    padding-left: 10rem;

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
    /* gap: 20px; */
    align-items: center;
    width: 100%;
    justify-content: space-between;
    /* border: 2px green solid; */
    .log-ins {
      display: flex;
      gap: 20px;
      .log-btn {
        background-color: #ffe492;
        color: #000;
        margin-top: 0;
      }
    }
  }

  .sidebar {
    width: 100%;
    height: auto !important;
    background-color: #043873;
    top: 7%;
    left: 0%;
    position: fixed;
    color: #fff;

    transform: translate(-100%);
    transition: all 0.3s linear;
    padding-top: 35px;
    padding-bottom: 35px;
    z-index: 15;
    display: none;
  }
  .show-sidebar {
    transform: translate(0);
  }

  @media screen and (max-width: 870px) {
    .nav-links {
      display: none;
    }

    .sidebar {
      display: block;
    }
    nav {
      padding-left: 1rem;
      padding-right: 1rem;
      /* border: 2px red solid; */
      height: 70px;
    }
  }

  @media screen and (max-width: 400px) {
    nav {
      align-items: center;
      margin: 0, 20px, 0, 20px;
    }
  }
  /* @media screen and (max-width: 330px) {
    nav {
      width: 50%;
      justify-content: center;
      align-items: center;
    }
  } */
`;

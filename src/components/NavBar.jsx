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

  .sidebar {
    width: 100%;
    height: 100%;
    background: #000;
    top: 0%;
    left: 0%;
    position: fixed;
    color: #fff;
    transform: translate(-100%);
    transition: all 0.3s linear;
    padding: 35px;
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

    nav {
      padding-left: 1rem;
      padding-right: 1rem;
      /* border: 2px red solid; */
      height: 70px;
    }
  }

  @media screen and (max-width: 400px) {
    nav {
      width: 60%;
      justify-content: center;
      align-items: center;
      margin: 0, 20px, 0, 20px;
    }
  }
  @media screen and (max-width: 330px) {
    nav {
      width: 50%;
      justify-content: center;
      align-items: center;
    }
  }
`;

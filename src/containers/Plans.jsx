import React from "react";
import styled from "styled-components";
import icon from "../images/Icon.png";

export const Plans = () => {
  const plansData = [
    {
      title: "Free",
      price: "$0",
      description: "Capture ideas and find them quickly",
      attributes: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks ",
      ],
    },
    {
      title: "Personal",
      price: "$50",
      description: "Keep home and family on track",
      attributes: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks ",
      ],
    },
    {
      title: "Organization",
      price: "$49.99",
      description: "Capture ideas and find them quickly",
      attributes: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks ",
      ],
    },
  ];

  return (
    <Container>
      <div className="plans-text">
        <h1>Choose Your Plan</h1>
        <p style={{ fontWeight: "800", paddingTop: "3rem" }}>
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </div>
      <section className="plans">
        {plansData.map((plan, index) => {
          const { title, price, description, attributes } = plan;

          return (
            <div className="plan" key={index}>
              <h1>{title}</h1>
              <h1>{price}</h1>
              <p style={{ fontWeight: "800", paddingTop: "1rem" }}>
                {description}
              </p>
              <main>
                {attributes.map((att, index) => {
                  return (
                    <aside key={index}>
                      <img src={icon} alt="" />
                      <p>{att}</p>
                    </aside>
                  );
                })}
              </main>
              <article>
                <button className="btn plans-btn">Get Started</button>
              </article>
            </div>
          );
        })}
      </section>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 5rem;
  max-width: 1500px;
  margin: auto;
  img {
    width: 15px;
  }
  h1 {
    color: #000;
    font-size: 20px;
    font-weight: 900;
    height: 0;
    padding-bottom: 1.5rem;
  }
  p {
    color: #000;
    /* padding-top: 1rem; */
  }
  .plans-text {
    text-align: center;
    padding-bottom: 5rem;
    /* width: 900px; */
    padding: 20px;
    margin: auto;
  }
  .plans-text h1 {
    font-size: 35px;
    padding-bottom: 3rem;
  }
  .plans {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
    gap: 25px;
    z-index: -0;
    margin-top: 3rem;
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    .plans {
      gap: 35px;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }

  .plan {
    width: 350px;
    border: #ffe492 1px solid;
    border-radius: 7px;
    padding: 20px;

    transition: all 0.2s ease-in-out;
  }
  .plan:hover {
    transform: scale(1.1);
    box-shadow: -5px 3px 18px 0px rgba(93, 162, 239, 0.75);
    -webkit-box-shadow: -5px 3px 18px 0px rgba(93, 162, 239, 0.75);
    -moz-box-shadow: -5px 3px 18px 0px rgba(93, 162, 239, 0.75);
    border: none;
  }
  .plan:hover .plans-btn {
    background-color: #74b5ff;
    color: #fff;
    border: transparent;
  }
  aside {
    display: flex;
    gap: 20px;
  }
  main {
    margin-top: 1rem;
  }
  .plans-btn {
    background: transparent;
    border: #ffe492 1px solid;
    color: #000;
  }
`;

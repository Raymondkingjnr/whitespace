import React from "react";
import { Article } from "./Article";
import hero from "../images/hero.png";

export const Hero = () => {
  return (
    <div>
      <Article
        imgurl={hero}
        title="Get More Done with whitepace"
        text="Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks"
        button="try whitespace today"
      />
    </div>
  );
};

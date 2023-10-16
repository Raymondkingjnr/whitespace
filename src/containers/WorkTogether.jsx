import React from "react";
import styled from "styled-components";
import { Article } from "../components/Article";
import workImg from "../images/work.png";

export const WorkTogether = () => {
  return (
    <Work>
      <Article
        imgurl={workImg}
        button="Try Now"
        title="Work together"
        reverse={true}
        textColor="#000"
        titleColor="#000"
        text="With whitepace, share your notes with your colleagues and collaborate on them.
        You can also publish a note to the internet and share the URL with others.
        "
      />
    </Work>
  );
};

const Work = styled.div``;

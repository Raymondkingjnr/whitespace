import React from "react";
import styled from "styled-components";
import { Article } from "../components/Article";
import projectImg from "../images/project.png";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <Project>
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Set initial animation values
        animate={{ opacity: 1, y: 0 }} // Set animate values
        transition={{ duration: 2 }} // Set animation duration
      >
        <Article
          imgurl={projectImg}
          button="Get Started"
          title="Project Management"
          reverse={false}
          textColor="#000"
          titleColor="#000"
          text="Images, videos, PDFs and audio files are supported. 
          send a screenshotof the chatCreate math expressions and diagrams directly from the app. 
          Take photos with the mobile app and save them to a note."
        />
      </motion.div>
    </Project>
  );
};

const Project = styled.div`
  padding-top: 5rem;
`;

import React from "react";
import cameraman from "../img/cameraman.jpg";
//styled
import styled from "styled-components";
import { About, Description, Image, Hide } from "../style";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animate";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We Work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas.We have
          professional with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contacts Us</motion.button>
      </Description>
      <Image>
        <motion.img
          src={cameraman}
          alt="Guy with camera here"
          variants={photoAnim}
        />
      </Image>
      <Wave />
    </About>
  );
};

// Styled Components

export default AboutSection;

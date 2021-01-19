import React from "react";
import styled from "styled-components";
import { About } from "../style";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

//Custom Hooks for Scroll
import { useScroll } from "./useScroll";
import { fade } from "../animate";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq ref={element} variants={fade} animate={controls} initial="hidden">
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I Start?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
              possimus!
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
              possimus!
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
              possimus!
            </p>
          </div>
        </Toggle>
        <Toggle title="What Producs do you offer">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
              possimus!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  @media (max-width: 600px) {
    margin-top: 20rem;
  }
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;

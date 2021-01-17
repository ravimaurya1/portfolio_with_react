import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We Work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas.We have
          professional with amazing skills.
        </p>
        <button>Contacts Us</button>
      </Description>
      <Image>
        <img src={home1} alt="Guy with camera here" />
      </Image>
    </About>
  );
};

// Styled Components
const About = styled.div`
  min-height: 90vh;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
`;

const Description = styled.div`
  flex: 1;
  /* padding-left: 0rem; */
  h2 {
    font-weight: lighter;
  }
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;

import React from "react";
import styled from "styled-components";
import { flexbox } from "../../style/mixin";

import html5 from "./techLogos/HTML5.png";
import react from "./techLogos/React.png";
import styledcomponents from "./techLogos/styledComponents.png";
import netlify from "./techLogos/netlify.png";
import javaScripts from "./techLogos/javaScripts.png";

const Techs = () => {
  const logos = [html5, javaScripts, react, styledcomponents, netlify];

  const makeLogosBox = () => {
    const logosArray = logos.map(logo => <TechIcon icon={logo} />);
    return logosArray;
  };

  return (
    <TechsContainer>
      <TechsBox>{makeLogosBox()}</TechsBox>
    </TechsContainer>
  );
};

export default Techs;

const TechsContainer = styled.div`
  ${flexbox()};
  margin: 30px;
  width: 40%;
  height: 160px;
  background: white;
  border: 6px solid lightsteelblue;
  box-shadow: 6px 6px slategray;
`;

const TechsBox = styled.div`
  ${flexbox()};
  flex-wrap: wrap;
  width: 100%;
`;

const TechIcon = styled.div`
  background-image: url(${({ icon }) => icon});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: 4px;
  flex-basis: 15%;
  height: 60px;
`;

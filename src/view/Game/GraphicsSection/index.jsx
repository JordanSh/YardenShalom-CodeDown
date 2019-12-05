import React, { useContext } from "react";
import styled from "styled-components";
import { flexbox } from "../../../style/mixin";
import { GameContext } from "../../../state/GameContext";
import CharacterBox from "./CharacterBox";

//---------- GraphicsSection Component --------------//

const GraphicsSection = ({ charactersChatState }) => {
  const { gameHandler } = useContext(GameContext);

  return (
    <GraphicSection background={gameHandler.background}>
      <CharacterChat>{charactersChatState}</CharacterChat>
      <CharacterBox />
    </GraphicSection>
  );
};

export default GraphicsSection;

const GraphicSection = styled.div`
  ${flexbox({ dir: "column", jc: "space-between" })};
  flex-basis: 70%;
  background-image: ${({ background }) => `url(${background})`};
  width: 100%;
`;

const CharacterChat = styled.div`
  ${flexbox()};
  line-height: 32px;
  width: 90%;
  background: lightgray;
  opacity: 0.8;
  border-radius: 5px;
  height: 20%;
  position: relative;
  top: 50px;

  text-align: center;
  padding: 0 5rem;
`;

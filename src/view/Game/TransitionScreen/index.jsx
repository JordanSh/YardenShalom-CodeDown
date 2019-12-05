import React, { useContext, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { flexbox } from "../../../style/mixin";
import { GlobalContext } from "../../../state/GlobalContext";
import { GameContext } from "../../../state/GameContext";

const TransitionScreen = ({ continueSound }) => {
  const { hero, levelCounter, setLevelCounter } = useContext(GlobalContext);
  const {
    gameHandler,
    showOnScreen,
    backgroundImage,
    onScreenText,
    SetShowOnScreen,
    gameOver,
    SetGameOverRedirect,
    SetOnScreenText
  } = useContext(GameContext);

  useEffect(() => {
    SetOnScreenText(levelStory);
  }, [levelCounter]);

  // =========================================//
  // ------------ STORY FUNCTION ------------ //

  const createStory = (level, name, company) => {
    let story = "";
    switch (level) {
      case 1:
        story = `${name} bravely walked into ${company} offices. IT'S SHOW TIME!`;
        return story;
      case 2:
        story = `Two weeks later, ${name} faced ${company}'s senior. Full of determination`;
        return story;
      case 3:
        story = `It was the last step. "${name}, ${company}'s CEO will see you now". You are ready.`;
        return story;
      default:
        break;
    }
  };

  // changing the useEffect based on the current level story
  const levelStory = createStory(
    gameHandler.levelNumber,
    hero.name,
    hero.company
  );

  // ---------- XXXXXXXXXXXXXXXXXX ---------- //
  // =========================================//

  return (
    <OnScreen showOnScreen={showOnScreen} backgroundImage={backgroundImage}>
      <DivWithoutSetWidth>
        <TextArea>{onScreenText}</TextArea>
      </DivWithoutSetWidth>
      <OK
        onClick={() => {
          continueSound.play();
          SetShowOnScreen(false);
          if (gameOver) {
            continueSound.pause();
            setLevelCounter(0);
            SetGameOverRedirect(true);
          }
        }}
      >
        CONTINUE
      </OK>
    </OnScreen>
  );
};

export default TransitionScreen;

const OnScreen = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  /* background: gray; */
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;
  display: ${({ showOnScreen }) => (showOnScreen ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 6;
  /* border: 10px ridge rgba(96, 99, 102, 0.6); */
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: royalblue }
`;

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

// this div has set width, so the typing animation can dectate its size based on the text
const DivWithoutSetWidth = styled.div``;

const TextArea = styled.div`
  padding-left: 5px;
  ${flexbox({ jc: "flex-start" })};
  text-align: center;
  color: white;
  overflow: hidden;
  border-right: 4px solid black;
  height: 28px;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 4px;
  animation: ${typing} 4s steps(55, end), ${blinkCaret} 0.75s step-end infinite;
  background-color: rgba(0, 0, 0, 0.7);
`;

const OK = styled.div`
  padding: 10px 20px;
  width: 300px;
  height: 60px;
  background: black;
  ${flexbox()}
  color: white;

  border: 10px ridge rgba(96, 99, 102, 0.6);

  &:hover {
    cursor: pointer;
    background: darkcyan;
  }
`;

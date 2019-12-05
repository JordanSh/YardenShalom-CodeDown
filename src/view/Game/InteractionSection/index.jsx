import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { flexbox } from "../../../style/mixin";
import { GlobalContext } from "../../../state/GlobalContext";
import { GameContext } from "../../../state/GameContext";
import { SoundContext } from "../../../state/SoundContext";

//---------- importing levels ---------//
import level1 from "../../../levels/level1";
import level2 from "../../../levels/level2";
import level3 from "../../../levels/level3";

//---------- InteractionSection Component --------------//

const InteractionSection = ({
  gameOverSound,
  winGameSound,
  incorrectAnswerSound,
  correctAnswerSound,
  setCharactersChatState
}) => {
  const { setGameHandler } = useContext(GameContext);
  const { levelCounter, setLevelCounter } = useContext(GlobalContext);
  const {
    gameHandler,
    SetBackgroundImage,
    SetOnScreenText,
    SetShowOnScreen,
    SetGameOver,
    SetPreventRepeatsIds,
    SetGameHandler,
    preventRepeatsIds,
    levelMusic,
    SetLevelMusic
  } = useContext(GameContext);
  const { entryMusic } = useContext(SoundContext);

  const levelsArray = [level1, level2, level3];

  useEffect(() => {
    selectingQuestions();
  }, [levelCounter]);

  // useEffect(() => {
  // levelMusic.loop = true;
  // levelMusic.volume = 0.2;
  // levelMusic.play();
  // }, [levelMusic]);

  // ------------- LEVEL CHANGE FUNCTION  ------------- //
  const changeLevel = () => {
    // GAME OVER SECTION
    if (gameHandler.heroHP === 0) {
      SetBackgroundImage("./images/gameOverBackground.gif");
      SetOnScreenText(
        "You did great.. We'll call you back in a month or two.. Don't worry about it"
      );
      gameOverSound.play();
      SetShowOnScreen(true);
      SetGameOver(true);
      setLevelCounter(0);
      // ----------------
    } else {
      // END GAME SECTION
      if (levelCounter === levelsArray.length - 1) {
        winGameSound.play();
        SetOnScreenText(
          "NICE! Finally a worthy prey.. Ah, I mean, Empolyee! You start tommorow 5.30AM!"
        );
        SetBackgroundImage("./images/winBackground.gif");
        SetShowOnScreen(true);
        SetGameOver(true);
        // ----------------
      } else {
        // const currentLevel = levelsArray[levelCounter];
        const nextLevel = levelsArray[levelCounter + 1];
        SetPreventRepeatsIds([]);
        setLevelCounter(levelCounter + 1);
        SetGameHandler({ ...gameHandler, ...nextLevel });
        SetLevelMusic(new Audio(nextLevel.music));
        setCharactersChatState(nextLevel.opponentOpeningSentence);
        SetShowOnScreen(true);
      }
    }
  };

  // ---------- XXXXXXXXXXXXXXXXXX ---------- //
  // =========================================//

  // =========================================//
  // ------------- RUN FUNCTION ------------- //
  const run = e => {
    e.preventDefault();
    let wasCorrect = "";

    if (e.target[0].value === "") {
      const currentLevel = levelsArray[levelCounter];
      incorrectAnswerSound.play();
      setCharactersChatState(currentLevel.noInput);
    } else {
      if (
        e.target[0].value.toLowerCase() ===
          gameHandler.currentQuestion.answer ||
        e.target[0].value.toLowerCase() === "pass"
      ) {
        correctAnswerSound.play();
        wasCorrect = "Correct! ";
        const newOpponentHP = gameHandler.opponentHP--;
        const newGameHandler = {
          ...gameHandler,
          opponentHP: newOpponentHP
        };
        SetGameHandler({ ...gameHandler, ...newGameHandler });
      } else {
        incorrectAnswerSound.play();
        wasCorrect = "Wrong, ";
        const newheroHP = gameHandler.heroHP--;
        const newGameHandler = {
          ...gameHandler,
          opponentHP: newheroHP
        };
        SetGameHandler({ ...gameHandler, ...newGameHandler });
      }

      const correctExplained =
        wasCorrect + gameHandler.currentQuestion.explaination;
      setCharactersChatState(correctExplained);
      selectingQuestions();
      e.target[0].value = "";
    }
    if (gameHandler.opponentHP === 0 || gameHandler.heroHP <= 0) {
      levelMusic.pause();
      changeLevel();
    }
  };

  // ---------- XXXXXXXXXXXXXXXXXX ---------- //
  // =========================================//

  // =========================================//
  // ---------- QUESTIONS HANDLERS ---------- //

  // Checks if Question Id is in the preventing array, if not, it will push the Id and game handler will render

  const selectingQuestions = () => {
    if (preventRepeatsIds.length < gameHandler.levelQuestions.length) {
      let randomNumber = Math.floor(
        Math.random() * gameHandler.levelQuestions.length
      );
      console.log("randomNumber", randomNumber);
      if (!preventRepeatsIds.includes(randomNumber)) {
        preventRepeatsIds.push(randomNumber);
        console.log("preventRepeatsIds", preventRepeatsIds);
        const currentQuestion = gameHandler.levelQuestions[randomNumber];
        SetGameHandler({ ...gameHandler, currentQuestion });
      } else {
        selectingQuestions();
      }
    }
  };

  // ---------- XXXXXXXXXXXXXXXXXX ---------- //
  // =========================================//

  return (
    <InteractSection>
      <Question>{gameHandler.currentQuestion.question}</Question>
      <AnswerForm onSubmit={e => run(e)}>
        <AnswerInput placeholder="Type 'PASS' to win"></AnswerInput>
        <SubmitAnswer>ANSWER</SubmitAnswer>
      </AnswerForm>
    </InteractSection>
  );
};

export default InteractionSection;

const InteractSection = styled.div`
  ${flexbox({ dir: "column", jc: "space-around" })};
  flex-basis: 30%;
  width: 100%;
  background: #7194ea;
  border: 10px ridge rgba(96, 99, 102, 0.6);
`;

const Question = styled.div`
  ${flexbox()};
  width: 100%;
  flex-basis: 40%;
  font-size: 28px;
  line-height: 44px;
  text-align: center;
  padding: 0 5rem;
`;

const AnswerForm = styled.form`
  width: 90%;
  flex-basis: 60%;
  ${flexbox({ dir: "column", jc: "space-around" })};
`;

const AnswerInput = styled.input`
  height: 40px;
  width: 30%;
  border: none;
  border-bottom: 2px solid black;
  background: transparent;
  outline: none;
  font-size: 24px;
  font-family: "Press Start 2P", cursive;
  text-align: center;
  text-transform: uppercase;

  &::placeholder {
    opacity: 0.5;
    font-size: 16px;
  }
`;

const SubmitAnswer = styled.button`
  text-align: center;
  font-weight: bold;
  font-size: 22px;
  padding: 20px 0;
  background-color: lightgray;
  text-shadow: -1px -1px black, 1px 1px white;
  color: gray;
  border-radius: 3px;
  margin-bottom: 25px;
  box-shadow: 0 3px gray;
  font-family: "Press Start 2P", cursive;
  letter-spacing: 6px;
  width: 300px;

  &:hover {
    cursor: pointer;
    background-color: snow;
    box-shadow: 0 3px dimgray;
    color: lightgray;
  }
`;

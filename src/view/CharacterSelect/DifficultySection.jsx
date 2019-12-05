import React, { useState, useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../state/GlobalContext";
import { flexbox } from "../../style/mixin";

import { selectSound, hoverSound } from "../../sounds";

const DifficultySection = () => {
  const { setDifficulty } = useContext(GlobalContext);
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  const settingGameDifficulty = e => {
    const difficulty = e.target.id;
    console.log(difficulty);
    setDifficulty(difficulty);
    setSelectedDifficulty(difficulty);
  };

  return (
    <DifficultySectionBox>
      {/* <DifficultyTraining
        selectedDifficulty={selectedDifficulty}
        id={"training"}
        onMouseOver={() => hoverSound.play()}
        onClick={e => {
          selectSound.play();
          settingGameDifficulty(e);
        }}
      >
        TRAINING
      </DifficultyTraining> */}
      <DifficultyEasy
        selectedDifficulty={selectedDifficulty}
        id={"easy"}
        onMouseOver={() => hoverSound.play()}
        onClick={e => {
          selectSound.play();
          settingGameDifficulty(e);
        }}
      >
        EASY
      </DifficultyEasy>
      <DifficultyNormal
        selectedDifficulty={selectedDifficulty}
        id={"normal"}
        onMouseOver={() => hoverSound.play()}
        onClick={e => {
          selectSound.play();
          settingGameDifficulty(e);
        }}
      >
        NORMAL
      </DifficultyNormal>
      <DifficultyHard
        selectedDifficulty={selectedDifficulty}
        id={"hard"}
        onMouseOver={() => hoverSound.play()}
        onClick={e => {
          selectSound.play();
          settingGameDifficulty(e);
        }}
      >
        HARD
      </DifficultyHard>
      {/* <DifficultyInsane
        selectedDifficulty={selectedDifficulty}
        id={"insane"}
        onMouseOver={() => hoverSound.play()}
        onClick={e => {
          selectSound.play();
          settingGameDifficulty(e);
        }}
      >
        INSANE
      </DifficultyInsane> */}
    </DifficultySectionBox>
  );
};

export default DifficultySection;

const DifficultySectionBox = styled.div`
  flex-basis: 80%;
  ${flexbox({ jc: "space-around" })};
  flex-wrap: wrap;
`;

// const DifficultyTraining = styled.div`
//   ${flexbox()};
//   text-align: center;
//   font-weight: bold;
//   background-color: #71a95a;
//   text-shadow: -1px -1px black, 1px 1px whitesmoke;
//   border-radius: 6px;
//   font-family: "Press Start 2P", cursive;
//   letter-spacing: 5px;
//   height: 50px;
//   width: 200px;
//   border: ${({ selectedDifficulty }) =>
//     selectedDifficulty === "training" ? "5px lightyellow solid" : "none"};
//   &:hover {
//     cursor: pointer;
//     border: 5px lightyellow solid;
//   }
// `;

const DifficultyEasy = styled.div`
  background-color: #007944;
  background-color: ${({ selectedDifficulty }) =>
    selectedDifficulty === "easy" ? "#0fbf72" : "#007944"};
  border: ${({ selectedDifficulty }) =>
    selectedDifficulty === "easy" ? "5px lightyellow solid" : "none"};
  ${flexbox()};
  text-align: center;
  font-weight: bold;
  text-shadow: -1px -1px black, 1px 1px whitesmoke;
  border-radius: 4px;
  font-family: "Press Start 2P", cursive;
  letter-spacing: 5px;
  height: 60px;
  width: 200px;
  box-shadow: 0 3px gray;
  transition: 0.2s ease-out;
  &:hover {
    transition: 0.2s ease-in;
    cursor: pointer;
    background-color: #0fbf72;
    border: 5px lightyellow solid;
  }
`;

const DifficultyNormal = styled(DifficultyEasy)`
  background-color: #d17a11;
  background-color: ${({ selectedDifficulty }) =>
    selectedDifficulty === "normal" ? "#ffbc6b" : "#d17a11"};
  border: ${({ selectedDifficulty }) =>
    selectedDifficulty === "normal" ? "5px lightyellow solid" : "none"};
  &:hover {
    background-color: #ffbc6b;
  }
`;

const DifficultyHard = styled(DifficultyEasy)`
  background-color: ${({ selectedDifficulty }) =>
    selectedDifficulty === "hard" ? "#ff4638" : "#ba170b"};
  border: ${({ selectedDifficulty }) =>
    selectedDifficulty === "hard" ? "5px lightyellow solid" : "none"};
  &:hover {
    background-color: #ff4638;
  }
`;

// const DifficultyInsane = styled(DifficultyTraining)`
//   background-color: #e5243f;
//   border: ${({ selectedDifficulty }) =>
//     selectedDifficulty === "insane" ? "5px lightyellow solid" : "none"};
// `;

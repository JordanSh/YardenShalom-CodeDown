import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { flexbox } from "../../style/mixin";
import { GlobalContext } from "../../state/GlobalContext";
import { SoundContext } from "../../state/SoundContext";

import DifficultySaction from "./DifficultySection";

import {
  selectSound,
  hoverSound,
  startGameSound,
  incorrectAnswerSound
} from "../../sounds";

const CharacterSelect = () => {
  const { entryMusic, muteMusic, muteSFX } = useContext(SoundContext);
  const { hero, setHero, difficulty } = useContext(GlobalContext);
  const [redirect, setRedirect] = useState(false);
  const [selectedHero, setSelectedHero] = useState("");
  const [selectedBoy, setSelectedBoy] = useState(false);
  const [selectedGirl, setSelectedGirl] = useState(false);

  selectSound.muted = muteSFX;
  hoverSound.muted = muteSFX;
  startGameSound.muted = muteSFX;
  incorrectAnswerSound.muted = muteSFX;
  entryMusic.muted = muteMusic;

  const createPlayer = e => {
    e.preventDefault();
    if (selectedHero === "") {
      incorrectAnswerSound.play();
      return alert("No Hero Selected");
    }
    if (e.target[0].value === "") {
      return alert("No Name Selected");
    } else if (difficulty === "") {
      incorrectAnswerSound.play();
      return alert("Select Difficulty ");
    } else {
      startGameSound.play();
      const newhero = {
        name: e.target[0].value.toUpperCase(),
        model: selectedHero
      };
      setHero({ ...hero, ...newhero });
      console.log("newhero", newhero);
      // entryMusic.pause();
      setRedirect(true);
    }
  };

  const selectHero = e => {
    if (e.target.id === "boy") {
      setSelectedHero("./images/boyStandBy.gif");
    } else if (e.target.id === "girl") {
      setSelectedHero("./images/girlStandBy.gif");
    }
  };

  return (
    <PageWrapper>
      {redirect && <Redirect push to="/game" />}
      <CharSelect>
        <HeroSelectBox>Select Your Hero</HeroSelectBox>
        <BoyBox
          id="boy"
          onMouseOver={() => hoverSound.play()}
          onClick={e => {
            selectSound.play();
            selectHero(e);
            setSelectedBoy(true);
            setSelectedGirl(false);
          }}
          selectedBoy={selectedBoy}
        ></BoyBox>
        <GirlBox
          id="girl"
          onMouseOver={() => hoverSound.play()}
          onClick={e => {
            selectSound.play();
            selectHero(e);
            setSelectedGirl(true);
            setSelectedBoy(false);
          }}
          selectedGirl={selectedGirl}
        ></GirlBox>
        <DifficultySaction />
      </CharSelect>
      <NameSelect>
        <PlayerNameForm
          onSubmit={e => {
            createPlayer(e);
          }}
        >
          <InputLabel>Enter Your Name:</InputLabel>
          <NameInput></NameInput>
          <EnterButton onMouseOver={() => hoverSound.play()}>START</EnterButton>
        </PlayerNameForm>
      </NameSelect>
    </PageWrapper>
  );
};

export default CharacterSelect;

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${flexbox({ dir: "column" })};

  position: relative;
`;

const CharSelect = styled.div`
  flex-basis: 70%;
  width: 100%;
  background-image: url("https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif");
  background-size: cover;
  ${flexbox({ jc: "space-around" })}
  flex-wrap: wrap;
`;

const BoyBox = styled.div`
  flex-basis: 12%;
  border: ${({ selectedBoy }) =>
    selectedBoy ? "5px solid lightyellow" : "none"};
  height: 52%;
  background-image: url("./images/boyHeroSelectBigSize.gif");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.3s ease-in;
  margin-bottom: 40px;
  &:hover {
    cursor: pointer;
    transform: scale(1.2) translate(20px, 20px);
    transition: 0.3s ease-out;
    border: 5px lightyellow solid;
  }
`;

const HeroSelectBox = styled.div`
  ${flexbox()};
  font-size: 40px;
  height: 10%;
  background-color: rgba(96, 99, 102, 0.9);
  width: 100%;
  color: whitesmoke;
`;

const GirlBox = styled(BoyBox)`
  border: ${({ selectedGirl }) =>
    selectedGirl ? "5px solid lightyellow" : "none"};
  background-image: url("./images/girlHeroSelectBigSize.gif");
  &:hover {
    transform: scale(1.2) translate(-20px, 20px);
  }
`;

const NameSelect = styled.div`
  flex-basis: 30%;
  background: #7f8489;
  width: 100%;
  opacity: 0.7;
  ${flexbox()};
  border: 5px solid black;
  background: #7194ea;
  border: 4mm ridge rgba(96, 99, 102, 0.6);
`;

const PlayerNameForm = styled.form`
  width: 90%;
  height: 90%;
  ${flexbox({ dir: "column", jc: "space-around" })};
`;

const InputLabel = styled.label`
  font-size: 30px;
`;

const NameInput = styled.input`
  border: none;
  border-bottom: 2px solid black;
  background: transparent;
  outline: none;
  font-size: 24px;
  font-family: "Press Start 2P", cursive;
  width: 25%;
  text-align: center;
  text-transform: uppercase;
`;

const EnterButton = styled.button`
  text-align: center;
  font-weight: bold;
  padding: 10px 0 10px 10px;
  background-color: lightgray;
  text-shadow: -1px -1px black, 1px 1px white;
  color: gray;
  border-radius: 6px;
  box-shadow: 0 6px gray;
  margin: 5px;
  font-family: "Press Start 2P", cursive;
  letter-spacing: 8px;
  height: 60px;
  width: 200px;
  &:hover {
    cursor: pointer;
    background-color: snow;
    box-shadow: 0 6px gray;
  }
`;

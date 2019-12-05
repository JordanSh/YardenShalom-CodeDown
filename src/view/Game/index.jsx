import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { flexbox } from "../../style/mixin";
import { GlobalContext } from "../../state/GlobalContext";
import { SoundContext } from "../../state/SoundContext";
import { GameContext } from "../../state/GameContext";
import { Redirect } from "react-router-dom";

//---------- importing sounds ---------//

import {
  incorrectAnswerSound,
  gameOverSound,
  correctAnswerSound,
  continueSound,
  winGameSound
} from "../../sounds";

//---------- importing components ---------//

import GraphicsSection from "./GraphicsSection";
import TransitionScreen from "./TransitionScreen";
import InteractionSection from "./InteractionSection";

//---------- Game Component --------------//

const Game = () => {
  const { setEntryMusic, entryMusic, muteMusic, muteSFX } = useContext(
    SoundContext
  );
  const { hero, levelCounter } = useContext(GlobalContext);
  const { gameHandler, gameOverRedirect } = useContext(GameContext);
  const [charactersChatState, setCharactersChatState] = useState(
    `Hi ${hero.name}, ` + gameHandler.opponentOpeningSentence
  );

  console.log(gameHandler);

  useEffect(() => {
    entryMusic.pause();
    setEntryMusic(new Audio(gameHandler.music));
  }, [levelCounter]);

  entryMusic.volume = 0.2;
  entryMusic.loop = true;
  entryMusic.play();
  entryMusic.muted = muteMusic;

  incorrectAnswerSound.muted = muteSFX;
  gameOverSound.muted = muteSFX;
  correctAnswerSound.muted = muteSFX;
  continueSound.muted = muteSFX;
  winGameSound.muted = muteSFX;

  return (
    <PageWrapper>
      {gameOverRedirect && <Redirect push to="/" />}
      <TransitionScreen continueSound={continueSound} />
      <GraphicsSection charactersChatState={charactersChatState} />
      <InteractionSection
        gameOverSound={gameOverSound}
        winGameSound={winGameSound}
        setCharactersChatState={setCharactersChatState}
        incorrectAnswerSound={incorrectAnswerSound}
        correctAnswerSound={correctAnswerSound}
      />
    </PageWrapper>
  );
};

export default Game;

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${flexbox({ dir: "column" })};
  position: relative;
`;

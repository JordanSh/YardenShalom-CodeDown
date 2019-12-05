import React, { useState, createContext } from "react";

import level1 from "../levels/level1";

export const GameContext = createContext();

const Provider = GameContext.Provider;

export const GameProvider = ({ children }) => {
  const [gameHandler, SetGameHandler] = useState({
    ...level1,
    heroHP: 5,
    currentQuestion: ""
  });

  // const [charactersChatState, setCharactersChatState] = useState(`Hi ${hero.name}, ` + gameHandler.opponentOpeningSentence);
  const [preventRepeatsIds, SetPreventRepeatsIds] = useState([]);
  const [onScreenText, SetOnScreenText] = useState("");
  const [showOnScreen, SetShowOnScreen] = useState(true);
  const [gameOver, SetGameOver] = useState(false);
  const [levelMusic, SetLevelMusic] = useState(new Audio(gameHandler.music));
  const [gameOverRedirect, SetGameOverRedirect] = useState(false);
  const [backgroundImage, SetBackgroundImage] = useState(
    "./images/background.webp"
  );

  const state = {
    gameHandler,
    preventRepeatsIds,
    onScreenText,
    showOnScreen,
    gameOver,
    gameOverRedirect,
    backgroundImage,
    levelMusic
  };

  const actions = {
    SetGameHandler,
    SetPreventRepeatsIds,
    SetOnScreenText,
    SetShowOnScreen,
    SetGameOver,
    SetGameOverRedirect,
    SetBackgroundImage,
    SetLevelMusic
  };

  return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
};

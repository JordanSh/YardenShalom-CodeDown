import React, { useState, createContext } from "react";

export const GlobalContext = createContext();

const Provider = GlobalContext.Provider;

export const GlobalProvider = ({ children }) => {
  const [hero, setHero] = useState({
    company: "Cybereason"
  });
  const [levelCounter, setLevelCounter] = useState(0);
  const [difficulty, setDifficulty] = useState("");
  // const [muteMusic, setMuteMusic] = useState(false);
  // const [muteSFX, setMuteSFX] = useState(false);
  // const [entryMusic, setEntryMusic] = useState(
  //   new Audio("./sounds/CheerleaderSong.mp3")
  // );

  const state = {
    hero,
    levelCounter,
    difficulty
    // entryMusic,
    // muteMusic,
    // muteSFX
  };

  const actions = {
    setHero,
    setLevelCounter,
    setDifficulty
    // setEntryMusic,
    // setMuteMusic,
    // setMuteSFX
  };

  return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
};

import React, { useState, createContext } from "react";

export const SoundContext = createContext();

const Provider = SoundContext.Provider;

export const SoundProvider = ({ children }) => {
  const [muteMusic, setMuteMusic] = useState(false);
  const [muteSFX, setMuteSFX] = useState(false);
  const [entryMusic, setEntryMusic] = useState(
    new Audio("./sounds/CheerleaderSong.mp3")
  );

  const state = {
    entryMusic,
    muteSFX,
    muteMusic
  };

  const actions = {
    setEntryMusic,
    setMuteSFX,
    setMuteMusic
  };

  return <Provider value={{ ...state, ...actions }}>{children}</Provider>;
};

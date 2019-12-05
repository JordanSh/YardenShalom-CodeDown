import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "../style/GlobalStyle";
import { GameProvider } from "../state/GameContext";
import { GlobalContext } from "../state/GlobalContext";
import { SoundContext } from "../state/SoundContext";
import { MdVolumeUp, MdVolumeOff, MdFlashOn, MdFlashOff } from "react-icons/md";

//Components
import MainMenu from "./MainMenu";
import Game from "./Game";
import Credits from "./Credits";
import CharacterSelect from "./CharacterSelect";
import { flexbox } from "../style/mixin";

const App = () => {
  const { muteMusic, muteSFX, setMuteMusic, setMuteSFX } = useContext(
    SoundContext
  );

  return (
    <Router>
      <MainSiteWrapper>
        <Muters>
          <MuteBgMusic
            muteMusic={muteMusic}
            onClick={() => setMuteMusic(!muteMusic)}
          >
            {muteMusic ? <MdVolumeOff /> : <MdVolumeUp />}
          </MuteBgMusic>
          <MuteSFXs muteSFX={muteSFX} onClick={() => setMuteSFX(!muteSFX)}>
            {muteSFX ? <MdFlashOff /> : <MdFlashOn />}
          </MuteSFXs>
        </Muters>
        <Switch>
          <Route exact path="/" component={Credits} />
          <Route path="/mainmenu" component={MainMenu} />
          <Route path="/credits" component={Credits} />
          <Route path="/characterselect" component={CharacterSelect} />
          <GameProvider>
            <Route path="/game" component={Game} />
          </GameProvider>
        </Switch>
      </MainSiteWrapper>
      <GlobalStyle />
    </Router>
  );
};

export default App;

const MainSiteWrapper = styled.div`
  /* ${flexbox()}; */
  height: 90vh;
  min-height: 1000px;
  max-height: 1000px;
  width: 90vw;
  min-width: 1600px;
  max-width: 1600px;
  font-family: 'Press Start 2P', cursive;
  background: #050505;
  margin: 0 auto;
  border: 10px ridge rgba(96, 99, 102, 0.6);
  /* @media(max-width: 1280px){
    min-width: 1100px;
    max-width: 1100px;
    min-height: 500px;
    max-height: 500px;
    border: red 3px solid;
  } */

  /* border: 3px solid red; */
  position: relative;
`;

const Muters = styled.div`
  z-index: 999;
  ${flexbox()}
  height: 26px;
  width: 52px;
  position: absolute;
  top: 0;
  left: 0;
`;

const MuteBgMusic = styled.div`
  ${flexbox()};
  font-size: 14px;
  color: white;
  height: 26px;
  width: 26px;
  background: black;
  opacity: ${({ muteMusic }) => (muteMusic ? "0.4" : "0.6")};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const MuteSFXs = styled(MuteBgMusic)`
  opacity: ${({ muteSFX }) => (muteSFX ? "0.4" : "0.6")};
`;

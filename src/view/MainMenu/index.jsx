import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { flexbox } from "../../style/mixin";
import { SoundContext } from "../../state/SoundContext";
import { selectSound, hoverSound } from "../../sounds";

const MainMenu = () => {
  const { entryMusic, muteMusic, muteSFX, setEntryMusic } = useContext(
    SoundContext
  );

  useEffect(() => {
    entryMusic.pause();
    setEntryMusic(new Audio("./sounds/CheerleaderSong.mp3"));
  }, []);

  entryMusic.volume = 0.2;
  entryMusic.loop = true;
  entryMusic.play();
  entryMusic.muted = muteMusic;

  selectSound.muted = muteSFX;
  hoverSound.muted = muteSFX;

  return (
    <Background>
      <GradientImageBox>
        <UiContainer>
          <MainHeader />
          <NavBox>
            <StyledLinkGame
              to="/characterselect"
              onMouseOver={() => hoverSound.play()}
              onClick={() => selectSound.play()}
            >
              START GAME
            </StyledLinkGame>
            <StyledLinkCredits
              to="/credits"
              onMouseOver={() => hoverSound.play()}
              onClick={() => selectSound.play()}
            >
              CREDITS
            </StyledLinkCredits>
          </NavBox>
        </UiContainer>
      </GradientImageBox>
    </Background>
  );
};

export default MainMenu;

const Background = styled.div`
  width: 100%;
  height: 100%;
`;

const GradientImageBox = styled.div`
  width: 100%;
  height: 100%;

  background-image: linear-gradient(
      to top,
      rgba(5, 25, 55, 1),
      rgba(100, 48, 102, 1),
      transparent,
      transparent,
      transparent
    ),
    url("https://i.pinimg.com/originals/28/0d/e4/280de45746e7f7d90466e2d3a8a74738.gif");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 1600px;
`;

const UiContainer = styled.div`
  ${flexbox({ dir: "column", ai: "center" })};
  height: 60%;
  position: relative;
  top: 40%;
`;

const MainHeader = styled.div`
  height: 60%;
  width: 50%;
  background-image: url("../../images/logogif.gif");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const NavBox = styled.div`
  height: 50%;
  width: 50%;
  ${flexbox({ dir: "column", jc: "space-around", ai: "center" })};
`;

const StyledLinkGame = styled(Link)`
  text-decoration: none;
  color: white;
  ${flexbox()};
  border: 10px ridge rgba(49, 96, 99, 1);
  /* border-radius: 4px; */
  background: brown;
  font-size: 36px;
  width: 50%;
  height: 30%;
  text-align: center;

  &:hover {
    /* background: greenyellow; */
    background-image: url("https://media.giphy.com/media/6wpHEQNjkd74Q/giphy.gif");
    background-repeat: repeat;
    background-position: center;
    background-size: cover;
  }
`;

const StyledLinkCredits = styled(StyledLinkGame)``;

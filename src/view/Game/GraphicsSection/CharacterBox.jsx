import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs/";
import { flexbox } from "../../../style/mixin";
import { GlobalContext } from "../../../state/GlobalContext";
import { GameContext } from "../../../state/GameContext";

const CharactersBox = () => {
  const { hero, difficulty, levelCounter } = useContext(GlobalContext);
  const { gameHandler, SetGameHandler } = useContext(GameContext);

  const [heroHearts, SetHeroHearts] = useState([]);
  const [opponentHearts, SetOpponentHearts] = useState([]);

  useEffect(() => {
    levelDifficulty();
  }, [levelCounter]);

  useEffect(() => {
    heroHeartsDisplay();
    opponentHeartsDisplay();
  }, [gameHandler]);

  const levelDifficulty = () => {
    switch (difficulty) {
      // case "training":
      //   SetGameHandler({
      //     ...gameHandler,
      //     opponentHP: gameHandler.opponentHP--
      //   });
      //   break;
      case "easy":
        SetGameHandler({
          ...gameHandler,
          opponentHP: gameHandler.opponentHP--
        });
        break;
      case "normal":
        SetGameHandler({
          ...gameHandler,
          opponentHP: gameHandler.opponentHP
        });
        break;
      case "hard":
        SetGameHandler({
          ...gameHandler,
          opponentHP: gameHandler.opponentHP++
        });
        break;
      // case "insane":
      //   SetGameHandler({
      //     ...gameHandler,
      //     opponentHP: gameHandler.opponentHP + 3
      //   });
      // break;
      default:
        break;
    }
  };

  const heroHeartsDisplay = () => {
    const heroHPArray = [];
    for (let i = 0; i < gameHandler.heroHP; i++) {
      heroHPArray.push(<StyledHeart />);
    }
    SetHeroHearts(heroHPArray);
  };

  const opponentHeartsDisplay = () => {
    const opponentHPArray = [];
    for (let i = 0; i < gameHandler.opponentHP; i++) {
      opponentHPArray.push(<StyledHeart />);
    }
    SetOpponentHearts(opponentHPArray);
  };

  return (
    <CharacterBox>
      <HeroCharacter heroModel={hero.model}>
        <HeroLifeBox>{heroHearts}</HeroLifeBox>
      </HeroCharacter>
      <CodeSnippetBox>
        <CodeSnippet>
          <StyledSyntaxHighlighter language="javascript" style={atomOneDark}>
            {`${gameHandler.currentQuestion.code}`}
          </StyledSyntaxHighlighter>
        </CodeSnippet>
        <Stickers>
          <YoungWebDevs>
            <YoungWebDevsSticker />
          </YoungWebDevs>
          <Company>
            <CompanySticker />
          </Company>
          <Credits>{`Yarden Shalom
         &
Oren Kesler`}</Credits>
        </Stickers>
      </CodeSnippetBox>
      <OpponentCharacter character={gameHandler.character}>
        <OpponentLifeBox>{opponentHearts}</OpponentLifeBox>
      </OpponentCharacter>
    </CharacterBox>
  );
};

export default CharactersBox;

const CharacterBox = styled.div`
  ${flexbox({ jc: "space-between", ai: "flex-end" })};
  width: 100%;
  height: 70%;
`;

const HeroCharacter = styled.div`
  height: 70%;
  flex-basis: 25%;
  background-image: ${({ heroModel }) => `url(${heroModel})`};
  background-size: contain;
  background-repeat: no-repeat;
  ${flexbox({ ai: "flex-end" })};
  position: relative;
`;

const HeroLifeBox = styled.div`
  width: 90%;
  height: 15%;
  ${flexbox({ jc: "flex-start", ai: "flex-start" })}
  position: absolute;
  bottom: 15px;
  left: 280px;
`;

const StyledHeart = styled.div`
  height: 45px;
  width: 45px;
  background-image: url("./images/Heart.gif");
  background-size: cover;
`;

const CodeSnippetBox = styled.div`
  /* flex-basis: 45%;
  height: 100%; */
  width: 514px;
  height: 350px;
  background-image: url("./images/imacScreen.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  ${flexbox({ ai: "flex-start" })}
  position: relative;
`;

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const CodeSnippet = styled.code`
  ${flexbox()};
  overflow: hidden;
  position: relative;
  top: 2px;
  color: white;
  height: 73%;
  border-radius: 15px 15px 0 0;
  width: 83%;
  border: 10px solid black;
  border-bottom: none;
  font-size: 18px;
  white-space: pre-wrap;
  font-family: "Courier";
`;

const Stickers = styled.div`
  position: absolute;
  width: 75%;
  height: 10.5%;
  bottom: 54px;

  ${flexbox({ jc: "space-between" })}
`;

const YoungWebDevs = styled.div`
  flex-basis: 20%;
  height: 100%;
  overflow: hidden;
`;

const YoungWebDevsSticker = styled.div`
  width: 48%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid steelblue;
  background-image: url("./images/logoweb.JPG");
  background-color: steelblue;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transform: rotate(-20deg) translateY(7px);
`;

const Company = styled.div`
  flex-basis: 40%;
  height: 100%;
  ${flexbox()};
  overflow: hidden;
`;

const CompanySticker = styled.div`
  height: 60%;
  width: 90%;
  background-image: url("https://media.licdn.com/dms/image/C4D0BAQHCLUHyH2cM_Q/company-logo_200_200/0?e=2159024400&v=beta&t=kZ0tzTv4WIMRGqwUc-z1bb0iAZ5Xo-F9fwsJukezejE");
  background-color: white;
  background-position: center;
  background-size: contain;
  background-repeat: repeat;
  transform: rotate(8deg) translateY(5px);
`;

const Credits = styled.div`
  flex-basis: 20%;
  height: 95%;
  ${flexbox()}
  white-space: pre-wrap;
  font-family: sans-serif;
  font-size: 10px;
  line-height: 14px;
  color: gray;
  font-weight: bold;
`;

const OpponentCharacter = styled(HeroCharacter)`
  background-image: ${({ character }) => `url(${character})`};
`;

const OpponentLifeBox = styled(HeroLifeBox)`
  left: -250px;
  justify-content: flex-end;
`;

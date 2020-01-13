import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { flexbox } from "../../style/mixin";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Techs from "./Techs";
import { SoundContext } from "../../state/SoundContext";

const Credits = () => {
  const { entryMusic, muteMusic } = useContext(SoundContext);

  entryMusic.muted = muteMusic;

  const createMaker = ({ name, gitHub, linkedin, email, phone }) => {
    return (
      <Maker>
        {name}
        <LinksBox>
          <WebBox>
            <LinkHref href={gitHub} target="_blank">
              <GoMarkGithub />
            </LinkHref>

            <LinkHref href={linkedin} target="_blank">
              <FaLinkedin />
            </LinkHref>

            <LinkHref href={`mailto:${email}`}>
              <AiOutlineMail />
            </LinkHref>
          </WebBox>

          <WhatsappBox>
            <FaWhatsapp /> <NumberSpan>{phone}</NumberSpan>
          </WhatsappBox>
        </LinksBox>
      </Maker>
    );
  };

  const yarden = {
    name: "Yarden Shalom",
    gitHub: "https://github.com/JordanSh",
    linkedin: "https://www.linkedin.com/in/yarden-shalom-a85a70197/",
    email: "yarden.shalom9@gmail.com",
    phone: "054-9100290"
  };

  const oren = {
    name: "Oren Kesler",
    gitHub: "",
    linkedin: "https://www.linkedin.com/in/oren-kesler-934245144",
    email: "orenkes12@gmail.com",
    phone: "054-6308658"
  };

  return (
    <PageContainer>
      <InfoBox>
        <Greeting>Welcome To CodeDown!</Greeting>
        <OriginalPromise>This site was made from scratch by</OriginalPromise>
        <Logo />
        <MakersBox>
          <Copyrights>
            All signed gifs were especially made by me and are not intended for
            free use
          </Copyrights>
          {createMaker({ ...yarden })}
          {createMaker({ ...oren })}
        </MakersBox>
        <StyledLoginLink to="/mainmenu">Go To Site</StyledLoginLink>
        {/* <NoteAboutResposiveness>
          *Currently this game does not feature responsive view, therefore
          there's might be a need for you to zoom in/out.
        </NoteAboutResposiveness> */}

        <Techs />

        <IntroductionGif />
        <SiteFeatures>
          <Header>This Site Features</Header>
          <Features>
            <Listing>
              Changable game interface, based on user selected name, character
              and comapny
            </Listing>
            <Listing>
              3 Levels of difficulty, providing a challenging experience to all
              levels of users
            </Listing>
            <Listing>Responsive music and sound effects controls</Listing>
            <Listing>
              Test your knowladge and coding abilities, versus the best minds of
              the desired company. practice for real life intense interview
              situation.
            </Listing>
          </Features>
        </SiteFeatures>
      </InfoBox>
    </PageContainer>
  );
};

export default Credits;

const PageContainer = styled.div`
  ${flexbox({ dir: "column", jc: "flex-start" })};
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    to right bottom,
    #06162c,
    #071425,
    #07121e,
    #080f17,
    #090c0f
  );
  color: snow;
  text-shadow: 1px 1px 1px black;
  font-family: "Muli", sans-serif;
`;

const InfoBox = styled.div`
  ${flexbox({ dir: "column", jc: "flex-start" })};
  height: 100%;
  margin-top: 50px;
  width: 90%;
`;

const Greeting = styled.div`
  font-size: 30px;
  margin-bottom: 15px;
  width: 100%;
  text-align: center;
  position: relative;

  @media (max-width: 430px) {
    font-size: 29px;
  }
`;

const Logo = styled.div`
  background-image: url("./images/CompanyLogoClear.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 250px;
  min-height: 220px;
  width: 300px;
  position: absolute;
`;

const OriginalPromise = styled.div``;

// const NoteAboutResposiveness = styled.div`
//   font-size: 18px;
//   margin-top: 24px;
//   color: red;
// `;

const MakersBox = styled.div`
  ${flexbox({ jc: "space-around" })}
  width: 100%;
  position: relative;
`;

const Maker = styled.div`
  flex-basis: 40%;
  text-align: center;
  height: 150px;
  font-size: 32px;
`;

const Copyrights = styled.div`
  width: 18%;
  font-size: 12px;
  position: absolute;
  left: 240px;
  bottom: -70px;
  line-height: 18px;
  opacity: 0.6;
  text-shadow: 1px 1px 1px dimgray;
`;

const LinksBox = styled.div`
  ${flexbox()};
  flex-wrap: wrap;
`;

const WebBox = styled.div`
  ${flexbox({ jc: "space-between" })}
  flex-basis: 50%;
  margin: 20px 0 10px;
`;

const LinkHref = styled.a`
  flex-basis: 100%;
  font-size: 50px;
  opacity: 0.8;
  color: white;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const WhatsappBox = styled.div`
  ${flexbox()}
  flex-basis: 51%;
  text-align: left;
  font-size: 50px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 430px) {
    font-size: 16px;
  }
`;

const NumberSpan = styled.span`
  font-size: 26px;
  padding-left: 18px;

  @media (max-width: 430px) {
    font-size: 14px;
    padding-left: 6px;
  }
`;

const StyledLoginLink = styled(Link)`
  ${flexbox()}
  color: white;
  text-decoration: none;
  font-size: 36px;
  width: 250px;
  height: 80px;
  border: 3px solid white;
  box-shadow: 6px 6px slategray;
  padding: 15px 0;

  opacity: 0.9;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const IntroductionGif = styled.div``;

const SiteFeatures = styled.div`
  width: 50%;
`;

const Header = styled.h2`
  font-size: 22px;
  margin: 15px 5px;
`;

const Features = styled.ol`
  white-space: pre-wrap;
`;

const Listing = styled.li`
  ${flexbox({ jc: "flex-start" })}
  margin: 15px 15px;
  text-decoration: pointer;
  line-height: 22px;

  /* background: darkgray; */
  height: 55px;
  padding-left: 15px;
  border-left: 4px solid lightsteelblue;
  text-shadow: 1px 1px 2px black;
`;

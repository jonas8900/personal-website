import { styled } from "styled-components";
import InformationParagraphForCards from "../Paragraphs/InformationParagraphForCards";
import HeadlinesForDescriptionCards from "../Headlines/HeadlinesForDescriptionCards";

export default function ProjectDescriptionCard({
  className,
  headline,
  infotext,
  icons,
  fontcolor,
}) {
  //description card for the project page
  return (
    <StyledProjectDesriptionCard className={className}>
      <StyledHeadline fontcolor={fontcolor}>{headline}</StyledHeadline>
      <StyledInformation fontcolor={fontcolor}>{infotext}</StyledInformation>
      <StyledIcons>{icons}</StyledIcons>
    </StyledProjectDesriptionCard>
  );
}

const StyledProjectDesriptionCard = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 30%;
  height: 40rem;
  border-radius: 0px 40px 40px 40px;
  top: 19.7rem; // to get the height of the branch: 5rem from the projectheadline + 2.4rem from the height of the headline and 12 rem from the height of the wireframes container
  right: 8%;
  z-index: 10;
  filter: drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.2));
  @media (max-width: 1920) {
    height: 34rem;
  }
  @media (max-width: 1440px) {
    width: 40%;
    right: 4%;
  }
  @media (max-width: 1024px) {
    width: 90%;
    top: 10rem;
    height: 35rem;
    border-radius: 40px;
    right: 5%;
  }
  @media (max-width: 500px) {
    width: 90%;
    top: 10rem;
    height: 48rem;
    border-radius: 40px;
    right: 5%;
  }
`;

const StyledHeadline = styled(HeadlinesForDescriptionCards)`
  border-bottom: 2px solid #dfa100;
  width: 30%;
  margin-bottom: 2rem;
  text-align: center;
  color: ${({ fontcolor }) => fontcolor};
  @media (max-width: 600px) {
    width: 50%;
  }
`;

const StyledInformation = styled(InformationParagraphForCards)`
  color: ${({ fontcolor }) => fontcolor};
  margin: 0rem 2rem auto 2rem;
`;

const StyledIcons = styled.article`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

import styled from "styled-components";
import InformationParagraphForCards from "../Paragraphs/InformationParagraphForCards";
import HeadlinesForDescriptionCards from "../Headlines/HeadlinesForDescriptionCards";
import FriendsSkillSetIcons from "../Icons/FriendsUsedIcons";

export default function ProjectDescriptionCard({
  className,
  headline,
  infotext,
  icons,
}) {
  return (
    <StyledProjectDesriptionCard className={className}>
      <StyledHeadline>{headline}</StyledHeadline>
      <StyledInformation>{infotext}</StyledInformation>
      <StyledIcons>{icons}</StyledIcons>
    </StyledProjectDesriptionCard>
  );
}

const StyledProjectDesriptionCard = styled.div`
  position: absolute;
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
  width: 20%;
  text-align: center;
  color: var(--primary-blue);
`;

const StyledInformation = styled(InformationParagraphForCards)`
  color: var(--primary-blue);
  margin: 2rem 2rem auto 2rem;
`;

const StyledIcons = styled.article`
  margin-top: 2rem;
  display: flex;
  justify-content: center;

  gap: 1rem;
`;

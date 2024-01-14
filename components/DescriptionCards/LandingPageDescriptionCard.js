import Image from "next/image";
import styled from "styled-components";
import AllSkillSetIcons from "../Icons/AllSkillSetIcons";
import InformationParagraphForCards from "../Paragraphs/InformationParagraphForCards";
import HeadlinesForDescriptionCards from "../Headlines/HeadlinesForDescriptionCards";

export default function LandingPageDescriptionCard() {
  return (
    <StyledDescriptionCard>
      <StyledImage
        src={"/images/phoneCallImageCompressed.jpg"}
        alt="Picture of me while i am at the phone"
        width={1920}
        height={1080}
        sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, (max-width: 1400px) 1080px" //for increase performance
        unoptimized
      />

      <StyledHeadline>Hi! Ich bin Jonas</StyledHeadline>

      <StyledParagraph>
        ein leidenschaftlicher Frontend-Entwickler mit einem breiten Skillset
        und einer vielseitigen beruflichen Geschichte. Meine Entwicklung hin zum
        Coding-Enthusiasten begann nach mehrjähriger Erfahrung im kaufmännischen
        Bereich und meiner Tätigkeit als selbstständiger Betreiber eines
        Tonstudios. Mein anfängliches Hobby entwickelte sich schnell zu meiner
        Berufung im Bereich Frontend-Entwicklung.
      </StyledParagraph>
      <StyledIconWrapper>
        <AllSkillSetIcons />
      </StyledIconWrapper>
    </StyledDescriptionCard>
  );
}

//Wrapper
const StyledDescriptionCard = styled.article`
  grid-area: 2 / 2 / 3 / 3; // for positioning the card

  display: grid; // for the elements in the card
  grid-template-columns: 1fr 0.7fr;
  grid-template-rows: 0.6fr repeat(2, 1fr);

  width: 45rem;
  height: 30rem;
  border-radius: 9px;
  background-color: #7393b2;
  color: white;
  box-shadow: 5px 5px 4px 0px rgba(0, 0, 0, 0.25);
  flex-shrink: 1;

  @media (min-width: 1921px) {
    //for large screens
    width: 50rem;
    height: 35rem;
  }
  @media (max-width: 1500px) {
    //for medium screens
    width: 90%;
    align-self: center;
    margin-left: 4rem;
  }
  @media (max-width: 1024px) {
    //for small screens
    width: 80%;
    min-width: 22rem;
    height: 80%;
    min-height: 30rem;
    margin: auto;
    grid-area: 2 / 1 / 3 / 3;
    grid-template-columns: 1.5fr 0.7fr;
    grid-template-rows: 0.6fr repeat(2, 1fr);
  }
`;

const StyledIconWrapper = styled.div`
  grid-area: 2 / 2 / 4 / 3;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0 1rem 1rem 0;
  padding: 1rem;
  @media (max-width: 1024px) {
    flex-direction: row;
    grid-area: 3 / 1 / 4 / 3;
    gap: 0.7rem;
    align-items: flex-end;
  }
`;

//Image
const StyledImage = styled(Image)`
  grid-area: 1 / 1 / 4 / 3;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  border-radius: 9px;
  transition: all 0.3s ease-in-out;
  object-fit: cover;
  &:hover {
    opacity: 1;
    z-index: 1;
  }
  @media (max-width: 1024px) {
    //for mobile device
    &:active {
      opacity: 1;
      z-index: 1;
    }
  }
`;

//headline for the card
const StyledHeadline = styled(HeadlinesForDescriptionCards)`
  grid-area: 1 / 1 / 2 / 2;
  @media (max-width: 915px) {
    grid-area: 1 / 1 / 2 / 3;
  }
`;

//Text for the card
const StyledParagraph = styled(InformationParagraphForCards)`
  grid-area: 2 / 1 / 4 / 2;
  @media (max-width: 915px) {
    grid-area: 2 / 1 / 3 / 3;
  }
`;

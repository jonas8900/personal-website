import Image from "next/image";
import styled from "styled-components";
import AllSkillSetIcons from "../Icons/AllSkillSetIcons";

export default function LandingPageDescriptionCard() {
  return (
    <StyledDescriptionCard>
      <StyledImage
        src={"/images/phoneCallImage.JPG"}
        alt="Picture of me while i am at the phone"
        width={1920}
        height={1080}
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
  display: grid;
  grid-template-columns: 1fr 0.7fr;
  grid-template-rows: 0.6fr repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-area: 2 / 2 / 3 / 3;
  justify-self: center;
  align-self: center;
  width: 45rem;
  height: 30rem;
  border-radius: 9px;
  background-color: #7393b2;
  color: white;
  box-shadow: 5px 5px 4px 0px rgba(0, 0, 0, 0.25);
  flex-shrink: 1;

  @media (min-width: 1921px) {
    width: 50rem;
    height: 35rem;
  }
  @media (max-width: var(--large-mobile-breakpoint)) {
    width: 70%;
    min-width: 22rem;
    height: 100%;
    min-height: 30rem;
    grid-area: 2 / 1 / 3 / 3;
    align-self: flex-start;
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
  @media (max-width: 915px) {
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
  @media (max-width: 915px) {
    &:active {
      opacity: 1;
      z-index: 1;
    }
  }
`;

//headline for the card
const StyledHeadline = styled.h1`
  grid-area: 1 / 1 / 2 / 2;
  font-weight: 500;
  font-size: var(--font-size-headline);
  margin: 2rem auto auto 4rem;
  padding: 0.5rem;
  border-bottom: 2px solid #dfa100;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;
  @media (max-width: 915px) {
    grid-area: 1 / 1 / 2 / 3;
  }
`;

//Text for the card
const StyledParagraph = styled.p`
  grid-area: 2 / 1 / 4 / 2;
  font-weight: 400;
  font-size: var(--font-size-greater-text);
  justify-self: center;
  align-self: flex-start;
  margin: 2rem 4rem auto 4.5rem;
  @media (min-width: 1921px) {
    font-size: 18px;
    margin: 2rem 6rem auto 4.5rem;
  }
  @media (max-width: 915px) {
    grid-area: 2 / 1 / 3 / 3;
    margin: 1rem;
  }
`;

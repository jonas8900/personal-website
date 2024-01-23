import styled from "styled-components";
import ScrollAnimation from "../Animations/ScrollAnimation";

export default function InformationParagraphForCards({ children, className }) {
  //paragraph for the description cards on the project page
  return (
    <StyledParagraph className={className}>
      <ScrollAnimation>{children}</ScrollAnimation>
    </StyledParagraph>
  );
}

const StyledParagraph = styled.div`
  font-weight: 400;
  font-size: var(--font-size-greater-text);
  margin: 2rem 4rem auto 4.5rem;
  @media (min-width: 1921px) {
    font-size: 18px;
    margin: 2rem 6rem auto 4.5rem;
  }
  @media (max-width: 1500px) {
    margin: 0rem 4rem auto 4.5rem;
  }
  @media (max-width: 915px) {
    margin: 5%;
  }
`;

import styled from "styled-components";

export default function HeadlinesForDescriptionCards({ children, className }) {
  return <StyledHeadline className={className}>{children}</StyledHeadline>;
}

const StyledHeadline = styled.h2`
  font-weight: 500;
  font-size: var(--font-size-headline);
  margin: 2rem auto auto 4rem;
  padding: 0.5rem;
  border-bottom: 2px solid #dfa100;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;

`;

import styled from "styled-components";
import ProjectDescriptionCard from "./ProjectDescriptionCard";

export default function ProjectBranch() {
  return (
    <StyledBranchSection>
      <StyledProjectHeadline>Projekte</StyledProjectHeadline>
      <StyledHeadlineBranchDiv></StyledHeadlineBranchDiv>
      <StyledMiddleBranchDiv></StyledMiddleBranchDiv>
      <StyledProjectDescriptionBranchDiv></StyledProjectDescriptionBranchDiv>
      <ProjectDescriptionCard />
    </StyledBranchSection>
  );
}

const StyledBranchSection = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledProjectHeadline = styled.h1`
  margin: 4rem auto 1rem auto;
  margin-right: 50%;
  width: 20%;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 1024px) {
    font-size: 1.5rem;
    margin: 4.5rem auto 1rem auto;
    width: 100%;
  }
`;

//styling for the project branch
const StyledHeadlineBranchDiv = styled.div`
  width: 20%;
  height: 5px;
  background-color: #dfa100;
  margin: auto;
  margin-right: 50%;
  z-index: 8;
  filter: drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.5));
  @media (max-width: 1024px) {
    width: 100%;
    margin: auto;
  }
`;

//styling the branch which acts as a divider between the project headline and the project description
const StyledMiddleBranchDiv = styled.div`
  position: absolute;
  top: 7.4rem; // 4rem from margin top from headlinediv + 1rem from margin bottom from headlinediv + 2.4rem from the height of the headline
  left: 50%;
  background-color: white;
  width: 5px;
  height: 77.6rem; // 65rem from the height of the wireframes container + 0.3rem from the border of the headline + 12.3rem from the height of the project description card
  z-index: 7;
  filter: drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.5));
`;

const StyledProjectDescriptionBranchDiv = styled.div`
  width: 20%;
  height: 5px;
  background-color: white;
  margin: 12rem auto 0 auto;
  z-index: 9;
  margin-left: 50%;
  filter: drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.5));
`;

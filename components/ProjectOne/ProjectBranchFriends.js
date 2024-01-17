import styled from "styled-components";
import ProjectDescriptionCard from "../ProjectBranch/ProjectDescriptionCard";
import FriendsSkillSetIcons from "../Icons/FriendsUsedIcons";
import ProjectMiddleBranch from "../ProjectBranch/ProjectMiddleBranch";
import ProjectDescriptionBranch from "../ProjectBranch/ProjectDescriptionBranch";
import AllWireFrames from "./WireFramesForFriendsProject/AllWireFrames";

export default function ProjectBranch() {
  return (
    <StyledBranchSection>
      <StyledProjectHeadline>Projekte</StyledProjectHeadline>
      <StyledHeadlineBranchDiv></StyledHeadlineBranchDiv>
      <StyledMiddleBranchDiv />
      <StyledProjectDescriptionBranchDiv></StyledProjectDescriptionBranchDiv>
      <ProjectDescriptionCard
        headline={"Friends"}
        infotext={
          <>
            In meiner App namens <code>Friends</code> dreht sich alles um die
            Organisation regelmäßiger Veranstaltungen in Gruppen von Freunden,
            sei es in größeren oder kleineren Zusammenkünften.
            <br />
            <br />
            Oft gehen solche Treffen im hektischen Alltag unter, und man
            vergisst schnell, welche vielfältigen Möglichkeiten man als Gruppe
            hat. Mein Ziel ist es, dieses Problem mithilfe der App zu lösen. Mit
            der Anwendung können Nutzer Aktivitäten eintragen, diese mögen,
            Abstimmungen durchführen und Veranstaltungen planen.
            <br />
            <br />
            Zusätzlich besteht die Möglichkeit, für jede Veranstaltung eine
            Liste zu führen, auf der ersichtlich ist, welcher Teilnehmer welchen
            Gegenstand zur Veranstaltung mitbringt. Darüber hinaus ist es
            möglich, verschiedene Gruppen von Freunden zu erstellen. Verwendete
            Techniken:
          </>
        }
        icons={<FriendsSkillSetIcons />}
        fontcolor={"var(--primary-blue)"}
      />
      <AllWireFrames />
    </StyledBranchSection>
  );
}

const StyledBranchSection = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  border-bottom: 1px solid black;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #7393b2;
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
const StyledMiddleBranchDiv = styled(ProjectMiddleBranch)`
  top: 7.4rem; // 4rem from margin top from headlinediv + 1rem from margin bottom from headlinediv + 2.4rem from the height of the headline
  left: 50%;
  background-color: white;
  width: 5px;
  height: 100%; // 65rem from the height of the wireframes container + 0.3rem from the border of the headline + 12.3rem from the height of the project description card
  @media (max-width: 1024px) {
    height: 85.5rem; //
    z-index: 4;
  }
`;

const StyledProjectDescriptionBranchDiv = styled(ProjectDescriptionBranch)`
  margin: 12.1rem auto 0 auto;
  margin-left: 50%;
  background-color: white;
`;

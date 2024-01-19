import { styled } from "styled-components";
import ProjectDescriptionCard from "../ProjectBranch/ProjectDescriptionCard";
import FriendsSkillSetIcons from "../Icons/FriendsUsedIcons";
import ProjectMiddleBranch from "../ProjectBranch/ProjectMiddleBranch";
import ProjectDescriptionBranch from "../ProjectBranch/ProjectDescriptionBranch";
import DesktopImage from "./DesktopImage";

export default function ProjectBranchEmbs() {
  return (
    <StyledBranchSection>
      <StyledMiddleBranchDiv />
      <StyledProjectDescriptionBranchDiv></StyledProjectDescriptionBranchDiv>
      <StyledProjectDescriptionCard
        headline={"Firmenwebsite"}
        infotext={
          <>
            In meinem Projekt für die
            <code>Elektromaschinenbau-Schulze GmbH</code>, als selbstständiger
            Webentwickler, stand die Konzeption und Erstellung der
            Unternehmenswebsite im Fokus. <br />
            <br />
            Mit einem Hauch innovativer Designkonzepte integrierte ich eine
            leistungsfähige Datenbank und entwickelte einen benutzerfreundlichen
            Admin-Bereich. Dieser ermöglichte es dem Unternehmen,
            Stellenausschreibungen mühelos zu verwalten – von der Änderung bis
            zur Löschung.
            <br />
            <br /> Die sechswöchige Entwicklungsphase festigte meine Fähigkeiten
            und erweiterte meine Erfahrung im Bereich der Webentwicklung.
          </>
        }
        icons={<FriendsSkillSetIcons />}
        fontcolor={"white"}
      />
      <StyledDesktopImage />
    </StyledBranchSection>
  );
}

const StyledBranchSection = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  border-bottom: 1px solid black;
`;

//Card for informations about the project

const StyledProjectDescriptionCard = styled(ProjectDescriptionCard)`
  background-color: var(--description-card-color);
  margin: -5px 0rem 0rem 8%;

  border-radius: 40px 0px 40px 40px;
  height: 32rem;
  position: static;
  @media (max-width: 500px) {
    height: 42rem;
    margin: -5px auto auto auto;
    border-radius: 40px;
  }
`;

//branches

const StyledProjectDescriptionBranchDiv = styled(ProjectDescriptionBranch)`
  margin: 12rem auto 0 auto;
  margin-right: 50%;
  background-color: var(--description-card-color);
`;

//styling the branch which acts as a divider between the project headline and the project description
const StyledMiddleBranchDiv = styled(ProjectMiddleBranch)`
  left: 50%;
  background-color: var(--description-card-color);
  width: 5px;
  height: 100%;

  @media (max-width: 1024px) {
    height: 100%;
    z-index: 4;
  }
`;

// DesktopImage

const StyledDesktopImage = styled(DesktopImage)`
  margin: -10rem 2rem auto auto;
  width: 55%;
  height: 100%;
  z-index: 99;
  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
    margin: 6rem auto auto auto;
  }
`;

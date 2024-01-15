import styled from "styled-components";
import InformationParagraphForCards from "../Paragraphs/InformationParagraphForCards";
import HeadlinesForDescriptionCards from "../Headlines/HeadlinesForDescriptionCards";
import FriendsSkillSetIcons from "../Icons/FriendsUsedIcons";

export default function ProjectDescriptionCard({ className }) {
  return (
    <StyledProjectDesriptionCard className={className}>
      <StyledHeadline>Friends</StyledHeadline>
      <StyledInformation>
        In meiner App namens <code>Friends</code> dreht sich alles um die
        Organisation regelmäßiger Veranstaltungen in Gruppen von Freunden, sei
        es in größeren oder kleineren Zusammenkünften.
      </StyledInformation>
      <StyledInformation>
        Oft gehen solche Treffen im hektischen Alltag unter, und man vergisst
        schnell, welche vielfältigen Möglichkeiten man als Gruppe hat. Mein Ziel
        ist es, dieses Problem mithilfe der App zu lösen. Mit der Anwendung
        können Nutzer Aktivitäten eintragen, diese mögen, Abstimmungen
        durchführen und Veranstaltungen planen.
      </StyledInformation>
      <StyledInformation>
        Zusätzlich besteht die Möglichkeit, für jede Veranstaltung eine Liste zu
        führen, auf der ersichtlich ist, welcher Teilnehmer welchen Gegenstand
        zur Veranstaltung mitbringt. Darüber hinaus ist es möglich, verschiedene
        Gruppen von Freunden zu erstellen. Verwendete Techniken:
      </StyledInformation>

      <StyledIcons>
        <FriendsSkillSetIcons />
      </StyledIcons>
    </StyledProjectDesriptionCard>
  );
}

const StyledProjectDesriptionCard = styled.div`
  position: absolute;
  background-color: white;
  width: 30%;
  height: 34rem;
  border-radius: 0px 40px 40px 40px;
  top: 19.7rem; // to get the height of the branch: 5rem from the projectheadline + 2.4rem from the height of the headline and 12 rem from the height of the wireframes container
  right: 8%;
  z-index: 10;
  filter: drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.2));
  @media (max-width: 1024px) {
    width: 90%;
    top: 19.6rem;
    height: 30rem;
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

import styled from "styled-components";
import NavigationBar from "@/components/Landingpage/Navbar/navigationBar";
import LandingPageDescriptionCard from "@/components/Landingpage/DescriptionCards/LandingPageDescriptionCard";
import PhotoBox from "@/components/Landingpage/photoBoxes/photoBox";
import AllWireFrames from "@/components/WireFramesForFriendsProject/AllWireFrames";
import ProjectBranch from "@/components/ProjectBranch/ProjectBranch";

export default function Page({ isMobile }) {
  return (
    <StyledMain>
      <StyledLandingPageWrapper>
        <NavigationBar isMobile={isMobile} />
        <LandingPageDescriptionCard />
        <PhotoBox />
      </StyledLandingPageWrapper>
      <StyledProjectPageWrapper>
        <ProjectBranch />
        <AllWireFrames />
      </StyledProjectPageWrapper>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  width: 100%;
  //to get maximal compatibility with all browsers
  background: rgb(250, 255, 255);
  background: -moz-linear-gradient(
    171deg,
    rgba(250, 255, 255, 1) 5%,
    rgba(200, 226, 241, 1) 61%
  );
  background: -webkit-linear-gradient(
    171deg,
    rgba(250, 255, 255, 1) 5%,
    rgba(200, 226, 241, 1) 61%
  );
  background: linear-gradient(
    171deg,
    rgba(250, 255, 255, 1) 5%,
    rgba(200, 226, 241, 1) 61%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#faffff",endColorstr="#c8e2f1",GradientType=1);
  height: 100%;
`;

//first page
const StyledLandingPageWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 0.5fr 1fr 0.5fr;
  grid-row-gap: 1rem;
  justify-items: center;
  height: 100%;
  width: 80%;
  margin: auto auto auto auto;
  @media (max-width: 1299px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 0.1fr 1fr 0.5fr;
    grid-row-gap: 0px;
    width: 100%;
    margin-bottom: 2rem;
  }
  @media (max-width: 1024px) {
    margin-bottom: 20rem;
  }
`;

//second page
const StyledProjectPageWrapper = styled.section`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #7393b2;

  height: 100%;
`;

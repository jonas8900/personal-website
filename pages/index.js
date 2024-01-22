import { styled } from "styled-components";
import NavigationBar from "@/components/Navbar/navigationBar";
import LandingPageDescriptionCard from "@/components/Landingpage/DescriptionCards/LandingPageDescriptionCard";
import PhotoBox from "@/components/Landingpage/photoBoxes/photoBox";
import AllWireFrames from "@/components/ProjectOne/WireFramesForFriendsProject/AllWireFrames";
import ProjectBranchFriends from "@/components/ProjectOne/ProjectBranchFriends";
import ProjectBranchEmbs from "@/components/ProjectTwo/ProjectBranchEmbs";
import ContactPage from "@/components/Contact/ContactPage";
import WebsiteHeadline from "@/components/Landingpage/Websiteheadline";

export default function Page({ isMobile }) {
  return (
    <StyledMain>
      <StyledLandingPageWrapper>
        <StyledNavigationBar isMobile={isMobile} />
        <WebsiteHeadline />
        <StyledPhotoAndDescriptionCardWrapper id="aboutme">
          <PhotoBox />
          <LandingPageDescriptionCard />
        </StyledPhotoAndDescriptionCardWrapper>
      </StyledLandingPageWrapper>
      <StyledProjectPageWrapper id="projects">
        <ProjectBranchFriends />
        <ProjectBranchEmbs />
      </StyledProjectPageWrapper>
      <StyledContactPage />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  width: 100%;
  background-color: #f6f7fb;
  height: 100%;
`;

//first page
const StyledLandingPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;
  margin: auto;
  @media (max-width: 1299px) {
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`;

//second page
const StyledProjectPageWrapper = styled.section`
  height: 100%;
`;

const StyledNavigationBar = styled(NavigationBar)`
  z-index: 2;
  height: 100%;
`;

//third page
const StyledContactPage = styled(ContactPage)``;

// wrapper for photo and description card on first page
const StyledPhotoAndDescriptionCardWrapper = styled.section`
  display: flex;
  margin-bottom: 20rem;
  z-index: 1;
  @media (max-width: 1299px) {
    flex-direction: column;
  }
`;

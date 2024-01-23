import { styled } from "styled-components";
import NavigationBar from "@/components/Navbar/navigationBar";
import LandingPageDescriptionCard from "@/components/Landingpage/DescriptionCards/LandingPageDescriptionCard";
import PhotoBox from "@/components/Landingpage/photoBoxes/photoBox";

import ProjectBranchFriends from "@/components/ProjectOne/ProjectBranchFriends";
import ProjectBranchEmbs from "@/components/ProjectTwo/ProjectBranchEmbs";
import ContactPage from "@/components/Contact/ContactPage";
import WebsiteHeadline from "@/components/Landingpage/DragableHeadline";
import TopScrollButton from "@/components/TopScrolling/TopScrollButton";
import ScrollAnimation from "@/components/Animations/ScrollAnimation";
export default function Page({ isMobile, scrollY }) {
  return (
    <StyledMain>
      <StyledLandingPageWrapper>
        <StyledNavigationBar isMobile={isMobile} />
        <ScrollAnimation>
          <WebsiteHeadline />
        </ScrollAnimation>
        <ScrollAnimation>
          <StyledPhotoAndDescriptionCardWrapper id="aboutme">
            <PhotoBox />
            <LandingPageDescriptionCard />
          </StyledPhotoAndDescriptionCardWrapper>
        </ScrollAnimation>
      </StyledLandingPageWrapper>
      <StyledProjectPageWrapper id="projects">
        <ProjectBranchFriends />

        <ScrollAnimation>
          <ProjectBranchEmbs />
        </ScrollAnimation>
      </StyledProjectPageWrapper>
      <ScrollAnimation>
        <StyledContactPage />
      </ScrollAnimation>
      <TopScrollButton scrollY={scrollY} />
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

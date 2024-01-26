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
import { lazy, useState } from "react";
import LoadingAnimation from "@/components/Animations/LoadingAnimation";
import Image from "next/image";
import Head from "next/head";
export default function Page({ isMobile, scrollY }) {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 5000);

  return (
    <>
      {loading ? (
        <StyledLoadingSection>
          <LoadingAnimation />
        </StyledLoadingSection>
      ) : (
        <StyledMain loading={loading}>
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
      )}
    </>
  );
}

const StyledMain = styled.main`
  width: 100%;
  background-image: url("/images/Background-figma-7.jpg");

  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  opacity: ${({ loading }) => (loading ? 0 : 1)};
  transition: opacity 0.5s ease-in-out;
`;

const StyledLoadingSection = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
    width: 100%;
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

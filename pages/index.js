import styled from "styled-components";
import Spline from "@splinetool/react-spline";
import NavigationBar from "@/components/Navbar/navigationBar";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import LandingPageDescriptionCard from "@/components/DescriptionCards/LandingPageDescriptionCard";
import PhotoBox from "@/components/photoBoxes/photoBox";

export default function Page({ isMobile }) {
  //const [isloading, setLoading] = useState(false); // this needs to be fixed at the end of the project to be able to use the spline background

  return (
    <StyledMain>
      {/* <StyledBackgroundImage src="/images/Backgroundimage.png" alt="3d Backgroundpicture with white and blue colored artefact" width={1920} height={1080} unoptimized/> */}
      {/* this needs to be fixed at the end of the project to be able to use the spline background */}
      {/* {isloading ? (
        <StyledLoadingIcon icon={faCircleNotch} spin />

      ):(
      <>
            <StyledSplineBackgroundWrapper>

      <Spline onLoad={() => setLoading(false)} scene="https://draft.spline.design/BuZzbLISnCnN8Cev/scene.splinecode" /> 
        </StyledSplineBackgroundWrapper> */}
      <StyledLandingPageWrapper>
        <NavigationBar isMobile={isMobile} />
        <LandingPageDescriptionCard />
        <PhotoBox />
      </StyledLandingPageWrapper>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  width: 100%;
  background: rgb(226, 226, 226);
  background: linear-gradient(
    180deg,
    rgba(226, 226, 226, 1) 16%,
    rgba(219, 229, 244, 1) 46%,
    rgba(198, 226, 252, 1) 73%
  );
  min-height: 300vh;
`;

const StyledLandingPageWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 0.5fr 1fr 0.5fr;
  grid-column-gap: 0px;
  grid-row-gap: 1rem;
  justify-items: center;
  min-height: 100vh;
  width: 80%;
  margin: auto;
  @media (max-width: 1299px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 0.1fr 1fr 0.5fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    width: 100%;
  }
`;

const StyledBackgroundImage = styled(Image)`
  // temporary solution for the background image to match the design
  width: 100%;
  height: 100%;
`;

//wrapper for spline background
const StyledSplineBackgroundWrapper = styled.div`
  // this needs to be fixed at the end of the project to be able to use the spline background
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
`;

//icons

const StyledLoadingIcon = styled(FontAwesomeIcon)`
  // this needs to be fixed at the end of the project to be able to use the spline background
  margin: auto;
  width: 10rem;
  height: 10rem;
  color: var(--primary-blue);
`;

import styled from "styled-components";
import NavigationBar from "@/components/Navbar/navigationBar";
import LandingPageDescriptionCard from "@/components/DescriptionCards/LandingPageDescriptionCard";
import PhotoBox from "@/components/photoBoxes/photoBox";

export default function Page({ isMobile }) {
  return (
    <StyledMain>
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
  min-height: 300vh; //to see the linear gradient on the bottom of the website
`;

const StyledLandingPageWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 0.5fr 1fr 0.5fr;
  grid-row-gap: 1rem;
  justify-items: center;
  min-height: 100vh;
  width: 80%;
  margin: auto;
  @media (max-width: 1299px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 0.1fr 1fr 0.5fr;
    grid-row-gap: 0px;
    width: 100%;
  }
`;

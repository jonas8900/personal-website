
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';
import NavigationBar from '@/components/Navbar/navigationBar';

export default function Page({isMobile}) {

    return (
      <StyledMain>
            <StyledSplineBackgroundWrapper>
        {/*  <Spline scene="https://prod.spline.design/gSfN3MXvPkAzNfml/scene.splinecode" />*/}
        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.17/build/spline-viewer.js" async/>
<spline-viewer url="https://prod.spline.design/gSfN3MXvPkAzNfml/scene.splinecode"></spline-viewer>

        </StyledSplineBackgroundWrapper>
        <StyledMainSection>
            <NavigationBar isMobile={isMobile}/>
      
        </StyledMainSection> 
        <StyledDivForSplineMobilePhone>
        <Spline scene="https://draft.spline.design/5viGrrJfn78PDoLV/scene.splinecode" />
        </StyledDivForSplineMobilePhone>
      </StyledMain>
    );



  }
  
  const StyledMain = styled.main`

`;


  const StyledSplineBackgroundWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;


`;


const StyledMainSection = styled.section`
position: relative; 
margin: auto; 
padding: 2rem;
width: 100%;
height: 100vh;
border-bottom: 1px solid black;
background-color: rgba(255,255,255,0.5);
box-shadow: 0 0 10px rgba(0,0,0,0.5);
`;

const StyledDivForSplineMobilePhone = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 230%;
  left: 10px;
  scale: 0.5;
@media (min-width: 1024px) {
  scale: 0.8;
  width: 40%;
}
@media (max-height: 500px ) {
  display: none;
}
`;
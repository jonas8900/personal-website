
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';

export default function Page() {
    return (
      <StyledMain>
            <StyledSplineBackgroundWrapper>
           <Spline scene="https://draft.spline.design/i7ihPiUk1Gy04GwN/scene.splinecode" />
        </StyledSplineBackgroundWrapper>
        <StyledMainSection>
        <h1>Next.js + Spline</h1>
        <p>
          This is an example of using Spline with Next.js. The Spline scene is
          rendered on the <code>index</code> page.
        </p>
       
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
  width: 20%;
  height: 100%;
  top: 230%;
  left: 10px;

`;
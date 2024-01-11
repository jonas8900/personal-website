import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import Photos from "./Photos";
import Age from "../Calculates/BirthDayCalculations";
import StatBox from "./Statbox";

export default function PhotoBox() {
  const birthDayJonasDally = "1996-08-13";
  const birthDayMaliBalu = "2021-12-23";
  const [counterForPhotoPositioning, setCounterForPhotoPositioning] =
    useState(0);
  const [isHoveringOverPhotobox, setIsHoveringOverPhotobox] = useState(false);

  function handleCounterForPhotoPositioning() {
    //function to change the position of the photos in the photobox with 3 different positions
    if (counterForPhotoPositioning < 2) {
      setCounterForPhotoPositioning(counterForPhotoPositioning + 1);
    } else setCounterForPhotoPositioning(0);
  }

  function handleHovering() {
    setIsHoveringOverPhotobox(true);
  }

  function handleTouchOnMobile() {
    setCounterForPhotoPositioning(false);
  }

  function handleTouchEndOnMobile() {
    setIsHoveringOverPhotobox(true);
  }

  return (
    <>
      <StyledPhotoboxWrapper //wrapper for the photobox
        onClick={handleCounterForPhotoPositioning}
        onMouseEnter={handleHovering}
        onMouseLeave={() => setIsHoveringOverPhotobox(false)}
        onTouchStart={handleTouchOnMobile}
        onTouchEnd={handleTouchEndOnMobile}
        $counterforphotopositioning={counterForPhotoPositioning}>
        <StyledFirstPhotoArticle //first Photo in the Photobox
          $counterforphotopositioning={counterForPhotoPositioning}
          alt="Personal picture"
          src={
            "/images/Personal-Picture-Photobox.jpg"
          }></StyledFirstPhotoArticle>
        <StyledParentForStatbox // parent for Statbox
        >
          <StyledFirstStatbox //Statbox for the first photo
            $counterforphotopositioning={counterForPhotoPositioning}
            shouldAnimate={counterForPhotoPositioning === 0}
            shouldBeVisible={isHoveringOverPhotobox}
            name={"Jonas Dally"}
            age={<Age>{birthDayJonasDally}</Age>}
            hobbys={`musik produzieren, programmieren,
          austauschen`}
            features={
              "Freundlich, Zielstrebig, Engagiert"
            }></StyledFirstStatbox>
        </StyledParentForStatbox>
        <StyledSecondPhotoArticle
          $counterforphotopositioning={counterForPhotoPositioning}
          src={"/images/Balu-Picture-Photobox.png"}
          alt="picture of my Cat Balu"></StyledSecondPhotoArticle>
        <StyledParentForStatbox>
          <StyledSecondStatbox
            $counterforphotopositioning={counterForPhotoPositioning}
            shouldAnimate={counterForPhotoPositioning === 1}
            shouldBeVisible={isHoveringOverPhotobox}
            name={"Balu"}
            age={<Age>{birthDayMaliBalu}</Age>}
            hobbys={`schlafen, essen, spielen, geister jagen`}
            features={"Kuschelig, Spirituell, ängstlich"}></StyledSecondStatbox>
        </StyledParentForStatbox>
        <StyledThirdPhotoArticle
          $counterforphotopositioning={counterForPhotoPositioning}
          src={"/images/Mali-Picture-Photobox.png"}
          alt="picture of my Cat Mali"></StyledThirdPhotoArticle>
        <StyledParentForStatbox>
          <StyledThirdStatbox
            $counterforphotopositioning={counterForPhotoPositioning}
            shouldAnimate={counterForPhotoPositioning === 2}
            shouldBeVisible={isHoveringOverPhotobox}
            name={"Mali"}
            age={<Age>{birthDayMaliBalu}</Age>}
            hobbys={`kuscheln, auf sich aufmerksam machen, schlafen`}
            features={"Freundlich, Neugierig, Verspielt"}></StyledThirdStatbox>
        </StyledParentForStatbox>
      </StyledPhotoboxWrapper>
    </>
  );
}

//animation to put the first photo smooth in the background of the other photos

const SortedAnimation = keyframes`
  0% { right: 50%; top: 0%; z-index: 3; }
  50% { right: 45%; top: 2%; z-index: 1; }
  100% { right: 30%; top: 10%; z-index: 1; }
`;

//first Photo in the Photobox

const StyledFirstPhotoArticle = styled(Photos)`
  right: 50%;
  top: 5%;
  transform: translate(50%);
  transition: all 0.3s ease;
  rotate: 5deg;
  animation: ${({ $counterforphotopositioning }) =>
    $counterforphotopositioning === 1
      ? css`
          ${SortedAnimation} 0.5s ease
        `
      : ""};
  z-index: ${({ $counterforphotopositioning }) => {
    switch ($counterforphotopositioning) {
      case 0:
        return "3";
      case 1:
        return "1";
      case 2:
        return "2";
    }
  }};
  @media (max-width: 1024px) {
    animation: none;
    rotate: 0deg;
    right: 50%;
    top: 0%;
  }
`;

//second Photo in the Photobox

const StyledSecondPhotoArticle = styled(Photos)`
  top: -5%;
  right: 50%;
  transform: translate(50%);
  rotate: 30deg;
  z-index: ${({ $counterforphotopositioning }) => {
    switch ($counterforphotopositioning) {
      case 0:
        return "2";
      case 1:
        return "3";
      case 2:
        return "1";
    }
  }};
  transition: all 0.3s ease;
  animation: ${({ $counterforphotopositioning }) =>
    $counterforphotopositioning === 2
      ? css`
          ${SortedAnimation} 0.5s ease
        `
      : ""};
  @media (max-width: 1024px) {
    animation: none;
    rotate: 0deg;
    right: 40%;
    top: 5%;
  }
`;

//third Photo in the Photobox

const StyledThirdPhotoArticle = styled(Photos)`
  top: 25%;
  right: 50%;
  transform: translate(50%);
  rotate: -30deg;
  z-index: ${({ $counterforphotopositioning }) => {
    switch ($counterforphotopositioning) {
      case 0:
        return "1";
      case 1:
        return "2";
      case 2:
        return "3";
    }
  }};
  transition: all 0.3s ease;
  animation: ${({ $counterforphotopositioning }) =>
    $counterforphotopositioning === 0
      ? css`
          ${SortedAnimation} 0.5s ease
        `
      : ""};
  @media (max-width: 1024px) {
    animation: none;
    rotate: 0deg;
    right: 30%;
    top: 10%;
  }
`;

//parent for Statbox to position it with transform translate, because frame motion doesn't work with transform translate

const StyledParentForStatbox = styled.div`
  position: absolute;
  z-index: 3;
  top: 26rem;
  right: 50%;
  transform: translate(50%);
`;

//Statboxes for the photos
const StyledFirstStatbox = styled(StatBox)``;
const StyledSecondStatbox = styled(StatBox)``;
const StyledThirdStatbox = styled(StatBox)``;

//photobox (wrapper for the photos)

const StyledPhotoboxWrapper = styled.section`
  grid-area: 2 / 1 / 2 / 2;
  width: 50%;
  justify-self: center;
  display: flex;
  position: relative;
  cursor: pointer;
  @media (max-width: 1024px) {
    grid-area: 3 / 1 / 4 / 3;
  }
  @media (max-width: 915px) {
    margin-top: 5rem;
  }
  //create switch case for the different positions of the photos in the photobox with 3 different positions
  &:hover ${StyledFirstPhotoArticle} {
    rotate: 0deg;
    right: ${({ $counterforphotopositioning }) => {
      switch ($counterforphotopositioning) {
        case 0:
          return "50%";
        case 1:
          return "30%";
        case 2:
          return "40%";
      }
    }};
    top: ${({ $counterforphotopositioning }) => {
      switch ($counterforphotopositioning) {
        case 0:
          return "0";
        case 1:
          return "10%";
        case 2:
          return "5%";
      }
    }};
    z-index: ${({ $counterforphotopositioning }) => {
      switch ($counterforphotopositioning) {
        case 0:
          return "3";
        case 1:
          return "1";
        case 2:
          return "2";
      }
    }};
  }
  &:hover ${StyledSecondPhotoArticle} {
    rotate: 0deg;
    right: ${({ $counterforphotopositioning }) => {
      switch ($counterforphotopositioning) {
        case 0:
          return "40%";
        case 1:
          return "50%";
        case 2:
          return "30%";
      }
    }};
    top: ${({ $counterforphotopositioning }) => {
      switch ($counterforphotopositioning) {
        case 0:
          return "5%";
        case 1:
          return "0";
        case 2:
          return "10%";
      }
    }};
    z-index: ${({ $counterforphotopositioning }) => {
      switch ($counterforphotopositioning) {
        case 0:
          return "2";
        case 1:
          return "3";
        case 2:
          return "1";
      }
    }};
  }
  &:hover ${StyledThirdPhotoArticle} {
    rotate: 0deg;
    right: ${({ $counterforphotopositioning }) => {
      switch ($counterforphotopositioning) {
        case 0:
          return "30%";
        case 1:
          return "40%";
        case 2:
          return "50%";
      }
    }};
    top: ${({ $counterforphotopositioning }) => {
      switch ($counterforphotopositioning) {
        case 0:
          return "10%";
        case 1:
          return "5%";
        case 2:
          return "0";
      }
    }};
    z-index: ${({ $counterforphotopositioning }) => {
      switch ($counterforphotopositioning) {
        case 0:
          return "1";
        case 1:
          return "2";
        case 2:
          return "3";
      }
    }};
  }
  &:hover ${StyledFirstStatbox} {
    opacity: ${({ $counterforphotopositioning }) =>
      $counterforphotopositioning === 0 ? "1" : "0"};
  }

  &:hover ${StyledSecondStatbox} {
    opacity: ${({ $counterforphotopositioning }) =>
      $counterforphotopositioning === 1 ? "1" : "0"};
  }
  &:hover ${StyledThirdStatbox} {
    opacity: ${({ $counterforphotopositioning }) =>
      $counterforphotopositioning === 2 ? "1" : "0"};
  }

  @media (max-width: 1024px) {
    &:active ${StyledFirstPhotoArticle} {
      rotate: 0deg;
      right: ${({ $counterforphotopositioning }) => {
        switch ($counterforphotopositioning) {
          case 0:
            return "50%";
          case 1:
            return "30%";
          case 2:
            return "40%";
        }
      }};
      top: ${({ $counterforphotopositioning }) => {
        switch ($counterforphotopositioning) {
          case 0:
            return "0";
          case 1:
            return "10%";
          case 2:
            return "5%";
        }
      }};
      z-index: ${({ $counterforphotopositioning }) => {
        switch ($counterforphotopositioning) {
          case 0:
            return "3";
          case 1:
            return "1";
          case 2:
            return "2";
        }
      }};
    }
    &:active ${StyledSecondPhotoArticle} {
      rotate: 0deg;
      right: ${({ $counterforphotopositioning }) => {
        switch ($counterforphotopositioning) {
          case 0:
            return "40%";
          case 1:
            return "50%";
          case 2:
            return "30%";
        }
      }};
      top: ${({ $counterforphotopositioning }) => {
        switch ($counterforphotopositioning) {
          case 0:
            return "5%";
          case 1:
            return "0";
          case 2:
            return "10%";
        }
      }};
      z-index: ${({ $counterforphotopositioning }) => {
        switch ($counterforphotopositioning) {
          case 0:
            return "2";
          case 1:
            return "3";
          case 2:
            return "1";
        }
      }};
    }
    &:active ${StyledThirdPhotoArticle} {
      rotate: 0deg;
      right: ${({ $counterforphotopositioning }) => {
        switch ($counterforphotopositioning) {
          case 0:
            return "30%";
          case 1:
            return "40%";
          case 2:
            return "50%";
        }
      }};
      top: ${({ $counterforphotopositioning }) => {
        switch ($counterforphotopositioning) {
          case 0:
            return "10%";
          case 1:
            return "5%";
          case 2:
            return "0";
        }
      }};
      z-index: ${({ $counterforphotopositioning }) => {
        switch ($counterforphotopositioning) {
          case 0:
            return "1";
          case 1:
            return "2";
          case 2:
            return "3";
        }
      }};
    }
    &:active ${StyledFirstStatbox} {
      opacity: ${({ $counterforphotopositioning }) =>
        $counterforphotopositioning === 0 ? "1" : "0"};
    }

    &:active ${StyledSecondStatbox} {
      opacity: ${({ $counterforphotopositioning }) =>
        $counterforphotopositioning === 1 ? "1" : "0"};
    }
    &:active ${StyledThirdStatbox} {
      opacity: ${({ $counterforphotopositioning }) =>
        $counterforphotopositioning === 2 ? "1" : "0"};
    }
  }
`;

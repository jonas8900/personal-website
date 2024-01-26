import React, { useState } from "react";
import { styled } from "styled-components";
import Photos from "./Photos";
import Age from "../../Calculates/BirthDayCalculations";
import StatBox from "./Statbox";

const defaultPhotoData = [
  {
    id: 1,
    name: "Jonas Dally",
    age: "1996-08-13",
    hobbys: "musik produzieren, programmieren, austauschen",
    features: "Freundlich, Zielstrebig, Engagiert",
    src: "/images/Personal-Picture-Photobox.jpg",
    alt: "Personal picture",
    rightDefault: 50,
    rightWhileHover: 50,
    top: 0,
    topWhileHover: 0,
    index: 3,
    rotate: 5,
  },
  {
    id: 2,
    name: "Balu",
    age: "2021-12-23",
    hobbys: "schlafen, essen, spielen, geister jagen",
    features: "Kuschelig, Spirituell, ängstlich",
    src: "/images/Balu-Picture-Photobox.png",
    alt: "picture of my Cat Balu",
    rightDefault: 50,
    rightWhileHover: 40,
    top: -5,
    topWhileHover: 5,
    index: 2,
    rotate: 30,
  },
  {
    id: 3,
    name: "Mali",
    age: "2021-12-23",
    hobbys: "kuscheln, auf sich aufmerksam machen, schlafen",
    features: "Freundlich, Neugierig, Verspielt",
    src: "/images/Mali-Picture-Photobox.png",
    alt: "picture of my Cat Mali",
    rightDefault: 50,
    rightWhileHover: 30,
    top: 25,
    topWhileHover: 10,
    index: 1,
    rotate: -30,
  },
];
export default function PhotoBox() {
  const [isHoveringOverPhotobox, setIsHoveringOverPhotobox] = useState(false);
  //function to handle hovering over the photobox to get the animation for the photos and the statboxes
  function handleHovering() {
    setIsHoveringOverPhotobox(true);
  }
  function handleTouchStartOnMobile() {
    setIsHoveringOverPhotobox(true);
  }
  function handleCancelTouchOnMobile() {
    setIsHoveringOverPhotobox(false);
  }
  //for the pictures and picture animations

  const [photoList, setPhotoList] = useState(defaultPhotoData);

  //function to change the position of the photos in the photobox with 3 different positions
  function handlePhotoPositionSwitch() {
    const NewPhotoList = photoList.map((photo) => {
      const indexSwitch = (photo.index % 3) + 1;
      //rightSwitch and topSwitch are for the different positions of the photos in the photobox
      const rightSwitch = photo.index === 3 ? 30 : photo.index === 2 ? 50 : 40;
      const topSwitch = photo.index === 3 ? 10 : photo.index === 2 ? 0 : 5;
      return {
        ...photo,
        index: indexSwitch,
        rightWhileHover: rightSwitch,
        topWhileHover: topSwitch,
      };
    });
    setPhotoList(NewPhotoList);
  }
  return (
    <>
      <StyledPhotoboxWrapper //wrapper for the photobox
        onClick={handlePhotoPositionSwitch}
        onMouseEnter={handleHovering}
        onMouseLeave={() => setIsHoveringOverPhotobox(false)}
        onTouchStart={handleTouchStartOnMobile}
        onTouchCancel={handleCancelTouchOnMobile}
        $photolist={photoList}>
        {/* each photo gets there own Statbox, so i use fragments here to get a unique key for each child in the function  */}
        {photoList.map((photo) => (
          <React.Fragment key={photo.id}>
            <StyledPhotoArticle
              src={photo.src}
              alt={photo.alt}
              right={photo.rightDefault}
              rightwhilehover={photo.rightWhileHover}
              top={photo.top}
              rotate={photo.rotate}
              index={photo.index}
            />
            <StyledParentForStatbox>
              <StyledStatBox
                name={photo.name}
                age={<Age>{photo.age}</Age>} // use the Age component to get the exact Birthyear
                hobbys={photo.hobbys}
                features={photo.features}
                shouldBeVisible={isHoveringOverPhotobox}
                shouldAnimate={photo.index === 3}></StyledStatBox>
            </StyledParentForStatbox>
          </React.Fragment>
        ))}
      </StyledPhotoboxWrapper>
    </>
  );
}

const StyledPhotoArticle = styled(Photos)`
  //default positioning of the photos while not hovering over the photobox
  right: ${({ right }) => right}%;
  top: ${({ top }) => top && `${top}%`};
  transform: translate(50%);
  rotate: ${({ rotate }) => rotate}deg;
  transition: right 0.5s ease-in-out, top 0.3s ease-in-out,
    rotate 0.3s ease-in-out;

  z-index: ${({ index }) => index && index};
  @media (max-width: 1299px) {
    width: 60%;
    max-width: 15rem;
    height: 20rem;
    rotate: ${({ index }) => (index === 3 ? 20 : index === 2 ? -15 : 0)}deg;
  }
`;

//parent for Statbox to position it with transform translate, because frame motion doesn't work with transform translate

const StyledParentForStatbox = styled.div`
  position: absolute;
  z-index: 3;
  top: 27rem;
  right: 50%;
  transform: translate(50%);

  @media (max-width: 1299px) {
    top: 20rem;
  }
`;

const StyledStatBox = styled(StatBox)``;

//photobox (wrapper for the photos)

const StyledPhotoboxWrapper = styled.section`
  grid-area: 2 / 1 / 2 / 2;
  width: 50%;
  justify-self: center;
  display: flex;
  position: relative;
  z-index: 1;
  cursor: pointer;
  transition: margin-right 0.5s ease-in-out;
  @media (max-width: 915px) {
    margin-top: 0rem;
  }

  @media (max-width: 1299px) {
    width: 100%;
  }
  @media (min-width: 1450px) {
    width: 60%;
    margin-right: 4rem;
    &:hover {
      margin-right: 8rem;
    }
  }

  // use nth-of-type to get the right photo and statbox to animate while hovering and clicking on the photobox
  &:hover ${StyledPhotoArticle}:nth-of-type(1) {
    rotate: 0deg;
    right: ${({ $photolist }) =>
      $photolist.find((photo) => photo.id === 1).rightWhileHover}%;
    top: ${({ $photolist }) =>
      $photolist.find((photo) => photo.id === 1).topWhileHover}%;
  }
  &:hover ${StyledStatBox}:nth-child(1) {
    opacity: ${({ $photolist }) =>
      $photolist.find((photo) => photo.id === 1 && "1")};
  }

  &:hover ${StyledPhotoArticle}:nth-of-type(2) {
    rotate: 0deg;
    right: ${({ $photolist }) =>
      $photolist.find((photo) => photo.id === 2).rightWhileHover}%;
    top: ${({ $photolist }) =>
      $photolist.find((photo) => photo.id === 2).topWhileHover}%;
  }
  &:hover ${StyledStatBox}:nth-child(2) {
    opacity: ${({ $photolist }) =>
      $photolist.find((photo) => photo.id === 2 && "1")};
  }

  &:hover ${StyledPhotoArticle}:nth-of-type(3) {
    rotate: 0deg;
    right: ${({ $photolist }) =>
      $photolist.find((photo) => photo.id === 3).rightWhileHover}%;
    top: ${({ $photolist }) =>
      $photolist.find((photo) => photo.id === 3).topWhileHover}%;
  }
  &:hover ${StyledStatBox}:nth-child(3) {
    opacity: ${({ $photolist }) =>
      $photolist.find((photo) => photo.id === 3 && "1")};
  }

  @media (max-width: 1024px) {
    &:active ${StyledPhotoArticle}:nth-of-type(1) {
      rotate: 0deg;
      right: ${({ $photolist }) =>
        $photolist.find((photo) => photo.id === 1).rightWhileHover}%;
      top: ${({ $photolist }) =>
        $photolist.find((photo) => photo.id === 1).topWhileHover}%;
    }
    &:active ${StyledStatBox}:nth-child(1) {
      opacity: ${({ $photolist }) =>
        $photolist.find((photo) => photo.id === 1 && "1")};
    }

    &:active ${StyledPhotoArticle}:nth-of-type(2) {
      rotate: 0deg;
      right: ${({ $photolist }) =>
        $photolist.find((photo) => photo.id === 2).rightWhileHover}%;
      top: ${({ $photolist }) =>
        $photolist.find((photo) => photo.id === 2).topWhileHover}%;
    }
    &:active ${StyledStatBox}:nth-child(2) {
      opacity: ${({ $photolist }) =>
        $photolist.find((photo) => photo.id === 2 && "1")};
    }

    &:active ${StyledPhotoArticle}:nth-of-type(3) {
      rotate: 0deg;
      right: ${({ $photolist }) =>
        $photolist.find((photo) => photo.id === 3).rightWhileHover}%;
      top: ${({ $photolist }) =>
        $photolist.find((photo) => photo.id === 3).topWhileHover}%;
    }

    &:active ${StyledStatBox}:nth-child(3) {
      opacity: ${({ $photolist }) =>
        $photolist.find((photo) => photo.id === 3 && "1")};
    }
  }
`;

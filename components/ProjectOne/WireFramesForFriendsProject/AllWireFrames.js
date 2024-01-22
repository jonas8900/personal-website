import Image from "next/image";
import { useState } from "react";
import { styled } from "styled-components";

export default function AllWireFrames() {
  //all images for the wireframes with positions to get the row effect
  const allImages = [
    {
      id: 1,
      src: "/WireFramesForFriends/Page-1.png",
      alt: "first page of my webapp `friends`",
      position: 10,
    },
    {
      id: 2,
      src: "/WireFramesForFriends/Page-2.png",
      alt: "second page of my webapp `friends`",
      position: 20,
    },
    {
      id: 3,
      src: "/WireFramesForFriends/Page-3.png",
      alt: "third page of my webapp `friends`",
      position: 30,
    },
    {
      id: 4,
      src: "/WireFramesForFriends/Page-4.png",
      alt: "fourth page of my webapp `friends`",
      position: 40,
    },
    {
      id: 5,
      src: "/WireFramesForFriends/Page-5.png",
      alt: "fifth page of my webapp `friends`",
      position: 50,
    },
    {
      id: 6,
      src: "/WireFramesForFriends/Page-6.png",
      alt: "sixth page of my webapp `friends`",
      position: 60,
    },
  ];

  const [imageList, setImageList] = useState(allImages);

  //onclick function to switch the position of the images in a constant order from 1 to 6
  function handleOnClickImage() {
    const newPhotoList = imageList.map((image) => {
      const positionSwitch = image.position === 10 ? 60 : image.position - 10;
      return { ...image, position: positionSwitch };
    });

    setImageList(newPhotoList);
  }
  return (
    <StyledWireFramesContainer onClick={handleOnClickImage}>
      {imageList.map((image) => (
        <StyledImage
          key={image.id}
          src={image.src}
          alt={image.alt}
          id={image.id}
          position={image.position}
          width={350}
          height={759}
          unoptimized
        />
      ))}
    </StyledWireFramesContainer>
  );
}

const StyledImage = styled(Image)`
  border-radius: 40px;
  position: absolute;
  top: 50%;
  left: ${({ position }) => position && `${position}%`};
  transform: translate(-50%, -50%);
  -webkit-box-shadow: var(--box-shadow-cards);
  box-shadow: var(--box-shadow-cards);
  z-index: ${({ position }) =>
    6 - position / 10}; // set the z-index from 6 to 1
  rotate: ${({ position }) => (position === 10 ? "0" : "-10deg")};
  scale: ${({ position }) => (position === 10 ? "1" : "0.9")};
  transition: left 0.5s ease-in-out, rotate 0.3s ease-in-out,
    scale 0.3s ease-in-out, filter 0.3s ease-in-out;
  filter: ${({ position }) =>
    position !== 10
      ? `blur(${position / 10 - 3}px)`
      : "blur(0)"}; //blur the last three images to create a depth effect

  @media (max-width: 1024px) {
    scale: 0.6;
    rotate: 0deg;
    top: 60%;
  }
`;

const StyledWireFramesContainer = styled.section`
  position: relative;
  width: 60%;
  height: 65rem;
  margin-left: 15rem;
  cursor: pointer;

  @media (max-width: 1024px) {
    margin-left: 2rem;
    margin-top: 8rem;
    &:active ${StyledImage} {
      scale: 0.6;
      rotate: 0deg;
    }
  }
`;

import Image from "next/image";
import styled from "styled-components";

export default function Photos({ alt, className, src }) {
  //photo for photobox in about me section
  return (
    <StyledPhoto className={className}>
      <StyledImage width={1920} height={1080} unoptimized alt={alt} src={src} />
    </StyledPhoto>
  );
}

const StyledPhoto = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: white;
  justify-self: center;
  align-self: center;
  width: 20rem;
  height: 26rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 1299px) {
    width: 15rem;
  }
`;

const StyledImage = styled(Image)`
  width: 90%;
  height: 90%;
  border: 1px solid #c2d7e3;
  object-fit: cover;
`;

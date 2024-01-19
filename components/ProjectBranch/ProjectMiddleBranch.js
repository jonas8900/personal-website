import { styled } from "styled-components";

export default function ProjectMiddleBranch({ className }) {
  // the branch in the middle of the project page
  return <StyledMiddleBranchDiv className={className} />;
}

const StyledMiddleBranchDiv = styled.div`
  position: absolute;
  width: 5px;
  z-index: 7;
  filter: drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.5));
`;

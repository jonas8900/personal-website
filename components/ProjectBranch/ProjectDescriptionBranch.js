import { styled } from "styled-components";

export default function ProjectDescriptionBranch({ className }) {
  //branch for the project description on the project page
  return <StyledProjectDescriptionBranchDiv className={className} />;
}

const StyledProjectDescriptionBranchDiv = styled.div`
  width: 20%;
  height: 5px;
  z-index: 9;
  filter: drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.5));
`;

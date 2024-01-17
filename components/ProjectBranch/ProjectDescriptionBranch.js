import styled from "styled-components";

export default function ProjectDescriptionBranch({ className }) {
  return <StyledProjectDescriptionBranchDiv className={className} />;
}

const StyledProjectDescriptionBranchDiv = styled.div`
  width: 20%;
  height: 5px;
  z-index: 9;
  filter: drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.5));
`;

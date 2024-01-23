import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styled from "styled-components";

export default function MailIconForNavbar() {
  return (
    <Link href="mailto:jonas.dally@hotmail.de">
      <StyledIcon icon={faEnvelope} />
    </Link>
  );
}

const StyledIcon = styled(FontAwesomeIcon)`
  width: 1.5rem;
  height: 2rem;
  color: var(--secondary-yellow);
  transition: all 0.3s ease-in-out;
  &:active {
    color: var(--primary-blue);
  }
  @media (min-width: 915px) {
    //for desktop devices
    &:hover {
      color: var(--primary-blue);
    }
  }
`;

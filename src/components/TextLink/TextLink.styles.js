import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  font-family: var(--font-buttons), sans-serif;
  color: var(--font-text-color-yellow);
  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 3px;
    color: var(--font-color-title);
  }
`;

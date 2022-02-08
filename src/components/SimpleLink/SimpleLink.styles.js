import styled from "styled-components";

export const Link = styled.a`
  font-family: var(--font-buttons), sans-serif;
  color: var(--font-text-color-yellow);
  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 3px;
    color: var(--font-color-title);
  }
`;

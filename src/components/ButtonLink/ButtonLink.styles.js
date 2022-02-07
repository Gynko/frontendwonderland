import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  border: none;
  border-radius: 5px;
  font-family: var(--font-buttons);
  color: var(--pages-background-color);
  white-space: pre;
  text-align: center;
  background-color: var(--font-color-title);
  padding: 0 0.4rem;
  margin-top: ${(props) => `var(--margin-top-${props.margintop})`};
  line-height: 2rem;
  &:hover {
    background-color: var(--font-text-color-yellow);
    transform: scale(1.1);
    transition: transform 0.25s, background-color 0.25s;
  }
  &:not(:hover) {
    background: var(--font-color-title);
    color: var(--pages-background-color);
    transform: scale(1);
    transition: transform 0.25s, background-color 0.25s;
  }
`;

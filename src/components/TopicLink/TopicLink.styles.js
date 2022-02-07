import { Link } from "react-router-dom";
import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  background-color: var(--topic-color-background);
  width: 20rem;
`;

export const LinkContainer = styled(Link)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  background-color: var(--topic-color-background);
  width: 20rem;
`;

export const StyledLink = styled.h2`
  white-space: pre;
  color: ${(props) => `var(--topic-color-${props.theme})`};
  font-family: var(--font-code), sans-serif;
  font-weight: 600;
  font-size: 1rem;
  padding-right: 0.4rem;
`;

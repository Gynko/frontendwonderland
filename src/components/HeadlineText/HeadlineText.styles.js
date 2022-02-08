import styled from "styled-components";

export const Text = styled.h3`
  font-family: var(--font-text-regular);
  color: var(--font-text-color-yellow);
  text-align: center;
  font-size: 1rem;
  white-space: pre;
  margin: 0;
  font-weight: 100;
  margin-top: ${(props) => `var(--margin-top-${props.margintop})`};
`;

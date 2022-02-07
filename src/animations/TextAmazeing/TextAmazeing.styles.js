import styled from "styled-components";

export const Text = styled.h2`
  font-family: var(--font-big-funny);
  text-align: center;
  color: var(--font-text-color-yellow);
  margin-top: ${(props) => `var(--margin-top-${props.margintop})`};

  @media screen and (min-width: 0em) {
    font-size: 2.5rem;
  }
`;

export const RedHyphen = styled.span`
  color: var(--font-text-color-accent);
`;

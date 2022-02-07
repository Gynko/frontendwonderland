import styled from "styled-components";

export const Title = styled.h2`
  font-family: var(--font-main-title), sans-serif;
  color: var(--font-color-title);
  margin: 0;
  padding: 0;
  text-align: center;
  margin-top: ${(props) => `var(--margin-top-${props.margintop})`};

  @media screen and (min-width: 0em) {
    font-size: 2.5rem;
    max-width: 14rem;
  }
`;

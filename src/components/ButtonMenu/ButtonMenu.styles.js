import styled from "styled-components";

export const Button = styled.button`
  font-family: var(--font-buttons), sans-serif;
  background-color: var(--color-button-menu-bg);
  color: ${(props) => `var(--color-button-menu-${props.theme})`};
  white-space: pre;
  line-height: 1.1rem;
  text-align: center;
  justify-self: stretch;
  margin: 0 0.3rem;
  border: 2px
    ${(props) =>
      props.active === true
        ? `var(--color-button-menu-${props.theme})`
        : `var(--color-button-menu-bg)`}
    solid;
  @media (min-width: 0em) {
    height: 2.8rem;
    font-size: 0.83rem;
  }
`;

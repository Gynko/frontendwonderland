import styled from "styled-components";

export const Container = styled.div`
  margin-left: 1rem;
`;

export const SliderBar = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 0.7rem;
  outline: none;
  opacity: 1;
  border: 2px #58404f solid;
  background-color: black;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 2rem;
    height: 2rem;
    background: var(--color-button-menu-yellow);
    cursor: pointer;
  }
`;

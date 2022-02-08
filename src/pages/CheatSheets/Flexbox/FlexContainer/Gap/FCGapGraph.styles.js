import styled from "styled-components";

export const Container = styled.div`
  background-color: #7b728f;
  width: var(--pages-mobile-elements-width);
  display: flex;
  flex-flow: row wrap;
  border-radius: 5px;
  margin-top: 0.4rem;
  height: 6rem;
  justify-content: flex-start;
  align-content: flex-start;
  row-gap: ${(props) => `${props.rowGap}px`};
  column-gap: ${(props) => `${props.columnGap}px`};
`;

export const Items = styled.div`
  background-color: #f4ae44;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Bungee", cursive;
  text-align: center;
  border: 1px black solid;
  line-height: 1rem;
  width: calc((var(--pages-mobile-elements-width) / 3) - 8px);
  height: calc(2rem - 8px);
`;

export const Ghost = styled.div`
  opacity: 0;
`;

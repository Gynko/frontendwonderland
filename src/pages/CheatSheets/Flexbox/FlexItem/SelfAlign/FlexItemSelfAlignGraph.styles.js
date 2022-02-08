import styled from "styled-components";

export const Container = styled.div`
  background-color: #7b728f;
  width: var(--pages-mobile-elements-width);
  display: flex;
  flex-flow: row wrap;
  border-radius: 5px;
  margin-top: 0.4rem;
  height: 6rem;
  justify-content: center;
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
  width: calc((var(--pages-mobile-elements-width) / 4));
`;

export const Item1 = styled(Items)`
  background-color: var(--color-button-menu-blue);
  height: 3rem;
`;
export const Item2 = styled(Items)`
  background-color: var(--color-button-menu-blue);
  height: 2rem;
`;
export const Item3 = styled(Items)`
  background-color: var(--color-button-menu-yellow);
  min-height: 4rem;
  align-self: ${(props) => props.alignSelf};
`;
export const Item4 = styled(Items)`
  background-color: var(--color-button-menu-blue);
  height: 1.5rem;
`;

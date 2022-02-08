import styled from "styled-components";

export const Container = styled.div`
  background-color: #7b728f;
  display: flex;
  border-radius: 5px;
  margin-top: 0.4rem;
  width: var(--pages-mobile-elements-width);
  height: 5rem;
`;

export const Items = styled.div`
  height: 1.5rem;
  background-color: #f4ae44;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-family: "Bungee", cursive;
  text-align: center;
  border: 1px black solid;
  white-space: pre;
  line-height: 1.2rem;
  height: 5rem;
  width: calc(var(--pages-mobile-elements-width) / 3);
`;

export const Item1 = styled(Items)`
  order: ${(props) => props.box1};
  background-color: var(--color-button-menu-green);
`;
export const Item2 = styled(Items)`
  order: ${(props) => props.box2};
  background-color: var(--color-button-menu-yellow);
`;
export const Item3 = styled(Items)`
  order: ${(props) => props.box3};
  background-color: var(--color-button-menu-redish);
`;

export const Span = styled.span`
  font-size: 2rem;
  line-height: 2.5rem;
`;

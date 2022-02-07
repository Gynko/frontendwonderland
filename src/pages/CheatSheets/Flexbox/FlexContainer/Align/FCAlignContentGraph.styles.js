import styled from "styled-components";

export const Container = styled.div`
  background-color: #7b728f;
  width: var(--pages-mobile-elements-width);
  display: flex;
  flex-flow: row wrap;
  border-radius: 5px;
  margin-top: 0.4rem;
  height: 4rem;
  align-content: ${(props) => props.property};
`;

const Items = styled.div`
  background-color: #f4ae44;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Bungee", cursive;
  text-align: center;
  border: 1px black solid;
  line-height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item1 = styled(Items)`
  width: 3rem;
`;

export const Item2 = styled(Items)`
  width: 2.5rem;
`;

export const Item3 = styled(Items)`
  width: 6rem;
`;
export const Item4 = styled(Items)`
  width: 2rem;
`;
export const Item5 = styled(Items)`
  width: 6rem;
`;
export const Item6 = styled(Items)`
  width: 4rem;
`;
export const Item7 = styled(Items)`
  width: 8rem;
`;

import styled from "styled-components";

export const Container = styled.div`
  background-color: #7b728f;
  width: var(--pages-mobile-elements-width);
  display: flex;
  border-radius: 5px;
  margin-top: 0.4rem;
  height: 6rem;
  align-items: ${(props) => props.property};
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
  width: 5rem;
`;

export const Item1 = styled(Items)`
  min-height: 1.5rem;
`;

export const Item2 = styled(Items)`
  min-height: 3.5rem;
`;

export const Item3 = styled(Items)`
  min-height: 3rem;
`;
export const Item4 = styled(Items)`
  min-height: 4.2rem;
`;

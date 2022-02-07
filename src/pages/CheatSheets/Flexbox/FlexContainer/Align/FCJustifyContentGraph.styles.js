import styled from "styled-components";

export const Container = styled.div`
  background-color: #7b728f;
  width: var(--pages-mobile-elements-width);
  display: flex;
  flex-flow: ${(props) => props.orientation} ${(props) => props.wrapping};
  border-radius: 5px;
  margin-top: 0.4rem;
  height: 4rem;
  justify-content: ${(props) => props.property};
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
`;

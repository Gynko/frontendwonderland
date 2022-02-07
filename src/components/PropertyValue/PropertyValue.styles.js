import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--color-button-menu-pink);
  height: 2.3rem;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const Label = styled.div`
  font-family: var(--font-buttons);
  white-space: pre;
  line-height: 0.9rem;
  min-width: 5rem;
  color: white;
  margin-left: 0.3rem;
  padding-top: 0.1rem;
`;

export const Value = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: white;
  border: none;
  width: 2.6rem;
  height: 1.5rem;
  font-family: var(--font-buttons);
  line-height: 1.7rem;
  margin: 0 0.5rem;
`;

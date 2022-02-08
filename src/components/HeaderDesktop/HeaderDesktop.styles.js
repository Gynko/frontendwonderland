import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-flow: column nowrap;
  width: 100vw;
  align-items: center;
  justify-content: center;
  height: var(--height-header-desktop);
  background-color: var(--header-background-color);
  @media (min-width: 0em) {
    display: none;
  }
  @media (min-width: 40em) {
    display: flex;
  }
`;
export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;
export const Ul = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 25rem;
  position: fixed;
  margin: auto 0;
  padding: 0;
`;

export const Contact = styled.div`
  margin-left: auto;
  padding-right: 1rem;
`;

export const Li = styled.li``;

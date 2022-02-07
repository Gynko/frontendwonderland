import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: var(--header-background-color);
  width: 100vw;
  height: var(--height-header-mobile);
`;
export const Header = styled.header`
  width: 100%;
  height: 100%;
`;
export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
export const Ul = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  max-width: var(--pages-mobile-elements-width);
`;
export const Li = styled.li`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;
export const LinkTitle = styled(Link)`
  font-family: var(--font-main-title), sans-serif;
  color: var(--font-color-title);
  font-size: var(--font-size-header-mobile-title);
  text-align: center;

  max-width: 8rem;
`;

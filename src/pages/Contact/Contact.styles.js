import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  @media (min-width: 0em) {
    min-height: var(--pages-mobile-min-height);
    top: var(--height-header-mobile);
  }
  @media (min-width: 40em) {
    min-height: var(--pages-desktop-min-height);
    top: var(--height-header-desktop);
  }
`;

export const Title = styled.h2`
  font-family: var(--font-main-title), sans-serif;
  color: var(--font-color-title);
  font-size: 2.5rem;
`;

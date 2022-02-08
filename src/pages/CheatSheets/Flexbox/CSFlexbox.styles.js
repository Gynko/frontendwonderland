import styled from "styled-components";

export const PageContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: var(--pages-mobile-min-height);
  @media (min-width: 0em) {
    min-height: var(--pages-mobile-min-height);
    top: var(--height-header-mobile);
  }
  @media (min-width: 40em) {
    min-height: var(--pages-desktop-min-height);
    top: var(--height-header-desktop);
  }
`;
export const TerminologySvg = styled.div`
  margin-top: 0.4rem;
  width: 100%;
  max-width: 31rem;
`;

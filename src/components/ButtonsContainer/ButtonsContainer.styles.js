import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  width: var(--pages-mobile-elements-width);
  margin-top: ${(props) => props.margintop};
  margin-bottom: ${(props) => props.marginbottom};
  justify-items: stretch;
  row-gap: 0.4rem;
`;

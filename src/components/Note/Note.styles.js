import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--pages-mobile-elements-width);
`;
export const NoteParagraph = styled.p`
  max-width: calc(var(--pages-mobile-elements-width) - 1rem);
  padding: 0;
  font-family: var(--font-text-regular), sans-serif;
  color: var(--font-text-color-white);
  margin-top: ${(props) => `${props.margintop}`};
  margin-bottom: ${(props) => `${props.marginbottom}`};
  text-align: ${(props) => props.align};
`;

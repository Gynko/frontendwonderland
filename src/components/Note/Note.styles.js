import styled from "styled-components";

export const NoteParagraph = styled.p`
  width: var(--pages-mobile-elements-width);
  font-family: var(--font-text-regular), sans-serif;
  color: var(--font-text-color-white);
  margin-top: ${(props) => `${props.margintop}`};
  margin-bottom: ${(props) => `${props.marginbottom}`};
`;

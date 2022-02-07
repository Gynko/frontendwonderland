import styled from "styled-components";

export const Container = styled.div`
  background-color: #7b728f;
  width: var(--pages-mobile-elements-width);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-radius: 5px;
  margin-top: 0.4rem;
  justify-content: center;
`;

export const Paragraph = styled.p`
  font-family: var(--font-text-regular);
  color: black;
`;

export const ChangingSpan = styled.span`
  display: ${(props) => (props.display === "flex" ? "flex" : "inline-flex")};
  border: 3px #3d3640 solid;
  flex-direction: column;
`;

export const SpanUp = styled.span`
  background-color: #c3ade9;
`;
export const SpanDown = styled.span`
  background-color: #a4c4dd;
`;

import styled from "styled-components";

export const Axis = styled.g`
  opacity: ${(props) => (props.axis === "axis" ? 1 : 0)};
`;

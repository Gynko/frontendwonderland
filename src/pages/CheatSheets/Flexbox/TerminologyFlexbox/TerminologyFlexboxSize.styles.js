import styled from "styled-components";

export const Size = styled.g`
  opacity: ${(props) => (props.size === "size" ? 1 : 0)};
`;

import styled from "styled-components";

export const Name = styled.g`
  opacity: ${(props) => (props.name === "name" ? 1 : 0)};
`;

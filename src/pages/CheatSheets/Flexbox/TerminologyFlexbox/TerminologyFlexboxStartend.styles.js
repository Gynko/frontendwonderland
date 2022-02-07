import styled from "styled-components";

export const StartEnd = styled.g`
  opacity: ${(props) => (props.startend === "startend" ? 1 : 0)};
`;

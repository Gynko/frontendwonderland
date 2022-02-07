import styled from "styled-components";

export const ContainerRadio = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  align-content: center;
  height: 5rem;
  width: 4.5rem;
  background-color: ${(props) =>
    props.selected === true
      ? `var(--topic-color-bg-${props.theme})`
      : "#121112"};
  border-radius: 6px;
  z-index: 2;
`;

export const InputRadio = styled.input`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const Label = styled.label`
  font-family: var(--font-buttons), sans-serif;
  white-space: pre;
  font-size: 0.8rem;
  text-align: center;
  line-height: 1rem;
  color: ${(props) => `var(--topic-color-${props.theme})`};
  filter: ${(props) =>
    props.selected === true ? "brightness(2.7)" : "brightness(1)"};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem;
  z-index: 2;
`;

export const BoxShadow = styled.div`
  opacity: 0;
  top: -1px;
  position: absolute;
  width: calc(100% + 1px);
  height: calc(100% + 1px);
  background-color: ${(props) =>
    props.selected === true
      ? `var(--topic-color-bg-${props.theme})`
      : "transparent"};
  border: 2px ${(props) => `var(--topic-color-${props.theme})`} solid;
  border-radius: 6px;
  box-shadow: 0px 0px 25px 0px ${(props) => `var(--topic-color-${props.theme})`};
  z-index: -1;
`;

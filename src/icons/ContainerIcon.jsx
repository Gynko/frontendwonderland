import { Container } from "./ContainerIcon.styles.js";

function ContainerIcon({ children, ...otherProps }) {
  return <Container {...otherProps}>{children}</Container>;
}

export default ContainerIcon;

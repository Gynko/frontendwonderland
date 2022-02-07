import { Container } from "./ButtonsContainer.styles.js";

function ButtonsContainer({ columns, margintop, marginbottom, children }) {
  return (
    <Container
      margintop={margintop}
      marginbottom={marginbottom}
      columns={columns}
    >
      {children}
    </Container>
  );
}

export default ButtonsContainer;

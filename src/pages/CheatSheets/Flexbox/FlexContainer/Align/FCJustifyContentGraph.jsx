import { Container, Items } from "./FCJustifyContentGraph.styles";

function FCJustifyContentGraph({ property }) {
  return (
    <Container property={property}>
      <Items>item 1</Items>
      <Items>item 2</Items>
      <Items>item 3</Items>
    </Container>
  );
}

export default FCJustifyContentGraph;

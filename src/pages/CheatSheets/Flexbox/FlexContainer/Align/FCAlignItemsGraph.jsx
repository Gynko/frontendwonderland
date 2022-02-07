import {
  Container,
  Item1,
  Item2,
  Item3,
  Item4,
} from "./FCAlignItemsGraph.styles";

function FCAlignItemsGraph({ property }) {
  return (
    <Container property={property}>
      <Item1>item 1</Item1>
      <Item2>item 2</Item2>
      <Item3>item 3</Item3>
      <Item3>item 3</Item3>
      <Item4>item 4</Item4>
    </Container>
  );
}

export default FCAlignItemsGraph;

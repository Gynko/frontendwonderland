import {
  Container,
  Item1,
  Item2,
  Item3,
  Item4,
} from "./FlexItemSelfAlignGraph.styles";

function FlexItemSelfAlignGraph({ alignSelf }) {
  return (
    <Container>
      <Item1>1</Item1>
      <Item2>2</Item2>
      <Item3 alignSelf={alignSelf}>3</Item3>
      <Item4>4</Item4>
    </Container>
  );
}

export default FlexItemSelfAlignGraph;

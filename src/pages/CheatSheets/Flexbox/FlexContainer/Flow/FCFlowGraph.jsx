import { Container, Items } from "./FCFlowGraph.styled.js";

function FCFlowGraph({ orientation, wrapping }) {
  return (
    <Container orientation={orientation} wrapping={wrapping}>
      <Items>1</Items>
      <Items>2</Items>
      <Items>3</Items>
      <Items>4</Items>
      <Items>5</Items>
      <Items>6</Items>
    </Container>
  );
}

export default FCFlowGraph;

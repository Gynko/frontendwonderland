import {
  Container,
  Item1,
  Item2,
  Item3,
  Span,
} from "./FlexItemOrderGraph.styles";

function FlexItemOrderGraph({ box1, box2, box3 }) {
  return (
    <Container>
      <Item1 box1={box1}>
        <Span>1️⃣</Span>
        {`order:${box1}`}
      </Item1>
      <Item2 box2={box2}>
        <Span>2️⃣</Span>
        {`order:${box2}`}
      </Item2>
      <Item3 box3={box3}>
        <Span>3️⃣</Span>
        {`Order:${box3}`}
      </Item3>
    </Container>
  );
}

export default FlexItemOrderGraph;

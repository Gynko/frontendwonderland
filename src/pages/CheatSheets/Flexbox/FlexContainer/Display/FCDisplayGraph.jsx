import {
  Container,
  Paragraph,
  ChangingSpan,
  SpanUp,
  SpanDown,
} from "./FCDisplayGraph.styled";

function FCDisplayGraph({ display }) {
  function textRender() {
    if (display === "flex") return "a block element";
    else if (display === "inline-flex") return "an inline element";
  }
  return (
    <Container>
      {" "}
      <Paragraph>
        With the flex property set to "{display}" this div{" "}
        <ChangingSpan display={display}>
          <SpanUp>item1</SpanUp>
          <SpanDown>item2</SpanDown>
        </ChangingSpan>{" "}
        behaves as {textRender()}.
      </Paragraph>
    </Container>
  );
}

export default FCDisplayGraph;

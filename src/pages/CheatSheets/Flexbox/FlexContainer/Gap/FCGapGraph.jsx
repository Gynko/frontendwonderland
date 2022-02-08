import { Container, Items } from "./FCGapGraph.styles";

function FCGapGraph({ rowGap, columnGap }) {
  return (
    <Container rowGap={rowGap} columnGap={columnGap}>
      <Items>1</Items>
      <Items>2</Items>
      <Items>3</Items>
      <Items>4</Items>
      <Items>5</Items>
      <Items>6</Items>
      <Items>7</Items>
      <Items>8</Items>
      <Items>9</Items>
    </Container>
  );
}

export default FCGapGraph;

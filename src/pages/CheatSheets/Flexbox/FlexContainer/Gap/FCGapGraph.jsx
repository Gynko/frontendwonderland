import { Container, Items, Ghost } from "./FCGapGraph.styles";

/* 
The ghost element is a hack to prevent react for sometimes not updating (at least on IOS)
Currently under investigation on Stack overflow :)
https://stackoverflow.com/questions/70760855/react-not-rendering-component-with-inline-styling-on-ios
*/
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
      <Ghost>{`${rowGap}${columnGap}`}</Ghost>
    </Container>
  );
}

export default FCGapGraph;

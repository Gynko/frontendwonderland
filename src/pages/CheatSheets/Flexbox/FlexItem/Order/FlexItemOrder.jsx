import { useState } from "react";
import PropertyValueSlider from "../../../../../components/PropertyValueSlider/PropertyValueSlider";
import FlexItemOrderGraph from "./FlexItemOrderGraph";

function FlexItemOrder() {
  const [box1, setBox1] = useState(0);
  const [box2, setBox2] = useState(0);
  const [box3, setBox3] = useState(0);

  function onBox1Change(event) {
    setBox1(event.target.value);
  }
  function onBox2Change(event) {
    setBox2(event.target.value);
  }
  function onBox3Change(event) {
    setBox3(event.target.value);
  }

  return (
    <>
      <PropertyValueSlider
        id="order 1"
        label="order 1"
        marginTop="0.4rem"
        min={-3}
        max={3}
        value={box1}
        unit=""
        onChange={onBox1Change}
        color="green"
      />
      <PropertyValueSlider
        id="row-gap"
        label="order 2"
        marginTop="0.4rem"
        min={-3}
        max={3}
        value={box2}
        unit=""
        onChange={onBox2Change}
        color="yellow"
      />
      <PropertyValueSlider
        id="column-gap"
        label="order 3"
        marginTop="0.4rem"
        min={-3}
        max={3}
        value={box3}
        unit=""
        onChange={onBox3Change}
        color="redish"
      />
      <FlexItemOrderGraph box1={box1} box2={box2} box3={box3} />
    </>
  );
}

export default FlexItemOrder;

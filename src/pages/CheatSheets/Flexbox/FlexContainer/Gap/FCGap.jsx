import { useState } from "react";
import Note from "../../../../../components/Note/Note";
import PropertyValueSlider from "../../../../../components/PropertyValueSlider/PropertyValueSlider";
import FCGapGraph from "./FCGapGraph";

function FCGap() {
  const [gap, setGap] = useState(0);
  const [rowGap, setRowGap] = useState(0);
  const [columnGap, setColumnGap] = useState(0);

  function onGapChange(event) {
    setGap(event.target.value);
    setRowGap(event.target.value);
    setColumnGap(event.target.value);
  }
  function onRowChange(event) {
    setRowGap(event.target.value);
  }
  function onColumnChange(event) {
    setColumnGap(event.target.value);
  }

  return (
    <>
      <Note margintop="0.6rem">⚠️Does not work on older IOS devices</Note>
      <PropertyValueSlider
        id="gap"
        label="gap"
        marginTop="0.4rem"
        name="gapValue"
        min={0}
        max={12}
        value={gap}
        unit="px"
        onChange={onGapChange}
        color="yellow"
      />
      <PropertyValueSlider
        id="row-gap"
        label={`row-\ngap`}
        marginTop="0.4rem"
        name="rowGapValue"
        min={0}
        max={12}
        value={rowGap}
        unit="px"
        onChange={onRowChange}
        color="yellow"
      />
      <PropertyValueSlider
        id="column-gap"
        label={`column-\ngap`}
        marginTop="0.4rem"
        name="columnGapValue"
        min={0}
        max={12}
        value={columnGap}
        unit="px"
        onChange={onColumnChange}
        color="yellow"
      />
      <FCGapGraph rowGap={rowGap} columnGap={columnGap} />
    </>
  );
}

export default FCGap;

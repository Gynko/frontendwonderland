import { useState } from "react";
import PropertyValueSlider from "../../../../../components/PropertyValueSlider/PropertyValueSlider";

function FCGap() {
  const [gap, setGap] = useState({
    gapValue: 0,
    rowGapValue: 0,
    columnGapValue: 0,
  });
  const { gapValue, rowGapValue, columnGapValue } = gap;

  function onPropertyChange(event) {
    setGap({ ...gap, [event.target.name]: event.target.value });
  }

  return (
    <>
      <PropertyValueSlider
        id="gap"
        label="gap"
        marginTop="0.4rem"
        name="gap"
        min={0}
        max={12}
        value={gapValue}
        unit="px"
        onChange={onPropertyChange}
      />
      <PropertyValueSlider
        id="row-gap"
        label={`row-\ngap`}
        marginTop="0.4rem"
        name="row-gap"
        min={0}
        max={12}
        value={rowGapValue}
        unit="px"
        onChange={onPropertyChange}
      />
      <PropertyValueSlider
        id="column-gap"
        label={`column-\ngap`}
        marginTop="0.4rem"
        name="column-gap"
        min={0}
        max={12}
        value={columnGapValue}
        unit="px"
        onChange={onPropertyChange}
      />
    </>
  );
}

export default FCGap;

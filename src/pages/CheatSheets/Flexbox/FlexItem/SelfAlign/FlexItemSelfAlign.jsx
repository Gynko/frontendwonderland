import Menu from "../../../../../components/Menu/Menu";
import { useState } from "react";
import FlexItemSelfAlignGraph from "./FlexItemSelfAlignGraph";

function FlexItemSelfAlign() {
  const [property, setProperty] = useState("flex-start");

  function onPropertyChange(event) {
    setProperty(event.target.value);
  }
  return (
    <>
      <Menu
        margintop="1rem"
        columns={3}
        onClick={onPropertyChange}
        options={[
          {
            label: `auto`,
            value: "auto",
            theme: "pink",
            active: property,
            name: "alignself",
          },
          {
            label: `baseline`,
            value: "baseline",
            theme: "pink",
            active: property,
            name: "alignself",
          },
          {
            label: `stretch`,
            value: "stretch",
            theme: "pink",
            active: property,
            name: "alignself",
          },
          {
            label: `flex-\nstart`,
            value: "flex-start",
            theme: "pink",
            active: property,
            name: "alignself",
          },
          {
            label: `center`,
            value: "center",
            theme: "pink",
            active: property,
            name: "alignself",
          },
          {
            label: `flex-\nend`,
            value: "flex-end",
            theme: "pink",
            active: property,
            name: "alignself",
          },
        ]}
      />
      <FlexItemSelfAlignGraph alignSelf={property} />
    </>
  );
}

export default FlexItemSelfAlign;

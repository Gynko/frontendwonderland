import { useState } from "react";
import Menu from "../../../../../components/Menu/Menu";
import Note from "../../../../../components/Note/Note";
import FCFlowGraph from "./FCFlowGraph";

function FCFlow() {
  const [menu, setMenu] = useState(
    { orientation: "row" },
    { wrapping: "nowrap" }
  );
  const { orientation, wrapping } = menu;

  function onMenuChange(event) {
    setMenu({ ...menu, [event.target.name]: event.target.value });
  }

  return (
    <>
      <Menu
        margintop="0.4rem"
        columns={2}
        onClick={onMenuChange}
        options={[
          {
            label: `row`,
            value: "row",
            theme: "yellow",
            active: orientation,
            name: "orientation",
          },
          {
            label: `row-\nreverse`,
            value: "row-reverse",
            theme: "yellow",
            active: orientation,
            name: "orientation",
          },
          {
            label: `column`,
            value: "column",
            theme: "yellow",
            active: orientation,
            name: "orientation",
          },
          {
            label: `column-\nreverse`,
            value: "column-reverse",
            theme: "yellow",
            active: orientation,
            name: "orientation",
          },
        ]}
      />
      <Menu
        margintop="0.4rem"
        columns={3}
        onClick={onMenuChange}
        options={[
          {
            label: `nowrap`,
            value: "nowrap",
            theme: "yellow",
            active: wrapping,
            name: "wrapping",
          },
          {
            label: `wrap`,
            value: "wrap",
            theme: "yellow",
            active: wrapping,
            name: "wrapping",
          },
          {
            label: `wrap-reverse`,
            value: "wrap-reverse",
            theme: "yellow",
            active: wrapping,
            name: "wrapping",
          },
        ]}
      />
      <FCFlowGraph orientation={orientation} wrapping={wrapping} />
      <Note margintop="0.4rem">
        Please note that setting properties like max-height, min-height and such
        on the container and/or the items also greatly affects the resulting
        behaviour.
      </Note>
    </>
  );
}

export default FCFlow;

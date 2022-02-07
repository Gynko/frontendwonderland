import { useState } from "react";
import Menu from "../../../../../components/Menu/Menu";
import FCDisplayGraph from "./FCDisplayGraph";
function FCDisplay() {
  const [menu, setMenu] = useState({ display: "flex" });
  const { display } = menu;

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
            label: `flex`,
            value: "flex",
            theme: "yellow",
            active: display,
            name: "display",
          },
          {
            label: `inline-flex`,
            value: "inline-flex",
            theme: "yellow",
            active: display,
            name: "display",
          },
        ]}
      />
      <FCDisplayGraph display={display} />
    </>
  );
}

export default FCDisplay;

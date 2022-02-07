import { useState } from "react";
import Menu from "../../../../../components/Menu/Menu";
import FCJustifyContentGraph from "./FCJustifyContentGraph";

function FCAlign() {
  const [menu, setMenu] = useState("default");
  const [property, setProperty] = useState("flex-start");
  function onMenuChange(event) {
    if (menu === event.target.value) setMenu("default");
    else setMenu(event.target.value);
  }
  function onPropertyChange(event) {
    setProperty(event.target.value);
  }
  return (
    <>
      <Menu
        margintop="0.4rem"
        columns={3}
        onClick={onMenuChange}
        options={[
          {
            label: `justify-\ncontent`,
            value: "justify-content",
            theme: "yellow",
            active: menu,
            name: "justifycontent",
          },
          {
            label: `align-\nitems`,
            value: "align-items",
            theme: "yellow",
            active: menu,
            name: "justifycontent",
          },
          {
            label: `align-\ncontent`,
            value: "align-content",
            theme: "yellow",
            active: menu,
            name: "justifycontent",
          },
        ]}
      />
      {menu === "justify-content" ? (
        <>
          <Menu
            margintop="0.4rem"
            columns={3}
            onClick={onPropertyChange}
            options={[
              {
                label: `flex-\nstart`,
                value: "flex-start",
                theme: "pink",
                active: property,
                name: "justifycontent",
              },
              {
                label: `center`,
                value: "center",
                theme: "pink",
                active: property,
                name: "justifycontent",
              },
              {
                label: `flex-\nend`,
                value: "flex-end",
                theme: "pink",
                active: property,
                name: "justifycontent",
              },
              {
                label: `stretch`,
                value: "stretch",
                theme: "pink",
                active: property,
                name: "justifycontent",
              },
              {
                label: `space-\naround`,
                value: "space-around",
                theme: "pink",
                active: property,
                name: "justifycontent",
              },
              {
                label: `space-\nbetween`,
                value: "space-between",
                theme: "pink",
                active: property,
                name: "justifycontent",
              },
            ]}
          />
          <FCJustifyContentGraph property={property} />
        </>
      ) : null}
    </>
  );
}

export default FCAlign;

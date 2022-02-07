import PageTitle from "../../../components/PageTitle/PageTitle";
import { PageContainer, TerminologySvg } from "./CSFlexbox.styles.js";
import { useState } from "react";
import Menu from "../../../components/Menu/Menu";
import TerminologyFlexbox from "./TerminologyFlexbox/TerminologyFlexbox";
import FlexContainer from "./FlexContainer/FlexContainer";

function CSFlexbox() {
  const [menu, setMenu] = useState(
    { terminologyProperty: "default" },
    { itemContainer: "default" },
    { name: "default" },
    { axis: "default" },
    { size: "default" },
    { startend: "default" }
  );
  const { terminologyProperty, itemContainer, name, axis, size, startend } =
    menu;

  function onMenuChange(event) {
    if (menu[event.target.name] === event.target.value)
      setMenu({ ...menu, [event.target.name]: "default" });
    else setMenu({ ...menu, [event.target.name]: event.target.value });
  }

  return (
    <PageContainer>
      <PageTitle title="Flexbox Cheat Sheet" />
      <Menu
        margintop="0.4rem"
        columns={2}
        onClick={onMenuChange}
        options={[
          {
            label: `terminology`,
            value: "terminology",
            theme: "yellow",
            active: terminologyProperty,
            name: "terminologyProperty",
          },
          {
            label: `properties`,
            value: "properties",
            theme: "yellow",
            active: terminologyProperty,
            name: "terminologyProperty",
          },
        ]}
      />
      {terminologyProperty === "terminology" ? (
        <>
          <Menu
            margintop="0.4rem"
            columns={4}
            onClick={onMenuChange}
            options={[
              {
                label: `name`,
                value: "name",
                theme: "white",
                active: name,
                name: "name",
              },
              {
                label: `axis`,
                value: "axis",
                theme: "redish",
                active: axis,
                name: "axis",
              },
              {
                label: `size`,
                value: "size",
                theme: "green",
                active: size,
                name: "size",
              },
              {
                label: `start\nend`,
                value: "startend",
                theme: "blue",
                active: startend,
                name: "startend",
              },
            ]}
          />
          <TerminologySvg>
            <TerminologyFlexbox terminology={menu} />
          </TerminologySvg>
        </>
      ) : null}
      {terminologyProperty === "properties" ? (
        <Menu
          margintop="0.4rem"
          columns={2}
          onClick={onMenuChange}
          options={[
            {
              label: `flex-\ncontainer`,
              value: "flex-container",
              theme: "yellow",
              active: itemContainer,
              name: "itemContainer",
            },
            {
              label: `flex-\nitem`,
              value: "flex-item",
              theme: "yellow",
              active: itemContainer,
              name: "itemContainer",
            },
          ]}
        />
      ) : null}
      {itemContainer === "flex-container" &&
      terminologyProperty === "properties" ? (
        <FlexContainer menu={menu} />
      ) : null}
    </PageContainer>
  );
}

export default CSFlexbox;

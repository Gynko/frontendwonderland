import ButtonsContainer from "../../../../components/ButtonsContainer/ButtonsContainer";
import RadioButtonsIcon from "../../../../components/RadioButtonsIcon/RadioButtonsIcon";
import { useState } from "react";
import FCDisplay from "./Display/FCDisplay";
import FCFlow from "./Flow/FCFlow";
import FCAlign from "./Align/FCAlign";

function FlexContainer({ menu }) {
  const [topic, setTopic] = useState("default");
  const { terminologyProperty, itemContainer } = menu;
  function onTopicChange(event) {
    if (topic === event.target.value) setTopic(undefined);
    else setTopic(event.target.value);
  }
  return (
    <>
      <ButtonsContainer columns="4" margintop="0.4rem">
        <RadioButtonsIcon
          name="topic"
          onChange={onTopicChange}
          active={topic}
          options={[
            {
              value: "display",
              label: "display",
              theme: "default",
              icon: "display",
            },
            { value: "flow", label: "flow", theme: "default", icon: "flow" },
            { value: "align", label: "align", theme: "default", icon: "align" },
            { value: "gap", label: "gap", theme: "default", icon: "gap" },
          ]}
        />
      </ButtonsContainer>
      {topic === "display" &&
      terminologyProperty === "properties" &&
      itemContainer === "flex-container" ? (
        <FCDisplay />
      ) : null}
      {topic === "flow" &&
      terminologyProperty === "properties" &&
      itemContainer === "flex-container" ? (
        <FCFlow />
      ) : null}
      {topic === "align" &&
      terminologyProperty === "properties" &&
      itemContainer === "flex-container" ? (
        <FCAlign />
      ) : null}
    </>
  );
}

export default FlexContainer;

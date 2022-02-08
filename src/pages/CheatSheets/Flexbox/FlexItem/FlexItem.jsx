import ButtonsContainer from "../../../../components/ButtonsContainer/ButtonsContainer";
import RadioButtonsIcon from "../../../../components/RadioButtonsIcon/RadioButtonsIcon";
import { useState } from "react";
import FlexItemOrder from "./Order/FlexItemOrder";
import FlexItemGrow from "./Grow/FlexItemGrow";
import FlexItemSelfAlign from "./SelfAlign/FlexItemSelfAlign";

function FlexItem({ menu }) {
  const [topic, setTopic] = useState("default");
  const { terminologyProperty, itemContainer } = menu;
  function onTopicChange(event) {
    if (topic === event.target.value) setTopic(undefined);
    else setTopic(event.target.value);
  }
  return (
    <>
      <ButtonsContainer columns="3" margintop="0.4rem">
        <RadioButtonsIcon
          name="topic"
          onChange={onTopicChange}
          active={topic}
          options={[
            {
              value: "order",
              label: "order",
              theme: "default",
              icon: "order",
            },
            {
              value: "grow",
              label: "grow",
              theme: "default",
              icon: "grow",
            },
            {
              value: "align",
              label: "align",
              theme: "default",
              icon: "selfalign",
            },
          ]}
        />
      </ButtonsContainer>
      {topic === "order" &&
      terminologyProperty === "properties" &&
      itemContainer === "flex-item" ? (
        <FlexItemOrder />
      ) : null}
      {topic === "grow" &&
      terminologyProperty === "properties" &&
      itemContainer === "flex-item" ? (
        <FlexItemGrow />
      ) : null}
      {topic === "align" &&
      terminologyProperty === "properties" &&
      itemContainer === "flex-item" ? (
        <FlexItemSelfAlign />
      ) : null}
    </>
  );
}

export default FlexItem;

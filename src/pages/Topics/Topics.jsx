import { useState } from "react";

import { PageContainer } from "./Topics.styles.js";
import RadioButtonsIcon from "../../components/RadioButtonsIcon/RadioButtonsIcon";
import Title from "../../components/Title/Title";
import ButtonsContainer from "../../components/ButtonsContainer/ButtonsContainer";

import { releasedTopics, unreleasedTopics } from "./TopicsContent.js";
import TopicsContainer from "../../components/TopicsContainer/TopicsContainer";

function Topics() {
  const [topic, setTopic] = useState(undefined);

  function onTopicChange(event) {
    if (topic === event.target.value) setTopic(undefined);
    else setTopic(event.target.value);
  }
  return (
    <PageContainer>
      <Title>Released:</Title>
      <TopicsContainer topiclist={releasedTopics} />
      <Title>Incoming:</Title>
      <ButtonsContainer marginbottom="1.3rem" columns="4">
        <RadioButtonsIcon
          name="topic"
          onChange={onTopicChange}
          active={topic}
          options={[
            { value: "html", label: "html", theme: "html", icon: "html" },
            { value: "css", label: "css", theme: "css", icon: "css" },
            { value: "js", label: "js", theme: "js", icon: "js" },
            { value: "react", label: "react", theme: "react", icon: "react" },
          ]}
        />
      </ButtonsContainer>
      <TopicsContainer topiclist={unreleasedTopics} filter={topic} />
    </PageContainer>
  );
}

export default Topics;

import TopicLink from "../TopicLink/TopicLink";
import { Container } from "./TopicsContainer.styles.js";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function TopicsContainer({ topiclist, filter }) {
  const refs = useRef([]);
  refs.current = [];

  const getRefs = (element) => {
    if (element && !refs.current.includes(element)) {
      refs.current.push(element);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline();
    gsap.set(refs.current, {
      x: 100,

      rotation: -25,
      opacity: 0,
      transformOrigin: "0 0",
    });
    tl.to(refs.current, {
      duration: 0.5,
      x: 0,
      y: 0,
      rotation: 0,
      opacity: 1,
      ease: "power2.out",
      stagger: 0.09,
    });
  });

  return (
    <Container>
      {topiclist.map((item) => {
        if (topiclist.length > 0 && item.released === true) {
          return (
            <TopicLink
              key={`${item.title}`}
              theme={item.theme}
              link={item.released}
              item={item}
            />
          );
        } else if (
          topiclist.length > 0 &&
          item.released === false &&
          item.theme === filter
        )
          return (
            <div ref={getRefs} key={`${item.title}`}>
              <TopicLink theme={item.theme} link={item.released} item={item} />
            </div>
          );
        else return null;
      })}
    </Container>
  );
}

export default TopicsContainer;

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";

import { Text, RedHyphen } from "./TextAmazeing.styles.js";
gsap.registerPlugin(SplitText);

function TextAmazeing({ margintop }) {
  const mazeText = useRef();
  useEffect(() => {
    var tl = gsap.timeline({ repeat: -1, yoyo: true }),
      mySplitText = new SplitText(mazeText.current, { type: "words,chars" }),
      chars = mySplitText.chars;

    gsap.set(chars[0], { rotation: -15, y: 1 });
    gsap.set(chars[1], { rotation: 10, y: -1 });
    gsap.set(chars[2], { rotation: -10, y: 1 });
    gsap.set(chars[3], { rotation: 18, y: -1 });
    const duration = 0.45;
    tl.to(
      chars[0],
      { duration: duration, rotation: 10, y: -3, x: -2, ease: "elastic" },
      "start"
    );
    tl.to(
      chars[1],
      { duration: duration, rotation: -7, y: 3, x: -2, ease: "elastic" },
      "start"
    );
    tl.to(
      chars[2],
      { duration: duration, rotation: 7, y: -3, x: -2, ease: "elastic" },
      "start"
    );
    tl.to(
      chars[3],
      { duration: duration, rotation: -8, y: 3, x: -2, ease: "elastic" },
      "start"
    );

    return function cleanup() {
      tl.kill();
    };
  });

  return (
    <Text margintop={margintop}>
      A<RedHyphen>-</RedHyphen>
      <span ref={mazeText}>MAZE</span>
      <RedHyphen>-</RedHyphen>
      ING
    </Text>
  );
}

export default TextAmazeing;

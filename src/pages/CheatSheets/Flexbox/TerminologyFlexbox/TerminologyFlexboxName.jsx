/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Name } from "./TerminologyFlexboxName.styles";

function TerminologyFlexboxName({ name }) {
  const tlName = gsap.timeline();
  const flexContainerRef = useRef();
  const flexItem1Ref = useRef();
  const flexItem2Ref = useRef();

  function animName() {
    gsap.set(flexContainerRef.current, {
      opacity: 0,
      transformOrigin: "50% 50%",
    });
    gsap.set(flexItem1Ref.current, {
      opacity: 0,
      transformOrigin: "50% 50%",
    });
    gsap.set(flexItem2Ref.current, { opacity: 0, transformOrigin: "50% 50%" });

    tlName.to(
      flexContainerRef.current,
      {
        duration: 0.3,
        opacity: 1,
        scaleY: 1.0,
        scaleX: 1,
      },
      "first"
    );
    tlName.to(
      flexItem1Ref.current,
      {
        duration: 0.15,
        opacity: 1,
        scaleX: 1.2,
      },
      "second"
    );
    tlName.to(
      flexItem2Ref.current,
      {
        duration: 0.15,
        opacity: 1,
        scaleX: 1.2,
        ease: "bounce",
      },
      "second"
    );
    tlName.to(
      flexItem1Ref.current,
      {
        duration: 0.4,
        opacity: 1,
        scaleX: 1,
        ease: "bounce",
      },
      "third"
    );
    tlName.to(
      flexItem2Ref.current,
      {
        duration: 0.4,
        opacity: 1,
        scaleX: 1,
        ease: "bounce",
      },
      "third"
    );
  }

  useLayoutEffect(() => {
    animName();
    return function cleanup() {
      tlName.kill();
    };
  }, [name]);

  return (
    <Name name={name}>
      <text
        ref={flexContainerRef}
        transform="translate(79.65 112.711)"
        style={{
          fontSize: 16,
          fontFamily: "Bungee-Regular, Bungee",
        }}
      >
        {"FLEX-CONTAINER"}
      </text>
      <text
        ref={flexItem2Ref}
        data-name="flex-item2"
        transform="translate(167.096 162.711)"
        style={{
          fontSize: 16,
          fontFamily: "Bungee-Regular, Bungee",
        }}
      >
        {`flex-`}
        <tspan className="flex-item2-2" x={-4.032} y={16}>
          {"item 2"}
        </tspan>
      </text>
      <text
        ref={flexItem1Ref}
        data-name="flex-item1"
        transform="translate(91.362 162.711)"
        style={{
          fontSize: 16,
          fontFamily: "Bungee-Regular, Bungee",
        }}
      >
        {"flex-"}
        <tspan className="flex-item1-2" x={-3.728} y={16}>
          {"item 1"}
        </tspan>
      </text>
    </Name>
  );
}

export default TerminologyFlexboxName;

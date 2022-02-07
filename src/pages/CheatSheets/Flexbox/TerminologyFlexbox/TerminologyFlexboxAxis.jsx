/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Axis } from "./TerminologyFlexboxAxis.styles.js";

function TerminologyFlexboxAxis({ axis }) {
  const tlAxis = gsap.timeline();
  const axisCrossLine = useRef();
  const axisCrossArrow = useRef();
  const axisMainLine = useRef();
  const axisMainArrow = useRef();

  function animAxis() {
    gsap.set(axisCrossLine.current, { scaleY: 0 });
    gsap.set(axisCrossArrow.current, { y: -250 });
    gsap.set(axisMainLine.current, { scaleX: 0 });
    gsap.set(axisMainArrow.current, { x: -300 });
    tlAxis.to(axisCrossLine.current, { duration: 0.3, scaleY: 1 }, "first");
    tlAxis.to(axisCrossArrow.current, { duration: 0.3, y: 0 }, "first");
    tlAxis.to(axisMainLine.current, { duration: 0.3, scaleX: 1 }, "first");
    tlAxis.to(axisMainArrow.current, { duration: 0.3, x: 0 }, "first");
  }

  useEffect(() => {
    animAxis();
    return function cleanup() {
      tlAxis.kill();
    };
  }, [axis]);

  return (
    <Axis axis={axis}>
      <g>
        <text
          transform="translate(127.316 13.76)"
          style={{
            fontSize: 16,
            fill: "#ffa9a9",
            fontFamily: "Bungee-Regular, Bungee",
          }}
        >
          {"C"}
          <tspan
            x={10.048}
            y={0}
            style={{
              letterSpacing: "-0.004974365234375em",
            }}
          >
            {"R"}
          </tspan>
          <tspan x={21.856} y={0}>
            {"O"}
          </tspan>
          <tspan
            x={33.648}
            y={0}
            style={{
              letterSpacing: "-0.0050048828125em",
            }}
          >
            {"S"}
          </tspan>
          <tspan
            x={43.968}
            y={0}
            style={{
              letterSpacing: "0.000030517578125em",
            }}
          >
            {"S"}
          </tspan>
          <tspan x={5.408} y={16}>
            {"axis"}
          </tspan>
        </text>
        <line
          ref={axisCrossLine}
          x1={153.853}
          y1={31.953}
          x2={153.853}
          y2={271.659}
          style={{
            fill: "none",
            stroke: "#ffa9a9",
            strokeMiterlimit: 10,
            strokeWidth: 4,
          }}
        />
        <polygon
          ref={axisCrossArrow}
          points="159.853 271.659 153.853 283.659 147.853 271.659 159.853 271.659"
          style={{
            fill: "#ffa9a9",
          }}
        />
      </g>
      <g>
        <polygon
          ref={axisMainArrow}
          points="299 135.705 299 148.269 308.344 142.205 299 135.705"
          style={{
            fill: "#ffa9a9",
          }}
        />
        <line
          ref={axisMainLine}
          x1={300.706}
          y1={141.806}
          y2={141.806}
          style={{
            fill: "none",
            stroke: "#ffa9a9",
            strokeMiterlimit: 10,
            strokeWidth: 4,
          }}
        />
        <text
          transform="translate(4.806 138.505)"
          style={{
            fontSize: "16.865280151367188px",
            fill: "#ffa9a9",
            fontFamily: "Bungee-Regular, Bungee",
          }}
        >
          {"main"}
        </text>
        <text
          transform="translate(7.797 157.76)"
          style={{
            fontSize: 16,
            fill: "#ffa9a9",
            fontFamily: "Bungee-Regular, Bungee",
          }}
        >
          {"axis"}
        </text>
      </g>
    </Axis>
  );
}

export default TerminologyFlexboxAxis;

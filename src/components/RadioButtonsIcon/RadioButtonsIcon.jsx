import IconCss from "../../icons/IconCss.jsx";
import IconHtml from "../../icons/IconHtml.jsx";
import IconJavascript from "../../icons/IconJavascript.jsx";
import IconReact from "../../icons/IconReact.jsx";
import IconFlexInline from "../../icons/IconFlexInline.jsx";
import IconAlign from "../../icons/IconAlign.jsx";
import IconGap from "../../icons/IconGap.jsx";
import IconFlow from "../../icons/IconFlow.jsx";
import {
  InputRadio,
  ContainerRadio,
  Label,
  BoxShadow,
} from "./RadioButtonsIcon.styles.js";

import gsap from "gsap";
import { useRef } from "react";
import ContainerIcon from "../../icons/ContainerIcon.jsx";

function RadioButtonsIcon({ options, name, active, onChange }) {
  const refs = useRef([]);
  refs.current = [];

  const boxShadowRefs = (element) => {
    if (element && !refs.current.includes(element)) {
      refs.current.push(element);
    }
  };
  function animateBoxShadow(number) {
    refs.current.forEach((items, index) => {
      if (index !== Number(number)) {
        gsap.to(items, { duration: 0.6, opacity: 0 });
      }
    });
    gsap.to(refs.current[number], {
      duration: 0.6,
      opacity: 1,
    });
  }
  function sendIndexToAnimateBoxShadow(index) {
    animateBoxShadow(index);
  }

  return (
    <>
      {options.map((items, index) => {
        return (
          <ContainerRadio
            key={`${index}${items.value}`}
            theme={items.theme}
            selected={active === items.value}
          >
            <InputRadio
              type="radio"
              name={name}
              value={items.value}
              onClick={() => sendIndexToAnimateBoxShadow(index)}
              onChange={onChange}
              id={`${items.value}${name}`}
            />
            {(function icon() {
              if (items.icon === "html")
                return (
                  <ContainerIcon height="3rem">
                    <IconHtml />
                  </ContainerIcon>
                );
              else if (items.icon === "css")
                return (
                  <ContainerIcon height="3rem">
                    <IconCss />
                  </ContainerIcon>
                );
              else if (items.icon === "react")
                return (
                  <ContainerIcon height="3rem">
                    <IconReact />
                  </ContainerIcon>
                );
              else if (items.icon === "js")
                return (
                  <ContainerIcon height="3rem">
                    <IconJavascript />
                  </ContainerIcon>
                );
              else if (items.icon === "display")
                return (
                  <ContainerIcon height="3rem">
                    <IconFlexInline />
                  </ContainerIcon>
                );
              else if (items.icon === "flow")
                return (
                  <ContainerIcon height="3rem">
                    <IconFlow />
                  </ContainerIcon>
                );
              else if (items.icon === "align")
                return (
                  <ContainerIcon height="3rem">
                    <IconAlign />
                  </ContainerIcon>
                );
              else if (items.icon === "gap")
                return (
                  <ContainerIcon height="3rem">
                    <IconGap />
                  </ContainerIcon>
                );
            })()}
            <Label
              htmlFor={`${items.value}${name}`}
              theme={items.theme}
              selected={active === items.value}
            >
              {items.label}
            </Label>
            <BoxShadow
              theme={items.theme}
              selected={active === items.value}
              ref={boxShadowRefs}
              value={index}
            ></BoxShadow>
          </ContainerRadio>
        );
      })}
    </>
  );
}
export default RadioButtonsIcon;

import { DivContainer, LinkContainer, StyledLink } from "./TopicLink.styles.js";
import IconCss from "../../icons/IconCss";
import IconJavascript from "../../icons/IconJavascript";
import IconHtml from "../../icons/IconHtml.jsx";
import IconReact from "../../icons/IconReact.jsx";
import ContainerIcon from "../../icons/ContainerIcon.jsx";

function TopicLink({ link, theme, item }) {
  function IconRender() {
    if (theme === "html")
      return (
        <ContainerIcon width="2rem" height="2rem" margin={`0.4rem`}>
          <IconHtml />
        </ContainerIcon>
      );
    else if (theme === "css")
      return (
        <ContainerIcon width="2rem" height="2rem" margin={`0.4rem`}>
          <IconCss />
        </ContainerIcon>
      );
    else if (theme === "react")
      return (
        <ContainerIcon width="2rem" height="2rem" margin={`0.4rem`}>
          <IconReact />
        </ContainerIcon>
      );
    else if (theme === "js")
      return (
        <ContainerIcon width="2rem" height="2rem" margin={`0.4rem`}>
          <IconJavascript />
        </ContainerIcon>
      );
  }
  return link === true ? (
    <LinkContainer to={item.path}>
      {IconRender()}
      <StyledLink theme={item.theme}>{item.title}</StyledLink>
    </LinkContainer>
  ) : (
    <DivContainer>
      {IconRender()}
      <StyledLink theme={theme}>{item.title}</StyledLink>
    </DivContainer>
  );
}

export default TopicLink;

import ContainerIcon from "../../icons/ContainerIcon";
import IconBrainConnect from "../../icons/IconBrainConnect";
import IconMail from "../../icons/IconMail";
import TextLink from "../TextLink/TextLink";
import { Container, Ul, Li, Nav, Contact } from "./HeaderDesktop.styles.js";
import { Link } from "react-router-dom";

function HeaderDesktop() {
  return (
    <Container>
      <header>
        <Nav>
          <Ul>
            <Li>
              <Link to="/">
                <ContainerIcon height="2.8rem">
                  <IconBrainConnect />
                </ContainerIcon>
              </Link>
            </Li>
            <Li>
              <TextLink to="/topics" label="Html" />
            </Li>
            <Li>
              <TextLink to="/topics" label="Css" />
            </Li>
            <Li>
              <TextLink to="/topics" label="Js" />
            </Li>
            <Li>
              <TextLink to="/topics" label="React" />
            </Li>
          </Ul>
          <Contact>
            <Link to="/about">
              <ContainerIcon height="2.8rem">
                <IconMail />
              </ContainerIcon>
            </Link>
          </Contact>
        </Nav>
      </header>
    </Container>
  );
}

export default HeaderDesktop;

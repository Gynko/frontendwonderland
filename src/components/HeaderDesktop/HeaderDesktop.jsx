import ContainerIcon from "../../icons/ContainerIcon";
import IconBrainConnect from "../../icons/IconBrainConnect";
import IconMail from "../../icons/IconMail";
import TextLink from "../TextLink/TextLink";
import { Container, Ul, Li, Nav, Contact } from "./HeaderDesktop.styles.js";
import { Link } from "react-router-dom";
import SimpleLink from "../SimpleLink/SimpleLink";

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
              <TextLink to="/" label="Home" />
            </Li>
            <Li>
              <TextLink to="/topics" label="Topics" />
            </Li>
            <Li>
              <SimpleLink
                link="https://github.com/Gynko/frontendwonderland"
                label="Github"
              />
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

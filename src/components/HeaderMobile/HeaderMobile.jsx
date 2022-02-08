import {
  Container,
  Header,
  Nav,
  Ul,
  Li,
  LinkTitle,
} from "./HeaderMobile.styles.js";
import { Link } from "react-router-dom";
import IconBrainConnect from "../../icons/IconBrainConnect";
import IconMail from "../../icons/IconMail";
import ContainerIcon from "../../icons/ContainerIcon.jsx";
import SimpleLink from "../SimpleLink/SimpleLink.jsx";
import IconGithub from "../../icons/IconGithub.jsx";

function HeaderMobile() {
  return (
    <Container>
      <Header>
        <Nav>
          <Ul>
            <Li>
              <LinkTitle to="/">Frontend Wonderland</LinkTitle>
            </Li>

            <Li>
              <Link to="/topics">
                <ContainerIcon height="2.8rem">
                  <IconBrainConnect />
                </ContainerIcon>
              </Link>
            </Li>
            <Li>
              <SimpleLink
                link="https://github.com/Gynko/frontendwonderland"
                label={
                  <ContainerIcon height="2.8rem">
                    <IconGithub />
                  </ContainerIcon>
                }
              ></SimpleLink>
            </Li>
            <Li>
              <Link to="/contact">
                <ContainerIcon height="2.8rem">
                  <IconMail />
                </ContainerIcon>
              </Link>
            </Li>
          </Ul>
        </Nav>
      </Header>
    </Container>
  );
}

export default HeaderMobile;

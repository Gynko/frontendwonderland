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

function HeaderMobile() {
  return (
    <Container>
      <Header>
        <Nav>
          <Ul>
            <Li>
              <Link to="/topics">
                <ContainerIcon height="2.8rem">
                  <IconBrainConnect />
                </ContainerIcon>
              </Link>
            </Li>
            <Li>
              <LinkTitle to="/">Frontend Wonderland</LinkTitle>
            </Li>
            <Li>
              <ContainerIcon height="2.8rem">
                <IconMail />
              </ContainerIcon>
            </Li>
          </Ul>
        </Nav>
      </Header>
    </Container>
  );
}

export default HeaderMobile;

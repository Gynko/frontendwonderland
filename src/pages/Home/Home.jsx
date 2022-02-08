import { PageContainer } from "./Home.styles";
import IconRabbitHole from "../../icons/IconRabbitHole";
import TitleFWonderland from "../../components/TitleFWonderland/TitleFWonderland";
import HeadlineText from "../../components/HeadlineText/HeadlineText";
import TextAmazeing from "../../animations/TextAmazeing/TextAmazeing";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import ContainerIcon from "../../icons/ContainerIcon";

function Home() {
  return (
    <PageContainer>
      <ContainerIcon width="10rem">
        <IconRabbitHole />
      </ContainerIcon>
      <TitleFWonderland margintop="small" />
      <HeadlineText margintop="medium">
        Personal notes and Cheat Sheets
      </HeadlineText>
      <HeadlineText margintop="medium">
        about Html, Css, Javascript, React..
      </HeadlineText>
      <HeadlineText margintop="small">
        Because web development can be quite
      </HeadlineText>
      <TextAmazeing margintop="small" />
      <ButtonLink to="/topics" label="choose a topic" margintop="medium" />
    </PageContainer>
  );
}

export default Home;

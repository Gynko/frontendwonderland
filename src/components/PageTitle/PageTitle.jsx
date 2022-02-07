import { TitleContainer, Title } from "./PageTitle.styles.js";

function PageTitle({ title }) {
  return (
    <TitleContainer>
      <Title>{title}</Title>
    </TitleContainer>
  );
}

export default PageTitle;

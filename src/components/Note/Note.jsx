import { Container, NoteParagraph } from "./Note.styles.js";

function Note({ children, ...otherProps }) {
  return (
    <Container>
      <NoteParagraph {...otherProps}>{children}</NoteParagraph>
    </Container>
  );
}

export default Note;

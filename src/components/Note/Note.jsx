import { NoteParagraph } from "./Note.styles.js";

function Note({ children, ...otherProps }) {
  return <NoteParagraph {...otherProps}>{children}</NoteParagraph>;
}

export default Note;

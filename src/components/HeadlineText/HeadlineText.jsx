import { Text } from "./HeadlineText.styles.js";

function HeadlineText({ margintop, children }) {
  return <Text margintop={margintop}>{children}</Text>;
}

export default HeadlineText;

import { StyledLink } from "./TextLink.styles.js";

function TextLink({ to, label }) {
  return <StyledLink to={to}>{label}</StyledLink>;
}

export default TextLink;

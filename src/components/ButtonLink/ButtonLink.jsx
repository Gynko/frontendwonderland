import { StyledLink } from "./ButtonLink.styles.js";

function ButtonLink({ to, label, margintop }) {
  return (
    <StyledLink to={to} margintop={margintop}>
      {label}
    </StyledLink>
  );
}

export default ButtonLink;

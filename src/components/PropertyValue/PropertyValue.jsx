import { Container, Label, Value } from "./PropertyValue.styles.js";

function PropertyValue({ label, value, unit }) {
  return (
    <Container>
      <Label>{label}</Label>
      <Value>{`${value}${unit}`}</Value>
    </Container>
  );
}

export default PropertyValue;

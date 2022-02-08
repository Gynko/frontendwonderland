import { Container } from "./PropertyValueSlider.styles.js";

import PropertySlider from "../PropertySlider/PropertySlider";
import PropertyValue from "../PropertyValue/PropertyValue";

function PropertyValueSlider({
  label,
  marginTop,

  min,
  max,
  value,
  name,
  unit,
  onChange,

  color,
}) {
  return (
    <Container marginTop={marginTop}>
      <PropertyValue label={label} value={value} unit={unit} />
      <PropertySlider
        min={min}
        max={max}
        onChange={onChange}
        name={name}
        value={value}
        color={color}
      />
    </Container>
  );
}
export default PropertyValueSlider;

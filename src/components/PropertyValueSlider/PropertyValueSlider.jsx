import { Container } from "./PropertyValueSlider.styles.js";

import PropertySlider from "../PropertySlider/PropertySlider";
import PropertyValue from "../PropertyValue/PropertyValue";

function PropertyValueSlider({
  id,
  label,
  marginTop,
  placeholder,
  min,
  max,
  value,
  name,
  unit,
  onChange,
  columnGap,
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
        id={id}
      />
    </Container>
  );
}
export default PropertyValueSlider;

import { Container, InputRange } from "./PropertySlider.styles.js";

function PropertySlider({ min, max, value, onChange, name, color }) {
  return (
    <Container>
      <InputRange
        type="range"
        min={min}
        max={max}
        onChange={onChange}
        value={value}
        name={name}
        color={color}
      />
    </Container>
  );
}

export default PropertySlider;

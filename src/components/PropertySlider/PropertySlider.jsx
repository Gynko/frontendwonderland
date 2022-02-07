import { Container, SliderBar } from "./PropertySlider.styles.js";

function PropertySlider({ min, max, value, onChange, name, id }) {
  return (
    <Container>
      <SliderBar
        type="range"
        min={min}
        max={max}
        onChange={onChange}
        name={name}
        id={id}
      />
    </Container>
  );
}

export default PropertySlider;

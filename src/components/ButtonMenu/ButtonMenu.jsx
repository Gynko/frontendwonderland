import { Button } from "./ButtonMenu.styles.js";

function ButtonMenu({ label, ...otherProps }) {
  return (
    <Button type="button" {...otherProps}>
      {label}
    </Button>
  );
}

export default ButtonMenu;

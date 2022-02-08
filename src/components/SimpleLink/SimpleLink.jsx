import { Link } from "./SimpleLink.styles.js";

function SimpleLink({ link, label }) {
  return <Link href={link}>{label}</Link>;
}

export default SimpleLink;

import { Link } from "react-router-dom";
import { NavLinksProps } from "../Types";

const NavLinks = ({ path, icon, title }: NavLinksProps) => {
  return (
    <div>
      <Link to={`${path}`}>
        <span>{icon}</span>
        {title}
      </Link>
    </div>
  );
};

export default NavLinks;

import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { links } from "./links_json";
import NavLinks from "./NavLinks";
import Items from "./Catalogue/Items";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo_div">
        <Link className="logo_link" to={"/"}>
          MULTISHOP
        </Link>
        <div className="catalogue">
          Каталог
          <IoIosArrowDown />
        </div>
      </div>
      <div className="search_input_div">
        <input type="text" placeholder="Поиск по сайту.." />
        <IoSearch size={25} />
      </div>
      <nav>
        {links.map((item, index) => {
          return <NavLinks key={index} {...item} />;
        })}
      </nav>
    </div>
  );
};

export default Navbar;

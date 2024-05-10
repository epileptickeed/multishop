import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { links } from "./links_json";
import NavLinks from "./NavLinks";
import Items from "./Catalogue/Items";
import { useDispatch, useSelector } from "react-redux";
import { setIsCatalogueActive } from "../../../redux/BooleanSlices/Slice";
import { useEffect, useRef } from "react";
import { booleanSliceSelector } from "../../../redux/BooleanSlices/selector";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isCatalogueActive } = useSelector(booleanSliceSelector);
  const catalogueRef = useRef<HTMLDivElement>(null);
  const catalogueBtnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        !catalogueRef.current?.contains(e.target as Node) &&
        !catalogueBtnRef.current?.contains(e.target as Node)
      ) {
        dispatch(setIsCatalogueActive(false));
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="navbar">
      <div className="logo_div">
        <Link className="logo_link" to={"/"}>
          MULTISHOP
        </Link>
        <div
          className="catalogue_btn"
          onClick={() => dispatch(setIsCatalogueActive(!isCatalogueActive))}
          ref={catalogueBtnRef}
        >
          Каталог
          <IoIosArrowDown />
        </div>
      </div>
      <div
        className={isCatalogueActive ? "catalogue_main_wrapper" : "notActive"}
        ref={catalogueRef}
      >
        <Items />
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

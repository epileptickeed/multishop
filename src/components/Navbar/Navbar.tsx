import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { links } from "./NavLinks/links_json";
import NavLinks from "./NavLinks/NavLinks";
import Items from "./Catalogue/Items";
import { useDispatch, useSelector } from "react-redux";
import { setIsCatalogueActive } from "../../../redux/BooleanSlices/Slice";
import { FormEvent, useEffect, useRef } from "react";
import { booleanSliceSelector } from "../../../redux/BooleanSlices/selector";
import { searchSelector } from "../../../redux/FormSlice/selector";
import {
  setSearchHistory,
  setSearchValue,
} from "../../../redux/FormSlice/slice";
import Index from "./SearchInputDiv/Index";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isCatalogueActive } = useSelector(booleanSliceSelector);
  const catalogueRef = useRef<HTMLDivElement>(null);
  const catalogueBtnRef = useRef<HTMLDivElement>(null);
  const { search } = useSelector(searchSelector);

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
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(search);
    dispatch(setSearchValue(""));
    dispatch(setSearchHistory(search));
  };

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
      <div className="search_input_div" onSubmit={handleSubmit}>
        <Index />
      </div>
      <nav>
        {links.map((links, index) => {
          return <NavLinks key={index} {...links} />;
        })}
      </nav>
    </div>
  );
};

export default Navbar;

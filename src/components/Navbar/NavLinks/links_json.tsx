import { CgProfile } from "react-icons/cg";
import { MdFavoriteBorder } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";

export const links = [
  {
    title: "Избранное",
    icon: <MdFavoriteBorder size={22} />,
    path: "favorite",
  },
  {
    title: "Корзина",
    icon: <LuShoppingCart size={22} />,
    path: "cart",
  },
  {
    title: "Профиль",
    icon: <CgProfile size={22} />,
    path: "profile",
  },
  {
    title: "Войти",
  },
];

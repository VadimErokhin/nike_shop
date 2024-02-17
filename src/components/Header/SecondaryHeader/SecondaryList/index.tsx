import style from "./style.module.scss";
import LinksList, { NavItem } from "@/components/LinksList";

const navItems: Array<NavItem> = [
  {
    name: "Find a Store",
    href: "#",
    id: 1,
  },
  {
    name: "Help",
    href: "#",
    id: 2,
  },
  {
    name: "Join us",
    href: "#",
    id: 3,
  },
  {
    name: "Sign in",
    href: "#",
    id: 4,
  },
];

function SecondaryList() {
  return (
    <LinksList isSeparated list={navItems} className={style.secondaryList} />
  );
}

export default SecondaryList;

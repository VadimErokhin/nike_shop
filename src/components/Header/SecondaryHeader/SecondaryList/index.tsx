import style from "./style.module.scss";
import LinksList, { NavItem } from "@/components/LinksList";

function SecondaryList() {
  const navItems: Array<NavItem> = [
    {
      name: "Find a Store",
      href: "#",
    },
    {
      name: "Help",
      href: "#",
    },
    {
      name: "Join us",
      href: "#",
    },
    {
      name: "Sign in",
      href: "#",
    },
  ];
  return (
    <LinksList isSeparated list={navItems} className={style.secondaryList} />
  );
}

export default SecondaryList;

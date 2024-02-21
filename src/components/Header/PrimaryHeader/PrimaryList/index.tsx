import { useId } from "react";
import style from "./style.module.scss";
import LinksList, { NavItem } from "@/components/LinksList";

function PrimaryList() {
  const navItems: Array<NavItem> = [
    {
      name: "New & Featured",
      href: "#",
    },
    {
      name: "Men",
      href: "#",
    },
    {
      name: "Women",
      href: "#",
    },
    {
      name: "Kids",
      href: "#",
    },
    {
      name: "Sale",
      href: "#",
    },
    {
      name: "SNKRS",
      href: "#",
    },
  ];
  return (
    <LinksList
      list={navItems}
      isSeparated={false}
      className={style.linksWrapper}
      classNameLink={style.link}
    />
  );
}

export default PrimaryList;

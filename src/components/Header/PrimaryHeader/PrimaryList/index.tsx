import NavLink from "@/components/NavLink";
import style from "./style.module.scss";
import LinksList from "@/components/LinksList";

interface NavItem {
  name: string;
  href: string;
  id: number;
}

const navItems: Array<NavItem> = [
  {
    name: "New & Featured",
    href: "#",
    id: 1,
  },
  {
    name: "Men",
    href: "#",
    id: 2,
  },
  {
    name: "Women",
    href: "#",
    id: 3,
  },
  {
    name: "Kids",
    href: "#",
    id: 4,
  },
  {
    name: "Sale",
    href: "#",
    id: 5,
  },
  {
    name: "SNKRS",
    href: "#",
    id: 6,
  },
];

function PrimaryList() {
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

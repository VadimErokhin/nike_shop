import NavLink from "@/components/NavLink";
import style from "./style.module.scss";

export interface NavItem {
  name: string;
  href: string;
}

interface LinksListProps {
  list: NavItem[];
  className?: string;
  classNameLink?: string;
  isSeparated: boolean;
}

function LinksList(props: LinksListProps) {
  return (
    <ul className={`${style.navItemsWrapper} ${props.className}`}>
      {props.list.map((item, index) => (
        <li className={props.isSeparated ? style.link : ""} key={index}>
          <NavLink className={props.classNameLink} href={item.href}>
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default LinksList;

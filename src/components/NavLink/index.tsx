import Link from "next/link";
import style from "./style.module.scss";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

function NavLink(props: NavLinkProps) {
  return (
    <Link href={props.href} className={`${style.link} ${props.className}`}>
      {props.children}
    </Link>
  );
}

export default NavLink;

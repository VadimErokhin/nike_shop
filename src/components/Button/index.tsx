import style from "./style.module.scss";

interface ButtonProps {
  children: React.ReactNode;
}

function Button(props: ButtonProps) {
  return <button className={style.btn}>{props.children}</button>;
}

export default Button;

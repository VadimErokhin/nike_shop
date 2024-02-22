import style from "./style.module.scss";
import { useMemo } from "react";
import { ButtonSize, ButtonType } from "../types";

interface ButtonProps {
  children?: React.ReactNode;
  type?: ButtonType;
  circle?: boolean;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

function Button(props: ButtonProps) {
  const type = useMemo<ButtonType>(() => {
    if (!props.type) {
      return ButtonType.Primary;
    }

    return props.type;
  }, [props.type]);

  const classes = useMemo(() => {
    let resultClasses = style.btn;

    if (type === ButtonType.Info) {
      resultClasses += ` ${style.info}`;
    }

    if (props.circle) {
      resultClasses += ` ${style.circle}`;
    }

    if (type === ButtonType.Connect) {
      resultClasses += ` ${style.connect}`;
    }

    if (props.size) {
      resultClasses += ` ${style[props.size]}`;
    }

    if (props.className) {
      resultClasses += ` ${props.className}`;
    }

    return resultClasses;
  }, [type, props.size, props.circle, props.className]);

  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes}
    >
      {props.children}
    </button>
  );
}

export default Button;

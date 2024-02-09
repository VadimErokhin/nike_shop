import style from "./style.module.scss";
import { useMemo } from "react";
import { ButtonSize, ButtonType } from "../types";

interface ButtonProps {
  children: React.ReactNode;
  type?: ButtonType;
  circle?: boolean;
  size?: ButtonSize;
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

    if (props.type === ButtonType.Info) {
      resultClasses += ` ${style.info}`;
    }

    if (props.circle) {
      resultClasses += ` ${style.circle}`;
    }

    if (props.size) {
      resultClasses += ` ${style[props.size]}`;
    }

    return resultClasses;
  }, [props.type, props.size, props.circle]);

  return <button className={classes}>{props.children}</button>;
}

export default Button;

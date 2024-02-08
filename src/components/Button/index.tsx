import style from "./style.module.scss";
import { useMemo } from "react";
import { ButtonType, CircleSize } from "../types";

interface ButtonProps {
  children: React.ReactNode;
  type?: ButtonType;
  circle?: boolean;
  size?: CircleSize;
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
      if (props.size === CircleSize.Large) {
        resultClasses += ` ${style.circle} ${style.large}`;
      }

      if (props.size === CircleSize.Small) {
        resultClasses += ` ${style.circle} ${style.small}`;
      }
    }

    return resultClasses;
  }, [props.type, props.circle]);

  return <button className={classes}>{props.children}</button>;
}

export default Button;

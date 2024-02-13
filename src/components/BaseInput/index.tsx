import { HTMLInputTypeAttribute } from "react";
import style from "./style.module.scss";

interface BaseInputProps {
  value: string;
  onInput: (newValue: string) => void;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
}

function BaseInput(props: BaseInputProps) {
  function handleInput(ev: React.ChangeEvent<HTMLInputElement>) {
    props.onInput(ev.target.value);
  }
  return (
    <input
      className={style.input}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onInput={handleInput}
    />
  );
}

export default BaseInput;

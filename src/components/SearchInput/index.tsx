import BaseInput from "../BaseInput";
import style from "./style.module.scss";

interface SearchInputProps {
  value: string;
  onInput: (newValue: string) => void;
}

function SearchInput(props: SearchInputProps) {
  return (
    <BaseInput
      type="text"
      placeholder="Search"
      value={props.value}
      onInput={props.onInput}
    />
  );
}

export default SearchInput;

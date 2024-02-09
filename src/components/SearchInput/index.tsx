import style from "./style.module.scss";

function SearchInput() {
  return (
    <div>
      <input className={style.input} type="text" placeholder="Search" />
    </div>
  );
}

export default SearchInput;

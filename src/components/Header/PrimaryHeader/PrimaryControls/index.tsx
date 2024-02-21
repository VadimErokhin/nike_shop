import SearchInput from "@/components/SearchInput";
import style from "./style.module.scss";
import Like from "@/assets/img/like.svg";
import Cart from "@/assets/img/cart.svg";
import { useState } from "react";

function PrimaryControls() {
  const [query, setQuery] = useState("");

  return (
    <div className={style.controlsWrapper}>
      <SearchInput value={query} onInput={setQuery} />
      <Like />
      <Cart />
    </div>
  );
}

export default PrimaryControls;

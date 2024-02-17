import Link from "next/link";
import style from "./style.module.scss";
import Cross from "@/assets/img/cross_icon_124008.svg";

function HeaderBanner() {
  return (
    <div className={style.headerBanner}>
      <div className={style.wrapper}>
        <h2 className={style.title}>Hello Nike App</h2>
        <div className={style.linkWrapper}>
          <p className={style.text}>
            Download the app to access everything Nike.
          </p>
          <Link className={style.link} href="#">
            Get Your Great
          </Link>
        </div>
      </div>
      <Cross className={style.cross} />
    </div>
  );
}

export default HeaderBanner;

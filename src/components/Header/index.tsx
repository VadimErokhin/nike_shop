import HeaderBanner from "./HeaderBanner";
import PrimaryHeader from "./PrimaryHeader";
import SecondaryHeader from "./SecondaryHeader";
import style from "./style.module.scss";

function Header() {
  return (
    <div>
      <div>
        <SecondaryHeader />
        <PrimaryHeader />
        <HeaderBanner />
      </div>
    </div>
  );
}

export default Header;

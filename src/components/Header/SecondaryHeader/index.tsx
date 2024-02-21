import style from "./style.module.scss";
import AirJordan from "@/assets/img/air-jordan.svg";
import Button from "@/components/Button";
import { ButtonType } from "@/components/types";
import SecondaryList from "./SecondaryList";

function SecondaryHeader() {
  return (
    <div className={style.secondaryHeader}>
      <div className={`container ${style.wrapper}`}>
        <AirJordan />

        <Button className={style.btn} type={ButtonType.Connect}>
          Skip to main content
        </Button>

        <SecondaryList />
      </div>
    </div>
  );
}

export default SecondaryHeader;

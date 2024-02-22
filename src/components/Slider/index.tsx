import Button from "../Button";
import { ButtonSize, ButtonType } from "../types";
import style from "./style.module.scss";
import Arrow from "@/assets/img/arrow.svg";
interface SliderProps {
  title: string;
  sliderTitle: string;
}

function Slider(props: SliderProps) {
  return (
    <div className={`container ${style.wrapper}`}>
      <h3 className={style.title}>{props.title}</h3>
      <div className={style.sliderWrapper}>
        <h3 className={style.sliderTitle}>{props.sliderTitle}</h3>
        <Button
          type={ButtonType.Info}
          circle
          size={ButtonSize.Large}
          className={style.leftBtn}
        >
          <Arrow className={style.leftArrow} />
        </Button>

        <Button
          type={ButtonType.Info}
          circle
          size={ButtonSize.Large}
          className={style.rightBtn}
        >
          <Arrow className={style.rightArrow} />
        </Button>
      </div>
    </div>
  );
}

export default Slider;

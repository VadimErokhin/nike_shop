import style from "./style.module.scss";
import Button from "@/components/Button";

function HeroText() {
  return (
    <div className={`container ${style.wrapper}`}>
      <p className={style.firstLook}>First Look</p>
      <h2 className={style.title}>Nike Air Max Pulse</h2>
      <p className={style.text}>
        Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
        Pulse —designed to push you past your limits and help you go to the max.
      </p>
      <div className={style.buttonsWrapper}>
        <Button className={style.btn}>Notify Me</Button>
        <Button>Shop Air Max</Button>
      </div>
    </div>
  );
}

export default HeroText;

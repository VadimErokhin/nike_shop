import style from "./page.module.scss";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import Button from "@/components/Button";
import Arrow from "@/assets/img/arrow.svg";

import { Inter } from "next/font/google";
import { ButtonSize, ButtonType } from "@/components/types";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <Header />
      <SearchInput />
      <Button type={ButtonType.Info}>Notify Me</Button>
      <Button>Shop Air Max</Button>
      <Button circle>1C</Button>
      <Button circle size={ButtonSize.Large}>
        2L
      </Button>
      <Button circle size={ButtonSize.Small}>
        3S
      </Button>

      <Button
        className={style.leftBtn}
        type={ButtonType.Info}
        circle
        size={ButtonSize.Large}
      >
        <Arrow className={style.leftArrow} />
      </Button>

      <Button
        className={style.rightBtn}
        type={ButtonType.Info}
        circle
        size={ButtonSize.Large}
      >
        <Arrow className={style.rightArrow} />
      </Button>
    </main>
  );
}

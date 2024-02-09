import style from "./page.module.scss";
import Header from "@/components/Header";
import Button from "@/components/Button";

import { Inter } from "next/font/google";
import { ButtonSize, ButtonType } from "@/components/types";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <Header />
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
        className={style.left_btn}
        type={ButtonType.Info}
        circle
        size={ButtonSize.Large}
      >
        <svg
          className={style.left_arrow}
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.47363 19.3256L15.4396 12.3596L8.47363 5.39258"
            stroke="#111111"
            stroke-width="1.5"
          />
        </svg>
      </Button>
      <Button
        className={style.right_btn}
        type={ButtonType.Info}
        circle
        size={ButtonSize.Large}
      >
        <svg
          className={style.right_arrow}
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.47363 19.3256L15.4396 12.3596L8.47363 5.39258"
            stroke="#111111"
            stroke-width="1.5"
          />
        </svg>
      </Button>
    </main>
  );
}

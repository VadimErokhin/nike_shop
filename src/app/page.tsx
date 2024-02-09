import styles from "./page.module.scss";
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
    </main>
  );
}

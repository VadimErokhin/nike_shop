import styles from "./page.module.scss";
import Header from "@/components/Header";
import Button from "@/components/Button";

import { Inter } from "next/font/google";
import { ButtonType, CircleSize } from "@/components/types";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <Header />
      <Button type={ButtonType.Info}>Notify Me</Button>
      <Button>Shop Air Max</Button>
      <Button circle={true}>1</Button>
      <Button circle={true} size={CircleSize.Large}>
        2
      </Button>
      <Button circle={true} size={CircleSize.Small}>
        3
      </Button>
    </main>
  );
}

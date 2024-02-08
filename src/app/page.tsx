import styles from "./page.module.scss";
import Header from "@/components/Header";
import Button from "@/components/Button";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <Header />
      <Button>
        <a> Notify Me</a>
      </Button>
    </main>
  );
}

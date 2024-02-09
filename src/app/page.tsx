import Header from "@/components/Header";
import styles from "./page.module.css";
import SearchInput from "@/components/SearchInput";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <SearchInput />
    </main>
  );
}

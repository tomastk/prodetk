import { Header } from "./components";
import styles from "./page.module.css";
import { Competences, Hero } from "./sections";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Competences />
    </main>
  );
}

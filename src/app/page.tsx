import styles from "./page.module.css";

export default function Home() {
  console.log("Hola mundo desde la pagina de inicio");

  return (
    <main className={styles.main}>
      <h1>Hola mundo!</h1>
    </main>
  );
}

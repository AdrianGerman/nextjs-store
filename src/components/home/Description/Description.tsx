/* eslint-disable @next/next/no-img-element */
import styles from "./Description.module.sass";

export const Description = () => {
  return (
    <section className={styles.Description}>
      <img src="/images/description.jpeg" alt="products marketplace" />
      <div className={styles.Description__text}>
        <h2>Trae el futuro hoy</h2>
        <p>
          Gikariu`s: ¡Su puerta de entrada a la tecnología del mañana! Sumérgete
          en un mundo de dispositivos y equipos de última generación. Manténgase
          a la vanguardia y redefina su estilo de vida digital con nosotros.
        </p>
      </div>
    </section>
  );
};

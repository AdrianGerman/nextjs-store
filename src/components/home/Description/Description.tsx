import styles from "./Description.module.sass";
import Image from "next/image";

export const Description = () => {
  return (
    <section className={styles.Description}>
      <Image
        src="/images/description.jpeg"
        alt="products marketplace"
        width={500}
        height={300}
        // priority={false}
      />
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

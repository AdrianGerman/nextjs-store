import { getProducts } from "app/services/shopify";
import Image from "next/image";
import styles from "./MainProducts.module.sass";

export const MainProducts = async () => {
  const products = await getProducts();
  return (
    <section className={styles.MainProducts}>
      <h3>✨ Nuestros productos mas recientes!</h3>
      <div className={styles.MainProducts__grid}>
        {products?.map((product: any) => {
          const imageSrc = product.images[0].src;
          return (
            <article key={product.id}>
              <p>{product.title}</p>
              <Image src={imageSrc} fill alt={product.title} loading="eager" />
            </article>
          );
        })}
      </div>
    </section>
  );
};

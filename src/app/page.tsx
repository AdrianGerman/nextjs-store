import { Hero } from "app/components/home/Hero";
import { Description } from "app/components/home/Description";
import { MainProducts } from "app/components/home/MainProducts";

export default function Home() {
  console.log("Hola mundo desde la pagina de inicio");

  return (
    <main>
      <Hero />
      <Description />
      <MainProducts />
    </main>
  );
}

import { MainProducts } from "app/components/home/MainProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gikariu`s",
  description: "Welcome to the gikariu`s, an ecommerce from other century",
  keywords: ["ecommerce", "gikariu", "world", "technology"],
};

export default function Home() {
  console.log("Hola mundo desde la pagina de inicio");

  return (
    <main>
      <MainProducts />
    </main>
  );
}

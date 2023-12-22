interface CategoryProps {
  params: {
    categories: string[];
    searchParams?: string;
  };
}

export default function Category(props: CategoryProps) {
  const { categories } = props.params;
  // throw new Error("Error: boom");

  return <h1>Caterogia dinámica: {categories}</h1>;
}

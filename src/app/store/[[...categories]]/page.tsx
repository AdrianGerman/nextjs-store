interface CategoryProps {
  params: {
    categories: string[];
    searchParams?: string;
  };
}

export default function Category(props: CategoryProps) {
  console.log(props);
  const { categories } = props.params;
  console.log(categories);

  return <h1>Caterogia dinámica: {categories}</h1>;
}

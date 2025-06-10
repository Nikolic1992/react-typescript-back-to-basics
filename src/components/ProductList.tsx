import { useEffect, useState } from "react";

function ProductList({ category }: { category: string }) {
  const [products, setProducts] = useState<string[]>([]);

  /**
   * useEffect with an empty dependency array `[]` runs only once,
   * after the initial render (similar to componentDidMount in class components).
   *
   * This is useful for one-time operations like fetching initial data.
   *
   * Note: In React's Strict Mode (enabled by default in development),
   * this effect will run twice to help identify side-effect bugs.
   * This does not happen in production.
   */
  useEffect(() => {
    console.log("Fetching products on initial mount...");
    setProducts(["Clothing", "Household"]);
  }, []);

  /**
   * useEffect with `[category]` as dependency means this effect runs
   * every time the `category` prop changes.
   *
   * This is useful when you need to re-fetch or update data based on a changing prop.
   *
   * ⚠️ Important: Updating state (`setProducts`) inside useEffect can cause re-renders.
   * By carefully setting the dependency array, we ensure this effect does not cause an infinite loop.
   *
   * Again, due to React's Strict Mode, you may see the effect run twice during development.
   */
  useEffect(() => {
    console.log("Fetching products based on category:", category);
    setProducts(["Clothing", "Household"]);
  }, [category]);

  return <div>ProductList: {products}</div>;
}

export default ProductList;

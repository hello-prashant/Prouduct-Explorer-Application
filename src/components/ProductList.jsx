import { useState, useEffect } from "react";
import { ProductItem } from "./ProductItem";
import { CategoryFilter } from "./CategoryFilter";
import { SearchBar } from "./SearchBar";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchByName, setSearchByName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const baseURL = "https://dummyjson.com/products";

  // Fetch category list
  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then((resp) => resp.json())
      .then((categories_list) => setCategories(categories_list))
      .catch((e) => console.error("Unable to fetch category list: ", e));
  }, []);

  // Fetch products based on category
  useEffect(() => {
    setIsLoading(true);

    if (selectedCategory === "") {
      fetch(baseURL)
        .then((res) => res.json())
        .then(({ products }) => setProducts(products))
        .catch((e) => console.error("Unable to fetch product", e))
        .finally(() => setIsLoading(false));
    } else {
      fetch(`${baseURL}/category/${selectedCategory}`)
        .then((res) => res.json())
        .then(({ products }) => setProducts(products))
        .catch((e) => console.error("Unable to fetch product", e))
        .finally(() => setIsLoading(false));
    }
  }, [selectedCategory]);

  // Search function
  const searchProduct = () => {
    if (searchByName !== "") {
      setIsLoading(true);

      fetch(`${baseURL}/search?q=${searchByName}`)
        .then((res) => res.json())
        .then(({ products }) => setProducts(products))
        .catch((e) => console.error("Unable to fetch product", e))
        .finally(() => setIsLoading(false));
    }
  };

  const handleSearch = () => {
    searchProduct();
  };

  // Favourite toggle
  const toggleFavourite = (product) => {
    setFavourites((prev) => {
      const isAlreadyFav = prev.find((p) => p.id === product.id);
      if (isAlreadyFav) {
        return prev.filter((p) => p.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  return (
    <div className="container" style={styles.container}>
      
      {/* Sticky Filter + Search Bar */}
      <div className="sub-header" style={styles.sub_header}>
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onChange={setSelectedCategory}
        />

        <SearchBar setName={setSearchByName} onClick={handleSearch} />
      </div>

      {/* Spacer for sticky header */}
      <div style={{ height: "80px" }}></div>

      {/* Product Grid */}
      <div style={styles.grid}>
        {isLoading ? (
          <p>Loading...</p>
        ) : products.length > 0 ? (
          products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              isFavourite={favourites.some((p) => p.id === product.id)}
              onToggleFavourite={() => toggleFavourite(product)}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

// Styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },

  sub_header: {
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  backgroundColor: "slategray",
  padding: "12px",
},


  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    padding: "20px",
    justifyContent: "center",
  },
};

export { ProductList };


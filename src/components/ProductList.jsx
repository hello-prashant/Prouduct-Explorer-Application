import { useState, useEffect } from "react";
import {ProductItem} from "./ProductItem"
import {CategoryFilter} from './CategoryFilter'
import { SearchBar } from "./SearchBar";

function ProductList(){
  const [products, setProducts] = useState([]);
  const [categories, setCatogries] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchByName, setSearchByName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const baseURL = 'https://dummyjson.com/products';

  useEffect(()=>{
    fetch('https://dummyjson.com/products/category-list')
      .then(resp => resp.json())
      .then((categories_list) => setCatogries(categories_list))
      .catch((e)=> console.error("Unable to fetch category lsit: ", e))
  },[])

  useEffect(() => {
    if(selectedCategory === ""){
      fetch(baseURL)
      .then(res => res.json())
      .then(({ products }) => setProducts(products))
      .catch(e => console.error("Unable to fetch product", e))
      .finally(() => setIsLoading(false));
    }
    else {
      fetch(baseURL+`/category/${selectedCategory}`)
      .then(res => res.json())
      .then(({ products }) => setProducts(products))
      .catch(e => console.error("Unable to fetch product", e))
      .finally(() => setIsLoading(false));
    }
  }, [selectedCategory]);

  const searchProduct = ()=>{
    if(searchByName !== ""){
      fetch(baseURL+`/search?q=${searchByName}`)
      .then(res => res.json())
      .then(({ products }) => setProducts(products))
      .catch(e => console.error("Unable to fetch product", e))
      .finally(() => setIsLoading(false));
    }
  }

  const handleSearch = ()=>{
    searchProduct();
  }

  const toggleFavourite = (product) => {
    setFavourites(prev => {
      const isAlreadyFav = prev.find(p => p.id === product.id);
      if (isAlreadyFav) {
        return prev.filter(p => p.id !== product.id); // remove
      } else {
        return [...prev, product]; // add
      }
    });
  };

  return (
    <div className="container" style={styles.container}>
      <div className="sub-header" style={styles.sub_header}>
        <CategoryFilter 
        categories={categories} 
        selectedCategory={selectedCategory} 
        onChange={setSelectedCategory} />

        <SearchBar
          setName={setSearchByName}
          onClick={handleSearch}/>

      </div>
    
      <div style={styles.grid}>
        {/* {Array.isArray(products) && products != [] ? products.map(product => (
          <ProductItem key={product.id} product={product} />
        )) : <p>Loading...</p>} */}
        {isLoading ? <p>Loading...</p> : (
          products.length > 0 ? (
            products.map(product => (
              <ProductItem 
                key={product.id} 
                product={product} 
                isFavourite={favourites.some(p => p.id === product.id)}
                onToggleFavourite={() => toggleFavourite(product)}
              />
            )) 
          ) : (<p>No products found.</p>))
        }
      </div>
    </div>  
  );
}

const styles = {
  container:{
    display:"felx",
    flexDirection:"column",
  },
  sub_header:{
    position: "fixed",
    width: "100%",
    top: "0",
    left:"0",
    display: "inline-flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor:"slategray",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    padding: "20px",
    justifyContent: "center",
  },
  card: {
    width: "200px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "4px",
  }
};


export {ProductList};

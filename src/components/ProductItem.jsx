
function ProductItem({product, isFavourite, onToggleFavourite}){
  return(
    <div className="pr_card" style={styles.pr_card}>
      <img className="pr_image" src={product.thumbnail} alt={product.title} style={styles.pr_image}/>
      <h3 className="pr_title" style={styles.pr_title}>{product.title}</h3>
      <p className="pr_desc" style={styles.pr_desc}>{product.description}</p>
      <h5 className="pr_category" style={styles.pr_cartegory}>Category: {product.category}</h5>
      <h5 className="pr_price" style={styles.pr_price}>Price: ${product.price}</h5>
      <h5 className="pr_rating" style={styles.pr_price}>Rating: {product.rating}</h5>

      <button onClick={onToggleFavourite} style={isFavourite ? styles.favBtn : styles.addFav} >
        {isFavourite ? "★ Remove from Favourites" : "☆ Add to Favourites"}
      </button>
    </div>
  )
}

const styles = {
  pr_card: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    gap: "10px",
    padding: "20px",
    width: "300px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    textAkign: "left"
  },
  pr_image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "4px",
  },
  pr_title: {
    textAlign: "left",
    margin: "0"
  },
  pr_desc: {
    textAlign: "justify",
    margin: "0",
  },
  pr_cartegory: {
    textAlign: "left",
    margin: "0",
  },
  pr_price: {
    textAlign: "left",
    margin: "0",
  },
  
  favBtn: {
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "#ffd723ff",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "pointer",
  },
  addFav: {
    marginTop: "10px",
    padding: "8px 12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "pointer",
  },

};

export {ProductItem}
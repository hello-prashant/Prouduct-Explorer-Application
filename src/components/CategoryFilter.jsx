function CategoryFilter({categories, selectedCategory, onChange}){
  return(
    <div className="filterBar">
      <label htmlFor="category">Filter by Category: </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">All</option>
      {categories.map(
        (category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))
      }
    </select>
    </div>
  )
}

const styles =  {
  filterBar: {
    display: "inline",
    width: "300px",
  }
}

export {CategoryFilter}

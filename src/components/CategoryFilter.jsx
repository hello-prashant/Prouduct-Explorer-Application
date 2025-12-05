function CategoryFilter({ categories, selectedCategory, onChange }) {
  return (
    <div style={styles.filterBar}>
      <label htmlFor="category">Filter by Category: </label>

      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">All</option>

        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

const styles = {
  filterBar: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "#1f2937",
    padding: "10px 20px",
    borderRadius: "8px",
    color: "white",
  },
};

export { CategoryFilter };

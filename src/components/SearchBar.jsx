import { useState } from "react";

function SearchBar({ setName, onClick }) {
  const [searchInput, setSearchInput] = useState("");

  const onInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = () => {
    setName(searchInput);
    onClick();
  };

  return (
    <div className="searchWrapper" style={styles.searchWrapper}>
      <form name="searchForm" style={styles.form}>
        <input
          type="text"
          name="searchBar"
          placeholder="Search by name"
          className="searchBar"
          onChange={onInputChange}
          style={styles.searchBar}
        />

        <button
          type="button"
          className="searchBtn"
          onClick={handleClick}
          style={styles.searchBtn}
        >
          Search
        </button>
      </form>
    </div>
  );
}

const styles = {
  searchWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "60px",
  },

  form: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },

  searchBar: {
    height: "30px",
    width: "250px",
    paddingLeft: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },

  searchBtn: {
    height: "34px",
    padding: "0 12px",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: "#ffd723",
    border: "1px solid #ccc",
    fontWeight: "bold",
  },
};

export { SearchBar };

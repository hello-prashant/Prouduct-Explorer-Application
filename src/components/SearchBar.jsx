import { useState } from "react";
function SearchBar({setName, onClick}){
  const [searchInput, setSearchInput] = useState('');

  const onInputChange = (e)=>{
    setSearchInput(e.target.value);
  }

  const handleClick = ()=> {
    setName(searchInput) 
    onClick()
    };

  return(
    <div className="searchWrapper">
      <form name="searchForm" >
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
        >Search</button>

    </form>
    </div>
  )
}

const styles =  {
  searchWrapper: {
    display: "inline",
    width: "300px",
    height: "80px",
  },
  searchBar:{
    height:"25px",
    width:"280px"
  },
  
}

export {SearchBar}
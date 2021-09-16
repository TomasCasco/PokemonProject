



import React, { useState } from "react";
import { useDispatch, } from "react-redux";
import { getByName, clearPokemon } from '../../Actions/actions';
import "./NavBar.css";
import { NavLink} from "react-router-dom";

function SearchBar({ setSearch, detail }) {
  const dispatch = useDispatch();
  const [name, setname] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setname(e.target.value);
  };

  const handleClick = (e) => {
    if (name) {
      e.preventDefault();
      dispatch(getByName(name));
      setSearch(true);
    } else {
      e.preventDefault();
      setSearch(false);
      dispatch(clearPokemon());
    }
  };

  return (
    <header className="headerSearch">
      <div className="div-logo">
      <NavLink  className="logo" exact to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png"  alt="" /></NavLink>
      </div>

      <div className="containerSearch">
          {
            !detail  &&  
        <form>
          
          <input
            className="bar"
            type="text"
            placeholder="Pikachu.."
            onChange={(e) => handleInputChange(e)}
            onSubmit={handleClick}
          />
          <NavLink to = "/cardDetail/"></NavLink>
          <button className="btn-search" onClick={(e) => handleClick(e)}>
            Search
          </button>
        </form>
          }
      </div>
      <div className="links">
        <NavLink className="linkAddPoke" to="/addPokemon">
          Create 
        </NavLink>
        <NavLink className="linkAddPoke" to="/home">
          Home 
        </NavLink>
      </div>
    </header>
  );
}

export default SearchBar;

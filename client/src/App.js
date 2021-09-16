import Landing from "./Components/Landing/Landing";
import { Route } from 'react-router-dom';
import Home from "./Components/Home/Home";
import React from "react";
import CardDetail from "./Components/Detail/CardDetail";
import CreatePokemon from "./Components/CreatePokemon/CreatePokemon";
// import Filter from "./Components/Filter/Filter";
// import NavBar from "./Components/Navbar/NavBar";
import './App.css';

function App() {
  return (
   <React.Fragment>  
     <Route exact path="/" component={Landing} />
     {/* <Route path="/home" component={NavBar}/>
     <Route exact path = "/home" component = {Filter} /> */}
     <Route path ="/home" component={Home} />
     <Route path = "/cardDetail/:id" exact component = {CardDetail} />
     <Route path = "/addPokemon" exact component = {CreatePokemon} />
     
   </React.Fragment>
    
  );
}

export default App;

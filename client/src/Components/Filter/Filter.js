import { orderOption, filterPoke, filterTypes } from '../../Actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import './Filter.css';

function Filter() {
    const filterPokemon = useSelector((state) => state.filterPokemons);
    const allPoke = useSelector((state) => state.getPokemons);
    const types = useSelector((state) => state.getTypes);

    const dispatch = useDispatch();

    function order(e) {
        dispatch(orderOption(e.target.value, allPoke))
      }

    function filterBy(e) {
        dispatch(filterPoke(e.target.value))
    }  
    
    function filterByTypes(e) {
        dispatch(filterTypes(e.target.value))
    }


    return (
        <div>
            
            
            <div className = "filter">
            
            <select className="type1" name="type" onChange={filterBy}>
                    <option value = "">Created in:</option>
                    <option value="all">All</option>
                    <option value="api"> API</option>
                    <option value="db">Database</option>
            </select>     

            
        <select className = "type2" name = "type" key = "order" onChange={order}>
            <option value = "">Order by:</option>
            <option value = "az" name = "az">A - Z</option>
            <option value = "za" name = "za">Z - A</option>
            <option value = "attack+" name = "null">Attack +</option>
            <option value = "attack-" name = "null">Attack -</option>


        </select>

        <div className="filterTypes">
             
                <select className="type3" name="type"  onChange={filterByTypes}>
                    <option value = "">Type:</option>
                    {types && types.map((t, index) => (
                    <option value={t.name} key={index} name="t.name">{t.name}</option>
                    ))}
                </select>  
         </div>       
        </div>

        <ul className = "filter1">
            {
                filterPokemon && filterPokemon.map((poke,index) => (
                 <Link to = {`/cardDetail/${poke.id}`} >
                 <Card key = {index} poke = {poke}  name = {poke.name} image = {poke.image} types = {poke.types}/>
                 </Link>
                )
                )
            }
            
            </ul> 
        </div>
    )
}

export default Filter




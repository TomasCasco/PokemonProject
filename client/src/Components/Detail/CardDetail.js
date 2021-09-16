import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearDetail, getById } from '../../Actions/actions';
import Card from "../Card/Card";
import SearchBar from "../Navbar/NavBar";
import "./CardDetail.css";

function CardDetail({ match }) {
  const dispatch = useDispatch();
  const getDetails = useSelector((state) => state.getDetails);

  const fixedMatch = useRef(match.params.id);

  useEffect(() => {
    dispatch(getById(fixedMatch.current));
    return (() => dispatch(clearDetail()));
  }, [dispatch]);

  return (
    <div>
      <SearchBar detail={true} />
        
        {
          getDetails.length !== 0  ?
      <div className="div-detail">
           
          <Card
            key={getDetails.id}
            name={getDetails.name}
            types={getDetails.types}
            height={getDetails.height}
            weight={getDetails.weight}
            image={getDetails.image}
            hp={getDetails.hp}
            attack={getDetails.attack}
            defense={getDetails.defense}
            speed={getDetails.speed}
          />
          
          </div>
          : <div className="content">
            <div className="loading">
              </div>
            </div>
        }
     
    </div>
    
  );
}

export default CardDetail;

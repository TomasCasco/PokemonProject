import React from 'react';
import './Card.css';


const Card = ({image, name, types, height, weight, hp, attack, defense, speed, id}) => {
  return (
    <div>
      {
          height ? 
          <div className = "body"> 
            <div className='row center-detail'>
              <div className = "card-detail">
              
              <img src={image} onError={(e)=>{e.target.onerror = null; e.target.src="https://imagenpng.com/wp-content/uploads/2016/09/Pokebola-pokeball-png-2.png"}} alt='Img not found' className='img-detail'/>
              <div className='card-body'>
                  <span className ="span">{name}</span>
                </div> 
           
                  <div className = 'type'>
                
                    <h5 className= 'types-detail'>Types: {types &&
                     types.map((el,i) => {
                      return <li key = {i}>{el}</li> 
                      
                    })
                    } </h5>
                  </div>
                  <div className = 'details__'>
                    <h5>Height: {height}</h5>
                  </div>
                  <div className = 'weight'>
                    <h5>Weight: {weight}</h5>
                  </div>
                  <div className = 'hp'>
                    <h5>HP: {hp}</h5>
                  </div>
                  <div className = 'attack'>
                    <h5>Attack: {attack}</h5>
                  </div>
                  <div className = 'defense'>
                    <h5>Defense: {defense}</h5>
                  </div>
                  <div className = 'speed'>
                    <h5>Speed: {speed}</h5>
                  </div>
              </div>
            </div>
          </div>
          :
          <div>
            <div className='row center'>
              <div key={id} className = 'card'>
               <img src={image}  onError={(e)=>{e.target.onerror = null; e.target.src="https://imagenpng.com/wp-content/uploads/2016/09/Pokebola-pokeball-png-2.png"}} alt= 'Img not found' className='medium'/>
               
                <div className='card-body'>
                  <span className ="span">{name}</span>
                </div> 

                <div className = 'type-home'>

                  <h5 className='types-card'> {types && types.map((el,i) => {
                    return <li>{el}</li>
                  })}</h5>
                  
                </div>
              </div>
            </div>
          </div>
        
      }
    </div>
  );
};


export default Card;


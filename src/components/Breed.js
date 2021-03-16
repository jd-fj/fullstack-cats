import React from 'react';
import {useFetch} from './useFetch';

const Breed = () => {

  const { breeds } = useFetch(`https://catfact.ninja/breeds`);
  console.log(breeds);
    if(!breeds){
      return(
        <><p>Loading...</p></>
      );
    } else {
      return(
        <>
          <div className ="d-flex flex-row flex-wrap my-flex-container">
          {breeds.map((breed, index) => {
            return (
            <div className="card m-3" style={{width: "18rem"}} key = {index}>
              <h2 className="card-header">{breed.breed}</h2>
              <div className="card-body">
                <ul>
                  <li>Country: {breed.country}</li>
                  <li>Origin: {breed.origin}</li>
                  <li>Coat: {breed.coat}</li>
                  <li>Pattern: {breed.pattern}</li>
                </ul>
              </div>
            </div>)
          })}
          </div>
        </>
      );
    }
  }


export default Breed;
import React, {useState} from 'react';
import {useFetch} from './useFetch';

const CatPics = () => {

  const [url, updateUrl] = useState(`https://api.thecatapi.com/v1/images/search?limit=100&${process.env.REACT_APP_API_KEY}`);
  const regularMode = `https://api.thecatapi.com/v1/images/search?limit=100&${process.env.REACT_APP_API_KEY}`;
  const sunglassMode = `https://api.thecatapi.com/v1/images/search?category_ids=4&limit=100&${process.env.REACT_APP_API_KEY}`;
  const hatMode = `https://api.thecatapi.com/v1/images/search?category_ids=1&limit=100&${process.env.REACT_APP_API_KEY}`;
  const spaceMode = `https://api.thecatapi.com/v1/images/search?category_ids=2&limit=100&${process.env.REACT_APP_API_KEY}`;
  const boxMode = `https://api.thecatapi.com/v1/images/search?category_ids=5&limit=100&${process.env.REACT_APP_API_KEY}`;
  const tieMode = `https://api.thecatapi.com/v1/images/search?category_ids=7&limit=100&${process.env.REACT_APP_API_KEY}`;
  const sinksMode = `https://api.thecatapi.com/v1/images/search?category_ids=14&limit=100&${process.env.REACT_APP_API_KEY}`;
  const clothesMode = `https://api.thecatapi.com/v1/images/search?category_ids=15&limit=100&${process.env.REACT_APP_API_KEY}`;

  let { photos } = useFetch(url);

  function handleClick(url) {
    updateUrl(url);
  }

    if(!photos){
      return(
        <><p>Loading...</p></>
      );
    } else {
      return(
        <>
        { url === regularMode ? <div><button onClick={() => handleClick(sunglassMode)}>click for sunglass mode?</button> <button onClick={() => handleClick(hatMode)}>click for hat mode?</button> <button onClick={() => handleClick(spaceMode)}>space mode?</button><button onClick={() => handleClick(boxMode)}>click for box mode?</button><button onClick={() => handleClick(tieMode)}>click for tie mode?</button><button onClick={() => handleClick(sinksMode)}>click for sinks mode?</button><button onClick={() => handleClick(clothesMode)}>click for clothes mode?</button></div> : <button onClick={() => handleClick(regularMode)}>click for regular mode?</button> }

        {/* { url === regularMode ? <button onClick={() => handleClick(hatMode)}>click for hat mode?</button> : <button onClick={() => handleClick(regularMode)}>click for regular mode?</button> } */}
        

          {photos.map((photo, index) =>{
            return (
              <div key={index}>
                <img src={photo.url} alt="A cat"/>
              </div>
            )
          })}
        </>
      );
    }
  }


export default CatPics;


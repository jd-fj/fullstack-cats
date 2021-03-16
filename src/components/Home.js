import React from 'react';
import creamy from '../img/creamy.jpg';
import mara from '../img/mara.jpg';
import bulma from '../img/bulma.jpg';

function Home() {
  return(
    <>
      <h1>home</h1>
      <img src={creamy} width="400px" alt="creamy, the cat!"></img>
      <img src={mara}width="400px" alt="mara, the cat!"></img>
      <img src={bulma}width="400px" alt="bulma, the cat!"></img>
    </>
  )
}

export default Home;
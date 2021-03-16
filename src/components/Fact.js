import React, {useState} from 'react';
import {useFetch} from './useFetch';
import { useSpring, animated } from 'react-spring';

const Fact = () => {

  const [clicked, updateClick] = useState(0);
  const { fact } = useFetch(`https://catfact.ninja/fact`, clicked);
  const props = useSpring({ opacity: 1, from: {opacity:0} })
  const [state, toggle] = useState(true)
  const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } })

      return(
        <>
        <div className="card m-3">
          <div className="card-header p-3">
            <h5>Cat Facts</h5>
          </div>
            <animated.div style={props}>
              <h3 className="p-3">{!fact ? "loading..." : fact}</h3>
            </animated.div>
          </div>
            <div id="jiggleButton" onClick={() => toggle(!state)}>
              <animated.div
              style={{
                opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                transform: x
                  .interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                  })
                  .interpolate(x => `scale(${x})`)
              }}>
              <button onClick={() => updateClick(c => c + 1)}>Another Fact pls</button>
              </animated.div>
            </div>
        </>
      );
    }

export default Fact;
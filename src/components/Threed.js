import React, {Suspense} from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import BoxMesh from './BoxMesh';

function Threed() {

  return(
  <Canvas shadowMap camera={{position: [0, 0, -10], fov: 80}}  style={{height: 1000}}>
    <ambientLight intensity={0.3} />
        <directionalLight 
          castShadow
          position={[0,10,0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -12]} intensity={0.5}/>
        <pointLight position={[0, -10, 0]} intensity={1.5}/>

        <group>
          <mesh 
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -5, 0]}>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <shadowMaterial attach='material' opacity={0.4} />
          </mesh>
        </group>
      <Suspense fallback={null}>
        <BoxMesh />
      </Suspense>
    <OrbitControls />
  </Canvas>
  )
}

export default Threed;
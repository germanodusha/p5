import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

function Objeto3d() {
    const objeto = useGLTF("/p5-object.glb");
    console.log(objeto);

    return (
        <group position={[-0.42, 0, 0]}>
            <mesh>
                <boxGeometry />
            </mesh>
            <primitive object={objeto} />
        </group>
    );
}

function MainScene() {
    return (
        <Canvas
            mode="concurrent"
            stencil={false}
            alpha={false}
            antialias={true}
        >
            <OrbitControls />
            <Suspense fallback={null}>
                <Environment preset="apartment" background={false} />
                <Objeto3d />
            </Suspense>
        </Canvas>
    );
}

export default MainScene;

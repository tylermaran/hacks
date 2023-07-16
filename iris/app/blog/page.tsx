'use client';

import React, { Suspense, useRef } from 'react';
import {
	Canvas,
	useLoader,
	extend,
	useThree,
	useFrame,
} from '@react-three/fiber';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { MeshStandardMaterial } from 'three';

extend({ OrbitControls });

const Controls = () => {
	const orbitRef = useRef();
	const { camera, gl } = useThree();

	useFrame(() => {
		orbitRef.current.update();
	});

	return (
		<orbitControls
			autoRotate={false}
			maxPolarAngle={Math.PI / 2}
			minPolarAngle={Math.PI / 3}
			args={[camera, gl.domElement]}
			ref={orbitRef}
		/>
	);
};

const Model = () => {
	const geometry = useLoader(STLLoader, '/face-v3.stl');
	const material = new MeshStandardMaterial({ color: 'green' }); // Adjust material as needed

	return <mesh geometry={geometry} material={material} />;
};

const LandingPage = () => {
	return (
		<div>
			<header style={{ textAlign: 'center', padding: '50px' }}>
				<h1>iris glass</h1>
			</header>

			<Canvas
				style={{ width: '100%', height: '50vh' }}
				camera={{ position: [0, 0, 10] }}
			>
				<ambientLight intensity={0.5} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
				<Suspense fallback={null}>
					<Controls />
					<Model />
				</Suspense>
			</Canvas>

			<div style={{ textAlign: 'center', padding: '50px' }}>
				<h2>seeing is believing</h2>
				<button
					style={{
						marginTop: '20px',
						padding: '10px 20px',
						fontSize: '20px',
						cursor: 'pointer',
					}}
				>
					join the waitlist
				</button>
			</div>
		</div>
	);
};

export default LandingPage;

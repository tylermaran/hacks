'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import WaitlistButton from './Waitlist';

const GlassesModel = () => {
	const gltf = useLoader(GLTFLoader, '/textured_attempt_2.glb');
	const mesh = useRef();

	const fastSpeed = 0.1;
	const slowSpeed = 0.002;

	const [speed, setSpeed] = useState(slowSpeed);

	useFrame(() => {
		if (mesh.current) {
			// Update the rotation
			mesh.current.rotation.y -= speed;

			// If the rotation is close to 70 degrees (converted to radians), increase the speed
			if (
				mesh.current.rotation.y <= (-Math.PI * 70) / 180 &&
				speed < fastSpeed
			) {
				setSpeed(fastSpeed);
			}

			// If the rotation has passed 360 degrees, reset the rotation and speed
			if (mesh.current.rotation.y <= -2 * Math.PI) {
				mesh.current.rotation.y += 2 * Math.PI; // This is equivalent to setting it to zero, but avoids a jump in the animation
				setSpeed(slowSpeed);
			}
		}
	});

	gltf.scene.traverse((child) => {
		if (child.isMesh && child.material.name === 'glass') {
			// Set transparent to true
			child.material.transparent = true;

			// Set the opacity
			child.material.opacity = 0.05;

			// Set depthWrite to false for transparent objects
			child.material.depthWrite = false;

			// Set a higher render order for the lenses
			child.renderOrder = 1;
		}
	});

	return (
		<primitive
			ref={mesh}
			object={gltf.scene}
			position={[0.2, -1.5, 0]} // Set position here: [x, y, z]
			rotation={[0, 0, 0]} // Rotate 90 degrees upward
			scale={[30, 30, 30]} // Set scale here: [x, y, z]
		/>
	);
};

const Glasses = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				maxWidth: '900px',
				margin: '0 auto',
				height: '100vh',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					alignSelf: 'start',
				}}
			>
				<img
					style={{
						height: '4rem',
						width: '4rem',
						color: '#6054e6',
						marginLeft: '0.5rem',
					}}
					src={`glasses.svg`}
					alt="Glasses Icon"
				/>

				<h1
					style={{
						display: 'flex',
						alignItems: 'center',
						height: '10%',
						fontFamily: 'math',
						color: '#6054e6',
						padding: '1rem 0 1rem 0',
						fontSize: '2.5rem',
					}}
				>
					iris
				</h1>
			</div>

			<Canvas style={{ width: '100%', height: '50%' }}>
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<GlassesModel />
			</Canvas>
			<WaitlistButton style={{ width: '100%', height: '20%' }} />
		</div>
	);
};

export default Glasses;

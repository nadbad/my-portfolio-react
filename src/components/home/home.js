import React from 'react';
import Navbar from '../home/sub-components/navbar';
import CV from './sub-components/Nadeem Alhassan (Front-End Developer).pdf';

export default function Home() {
	const openCV = () => {
		window.location.href = CV;
		console.log('hellow');
	};
	return (
		<div id='home-section'>
			<Navbar />

			<div>
				<h1>Nadeem Alhassan</h1>
				<p>Front-End Developer</p>
			</div>

			<div>
				<button
					onClick={() => openCV()}
					type='button'
					className='button-1'>
					View My CV
				</button>
				<button onClick={null} type='button' className='button-2'>
					Get In Touch
				</button>
			</div>
		</div>
	);
}

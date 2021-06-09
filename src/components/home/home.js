import React from 'react';
import Navbar from '../home/sub-components/navbar';
import CV from './sub-components/Nadeem Alhassan (Front-End Developer).pdf';

export default function Home() {
	const openCV = () => {
		window.location.href = CV;
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
				<a href='#contact-section'>
					<button type='button' className='button-2'>
						Get In Touch
					</button>
				</a>
			</div>
		</div>
	);
}

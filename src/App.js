import React, { useState, useEffect } from 'react';
import Home from './components/home/home';
import AboutMe from './components/about me/aboutMe';
import Projects from './components/projects/projects';
import ContactMe from './components/contact me/contactMe';
import Copyright from './components/copyright/copyright';
import LoadingScreen from './components/loadingScreen';
import AOS from 'aos';

function App() {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		AOS.init();
		setTimeout(() => setLoading(false), 3000);
	}, []);
	return (
		<>
			{loading === false ? (
				<div className='page-content'>
					<Home />
					<AboutMe />
					<Projects />
					<ContactMe />
					<Copyright />
				</div>
			) : (
				<LoadingScreen />
			)}
		</>
	);
}

export default App;

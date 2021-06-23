import React, { useState, useEffect } from 'react';

import Home from './components/home/home';
import AboutMe from './components/about me/aboutMe';
import Projects from './components/projects/projects';
import ContactMe from './components/contact me/contactMe';
import Copyright from './components/copyright/copyright';
import LoadingScreen from './components/loadingScreen';

function App() {
	const [loading, setLoading] = useState(true);
	// const changeParentName = () => {
	// 	const parent = document.getElementById('parent');
	// 	parent.id = 'parent-loaded';
	// };

	useEffect(() => {
		setTimeout(() => setLoading(false), 4000);
		// setTimeout(() => changeParentName(), 5000);
	}, []);
	return (
		<div id='parent'>
			<Home />
			<AboutMe />
			<Projects />
			<ContactMe />
			<Copyright />
		</div>
	);
}

export default App;

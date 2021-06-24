import React, { useState, useEffect } from 'react';
import Home from './components/home/home';
import AboutMe from './components/about me/aboutMe';
import Projects from './components/projects/projects';
import ContactMe from './components/contact me/contactMe';
import Copyright from './components/copyright/copyright';
import LoadingScreen from './components/loadingScreen';
import AOS from 'aos';
import { motion } from 'framer-motion';

function App() {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		AOS.init();
		setTimeout(() => setLoading(false), 3500);
	}, []);
	return (
		<>
			{loading === false ? (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 2 }}>
					<div className='page-content'>
						<Home />
						<AboutMe />
						<Projects />
						<ContactMe />
						<Copyright />
					</div>
				</motion.div>
			) : (
				<LoadingScreen />
			)}
		</>
	);
}

export default App;

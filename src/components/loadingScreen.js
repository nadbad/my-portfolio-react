import React from 'react';
import loader from '../Images/Ghost.gif';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}>
			<div className='loading-screen' id='swup'>
				<img src={loader} alt='' id='loader' />
			</div>
		</motion.div>
	);
}

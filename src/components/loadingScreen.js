import React from 'react';
import loader from '../Images/Ghost.gif';

export default function LoadingScreen() {
	return (
		<div className='loading-screen'>
			<img src={loader} alt='' id='loader' />
		</div>
	);
}

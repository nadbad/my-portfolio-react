import React from 'react';

export default function Copyright() {
	let year = new Date().getFullYear();
	return (
		<div>
			<div className='copyright'>
				<p className='copyright-text'>
					Copyright &copy; {year} Nadeem Alhassan
				</p>
			</div>
		</div>
	);
}

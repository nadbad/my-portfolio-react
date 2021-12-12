import React from 'react';
import CV from './Nadeem Alhassan Resume (Front End Developer).pdf';

window.addEventListener('scroll', function () {
	var nav = document.querySelector('nav');
	nav.classList.toggle('sticky', window.scrollY > 0);
});
window.addEventListener('scroll', function () {
	var nav = document.querySelector('nav');
	nav.classList.toggle('long', window.scrollY > 150);
});

export default function Navbar() {
	const openSlideMenu = () => {
		const side = document.getElementById('side-menu');
		side.style.width = '300px';
	};
	const closeSlideMenu = () => {
		const side = document.getElementById('side-menu');
		side.style.width = '0px';
	};
	return (
		<nav className='nav navbar fixed-top navbar-dark bg-dark'>
			<a className='navbar-brand label' href='.'>
				Nadeem Alhassan
			</a>
			<div className='right'>
				<a className='navbar-brand right' href='#home-section'>
					Home
				</a>
				<a className='navbar-brand right' href='#about-section'>
					About Me
				</a>
				<a className='navbar-brand right' href='#portfolio-section'>
					Portfolio
				</a>
				<a className='navbar-brand right' href={CV}>
					View CV
				</a>
				<a className='navbar-brand right' href='#contact-section'>
					Contact Me
				</a>
			</div>
			<div className='burger-menu'>
				<span className='open-slide' id='menu-slide'>
					<a onClick={openSlideMenu}>
						<svg width='30' height='30'>
							<path d='M0,5 30,5' strokeWidth='5' />
							<path d='M0,14 30,14' strokeWidth='5' />
							<path d='M0,23 30,23' strokeWidth='5' />
						</svg>
					</a>
				</span>
				<div
					id='side-menu'
					className='side-nav'
					onClick={closeSlideMenu}>
					<a className='side-menu-link home' href='#home-section'>
						Home
					</a>
					<a className='side-menu-link' href='#about-section'>
						About me
					</a>
					<a className='side-menu-link' href='#portfolio-section'>
						Portfolio
					</a>
					<a className='side-menu-link' href={CV}>
						View CV
					</a>
					<a className='side-menu-link' href='#contact-section'>
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
}

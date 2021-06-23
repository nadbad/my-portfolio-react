import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import { styles } from './menuStyles';

import CV from './Nadeem Alhassan (Front-End Developer).pdf';

window.addEventListener('scroll', function () {
	var nav = document.querySelector('nav');
	nav.classList.toggle('sticky', window.scrollY > 0);
});
window.addEventListener('scroll', function () {
	var nav = document.querySelector('nav');
	nav.classList.toggle('long', window.scrollY > 150);
});

export default function Navbar() {
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
				{' '}
				<Menu styles={styles} right>
					<a id='home' className='menu-item' href='/'>
						Home
					</a>
					<a id='about' className='menu-item' href='/about'>
						About
					</a>
					<a id='contact' className='menu-item' href='/contact'>
						Contact
					</a>
				</Menu>
			</div>
		</nav>
	);
}

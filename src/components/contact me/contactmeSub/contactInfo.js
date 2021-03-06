import React from 'react';
import Github from '../../../Images/github.png';
import Gmail from '../../../Images/mail.png';
import Linkedin from '../../../Images/linkedin.png';

export default function ContactInfo() {
	return (
		<div className='contact-me'>
			<div className='section-1-contact' data-aos='fade-up'>
				<a
					href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nadeem.develops@gmail.com'
					target='_'>
					<img src={Gmail} alt='email me' />
				</a>
			</div>
			<div className='section-2-contact' data-aos='fade-up'>
				<a href='https://www.linkedin.com/in/nadeem-alhassan/' target='_'>
					<img src={Linkedin} alt='my linkedin' />
				</a>
			</div>
			<div className='section-3-contact' data-aos='fade-up'>
				<a href='https://github.com/nadbad' target='_'>
					<img src={Github} alt='my github' />
				</a>
			</div>
		</div>
	);
}

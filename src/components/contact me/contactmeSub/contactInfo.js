import React from 'react';
import Github from './github.png';
import Gmail from './mail.png';
import Linkedin from './linkedin.png';

export default function ContactInfo() {
	return (
		<div className='contact-me'>
			<div className='section-1-contact' data-aos='fade-up'>
				<a href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nadeem.develops@gmail.com'>
					<img src={Gmail} alt='email me' />
				</a>
			</div>
			<div className='section-2-contact' data-aos='fade-up'>
				<a href='https://www.linkedin.com/in/nadeem-alhassan/'>
					<img src={Linkedin} alt='my linkedin' />
				</a>
			</div>
			<div className='section-3-contact' data-aos='fade-up'>
				<a href='https://github.com/nadbad'>
					<img src={Github} alt='my github' />
				</a>
			</div>
		</div>
	);
}

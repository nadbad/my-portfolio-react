import React from 'react';
import Github from './github.png';
import Gmail from './mail.png';
import Linkedin from './linkedin.png';

export default function ContactInfo() {
	return (
		<div class='contact-me'>
			<div class='section-1-contact' data-aos='fade-up'>
				<a href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nadeem.develops@gmail.com'>
					<img src={Gmail} alt='email me' />
				</a>
				<p>
					<a
						href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&nadeem.develops@gmail.com'
						className='fancy-link'>
						nadeem.develops@gmail
					</a>
				</p>
			</div>
			<div class='section-2-contact' data-aos='fade-up'>
				<a href='https://www.linkedin.com/in/nadeem-alhassan/'>
					<img src={Linkedin} alt='my linkedin' />
				</a>
				<p>
					<a
						href='https://www.linkedin.com/in/nadeem-alhassan/'
						className='fancy-link'>
						linkedin.com/in/nadeem-alhassan
					</a>
				</p>
			</div>
			<div class='section-3-contact' data-aos='fade-up'>
				<a href='https://github.com/nadbad'>
					<img src={Github} alt='my github' />
				</a>
				<p>
					<a href='https://github.com/nadbad' className='fancy-link'>
						github.com/nadbad
					</a>
				</p>
			</div>
		</div>
	);
}

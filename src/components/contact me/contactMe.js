import React from 'react';
import ContactInfo from './contactmeSub/contactInfo';

export default function ContactMe() {
	return (
		<div id='contact-section'>
			<div className='contact-title' data-aos='zoom-in'>
				<h2>Contact Me</h2>
			</div>
			<ContactInfo />
		</div>
	);
}

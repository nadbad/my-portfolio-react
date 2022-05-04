import React from 'react';
import ContactInfo from './contactmeSub/contactInfo';

export default function ContactMe() {
	return (
		<div id='contact-section'>
			<div className='contact-title' data-aos='zoom-in'>
				<h2>Get In Touch!</h2>
			</div>
			<ContactInfo />
		</div>
	);
}

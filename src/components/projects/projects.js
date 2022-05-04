import React from 'react';
import ProjectLeft from './sub-components/projectLeft';
import ProjectRight from './sub-components/projectRight';
import AroundTheGlobe from '../../Images/around-the-globe.jpg';
import Cafe from '../../Images/cafe-lamah.jpg';

export default function Projects() {
	return (
		<div id='portfolio-section'>
			<div className='portfolio-title' data-aos='zoom-in'>
				<h2>Portfolio</h2>
			</div>
			<div className='projects-container'>
				<div className='projects'>
					<ProjectLeft
						name='Around the globe'
						number='01'
						position='Developer & Designer'
						image={AroundTheGlobe}
						description='This project reflects my interest in geography since I was a little kid as I’ve always wanted to be able to quickly check all the relevant information of the countries around the globe in a few seconds. 

						The project was made using the RestCountries API. 
						'
						client='Personal'
						devStack='React, Redux & Scss'
						link='https://aroundtheglobe.netlify.app/'
					/>

					<ProjectRight
						name='Lamah Cafe'
						number='02'
						position='Developer & Designer'
						image={Cafe}
						description='In the end of 2021 I was the lead developer on the new Lamah internal Cafe system. Applying our new branding and building the page and the main carousel was an interesting challenge. It was really fun working as the sole frontend developer on the project since I had to get creative at times to meet our wants and needs.'
						client='Lamah'
						devStack='React, Redux, Scss & Framer Motion'
						link='https://lamah.com/'
					/>
				</div>
			</div>
		</div>
	);
}

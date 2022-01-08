import React from 'react';
import ProjectLeft from './sub-components/projectLeft';
import ProjectRight from './sub-components/projectRight';
import AroundTheGlobe from '../../Images/around-the-globe.jpg';

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
						name='MangaDoDs'
						number='02'
						position='Developer & Designer'
						image={AroundTheGlobe}
						description='
						In 2019 I was the Lead Developer on the new Squarespace Homepage
						Applying our new branding and Building the page and the main carousel was an interesting challenge. It was a real team effort with the FrontSite Team: Brandon, Crystal, Robyn and Cody. As part of this project we also build a brand new styleguide for all of Squarespace.com'
						client='Squarespace'
						devStack='HTML5, Squarespace, Custom Framework'
						link=''
					/>

					<ProjectLeft
						name='MangaDoDs'
						number='03'
						position='Developer & Designer'
						image={AroundTheGlobe}
						description='
						In 2019 I was the Lead Developer on the new Squarespace Homepage
						Applying our new branding and Building the page and the main carousel was an interesting challenge. It was a real team effort with the FrontSite Team: Brandon, Crystal, Robyn and Cody. As part of this project we also build a brand new styleguide for all of Squarespace.com'
						client='Squarespace'
						devStack='HTML5, Squarespace, Custom Framework'
						link=''
					/>

					<ProjectRight
						name='MangaDoDs'
						number='04'
						position='Developer & Designer'
						image={AroundTheGlobe}
						description='
						In 2019 I was the Lead Developer on the new Squarespace Homepage
						Applying our new branding and Building the page and the main carousel was an interesting challenge. It was a real team effort with the FrontSite Team: Brandon, Crystal, Robyn and Cody. As part of this project we also build a brand new styleguide for all of Squarespace.com'
						client='Squarespace'
						devStack='HTML5, Squarespace, Custom Framework'
						link=''
					/>
				</div>
			</div>
		</div>
	);
}

import React from 'react';
import Project from './sub-components/project';
import Background from '../../Images/background-1.png';
import Project1 from '../../Images/project-1.png';
import Project2 from '../../Images/project-2.png';

export default function Projects() {
	return (
		<div id='portfolio-section'>
			<div className='portfolio-title' data-aos='zoom-in'>
				<h2>Portfolio</h2>
			</div>
			<div className='projects-container'>
				<div className='projects'>
					<Project
						name=''
						image={Project1}
						background={Background}
						description='A website made for a scanalation group'
						demoLink='https://mangadods.netlify.app/'
						codeLink='https://github.com/nadbad/MangaDoDs-Website'
					/>
					<Project
						name=''
						image={Project2}
						background={Background}
						description='Web app displaying all the countries around the world'
						demoLink='https://aroundtheglobe.netlify.app/'
						codeLink='https://github.com/nadbad/countries-around-globe'
					/>
					<Project
						name=''
						image={Project1}
						background={Background}
						description='A website made for a scanalation group'
						demoLink='https://mangadods.netlify.app/'
						codeLink='https://github.com/nadbad/MangaDoDs-Website'
					/>
					<Project
						name=''
						image={Project1}
						background={Background}
						description='A website made for a scanalation group'
						demoLink='https://mangadods.netlify.app/'
						codeLink='https://github.com/nadbad/MangaDoDs-Website'
					/>
					<Project
						name=''
						image={Project1}
						background={Background}
						description='A website made for a scanalation group'
						demoLink='https://mangadods.netlify.app/'
						codeLink='https://github.com/nadbad/MangaDoDs-Website'
					/>
					<Project
						name=''
						image={Project1}
						background={Background}
						description='A website made for a scanalation group'
						demoLink='https://mangadods.netlify.app/'
						codeLink='https://github.com/nadbad/MangaDoDs-Website'
					/>
				</div>
			</div>
		</div>
	);
}

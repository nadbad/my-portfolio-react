import React from 'react';
import Project from './sub-components/project';
import Image from './Untitled-1.png';
import Background from './background-1.png';

export default function Projects() {
	return (
		<div id='portfolio-section'>
			<div className='portfolio-title' data-aos='zoom-in'>
				<h2>Portfolio</h2>
			</div>
			<div className='projects'>
				<Project
					name=''
					image={Image}
					background={Background}
					description='A website made for a scanalation group'
					demoLink='https://mangadods.netlify.app/'
					codeLink='https://github.com/nadbad/MangaDoDs-Website'
				/>
				<Project
					name=''
					image={Image}
					background={Background}
					description='A website made for a scanalation group'
					demoLink='https://mangadods.netlify.app/'
					codeLink='https://github.com/nadbad/MangaDoDs-Website'
				/>
				<Project
					name=''
					image={Image}
					background={Background}
					description='A website made for a scanalation group'
					demoLink='https://mangadods.netlify.app/'
					codeLink='https://github.com/nadbad/MangaDoDs-Website'
				/>
				<Project
					name=''
					image={Image}
					background={Background}
					description='A website made for a scanalation group'
					demoLink='https://mangadods.netlify.app/'
					codeLink='https://github.com/nadbad/MangaDoDs-Website'
				/>
				<Project
					name=''
					image={Image}
					background={Background}
					description='A website made for a scanalation group'
					demoLink='https://mangadods.netlify.app/'
					codeLink='https://github.com/nadbad/MangaDoDs-Website'
				/>
				<Project
					name=''
					image={Image}
					background={Background}
					description='A website made for a scanalation group'
					demoLink='https://mangadods.netlify.app/'
					codeLink='https://github.com/nadbad/MangaDoDs-Website'
				/>
			</div>
		</div>
	);
}

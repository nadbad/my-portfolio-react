import React from 'react';
import ProjectLeft from './sub-components/projectLeft';
import ProjectRight from './sub-components/projectRight';
import Background from '../../Images/projectBackground.png';
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
					<ProjectLeft
						name='MangaDoDs'
						number='01'
						position='Developer & Designer'
						image={Project1}
						description='
						In 2019 I was the Lead Developer on the new Squarespace Homepage
						Applying our new branding and Building the page and the main carousel was an interesting challenge. It was a real team effort with the FrontSite Team: Brandon, Crystal, Robyn and Cody. As part of this project we also build a brand new styleguide for all of Squarespace.com'
						client='Squarespace'
						devStack='HTML5, Squarespace, Custom Framework'
					/>
					<ProjectRight
						name='MangaDoDs'
						number='02'
						position='Developer & Designer'
						image={Project1}
						description='
						In 2019 I was the Lead Developer on the new Squarespace Homepage
						Applying our new branding and Building the page and the main carousel was an interesting challenge. It was a real team effort with the FrontSite Team: Brandon, Crystal, Robyn and Cody. As part of this project we also build a brand new styleguide for all of Squarespace.com'
						client='Squarespace'
						devStack='HTML5, Squarespace, Custom Framework'
					/>
					<ProjectLeft
						name='MangaDoDs'
						number='03'
						position='Developer & Designer'
						image={Project1}
						description='
						In 2019 I was the Lead Developer on the new Squarespace Homepage
						Applying our new branding and Building the page and the main carousel was an interesting challenge. It was a real team effort with the FrontSite Team: Brandon, Crystal, Robyn and Cody. As part of this project we also build a brand new styleguide for all of Squarespace.com'
						client='Squarespace'
						devStack='HTML5, Squarespace, Custom Framework'
					/>
					<ProjectRight
						name='MangaDoDs'
						number='04'
						position='Developer & Designer'
						image={Project1}
						description='
						In 2019 I was the Lead Developer on the new Squarespace Homepage
						Applying our new branding and Building the page and the main carousel was an interesting challenge. It was a real team effort with the FrontSite Team: Brandon, Crystal, Robyn and Cody. As part of this project we also build a brand new styleguide for all of Squarespace.com'
						client='Squarespace'
						devStack='HTML5, Squarespace, Custom Framework'
					/>
				</div>
			</div>
		</div>
	);
}

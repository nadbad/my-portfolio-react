import React from 'react';

export default function ProjectLeft({
	name,
	image,
	description,
	position,
	number,
	client,
	devStack,
}) {
	const projectId = `project-${number}`;
	const projectClass = `project-right`;

	const displayMoreProjectInfo = () => {
		let project = document.getElementById(projectId);

		if (project.className === projectClass) {
			project.className = projectClass + ' display-info';
		} else if (project.className !== projectClass) {
			project.className = projectClass;
		}
	};

	return (
		<div className={projectClass} id={projectId}>
			<div className='project-image'>
				<p>#{number}</p>
				<img src={image} alt='Project img' />
			</div>
			<div className='detailed-description'>
				<p className='info-description'>{description}</p>
				<ul>
					<li>
						<h1 className='info-title'>Client ¬</h1>
						<p>{client}</p>
					</li>
					<li>
						<h1 className='info-title'>Dev Stack ¬</h1>
						<p>{devStack}</p>
					</li>
				</ul>
			</div>
			<div className='project-information'>
				<div className='simple'>
					<div className='name'>
						<h2>{name}</h2>
					</div>
					<div className='postion'>
						<p>{position}</p>
					</div>
				</div>
				<div className='view-more'>
					<div className='name'>
						<p onClick={displayMoreProjectInfo}>More Info - </p>
					</div>
					<div className='view-website'>
						<a className='fancy-link' href=''>
							Visit Website -{' '}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

import React from 'react';

export default function Project(name) {
	return (
		<div className='project'>
			<div>
				<img src={name.image} alt='' id='project-image' />
				<img
					src={name.background}
					alt=''
					id='project-image-background'
				/>
				<div className='image-overlay'>
					<p className='project-description'>{name.description}</p>
					<div>
						<a href={name.demoLink} target='_blank'>
							<button className='project-btn1'>
								Demo <i class='fas fa-angle-right'></i>
							</button>
						</a>
						<a href={name.codeLink} target='_blank'>
							<button className='project-btn2'>
								Code <i class='fas fa-angle-right'></i>
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

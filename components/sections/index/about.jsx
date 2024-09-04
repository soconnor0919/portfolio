// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="A multifaceted digital creator, blending technical expertise with creative vision in design, development, and innovative systems."
				/>
				<section className={about.content}>
					
					<div className={about.copy} >
						<CopyBlock 
							title="Skills that drive innovation"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="Beyond my technical expertise in computer science and engineering, I've developed a strong set of soft skills through diverse experiences. My leadership abilities have been honed through roles such as Treasurer of the Bucknell Coffee Society and President of the Bucknell Chem-E-Car Team. I've cultivated excellent time management and multitasking skills by balancing multiple responsibilities, including being a Teaching Assistant for both Computer Science and Physics courses while simultaneously conducting research in Human-Robot Interaction."
						/>
						<BadgesBlock 
							title="Research and development" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="One of the aspects of my research that I particularly enjoy is architecting innovative solutions for complex problems. From developing frameworks for Human-Robot Interaction to designing efficient systems for data collection and analysis, I enjoy working with the many facets of software engineering and research."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'cubes', 		name: 'Software Architecture', 		type: 'fad' },
	{ key: 'user', 			name: 'User-Centered Design', 	type: 'fad' },
	{ key: 'database', 			name: 'Data Analysis', 	type: 'fad' },
	{ key: 'robot', 			name: 'Robotics Integration', 	type: 'far' }
]
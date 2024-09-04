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
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical"
					preTitle="Hardskills"
					subTitle="As a Computer Science and Engineering student, I work in many fields, using a diverse toolset."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock 
							title="Interdisciplinary foundations"
							icon={[ 'fat', 'chart-network' ]}
							copy="With a strong background in both Computer Science and Engineering, I bring a unique perspective to every project. My interdisciplinary approach allows me to tackle complex problems from multiple angles, whether it's developing innovative software solutions or designing efficient systems. I'm constantly learning and evolving to stay at the forefront of technological advancements in fields such as robotics, human-computer interaction, and software engineering."
							iconClass={about.icon}
							containerClass={about.container}
						/>
						<BadgesBlock 
							title="Software I work with" 
							copy="Throughout my academic and professional experiences, I've gained proficiency in a variety of software tools that are essential for modern software development and research. Here are some of the key tools I work with:"
							list={software}
							block="software" 
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
						<BadgesBlock 
							title="Technologies I build with" 
							copy="I deeply enjoy solving problems through code. From the front end all the way to the back end and the APIs in-between. No project is too challenging for me."
							list={tech} 
							block="tech"
							fullContainer="fullContainer" 
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>							
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div>
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const software = [
	{ key: 'vscode', 		name: 'Visual Studio Code', type: 'devicon' },
	{ key: 'intellij', 		name: 'IntelliJ IDEA', 		type: 'devicon' },
	{ key: 'webstorm', 		name: 'WebStorm', 			type: 'devicon' },
	{ key: 'pycharm', 		name: 'PyCharm', 			type: 'devicon' },
	{ key: 'jupyter', 		name: 'Jupyter', 			type: 'devicon' },
	{ key: 'photoshop', 	name: 'Photoshop', 			type: 'devicon' },
	{ key: 'illustrator',	name: 'Illustrator', 		type: 'devicon' },
	{ key: 'figma', 		name: 'Figma', 				type: 'devicon' },
	{ key: 'github', 		name: 'GitHub', 			type: 'devicon' },
	{ key: 'gitlab', 		name: 'GitLab', 			type: 'devicon' }
]

const tech	= [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ key: 'jquery', 		name: 'jQuery', 			type: 'devicon' },
	{ key: 'php', 			name: 'PHP', 				type: 'devicon' },
	{ key: 'java', 			name: 'Java', 				type: 'devicon' },
	{ key: 'python', 		name: 'Python', 			type: 'devicon' },
	{ key: 'c', 			name: 'C', 					type: 'devicon' },
	{ key: 'cplusplus', 			name: 'C++', 				type: 'devicon' },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
	{ key: 'bootstrap', 	name: 'Bootstrap', 			type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
]
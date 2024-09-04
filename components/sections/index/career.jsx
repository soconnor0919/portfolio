// Core packages
import Image from "next/image";
import css 			from '../../../styles/sections/projects/featured.module.scss'
import Badges from "../../utils/badge.list.util";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Career scss
import career from "../../../styles/sections/index/career.module.scss";

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Resume"
          preTitle="Career"
          subTitle="I have gained experience in various roles, contributing to software development, IT administration, media production, and academic research."
        />
        <section className={career.area}>
          {/* Education */}
          <span className={career.sectionHeading}>Education</span>
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Bucknell University</h3>
                <h4>Bachelor of Science in Computer Science and Engineering</h4>
                <h4>Expected Graduation: May 2026</h4>
                <h5>Lewisburg, PA</h5>
              </span>
              <p>
                Cumulative Engineering GPA: 3.90<br></br>
                Dean's List: Fall 2022, Fall 2023, Spring 2024
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>
          
          {/* Experience */}
          <span className={career.sectionHeading}>Experience</span>
          {/* Bucknell */}
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Bucknell University</h3>
                <h4>Jan 2023 - Present · 1 yr 9 mos</h4>
                <h5>Lewisburg, PA</h5>
              </span>
              <p>
                I have held various roles at Bucknell University, including being a Teaching Assistant in various departments, as well as a multi-disciplinary researcher.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>
          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span className={career.positionHeader}>
                  <h3>Computer Science Teaching Assistant</h3>
                  <h4>Jan 2024 - Present · 9 mos</h4>
                </span>
                <p>
                  Assisted Computer Science students during class, working with Java in scrum/agile-based projects.
                </p>
                <Badges list={csci205} block="stack" fullContainer="fullContainer"/>
              </div>
              <div className={career.positionAlt}></div>
            </div>

            <div className={career.position}>
              <div className={career.positionContent}>
                <span className={career.positionHeader}>
                  <h3>Engineering Teaching Assistant</h3>
                  <h4>Aug 2023 - Dec 2023 · 5 mos</h4>
                </span>
                <p>
                  Taught workshops to get first-year engineering students acquainted with the Arduino platform.
                  <br></br>
                  Assisted engineering students during all steps of the design process, including a significant focus on ethics.
                </p>
                <Badges list={engr100} block="stack" fullContainer="fullContainer"/>
              </div>
              <div className={career.positionAlt}></div>
            </div>

            <div className={career.position}>
              <div className={career.positionContent}>
                <span className={career.positionHeader}>
                  <h3>Physics Teaching Assistant</h3>
                  <h4>Aug 2023 - Apr 2024 · 9 mos</h4>
                </span>
                <p>
                  Supported Physics students during laboratory sections, focusing on data analysis with Excel and Logger Pro.
                </p>
                <Badges list={phys212} block="stack" fullContainer="fullContainer"/>
              </div>
              <div className={career.positionAlt}></div>
            </div>

            <div className={career.position}>
              <div className={career.positionContent}>
                <span className={career.positionHeader}>
                  <h3>Computer Science Researcher</h3>
                  <h4>Jan 2023 - Present · 1 yr 9 mos</h4>
                </span>
                <p>
                  Studied scientiﬁc literature and worked to develop a ﬂexible platform to guide the execution of Human-Robot Interaction (HRI) experiments.
                </p>
                <Badges list={csresearch} block="stack" fullContainer="fullContainer"/>
              </div>
              <div className={career.positionAlt}></div>
            </div>

            <div className={career.position}>
              <div className={career.positionContent}>
                <span className={career.positionHeader}>
                  <h3>Chemical Engineering Research Assistant</h3>
                  <h4>Aug 2023 - Present · 1 yr 2 mo</h4>
                </span>
                <p>
                  Developed a sensor to measure and log data for coffee research projects.
                </p>
                <Badges list={cheg} block="stack" fullContainer="fullContainer"/>
              </div>
              <div className={career.positionAlt}></div>
            </div>
          </article>
          {/* RR */}
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Riverhead Raceway</h3>
                <h4>Oct 2020 - Apr 2024 · 3 yrs 6 mos</h4>
                <h5>Riverhead, NY</h5>
              </span>
              <p>
                Worked within multiple roles, generally focusing on software
                development, IT administration, and media production.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>
          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span className={career.positionHeader}>
                  <h3>I.T. Administrator</h3>
                  <h4>Oct 2020 - Apr 2024 · 3 yrs 6 mos</h4>
                </span>
                <p>
                  Deployed and maintained databases, servers, and system backup services.
                  <br></br>
                  Set-up and managed site-wide networks, workstations, timing systems, and media production equipment.
                </p>
                <Badges list={raceway_admin} block="stack" fullContainer="fullContainer"/>
              </div>
              <div className={career.positionAlt}></div>
            </div>

            <div className={career.position}>
              <div className={career.positionContent}>
                <span className={career.positionHeader}>
                  <h3>Software Developer</h3>
                  <h4>Oct 2020 - Apr 2024 · 3 yrs 6 mos</h4>
                </span>
                <p>
                  Developed and maintained web tools to orchestrate driver registration and management.
                  <br></br>
                  Designed and implemented public-facing tools for displaying driver rosters, points, and standings.
                </p>
                <Badges list={raceway_develop} block="stack" fullContainer="fullContainer"/>
              </div>
              <div className={career.positionAlt}></div>
            </div>

            <div className={career.position}>
              <div className={career.positionContent}>
                <span className={career.positionHeader}>
                  <h3>Media Producer</h3>
                  <h4>Oct 2020 - Apr 2024 · 3 yrs 6 mos</h4>
                </span>
                <p>
                  Created graphics and overlays for live video streaming to FloRacing and NBC, enhancing the viewer experience with real-time data integration from our timing systems.
                </p>
                <Badges list={raceway_media} block="stack" fullContainer="fullContainer"/>
              </div>
              <div className={career.positionAlt}></div>
            </div>
          </article>
          {/* MPUFSD */}
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Miller Place Union Free School District</h3>
                <h4>Sep 2019 - Jun 2022</h4>
                <h5>Miller Place, NY</h5>
              </span>
              <p>
                Worked as an intern throughout high school, gaining experience in various school settings, while working with multiple subsets of users.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>
          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span className={career.positionHeader}>
                  <h3>Technology Intern</h3>
                  <h4>Sep 2019 - Jun 2022 · 2 yrs 9 mos</h4>
                </span>
                <p>
                  Assisted faculty and students with personal laptops and department-owned desktop machines.
                  <br></br>
                  Worked with district I.T. staff to deploy district-wide one laptop per person initiative.
                </p>
                <Badges list={mpufsd} block="stack" fullContainer="fullContainer"/>
              </div>
              <div className={career.positionAlt}></div>
            </div>
          </article>
          {/* Activities */}
        </section>
      </Container>
      {/* <div className={css.bgContainer}>
				<span className={css.orbitalBg}>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
				</span>
				<span className={css.afterGlowBg}></span>
			</div> */}
    </Section>
  );
}

const csci205 = [
  { key: "java", name: "Java", type: "devicon" },
  { key: "intellij", name: "IntelliJ", type: "devicon" },
  { key: "vscode", name: "VSCode", type: "devicon" },
  { key: "scrum", name: "Scrum", type: "text" },
  { key: "agile", name: "Agile", type: "text" },
];

const phys212 = [
  { key: "microsoft", name: "Excel", type: "text" },
  { key: "logger", name: "Logger Pro", type: "text" },
];

const engr100 = [
  { key: "arduino", name: "Arduino", type: "devicon" },
  { key: "engineering", name: "Engineering Design Process", type: "text" },
];

const cheg = [
  { key: "arduino", name: "Arduino", type: "devicon" },
  { key: "python", name: "Python", type: "devicon" },
];

const csresearch = [
  { key: "grid", name: "ROS", type: "fas" },
  { key: "robot", name: "Human-Robot Interaction", type: "fas" },
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "sass", name: "SASS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
];

const raceway_develop = [
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "php", name: "PHP", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "sass", name: "SASS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
];

const raceway_admin = [
  { key: "timer", name: "Timing Systems", type: "fas" },
  { key: "network-wired", name: "Networking", type: "fas" },
  { key: "cloud", name: "Servers", type: "fas" },
  { key: "database", name: "Databases", type: "fas" },
  { key: "save", name: "Backup", type: "fas" },
];

const raceway_media = [
  { key: "photoshop" , name: "Photoshop", type: "devicon" },
  { key: "illustrator", name: "Illustrator", type: "devicon" },
  { key: "premierepro", name: "Premiere Pro", type: "devicon" },
  { key: "video", name: "Video Production", type: "fas" },
  { key: "pencil", name: "Graphics", type: "fas" },
  { key: "signal-stream", name: "Live Streaming", type: "fas" },
];

const mpufsd = [
  { key: "laptop", name: "Laptop configuration", type: "fas" },
  // Microsoft azure, office, HP printers, google suite
  { key: "azure", name: "MS Azure", type: "devicons" },
  { key: "office", name: "Google Suite", type: "text" },
  { key: "printer", name: "printer maintenance", type: "fas" },
  { key: "office", name: "MS Office", type: "fas" },

];
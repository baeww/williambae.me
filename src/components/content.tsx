'use client'

import React from 'react'

import { usePathname } from 'next/navigation'

const Content: React.FC = () => {

  return (
    <main className="flex-grow p-4 text-base">
      {usePathname() === '/about' && <About />}
      {usePathname() === '/experience' && <Experience />}
      {usePathname() === '/projects' && <Projects />}
      {usePathname() === '/other' && <Other />}
      {usePathname() === '/' && <About />}
      {/* <About />
      <Experience />
      <Projects />
      <Other /> */}
    </main>
  )
}

const About: React.FC = () => (
  <div className='h-full'>
    <h1 >about me</h1>
    <br></br>
    <br></br>
    <p>currently studying Computer Science at Virginia Tech</p>
    <p>minor in language sciences</p>
    <br></br>
    <p>software engineer intern at Appian this summer</p>
    <br></br>
    <p>grew up in: Seoul, New Delhi, Beijing, Ilsan, Kansas City, Northern Virginia</p>
    <br></br>
    <p>recently been interested in all things Gen AI, AR, and NLP</p>
    <br></br>
    <p>in my free time i like to play the clarinet, read, skateboard, and play ball sports </p>
    <br></br>
    <p>website under construction :D</p>
    
  </div>
)

const Experience: React.FC = () => (
  <div>
    <h1 >experience</h1>
    <a href='https://drive.google.com/drive/folders/1cOlKX9WCk1CG_8UHYeKe2OJFjIVI4Pj1?usp=drive_link' target="_blank" className='underline'>resume</a>
    <br></br>
    <br></br>
    <br></br>
    <p>Software Engineer Intern @ <a href='https://appian.com/' target = "_blank" className='underline'>Appian Corporation</a></p>
    <ul className="list-outside ml-4 text-sm">
      <li>Databases & Search Team:</li>
      <li>RDBMS Rust Auth Plugin: authorization/authentication plugin for podified Appian RDBMS. First use of Rust at Appian! </li>
      <li>DSCS Properties: pipeline to add additional connection properties to Appian connections with external database systems</li>
      <li>aSAILLint: accessibility linter for Appian SAIL low code development</li>
    </ul>
    <br></br>
    <p>Software Engineer Intern @ <a href='https://www.collinsaerospace.com/' target = "_blank" className='underline'>Collins Aerospace</a></p>
    <ul className="list-outside ml-4 text-sm">
      <li>Virtual Reality Maintenance Trainer: learn to assemble/maintain any system from the safety and convenience of your headset</li>
    </ul>
    <br></br>
    <p>Undergraduate Researcher @ <a href='https://hume.vt.edu/' target = "_blank" className='underline'>The Hume Center</a></p>
    <ul className="list-outside ml-4 text-sm">
      <li>(2024-2025) NetGen/AgentGen : Large language models for network config files and robustness testing of reinforced learning agents</li>
      <li>(2023-2024) Covert Communications : Modification of Large Language Models to generate content with hidden messages</li>
      <li>(2022-2023) Russia-Ukraine Social Media Analytics : Transformer-based classification and identification of war-centric misinformation and its traits</li>
    </ul>
    <br></br>
    <p>Undergraduate Research Assistant @ <a href='https://gemlab-vt.github.io/' target = "_blank" className='underline'>Generative Modeling(GEM) Lab at VT </a></p>
    <br></br>
    <p>Programming languages I&apos;ve used:<br></br>Python, Java, C, C++, C#, JS, TS, HTML, CSS, Rust</p>
  </div>
)

const Projects: React.FC = () => (
  <div>
    <h2>projects</h2>
    <p>coming soon...</p>
  </div>
)

const Other: React.FC = () => (
  <div>
    <h1>other random things i found cool</h1><br/>
    <a href='https://www.youtube.com/watch?v=EC8_zcGEZjc' target="_blank" className='underline'>clarinet idol</a><br/>
    <a href='https://www.fragrantica.com/perfume/Carolina-Herrera/Bad-Boy-Cobalt-Parfum-Electrique-71888.html' target="_blank" className='underline'>my first cologne :D</a><br/>
    <a href='https://www.youtube.com/@HarryMack' target="_blank" className='underline'>favorite freestyle rapper</a><br/>
    <p>Courses I&apos;m taking next semester:</p>
    <ul className="list-outside ml-4 text-sm">
      <li>CS 4104: Data and Algorithm Analysis</li>
      <li>ARBC 1105: Elementary Arabic</li>
      <li>CS 3654: Introductory Data Analytics and Visualization</li>
      <li>CS 4604: Introduction to Data Base Management Systems</li>
      <li>ENGL 3144: Language & Ethnicity in the US</li>
    </ul>
    
    <br></br>
    <p>more coming soon</p>
  </div>
)

export default Content;
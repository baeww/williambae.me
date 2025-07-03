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
    <p>recently been interested in all things generative AI and creator economy</p>
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
      <li>Scale Up Sync Team (2025):</li>
      <li>Working on making synced data capabilities bigger and better.</li>
      <li>Currently in progress!</li>
      <br></br>
      <li>Databases & Search Team (2024):</li>
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
    <p>Programming languages I&apos;ve used most often:<br></br>Python, Java, C, C++, C#, JS, TS, HTML, CSS, Rust</p>
  </div>
)

const Projects: React.FC = () => {
  const [openProject, setOpenProject] = React.useState<string | null>(null);

  const projects = [
    {
      name: "Petals of Me - AI-Flower Garden Journal",
      images: [
        "/images/petals/Screenshot 2025-06-03 233030.png",
        "/images/petals/Screenshot 2025-06-03 233358.png",
        "/images/petals/Screenshot 2025-06-03 233431.png"
      ]
    },
    {
      name: "CREAtelier - Multi-Critic Agentic Fashion Design",
      images: []
    },
    {
      name: "Yapper - Daily Question Social Media App",
      images: [
        "/images/yapper/Screenshot 2025-06-04 012558.png"
      ]
    },
    {
      name: "Echo - Real-Time AR Conversation Insights",
      images: [
        "/images/echo/image.png",
        "/images/echo/image2.png"
      ]
    },
    {
      name: "Commsly - Vibe Check Discord Bot",
      images: [
        "/images/commsly/image.png"
      ]
    },
    {
      name: "Unity Games",
      images: [
        "/images/unity/Screenshot 2025-06-08 213339.png",
        "/images/unity/Screenshot 2025-06-08 213731.png",
        "/images/unity/Screenshot 2025-06-08 213821.png"
      ]
    }
  ];

  return (
    <div className="space-y-4">
      <h2>personal projects</h2>
      <br></br>
      <br></br>
      <div className="space-y-2">
        {projects.map((project, index) => (
          <div key={index} className="border-b border-gray-200 pb-1">
            <button
              onClick={() => setOpenProject(openProject === project.name ? null : project.name)}
              className="w-full text-left flex justify-between items-center hover:text-blue-600 transition-colors"
            >
              <span>{project.name}</span>
              <span className="text-xl">{openProject === project.name ? '−' : '+'}</span>
            </button>
            {openProject === project.name && project.images.length > 0 && (
              <div className="mt-2 flex overflow-x-auto gap-4 pb-2">
                {project.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`${project.name} screenshot ${imgIndex + 1}`}
                    className="w-auto h-48 object-contain rounded-lg shadow-md flex-shrink-0"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
        <p>coming soon...</p>
      </div>
    </div>
  );
}

const Other: React.FC = () => (
  <div>
    {/* <h1>other random things i found cool</h1><br/>
    <a href='https://www.youtube.com/watch?v=EC8_zcGEZjc' target="_blank" className='underline'>clarinet idol</a><br/> */}
    

    
    <br></br>
    <p>more coming soon</p>
  </div>
)

export default Content;
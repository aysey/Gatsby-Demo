import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ayse Yildizhan',
  subtitle: 'Full Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '•	Skilled Developer & Analyst with exceptional technical capabilities and five years of practical experience in software development, digital transformation projects for both Start-Ups and large corporations with well versed in all stages of the software engineering lifecycle backed up by a degree in Engineering.',
  paragraphTwo: '•	Strong and highly analytical mindset; Expert level knowledge of data science and statistical modelling in Marketing, Sales and Financial Technology fields.',
  paragraphThree: '•	Seamlessly integrates into Agile environments; collaborates with expert stakeholders across the business to evaluate and define requirements that significantly improve business processes. ',
  resume: 'https://www.linkedin.com/in/ayseyildizhan/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ayseyildizhan/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/aysey',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

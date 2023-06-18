const fetch = require('node-fetch');

console.log(`
██╗░░██╗██╗████████╗██████╗░░█████╗░███╗░░██╗██╗░░██╗
██║░░██║██║╚══██╔══╝██╔══██╗██╔══██╗████╗░██║╚██╗██╔╝
███████║██║░░░██║░░░██████╦╝██║░░██║██╔██╗██║░╚███╔╝░
██╔══██║██║░░░██║░░░██╔══██╗██║░░██║██║╚████║░██╔██╗░
██║░░██║██║░░░██║░░░██████╦╝╚█████╔╝██║░╚███║██╔╝╚██╗
╚═╝░░╚═╝╚═╝░░░╚═╝░░░╚═════╝░░╚════╝░╚═╝░░╚══╝╚═╝░░╚═╝

Hi there! 👋 I'm Your Name, a Data Analyst using Machine Learning.
`);

console.log(`🔎 About Me
I am a data analyst with expertise in machine learning, passionate about transforming raw data into meaningful insights. I have a strong background in statistics and programming and excel at finding patterns and trends in complex datasets. My goal is to utilize data-driven approaches to drive informed decision-making and solve real-world problems.

📚 Skills
`);
const skills = [
  { name: 'Data Analysis', icon: '📊' },
  { name: 'Machine Learning', icon: '⚙️' },
  { name: 'Statistical Modeling', icon: '📈' },
  { name: 'Python', icon: '🐍' },
  { name: 'SQL', icon: '💾' },
  { name: 'Data Visualization', icon: '📊' },
  { name: 'Data Cleaning', icon: '🧹' },
  { name: 'Exploratory Data Analysis', icon: '🔎' },
];

skills.forEach((skill) => {
  console.log(`${skill.icon} ${skill.name}`);
});

console.log(`
🔬 Projects
`);
const projects = [
  {
    name: 'Project 1',
    description: 'Description of the project. Showcase your work and provide key details, such as the problem statement, techniques used, and results achieved.',
    link: 'link-to-project-repository',
  },
  {
    name: 'Project 2',
    description: 'Description of the project. Showcase your work and provide key details, such as the problem statement, techniques used, and results achieved.',
    link: 'link-to-project-repository',
  },
];

projects.forEach((project, index) => {
  console.log(`Project ${index + 1}: [${project.name}](${project.link})
${project.description}
`);
});

console.log(`
🌱 Currently Learning
I'm always looking to expand my knowledge and stay updated with the latest advancements in the field of data analytics and machine learning.

📊 GitHub Stats
`);

async function getGitHubStats(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user

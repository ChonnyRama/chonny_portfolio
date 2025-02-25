const frontSkills = [
  {
    imgSrc: '/skills/css.png',
    label: 'CSS',
    desc: 'Styling & Layout',
  },
  {
    imgSrc: '/skills/js.png',
    label: 'JavaScript',
    desc: 'Dynamic Behavior',
  },
  {
    imgSrc: '/skills/html.png',
    label: 'HTML',
    desc: 'Page Structure',
  },
  {
    imgSrc: '/skills/atom.png',
    label: 'React',
    desc: 'Component-Based -UI',
  },

  {
    imgSrc: '/skills/tailwind.png',
    label: 'Tailwind CSS',
    desc: 'CSS Framework',
  },
  {
    imgSrc: '/skills/jest.png',
    label: 'Jest',
    desc: 'JS Testing',
  },
];

const backSkills = [
  {
    imgSrc: '/skills/python.png',
    label: 'Python',
    desc: 'Scripting',
  },
  {
    imgSrc: '/skills/node-js.png',
    label: 'Node.js',
    desc: 'Backend JS',
  },
  {
    imgSrc: '/skills/express.png',
    label: 'Express.js',
    desc: 'Node Framework',
  },
  {
    imgSrc: '/skills/sql-server.png',
    label: 'SQL',
    desc: 'Relational Database',
  },
  {
    imgSrc: '/skills/mongo.png',
    label: 'MongoDB',
    desc: 'NoSQL Database',
  },
  {
    imgSrc: '/skills/prisma-4.svg',
    label: 'Prisma',
    desc: 'Database ORM',
  },
];

const cloudSkills = [
  {
    imgSrc: '/skills/aws.png',
    label: 'AWS',
    desc: 'Cloud Computing',
  },
  {
    imgSrc: '/skills/gcp.png',
    label: 'GCP',
    desc: 'Cloud Computing',
  },
  {
    imgSrc: '/skills/azure.png',
    label: 'Azure',
    desc: 'Cloud Computing',
  },
];

const devOpsSkills = [
  {
    imgSrc: '/skills/jenkings.png',
    label: 'Jenkins',
    desc: 'Continuous Integration',
  },
  {
    imgSrc: '/skills/docker.webp',
    label: 'Docker',
    desc: 'Containerization',
  },
  {
    imgSrc: '/skills/kubernetes.png',
    label: 'Kubernetes',
    desc: 'Container Orchestration',
  },
  {
    imgSrc: '/skills/ansible.png',
    label: 'Ansible',
    desc: 'Infrastructure',
  },
];

export default function Skill() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">Essential Tools I use</h2>
      </div>
    </section>
  );
}

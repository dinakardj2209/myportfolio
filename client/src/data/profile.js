/**
 * PORTFOLIO DATA PIPELINE
 * ───────────────────────
 * Edit this file to populate your portfolio.
 * Replace empty strings, placeholder URLs, and sample entries with your details.
 */

export const profile = {
  name: 'DINAKAR D J',
  title: 'Full Stack Developer',
  tagline: 'Building scalable, high-performance applications with clean, maintainable code.',
  summary:
    'Computer Science graduate with experience in Software Development, Data Analytics, Cloud Technologies like AWS and SAP and solving complex problems with efficient solutions by using Data Structures & Algorithms using C/C++ programming languages. Also proficient in designing scalable MERN stack applications, REST APIs and database-driven solutions with strong analytical skills and problem-solving capabilities. Proficient in collaborative software development using Git, Agile practices and CI/CD workflows to streamline development, testing and deployment process',
  email: 'dinakardj2209@gmail.com',
  phone: '+91 6382590741',
  location: 'Bangalore, India',
  profileImage: '/images/mypic.jpeg',
  logoPath: '/logo.webp',
  resumePath: '/resume/DINAKAR-DJ-Resume.pdf',
};

export const socialLinks = {
  instagram: 'https://www.instagram.com/_dinakar_d_j',
  twitter: 'https://x.com/myselfDINAKAR02',
  linkedin: 'https://www.linkedin.com/in/userdinakardj2209',
  github: 'https://github.com/dinakardj2209',
  leetcode: 'https://leetcode.com/u/imDINAKAR',
};

export const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'career', label: 'Career Path' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const careerPath = [
  {
    year: '2021',
    title: 'PUC — PCMCs',
    description: 'Completed pre-university education with focus on Physics, Chemistry, Mathematics and Computer Science.',
    status: 'completed',
  },
  {
    year: '2021–2025',
    title: 'B.E. Computer Science & Engineering',
    description: 'Pursued engineering degree with focus on software development, DSA and full-stack technologies.',
    status: 'completed',
  },
  {
    year: '2025-2026',
    title: 'Software Developer',
    description: 'Hands-on experience with MERN stack, REST APIs and agile development practices.',
    status: 'completed',
  },
  // {
  //   year: '2026',
  //   title: 'Software Developer — MNC Role',
  //   description: 'Targeting top-tier MNC opportunities in full-stack and cloud-native development.',
  //   status: 'current',
  // },
  // {
  //   year: 'Future',
  //   title: 'Senior Engineer / Tech Lead',
  //   description: 'Grow into architecture, system design and engineering leadership roles.',
  //   status: 'upcoming',
  // },
];

export const experience = [
  {
    company: 'Sumeru Digital Solutions PVT LTD',
    role: 'Software Developer',
    period: 'Nov 2025 – Feb 2026',
    location: '',
    highlights: [
      'Developed and deployed scalable web applications using the MERN stack.',
      'Built RESTful APIs and performed testing with Postman.',
      'Implemented authentication and authorization for secure access control.',
      'Optimized API response times and improved UI/UX responsiveness.',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Git', 'Postman', 'AWS', 'Docker', 'Kubernetes'],
  },
  {
    company: 'VTU',
    role: 'Web Development & React with Python',
    period: 'Feb 2025 – May 2025',
    location: '',
    highlights: [
      'Completed hands-on training in Full Stack Development.',
      'Developed 5+ responsive web interfaces using React.js.',
      'Implemented CRUD operations and integrated REST APIs.',
      'Built reusable React components with component-based architecture.',
    ],
    technologies: ['React', 'Python', 'HTML5', 'CSS3', 'JavaScript', 'REST API'],
  },
];

export const achievements = [
  {
    title: '',
    description: '',
    year: '',
    icon: 'trophy',
  },
  {
    title: '',
    description: '',
    year: '',
    icon: 'star',
  },
  {
    title: '',
    description: '',
    year: '',
    icon: 'award',
  },
];

export const certificates = [
  {
    title: 'JavaScript Course Completion Certificate',
    issuer: 'Infosys Springboard',
    year: '2024',
    link: 'https://drive.google.com/file/d/1WuZrOvrN-TiBj8M3p2-OnVy52p_XInZx/view?usp=drivesdk',
  },
  {
    title: 'AWS Certified Developer — Associate',
    issuer: 'Infosys Springboard',
    year: '2025',
    link: 'https://drive.google.com/file/d/1QhGFu3FEVMQGxW4qqRbyHEA6zwjNeJjq/view?usp=drivesdk',
  },
  {
    title: 'SAP Certified — Backend Developer (ABAP Cloud)',
    issuer: 'SAP Learning',
    year: '2026',
    link: '',
  },
  {
    title: 'SAP Cloud ALM — Course Completion',
    issuer: 'SAP Learning',
    year: '2026',
    link: 'https://badger.learning.sap.com/verify/xures-bylap-bekod-kopud-vuhas',
  },
  {
    title: 'Exploring SAP BTP — Course Completion',
    issuer: 'SAP Learning',
    year: '2026',
    link: 'https://badger.learning.sap.com/verify/xyfas-kemus-vanon-lyhyk-rofyf',
  },
];

export const education = [
  {
    institution: 'Sri Sairam College of Engineering (VTU), Bangalore',
    degree: 'B.E. — Computer Science and Engineering',
    period: '2025',
    score: 'CGPA — 7.1',
    highlights: [],
  },
  {
    institution: 'Holy Cross Matric Higher Secondary School',
    degree: 'PUC — PCMCs',
    period: '2021',
    score: 'Percentage — 82.4%',
    highlights: [],
  },
];

export const skillCategories = [
  {
    category: 'Languages',
    color: 'blue',
    skills: ['C', 'C++', 'JavaScript', 'Python', 'SQL'],
  },
  {
    category: 'Frontend',
    color: 'cyan',
    skills: ['React.js', 'HTML5', 'CSS3', 'Angular', 'JSON'],
  },
  {
    category: 'Backend & Database',
    color: 'green',
    skills: ['Node.js', 'Express.js', 'NoSQL', 'PostgreSQL', 'REST API'],
  },
  {
    category: 'Cloud & Enterprise',
    color: 'purple',
    skills: ['AWS', 'SAP Basis', 'SAP BTP', 'ABAP Cloud'],
  },
  {
    category: 'Tools & Practices',
    color: 'red',
    skills: ['Git', 'GitHub', 'CI/CD', 'DSA', 'MongoDB', 'Agile', 'Postman', 'Google OAuth', 'Docker'],
  },
];

export const projects = [
  {
    title: 'Appraisal Performance and Payslip Management',
    description:
      'Role-based Performance Appraisal & Payroll system with secure authentication, digital payslip generation, approval workflows, and batch payroll processing.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Puppeteer', 'Express.js', 'NoSQL'],
    liveUrl: 'https://appraisal.sumerudigital.com/',
    githubUrl: '',
    featured: false,
  },
  {
    title: 'Smart bookmark apk',
    description: '',
    technologies: ['TypeScript','Next.js','Google OAuth', 'Supabase', 'PostgreSQL'],
    liveUrl: 'https://smart-bookmark-app-eta-ruby.vercel.app',
    githubUrl: 'https://github.com/dinakardj2209/smart-bookmark-app',
    featured: false,
  },
  {
    title: 'Malaria Detection — Deep Learning',
    description:
      'Web application for malaria detection using microscopic blood images with 90%+ accuracy through deep learning integration.',
    technologies: ['Python', 'Deep Learning', 'React'],
    liveUrl: '',
    githubUrl: '',
    featured: false,
  },
  {
    title: 'Cab Booking System',
    description:
      'User-friendly platform for customers and drivers to manage trips with secure personal data handling and CRUD operations.',
    technologies: ['Python', 'SQL'],
    liveUrl: '',
    githubUrl: '',
    featured: false,
  },
  {
    title: '',
    description: '',
    technologies: [],
    liveUrl: '',
    githubUrl: '',
    featured: false,
  },
];

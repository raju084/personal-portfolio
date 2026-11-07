export const profile = {
  name: "Bhagya Raju Nattala",
  initials: "BR",
  title: "Full-Stack Developer",
  roles: [
    "Full-Stack Developer",
    "React & TypeScript Specialist",
    "Django & PostgreSQL Engineer",
    "AI & Machine Learning Enthusiast",
  ],
  location: "Hyderabad, Telangana, India",
  phone: "+91 9177541754",
  email: "nattalabhagyaraju@gmail.com",
  linkedin: "https://linkedin.com/in/nattala-bhagya-raju-15215b271",
  github: "https://github.com/raju084",
  resumeUrl: "#contact", // Can be replaced with actual PDF file path in public/ or Google Drive link
  availability: "Available for Full-Time Roles & High-Impact Projects",
  summary:
    "Proactive Full-Stack Developer with hands-on experience delivering production-grade web applications and AI-driven platforms. Experienced across the full lifecycle—from architecting responsive React.js & TypeScript frontends to developing secure RESTful APIs with Django (Python) and managing optimized PostgreSQL relational databases. Proven track record in implementing biometric authentication, automated workflows, Coolify & Docker deployments, and machine learning models.",
};

export const tagline =
  "I engineer secure, high-performance web applications—bridging intuitive frontend user experiences with resilient, scalable backend architectures and intelligent systems.";

export const stats = [
  { value: "6+", label: "Months Production Experience", hint: "Make Root • AI EdTech Platform" },
  { value: "4+", label: "Full-Stack & ML Projects", hint: "Enterprise ESG, EdTech, ML & IFIS" },
  { value: "8.0", label: "CGPA in B.Tech", hint: "Computer Science (AI & ML) • CMRIT" },
  { value: "6", label: "Professional Certifications", hint: "Infosys, IBM, AICTE & HackerRank" },
];

export const focusAreas = [
  {
    title: "Modern Frontend Architecture",
    description:
      "Crafting responsive, accessible, and high-performance user interfaces with clean state management, modular components, and fluid micro-interactions.",
    items: ["React.js", "TypeScript", "Tailwind CSS", "Angular", "HTML5 & Modern CSS"],
  },
  {
    title: "Resilient Backend & API Systems",
    description:
      "Engineering scalable RESTful architectures featuring robust JWT authentication, role-based access control (RBAC), multi-tenancy, and auditable workflows.",
    items: ["Django REST Framework", "Python", "Node.js & Express", "ASP.NET Core Web API", "C#"],
  },
  {
    title: "Databases, DevOps & AI/ML",
    description:
      "Designing relational schemas in PostgreSQL, query optimization, machine learning modeling (Random Forest), and deployment management with Coolify & Docker.",
    items: ["PostgreSQL", "Machine Learning", "Docker", "Coolify", "CI/CD (GitHub Actions)", "Git"],
  },
];

export const experience = [
  {
    role: "Software Development Intern",
    company: "Make Root",
    location: "Hyderabad, India",
    period: "Oct 2025 – Apr 2026",
    project: "Professor – AI-Powered EdTech Platform",
    badge: "Enterprise Internship",
    highlights: [
      "Developed and enhanced an AI-powered EdTech platform by implementing core modules such as AI-driven automation, biometric authentication, Excel integration, and WhatsApp integration.",
      "Diagnosed and resolved complex bugs across the stack, significantly improving system performance, reliability, and user experience.",
      "Built a responsive and scalable frontend using React.js with TypeScript and developed secure RESTful APIs using Django (Python).",
      "Designed and managed relational databases using PostgreSQL, ensuring efficient data storage, rapid querying, and strict transactional integrity.",
      "Contributed to end-to-end full-stack development, ensuring seamless integration between frontend interfaces, backend services, and database systems.",
      "Deployed and managed the application using Coolify, collaborating within an agile team to deliver high-quality features on schedule.",
    ],
  },
];

export const projectCategories = [
  "All",
  "React & Django",
  "Python & AI/ML",
  "MERN Stack",
  "Angular & .NET",
] as const;

export const projects = [
  {
    title: "Earthquake Early Warning System (EEW)",
    category: "Python & AI/ML",
    featured: true,
    tagline: "Machine learning-based earthquake early warning system predicting earthquake epicenters in near real-time.",
    stack: ["Python", "Machine Learning", "Random Forest", "Scikit-Learn", "Pandas", "NumPy"],
    github: "https://github.com/raju084",
    demo: "",
    highlights: [
      "Developed a machine learning-based earthquake early warning (EEW) system using Random Forest to predict earthquake epicenters.",
      "Achieved a Mean Absolute Error (MAE) of 2.88 km, optimizing the model for accurate and near real-time predictions.",
      "Utilized Japan seismic datasets to train and validate the model, improving reliability and performance.",
      "Contributed to disaster risk reduction by enabling faster and more accurate early warning alerts.",
    ],
  },
  {
    title: "Enterprise Carbon Data Ingestion & Audit Platform",
    category: "React & Django",
    featured: true,
    tagline: "Enterprise ESG data platform for carbon accounting and regulatory audit compliance.",
    stack: ["React.js", "Django REST Framework", "PostgreSQL", "Docker", "Render", "Tailwind CSS"],
    github: "https://github.com/raju084",
    demo: "",
    highlights: [
      "Architected an enterprise-level data pipeline to ingest, normalize, and validate carbon emissions data across SAP records, utility bills, and corporate travel manifests.",
      "Implemented multi-tenant tenant isolation, Scope 1, 2, and 3 emissions tracking, and immutable audit logs for strict sustainability compliance.",
      "Built interactive sustainability analyst dashboards equipped with status validation workflows, review checkpoints, and discrepancy flaggers.",
      "Containerized backend and frontend environments using Docker, configuring continuous integration and cloud deployment via Render.",
    ],
  },
  {
    title: "SmartQuiz – Interactive Exam & Assessment Engine",
    category: "MERN Stack",
    featured: false,
    tagline: "High-concurrency online examination portal with anti-cheat timers and real-time grading.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Tailwind CSS"],
    github: "https://github.com/raju084",
    demo: "",
    highlights: [
      "Built an intuitive candidate test portal featuring synchronized question timers, anti-cheat state monitoring, and automated result calculation.",
      "Implemented secure role-based access control (Admin vs. Candidate) utilizing encrypted JWT tokens and server-side route guards.",
      "Designed an administrator management console for real-time exam creation, question bank categorization, and dynamic candidate analytics.",
    ],
  },
  {
    title: "Interview Failure Intelligence System (IFIS)",
    category: "Angular & .NET",
    featured: false,
    tagline: "AI-guided diagnostic analytics system tracking recurring interview rejection patterns.",
    stack: ["Angular", "ASP.NET Core Web API", "Entity Framework Core", "SQL Server", "Chart.js", "GitHub Actions"],
    github: "https://github.com/raju084",
    demo: "",
    highlights: [
      "Architected an intelligence analytics platform that maps candidate interview history to identify technical, behavioral, and confidence gaps.",
      "Engineered diagnostic engines: 'Failure DNA Profile', 'Skill Decay Detection', and 'Career Risk Index' providing tailored improvement trajectories.",
      "Developed high-throughput backend services using ASP.NET Core Web API and Entity Framework Core with optimized SQL Server stored queries.",
      "Constructed an Angular Material dashboard visualizing candidate metrics with Chart.js and integrated GitHub Actions for automated build and release.",
    ],
  },
];

export const skillGroups = [
  {
    label: "Languages",
    category: "Core",
    items: [
      { name: "Python", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "C#", level: "Proficient" },
      { name: "SQL", level: "Proficient" },
    ],
  },
  {
    label: "Frontend",
    category: "Client-Side",
    items: [
      { name: "React.js", level: "Advanced" },
      { name: "Next.js", level: "Familiar" },
      { name: "Angular", level: "Proficient" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "HTML5 & CSS3", level: "Expert" },
      { name: "State Management", level: "Proficient" },
    ],
  },
  {
    label: "Backend & APIs",
    category: "Server-Side",
    items: [
      { name: "Django REST Framework", level: "Advanced" },
      { name: "Django (Python)", level: "Advanced" },
      { name: "Node.js & Express", level: "Advanced" },
      { name: "ASP.NET Core Web API", level: "Proficient" },
      { name: "RESTful API Design", level: "Advanced" },
      { name: "JWT & RBAC Auth", level: "Advanced" },
    ],
  },
  {
    label: "Databases",
    category: "Data Layer",
    items: [
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MongoDB", level: "Proficient" },
      { name: "SQL Server", level: "Proficient" },
      { name: "Database Schema Design", level: "Advanced" },
    ],
  },
  {
    label: "DevOps & Tools",
    category: "Workflow",
    items: [
      { name: "Coolify", level: "Proficient" },
      { name: "Docker", level: "Proficient" },
      { name: "Git & GitHub", level: "Advanced" },
      { name: "CI/CD (GitHub Actions)", level: "Proficient" },
      { name: "Render", level: "Proficient" },
      { name: "Postman", level: "Advanced" },
    ],
  },
  {
    label: "AI & Machine Learning",
    category: "Intelligence",
    items: [
      { name: "Random Forest", level: "Advanced" },
      { name: "Scikit-Learn", level: "Proficient" },
      { name: "Pandas & NumPy", level: "Advanced" },
      { name: "Model Optimization", level: "Proficient" },
    ],
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    school: "CMR Institute of Technology, Hyderabad",
    period: "Nov 2021 – Apr 2025",
    detail: "CGPA: 8.0 / 10.0",
    highlights:
      "Core coursework: Artificial Intelligence & Machine Learning, Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Web Technologies.",
  },
  {
    degree: "Intermediate (MPC – Mathematics, Physics, Chemistry)",
    school: "Sri Chaitanya Junior College",
    period: "Jun 2019 – Apr 2021",
    detail: "Percentage: 90%",
    highlights: "Focus on higher secondary Mathematics, Physics, Chemistry, and analytical problem-solving.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    school: "Sri Chaitanya High School",
    period: "Jun 2018 – Apr 2019",
    detail: "Percentage: 98%",
    highlights: "Completed secondary education with high academic distinction.",
  },
];

export const certifications = [
  { name: "AI & Machine Learning", issuer: "AICTE EduSkills", year: "2024" },
  { name: "Java Programming", issuer: "Infosys Springboard", year: "2024" },
  { name: "Python Programming", issuer: "Infosys Springboard", year: "2024" },
  { name: "MySQL Certification", issuer: "HackerRank", year: "2024" },
  { name: "Frontend Development", issuer: "IBM SkillsBuild", year: "2023" },
  { name: "MERN Stack Specialization", issuer: "Udemy", year: "2023" },
];

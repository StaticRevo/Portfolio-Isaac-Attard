export type SocialLink = {
  label: string;
  href: string;
  kind: "linkedin" | "github" | "mail";
};

export type Highlight = {
  title: string;
  description: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  skills: string[];
};

export type EducationItem = {
  school: string;
  period: string;
  degree: string;
  honour?: string;
  focus: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Project = {
  title: string;
  subtitle: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  image: string;
  repo: string;
  demo: string;
};

export type Certification = {
  name: string;
  code: string;
  accent: string;
};

export const profile = {
  name: "Isaac Attard",
  jobTitle: "Software Developer | Junior Technical Consultant",
  location: "Malta",
  intro:
    "I build thoughtful software that connects business needs with practical engineering solutions. With a First Class Honours degree in Software Development and hands-on experience in consulting and application delivery, I enjoy turning ideas into reliable digital products.",
  heroTagline: "Building Software. Solving Problems. Exploring Technology.",
  profileImage: "/profile-placeholder.svg",
  cvLink: "/isaac-attard-cv.txt",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const aboutHighlights: Highlight[] = [
  {
    title: "First Class Honours Graduate",
    description: "Graduated from the University of Malta with a B.Sc. (Hons) in Information Technology (Software Development).",
  },
  {
    title: "Professional Consulting Experience",
    description: "Delivered consulting work and application customisation in a professional environment at KPMG Crimsonwing.",
  },
  {
    title: "Microsoft Certified",
    description: "Working with Microsoft Power Platform, Azure fundamentals and practical business-focused solutions.",
  },
  {
    title: "Software Engineering & AI Projects",
    description: "Built solutions spanning web applications, machine learning, databases and software design.",
  },
];

export const experienceTimeline: Experience[] = [
  {
    company: "KPMG Crimsonwing",
    role: "Junior Technical Consultant",
    period: "2025 to Present",
    summary:
      "Support application development and customisation, working with Microsoft Power Platform and CRM solutions while translating business requirements into technical delivery. Contribute to software implementation, troubleshooting, and maintenance across projects in collaboration with development teams.",
    skills: [
      "Power Platform",
      "CRM Development",
      "Application Customisation",
      "Testing",
      "Troubleshooting",
      "Requirements Translation",
    ],
  },
  {
    company: "SCAN",
    role: "Sales Representative",
    period: "2024 to 2025",
    summary:
      "Provided technical advice on hardware and software, supported customers, resolved technical issues, and communicated clearly to help meet customer needs.",
    skills: ["Customer Support", "Technical Advice", "Troubleshooting", "Communication"],
  },
  {
    company: "Ministry for Agriculture, Fisheries and Animal Rights",
    role: "Additional Professional Experience",
    period: "2021 to 2023",
    summary:
      "Contributed to operational and digital support work in a public-sector environment, with a focus on practical problem-solving and task execution.",
    skills: ["Operations", "Documentation", "Support", "Problem Solving"],
  },
  {
    company: "Enemalta plc",
    role: "Additional Professional Experience",
    period: "2021 to 2023",
    summary:
      "Worked in a technical and service-oriented environment, supporting day-to-day operational needs and contributing to reliable delivery.",
    skills: ["Support", "Operations", "Technical Work", "Stakeholder Coordination"],
  },
  {
    company: "Foundation for Educational Services (FES)",
    role: "Additional Professional Experience",
    period: "2021 to 2023",
    summary:
      "Supported educational services through practical, service-focused work and collaborative problem solving in a professional environment.",
    skills: ["Service Support", "Collaboration", "Problem Solving", "Teamwork"],
  },
];

export const educationTimeline: EducationItem[] = [
  {
    school: "University of Malta",
    period: "2022 to 2025",
    degree: "B.Sc. (Hons) Information Technology (Software Development)",
    honour: "First Class Honours",
    focus: [
      "Software Engineering",
      "Machine Learning",
      "Web Application Development",
      "Databases",
      "Programming",
      "Software Testing",
    ],
  },
  {
    school: "Junior College, University of Malta",
    period: "2020 to 2022",
    degree: "A-Level and Intermediate Qualifications",
    focus: ["Academic Foundation", "Technology", "Mathematics", "Sciences"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: ["Python", "C#", "Java", "JavaScript", "SQL", "PHP"],
  },
  {
    category: "Web Development",
    items: ["ASP.NET Core", "HTML", "CSS", "Flask"],
  },
  {
    category: "Microsoft Technologies",
    items: ["Power Platform", "CRM Development"],
  },
  {
    category: "Databases & Tools",
    items: ["SQL Server", "MySQL", "Git"],
  },
  {
    category: "Machine Learning",
    items: ["PyTorch", "Convolutional Neural Networks", "Image Classification"],
  },
];

export const projects: Project[] = [
  {
    title: "Remote Sensing Image Classification",
    subtitle: "Final Year Project",
    category: "AI / Machine Learning",
    description:
      "Developed a machine learning solution for multi-label land-cover classification using satellite imagery and a deep learning pipeline.",
    problem:
      "Satellite imagery contains complex multi-label patterns that require careful analysis for land-cover classification at scale.",
    solution:
      "Built a PyTorch-based convolutional neural network workflow with data preparation, model training, evaluation, and visual interpretation tools, including Grad-CAM heatmaps.",
    technologies: ["Python", "PyTorch", "CNNs", "Flask", "BigEarthNet"],
    image: "/project-remote-sensing.svg",
    repo: "#",
    demo: "#",
  },
  {
    title: "NEMESYS",
    subtitle: "Safety Reporting Web Application",
    category: "Web Development",
    description:
      "Designed and developed an ASP.NET Core MVC application for incident and near-miss reporting, with secure access and location-aware reporting workflows.",
    problem:
      "There was a need for a structured reporting platform to capture incidents, support role-based workflows, and improve visibility for safety-related events.",
    solution:
      "Created a web application using C#, SQL Server, and Entity Framework Core with reporting, role-based access, mapping, and email notifications.",
    technologies: ["C#", "ASP.NET Core", "SQL Server", "EF Core", "Leaflet", "OpenStreetMap"],
    image: "/project-nemesys.svg",
    repo: "#",
    demo: "#",
  },
  {
    title: "Weather Web Application",
    subtitle: "Responsive daily forecast app",
    category: "Web Development",
    description:
      "Built a complete weather platform for checking current conditions and forecasts, with profiles and settings for registered users.",
    problem:
      "Users needed a fast and accessible way to view weather information and manage personal preferences in a responsive interface.",
    solution:
      "Integrated the Open-Meteo API into a PHP and JavaScript application with user accounts, profile management, and a clean dashboard.",
    technologies: ["PHP", "JavaScript", "HTML", "CSS", "MySQL", "Open-Meteo API"],
    image: "/project-weather.svg",
    repo: "#",
    demo: "#",
  },
  {
    title: "PArL Custom Compiler",
    subtitle: "Language processing project",
    category: "Software Engineering",
    description:
      "Created a compiler with lexical analysis, parsing, semantic analysis, abstract syntax trees, and intermediate code generation.",
    problem:
      "Language design and compilation require clear parsing and validation rules across lexical, syntactic, and semantic stages.",
    solution:
      "Implemented a Python-based compiler pipeline covering language analysis, symbol handling, and intermediate code generation for a custom language.",
    technologies: ["Python", "Compiler Design", "LL(1)", "AST", "Symbol Tables"],
    image: "/project-compiler.svg",
    repo: "#",
    demo: "#",
  },
  {
    title: "SmartTrack",
    subtitle: "Android Task Manager",
    category: "Mobile Applications",
    description:
      "Built an Android task management application focused on day-to-day organisation, progress tracking, and personal productivity.",
    problem:
      "Task management needs a simple but reliable place to track priorities, organise schedules, and keep users informed.",
    solution:
      "Developed a Java-based Android app with SQLite persistence, calendar functionality, notifications, and light/dark theme support.",
    technologies: ["Java", "Android Studio", "SQLite", "Notifications", "Calendar"],
    image: "/project-smarttrack.svg",
    repo: "#",
    demo: "#",
  },
  {
    title: "Restaurant Dynamic Web Application",
    subtitle: "Restaurant booking and browsing platform",
    category: "Web Development",
    description:
      "Created a dynamic restaurant website for browsing menus, saving favourites, and managing reservations.",
    problem:
      "Restaurant users needed a usable interface for exploring menus and reserving tables without a cumbersome booking process.",
    solution:
      "Built a PHP and MySQL application with Twig templates, favourites, and reservation flows for a responsive experience.",
    technologies: ["PHP", "MySQL", "Twig", "JavaScript", "CSS"],
    image: "/project-restaurant.svg",
    repo: "#",
    demo: "#",
  },
  {
    title: "Il-Kavallier",
    subtitle: "2D Platformer Game Jam",
    category: "Game Development",
    description:
      "Collaborated on a Unity-based 2D platformer with procedural generation, AI behaviour, and responsive player mechanics.",
    problem:
      "Game jams require fast iteration and polished mechanics in a tight production cycle.",
    solution:
      "Developed core systems with C#, procedural level generation, finite-state-machine enemy behaviour, and interactive player mechanics.",
    technologies: ["C#", "Unity", "Game Design", "AI", "Procedural Generation"],
    image: "/project-game.svg",
    repo: "#",
    demo: "#",
  },
];

export const certifications: Certification[] = [
  { name: "Microsoft Power Platform Fundamentals", code: "PL-900", accent: "from-cyan-500 to-blue-600" },
  { name: "Microsoft Azure Data Fundamentals", code: "DP-900", accent: "from-sky-500 to-indigo-600" },
  { name: "Microsoft Azure AI Fundamentals", code: "AI-900", accent: "from-violet-500 to-fuchsia-600" },
  { name: "Microsoft Azure Fundamentals", code: "AZ-900", accent: "from-emerald-500 to-cyan-600" },
];

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "#", kind: "linkedin" },
  { label: "GitHub", href: "#", kind: "github" },
  { label: "Email", href: "mailto:your-email@example.com", kind: "mail" },
];

export const aboutText =
  "I am a Software Development graduate from the University of Malta with a strong interest in software engineering, data-driven problem solving, and practical technology. My work has included Microsoft Power Platform and CRM development, full-stack application work, database design, and machine learning projects. I enjoy building systems that help people and businesses work more effectively, while staying grounded in clear engineering decisions and collaborative delivery.";

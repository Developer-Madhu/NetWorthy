
export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  requirements: string[];
  logo: string;
  postedDate: string;
}

export interface Profile {
  id: number;
  name: string;
  title: string;
  company: string;
  location: string;
  skills: string[];
  experience: number;
  bio: string;
  avatar: string;
  connectionValue: number;
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    salary: "$120,000 - $150,000",
    description: "Join our team to build cutting-edge web applications using React and TypeScript.",
    requirements: ["3+ years React experience", "TypeScript proficiency", "CSS/SASS expertise"],
    logo: "https://source.unsplash.com/random/200x200/?tech,logo",
    postedDate: "2 days ago"
  },
  {
    id: 2,
    title: "UX Designer",
    company: "DesignHub",
    location: "Remote",
    salary: "$90,000 - $120,000",
    description: "Create beautiful, intuitive user experiences for our enterprise SaaS platform.",
    requirements: ["Portfolio showcasing UX work", "Figma expertise", "User research experience"],
    logo: "https://source.unsplash.com/random/200x200/?design,logo",
    postedDate: "1 week ago"
  },
  {
    id: 3,
    title: "Product Manager",
    company: "GrowthStartup",
    location: "New York, NY",
    salary: "$130,000 - $160,000",
    description: "Lead our product development from concept to launch, working with cross-functional teams.",
    requirements: ["5+ years PM experience", "Technical background", "Agile methodologies"],
    logo: "https://source.unsplash.com/random/200x200/?product,logo",
    postedDate: "3 days ago"
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "AnalyticsPro",
    location: "Boston, MA",
    salary: "$140,000 - $180,000",
    description: "Extract insights from large datasets to drive business decisions using ML and AI.",
    requirements: ["Python/R proficiency", "ML experience", "SQL expertise"],
    logo: "https://source.unsplash.com/random/200x200/?data,logo",
    postedDate: "Just now"
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "CloudSystems",
    location: "Seattle, WA",
    salary: "$125,000 - $155,000",
    description: "Build and maintain our cloud infrastructure and CI/CD pipelines.",
    requirements: ["AWS/Azure experience", "Kubernetes", "Terraform"],
    logo: "https://source.unsplash.com/random/200x200/?cloud,logo",
    postedDate: "4 days ago"
  },
  {
    id: 6,
    title: "Mobile Developer",
    company: "AppInnovate",
    location: "Austin, TX",
    salary: "$110,000 - $140,000",
    description: "Develop cross-platform mobile applications using React Native.",
    requirements: ["React Native experience", "iOS/Android knowledge", "API integration"],
    logo: "https://source.unsplash.com/random/200x200/?mobile,app",
    postedDate: "1 day ago"
  },
  {
    id: 7,
    title: "Backend Engineer",
    company: "ServerLogic",
    location: "Chicago, IL",
    salary: "$130,000 - $160,000",
    description: "Design and implement scalable backend services and APIs.",
    requirements: ["Node.js/Python", "Database design", "RESTful API design"],
    logo: "https://source.unsplash.com/random/200x200/?server,code",
    postedDate: "5 days ago"
  },
  {
    id: 8,
    title: "Security Analyst",
    company: "CyberShield",
    location: "Washington, DC",
    salary: "$120,000 - $150,000",
    description: "Protect our systems and data from security threats and vulnerabilities.",
    requirements: ["Security certifications", "Threat analysis", "Security tooling"],
    logo: "https://source.unsplash.com/random/200x200/?security,cyber",
    postedDate: "2 weeks ago"
  },
  {
    id: 9,
    title: "AI Research Engineer",
    company: "FutureAI",
    location: "San Jose, CA",
    salary: "$150,000 - $200,000",
    description: "Research and develop cutting-edge AI solutions for real-world problems.",
    requirements: ["PhD in ML/AI", "Research publications", "TensorFlow/PyTorch"],
    logo: "https://source.unsplash.com/random/200x200/?ai,robot",
    postedDate: "3 days ago"
  },
  {
    id: 10,
    title: "Technical Writer",
    company: "DocuTech",
    location: "Portland, OR",
    salary: "$80,000 - $100,000",
    description: "Create clear, concise technical documentation for our products and APIs.",
    requirements: ["Technical background", "Excellent writing skills", "Documentation tools"],
    logo: "https://source.unsplash.com/random/200x200/?document,writing",
    postedDate: "1 week ago"
  }
];

export const profiles: Profile[] = [
  {
    id: 1,
    name: "Alex Johnson",
    title: "Senior Frontend Developer",
    company: "TechGrowth Inc.",
    location: "San Francisco, CA",
    skills: ["React", "TypeScript", "GraphQL", "UI/UX Design"],
    experience: 7,
    bio: "Passionate about creating beautiful, performant web experiences that users love.",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    connectionValue: 85
  },
  {
    id: 2,
    name: "Morgan Chen",
    title: "Product Manager",
    company: "InnovateSoft",
    location: "New York, NY",
    skills: ["Product Strategy", "Agile", "User Research", "Data Analysis"],
    experience: 5,
    bio: "Translating user needs into product features that solve real problems.",
    avatar: "https://source.unsplash.com/7YVZYZeITc8/200x200",
    connectionValue: 92
  },
  {
    id: 3,
    name: "Taylor Wilson",
    title: "UX Designer",
    company: "DesignForward",
    location: "Remote",
    skills: ["User Research", "Wireframing", "Figma", "Prototyping"],
    experience: 4,
    bio: "Creating intuitive interfaces through thoughtful, user-centered design.",
    avatar: "https://source.unsplash.com/yROO-clqHe0/200x200",
    connectionValue: 78
  },
  {
    id: 4,
    name: "Jamie Rodriguez",
    title: "Data Scientist",
    company: "DataInsights",
    location: "Boston, MA",
    skills: ["Python", "Machine Learning", "SQL", "Data Visualization"],
    experience: 6,
    bio: "Uncovering patterns in data to drive business decisions and innovation.",
    avatar: "https://source.unsplash.com/QRELCSwze1A/200x200",
    connectionValue: 88
  },
  {
    id: 5,
    name: "Jordan Smith",
    title: "DevOps Engineer",
    company: "CloudScale",
    location: "Seattle, WA",
    skills: ["AWS", "Kubernetes", "CI/CD", "Docker"],
    experience: 8,
    bio: "Building robust, scalable infrastructure to support modern applications.",
    avatar: "https://source.unsplash.com/zNRITe8NPqY/200x200",
    connectionValue: 90
  },
  {
    id: 6,
    name: "Casey Kim",
    title: "Mobile Developer",
    company: "AppWorks",
    location: "Austin, TX",
    skills: ["React Native", "Swift", "Kotlin", "API Integration"],
    experience: 5,
    bio: "Crafting seamless mobile experiences that users can't put down.",
    avatar: "https://source.unsplash.com/sibVwORYqs0/200x200",
    connectionValue: 82
  },
  {
    id: 7,
    name: "Robin Patel",
    title: "Backend Engineer",
    company: "ServerStack",
    location: "Chicago, IL",
    skills: ["Node.js", "PostgreSQL", "API Design", "Microservices"],
    experience: 7,
    bio: "Designing scalable, maintainable backend systems that power great products.",
    avatar: "https://source.unsplash.com/iFgRcqHznqg/200x200",
    connectionValue: 86
  },
  {
    id: 8,
    name: "Sam Washington",
    title: "Security Specialist",
    company: "SecureDefense",
    location: "Washington, DC",
    skills: ["Threat Analysis", "Security Auditing", "Penetration Testing", "Risk Assessment"],
    experience: 9,
    bio: "Protecting systems and data from evolving security threats in the digital landscape.",
    avatar: "https://source.unsplash.com/wxzO61jXOYc/200x200",
    connectionValue: 94
  },
  {
    id: 9,
    name: "Riley Zhang",
    title: "AI Engineer",
    company: "NextGen AI",
    location: "San Jose, CA",
    skills: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"],
    experience: 4,
    bio: "Applying cutting-edge AI research to solve complex real-world problems.",
    avatar: "https://source.unsplash.com/SJvDxw0azqw/200x200",
    connectionValue: 91
  },
  {
    id: 10,
    name: "Quinn Garcia",
    title: "Technical Lead",
    company: "CodeCraft",
    location: "Denver, CO",
    skills: ["System Architecture", "Team Leadership", "Full-Stack Development", "Mentoring"],
    experience: 10,
    bio: "Leading teams to deliver high-quality software solutions while mentoring the next generation.",
    avatar: "https://source.unsplash.com/oje8Hk-6VDY/200x200",
    connectionValue: 95
  }
];

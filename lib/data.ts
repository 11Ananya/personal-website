export interface HeroData {
  name: string;
  role: string;
  tagline: string;
  primaryCTA: string;
  secondaryCTA: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface AboutData {
  bio: string;
  stats: StatItem[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string[];
  logo?: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  stack: string[];
  href?: string;
  reverse?: boolean;
  logo?: string;
}

export interface SkillItem {
  name: string;
}

export interface SkillGroup {
  label: string;
  items: SkillItem[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const HERO: HeroData = {
  name: "Ananya Dabas",
  role: "AI/ML Engineer & Full-Stack Developer",
  tagline:
    "CS @ University of Waterloo. LLM pipelines, cloud systems, production apps. Built fast, shipped faster.",
  primaryCTA: "View My Work",
  secondaryCTA: "Get In Touch",
  email: "adabas@uwaterloo.ca",
  githubUrl: "https://github.com/11Ananya",
  linkedinUrl: "https://www.linkedin.com/in/ananya-dabas",
};

export const ABOUT: AboutData = {
  bio: "CS at the University of Waterloo (2028), President's Scholarship recipient. I build at the intersection of AI/ML and full-stack engineering: LLM pipelines, RAG systems, cloud-native infra, and production web apps. I care about shipping things that are fast, reliable, and actually useful.",
  stats: [
    { value: "2", label: "Internships" },
    { value: "10+", label: "Projects" },
    { value: "4+", label: "Languages" },
    { value: "UW 2028", label: "Graduating" },
  ],
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Eon Media",
    role: "AI/ML Engineering Intern",
    period: "May – Aug 2025",
    location: "Toronto, ON",
    bullets: [
      "Built end-to-end LLM/NLP pipelines on AWS EKS using Mistral-7B, Qwen, and BERT for automated media content analysis",
      "Engineered real-time summarization system reducing latency by 120s and cutting manual review workload by 80%",
      "Developed RAG knowledge base for US broadcast content, enabling semantic search over 50K+ media assets",
      "Optimized pipeline runtime by 30% through batching strategies and container-level profiling on Docker/EKS",
    ],
    stack: [
      "PyTorch",
      "Hugging Face",
      "AWS EKS",
      "Docker",
      "Mistral-7B",
      "Qwen",
      "BERT",
    ],
    logo: "/logos/eon-media.png",
  },
  {
    company: "Talent4Assure",
    role: "Software Developer",
    period: "May – Aug 2024",
    location: "Remote",
    bullets: [
      "Designed normalized PostgreSQL schemas and built REST APIs supporting 500+ concurrent user records with full CRUD coverage",
      "Implemented WebSocket-based real-time interactivity across assessment dashboards, improving user engagement significantly",
      "Reduced page load speed by 25% through lazy loading strategies and Redis caching for frequently accessed assessment data",
      "Refactored React component architecture to improve code reuse and reduce render cycles across the platform",
    ],
    stack: [
      "Node.js",
      "PostgreSQL",
      "React",
      "Redis",
      "WebSockets",
      "Chart.js",
    ],
    logo: "/logos/talent4assure.png",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    name: "InfraLens",
    description:
      "Deterministic AI model recommender with LLM reranking and explainable trade-off analysis. Helps engineering teams pick the right model for their constraints: cost, latency, accuracy. Profiles saved to Supabase Postgres.",
    stack: ["React", "TypeScript", "Hono", "Supabase", "Claude Haiku API"],
    href: "https://infralens-nine.vercel.app/",
    reverse: false,
    logo: "/logos/infralens.png",
  },
  {
    name: "3D Portfolio",
    description:
      "Interactive 3D portfolio built with React Three Fiber featuring mouse-responsive 3D model interactions, integrated OpenAI chatbot assistant, and smooth scroll-triggered animations deployed on Vercel.",
    stack: ["React", "Three.js", "Framer Motion", "TailwindCSS", "OpenAI API"],
    href: "https://github.com/11Ananya/3d-portfolio",
    reverse: true,
  },
  {
    name: "IntelliLog",
    description:
      "LLM prompt evaluation toolkit with semantic clustering, groundedness detection, and drift analysis — no third-party dashboards required. Built for teams who need full observability over their AI pipelines.",
    stack: ["Python", "FastAPI", "OpenAI API", "ChromaDB"],
    href: "https://github.com/11Ananya/intellilog",
    reverse: false,
  },
  {
    name: "Law Firm Management",
    description:
      "Full-featured law firm management system with a menu-driven GUI, relational database schema, parameterized queries for SQL injection prevention, and CSV export for reporting.",
    stack: ["Python", "MySQL", "Tkinter"],
    href: "https://github.com/11Ananya/law-firm-mgmt",
    reverse: true,
  },
];

export const SKILLS: SkillGroup[] = [
  {
    label: "Languages",
    items: [
      { name: "Python" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "C" },
      { name: "C++" },
      { name: "SQL" },
      { name: "Racket/Scheme" },
    ],
  },
  {
    label: "Frameworks",
    items: [
      { name: "React.js" },
      { name: "Node.js" },
      { name: "FastAPI" },
      { name: "TailwindCSS" },
      { name: "PyTorch" },
      { name: "TensorFlow" },
      { name: "Transformers" },
      { name: "OpenCV" },
    ],
  },
  {
    label: "Cloud",
    items: [
      { name: "AWS EC2" },
      { name: "AWS EKS" },
      { name: "AWS S3" },
      { name: "AWS Lambda" },
      { name: "AWS ECR" },
      { name: "Docker" },
      { name: "Kubernetes" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git" },
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "Redis" },
      { name: "Supabase" },
      { name: "ChromaDB" },
      { name: "Postman" },
      { name: "Jupyter" },
    ],
  },
];

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const FOOTER_COLS: FooterColumn[] = [
  {
    title: "Navigate",
    links: [
      { label: "About", href: "#about" },
      { label: "Work", href: "#work" },
      { label: "Skills", href: "#skills" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Email", href: "mailto:adabas@uwaterloo.ca" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/ananya-dabas" },
      { label: "GitHub", href: "https://github.com/11Ananya" },
    ],
  },
  {
    title: "Currently",
    links: [
      { label: "UWaterloo · Class of 2028", href: "#" },
      { label: "Building · Shipping · Iterating", href: "#work" },
    ],
  },
];

export const ALL_SKILLS_MARQUEE = [
  "Python", "TypeScript", "React.js", "Node.js", "FastAPI", "PyTorch",
  "TensorFlow", "AWS EKS", "Docker", "Kubernetes", "PostgreSQL", "Redis",
  "Supabase", "ChromaDB", "Framer Motion", "Next.js", "Hugging Face",
  "OpenAI API", "LangChain", "MongoDB", "Git", "Postman", "Jupyter",
  "Three.js", "TailwindCSS", "C++", "SQL", "OpenCV", "Transformers",
];

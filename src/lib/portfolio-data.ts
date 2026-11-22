import clinicImage from "@/assets/clinic-system.webp.asset.json";
import symptomImage from "@/assets/symptomcheck.webp.asset.json";
import disasterImage from "@/assets/disaster-analysis.webp.asset.json";
import courseAdvisorImage from "@/assets/courseadvisor.webp.asset.json";

/** Contact + social links. Placeholders ("#") stay until Eyrol shares real URLs — never invent them. */
export const PROFILE = {
  name: "Eyrol Junio",
  email: "engkoyjunio@gmail.com",
  github: "https://github.com/Eyrol029",
  facebook: "https://www.facebook.com/eyrolclayford.junio/",
  cvUrl: "",
} as const;

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export type SkillGroup = { title: string; icon: "code" | "layout" | "server" | "database" | "wrench"; items: string[] };

export const SKILL_GROUPS: SkillGroup[] = [
  { title: "Programming Languages", icon: "code", items: ["Java", "JavaScript", "TypeScript", "Python"] },
  { title: "Frontend Development", icon: "layout", items: ["React.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"] },
  { title: "Backend Development", icon: "server", items: ["Spring Boot", "Express.Js", "MERN Stack"] },
  { title: "Database", icon: "database", items: ["MySQL", "PostgreSQL", "SQLite","MongoDB"] },
  { title: "Tools & Technologies", icon: "wrench", items: ["Git", "GitHub", "Flutter", "Visual Studio Code", "Antigravity", "Claude Code", "Postman","Gemini"] },
];

export type Project = {
  id: string;
  index: string;
  category: string;
  title: string;
  description: string;
  features: string[];
  tech: string[];
  image: string;
  imageAlt: string;
  githubUrl: string;
  demoUrl: string;
};

export const PROJECTS: Project[] = [
  {
    id: "clinic",
    index: "01",
    category: "Full-Stack Web App",
    title: "Tating's Birthing Home and Family Planning Clinic Information Management System",
    description:
      "A full-stack clinic management system designed to improve patient record management, prenatal monitoring, appointments, delivery records, and family planning services.",
    features: [
      "Patient Record Management",
      "Prenatal Monitoring",
      "Appointment Management",
      "Family Planning Records",
      "AI/Expert System for identifying potential high-risk prenatal patients",
    ],
    tech: ["Vue.js", "Java", "Spring Boot", "PostgreSQL"],
    image: clinicImage.url,
    imageAlt: "Clinic management dashboard with patient records, prenatal charts and appointments",
    githubUrl: "https://github.com/Eyrol029/tatingSystem",
    demoUrl: "#",
  },
  {
    id: "symptomcheck",
    index: "02",
    category: "Mobile App",
    title: "SymptomCheck",
    description:
      "A mobile symptom assessment application that evaluates user-reported symptoms and provides triage recommendations using a rule-based inference engine.",
    features: [
      "Symptom Assessment",
      "Knowledge-Based Inference Engine",
      "Triage Classification",
      "Assessment History",
      "Patient Forecasting",
    ],
    tech: ["Flutter", "Dart", "SQLite"],
    image: symptomImage.url,
    imageAlt: "SCApp - Your Digital Symptom Checker App splash and triage interface",
    githubUrl: "https://github.com/Eyrol029/Symptom-Checker_App",
    demoUrl: "#",
  },
  {
    id: "disaster-analysis",
    index: "03",
    category: "Data Analysis",
    title: "Philippine Disaster Occurrence & Impact Analysis",
    description:
      "A comprehensive data analysis dashboard visualizing disaster events, casualties, and economic impacts in the Philippines from 1905 to present using EM-DAT international disaster data.",
    features: [
      "Historical Disaster Trend Analysis",
      "Interactive Multi-parameter Filters",
      "Casualty & Affected Population Assessment",
      "Economic Damage Evaluation (PHP)",
      "Monthly & Yearly Occurrence Heatmaps",
    ],
    tech: ["Python", "Data Analysis", "Data Visualization", "Pandas"],
    image: disasterImage.url,
    imageAlt: "Philippine Disaster Occurrence and Impact Analysis dashboard showing charts and disaster metrics",
    githubUrl: "https://github.com/Eyrol029/Philippine-Disaster-Occurrence-Impact-Analysis",
    demoUrl: "#",
  },
  {
    id: "courseadvisor",
    index: "04",
    category: "Academic Advising App",
    title: "CourseAdvisor",
    description:
      "A specialized academic advising and curriculum optimization system designed exclusively for the Bachelor of Elementary Education (BEEd) program at Mindanao State University at Naawan.",
    features: [
      "Mamdani Fuzzy Workload & Stress Modeling",
      "Prerequisite DAG Visualizer for Course Dependencies",
      "Personalized Semester-by-Semester Roadmap",
      "53-Course Prospectus & Unit Tracking",
      "Real-time Degree Completion Progress",
    ],
    tech: ["Web App", "Fuzzy Logic", "DAG Visualizer", "Curriculum Planning"],
    image: courseAdvisorImage.url,
    imageAlt: "CourseAdvisor dashboard with Mamdani Fuzzy Workload model, degree progress and curriculum roadmap for MSU Naawan BEEd",
    githubUrl: "https://github.com/Eyrol029/CourseAdvisor",
    demoUrl: "#",
  },
];

export const isPlaceholderLink = (url: string) => !url || url === "#";

export type EducationItem = {
  degree: string;
  institution: string;
  level: string;
  status: string;
  icon: "graduation" | "school" | "book";
  current?: boolean;
};

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Mindanao State University at Naawan",
    level: "College",
    status: "Currently: 4th Year Student",
    icon: "graduation",
    current: true,
  },
  {
    degree: "High School",
    institution: "Xavier Academy of Initao",
    level: "Secondary Education",
    status: "Completed",
    icon: "school",
  },
  {
    degree: "Elementary",
    institution: "Initao Central School",
    level: "Primary Education",
    status: "Completed",
    icon: "book",
  },
];

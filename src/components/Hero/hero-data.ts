
import {
  Award,
  BadgeCheck,
  BarChart3,
  Brain,
  BriefcaseBusiness,
  Bot,
  ClipboardCheck,
  Code2,
  Compass,
  FileText,
  Globe,
  MessageCircle,
  Network,
  Palette,
  Rocket,
  Target,
  Users,
  FolderKanban,
  BookOpen,
  Clock,
} from "lucide-react";

export const comparisons = [
  { title: "Learning Schedule", icon: Clock, free: "May vary by provider", triqon: "32+ Hours Structured Training" },
  { title: "Training Resources", icon: BookOpen, free: "Limited or self-paced", triqon: "Guided learning resources" },
  { title: "Mentorship", icon: Users, free: "Not always available", triqon: "Weekly mentor sessions" },
  { title: "Projects", icon: BriefcaseBusiness, free: "May be observational", triqon: "Industry-inspired real projects" },
  { title: "Assignments", icon: ClipboardCheck, free: "Basic tasks", triqon: "Practical assignments with deliverables" },
  { title: "Doubt Support", icon: MessageCircle, free: "Depends on availability", triqon: "Dedicated doubt-solving support" },
  { title: "Portfolio Building", icon: FolderKanban, free: "Usually not included", triqon: "Portfolio-ready project showcase" },
  { title: "Certification", icon: Award, free: "Varies", triqon: "Verified Internship Certificate" },
  { title: "Project Certificate", icon: BadgeCheck, free: "Usually unavailable", triqon: "Project Completion Certificate" },
  { title: "Community Access", icon: Network, free: "Not always available", triqon: "Mentor and learner community" },
];

export const uniqueFeatures = [
  { icon: Bot, title: "AI Tools Training", text: "Explore AI tools and practical workflows." },
  { icon: Brain, title: "Industry Case Studies", text: "Learn through realistic business scenarios." },
  { icon: FileText, title: "Resume Optimization", text: "Present your skills and projects clearly." },
  { icon: Globe, title: "LinkedIn Branding", text: "Improve your professional profile." },
  { icon: FolderKanban, title: "Portfolio Building", text: "Showcase your work and project outcomes." },
  { icon: BarChart3, title: "Weekly Progress Tracking", text: "Review learning goals and progress." },
  { icon: Award, title: "Performance Scorecard", text: "Track progress against defined criteria." },
  { icon: Users, title: "Live Mentor Guidance", text: "Get support during your learning journey." },
  { icon: Code2, title: "Capstone Project", text: "Apply skills to a practical project." },
  { icon: Target, title: "Interview Preparation", text: "Practice presenting your skills confidently." },
  { icon: Network, title: "Networking Community", text: "Connect with fellow learners and mentors." },
  { icon: Compass, title: "Career Roadmap", text: "Plan your next learning and career steps." },
];

export const benefits = [
  "Real Project Experience",
  "Industry Mentorship",
  "Practical Skill Development",
  "Portfolio Building",
  "Interview Readiness",
  "Resume Enhancement",
  "Professional Networking",
  "Career Guidance",
  "Verified Certification",
];

export const tracks = [
  
  {
    icon: Code2,
    emoji: "💻",
    title: "Web Development",
    description: "Build modern websites and applications using industry-standard technologies and best practices.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    glow: "from-cyan-400/20 to-blue-500/5",
    iconColor: "text-cyan-300 bg-cyan-300/10",
  },
  {
    icon: Bot,
    emoji: "🤖",
    title: "AI & Emerging Technology",
    description: "Work on practical AI projects and explore real-world applications of modern technologies.",
    skills: ["AI Tools", "Prompt Engineering", "Automation", "ML Basics"],
    glow: "from-teal-400/20 to-emerald-500/5",
    iconColor: "text-emerald-300 bg-emerald-300/10",
  },
  {
    icon: Rocket,
    emoji: "🗄️",
    title: "Database & SQL",
    description: "Learn how to store, organize, query, and manage structured data efficiently.",
    skills: ["SQL", "Database Design", "Queries", "Data Management"],
    glow: "from-violet-400/20 to-teal-500/5",
    iconColor: "text-violet-300 bg-violet-300/10",
  },
  
  
];

export const trackBenefits = [
  "Industry Projects",
  "Weekly Mentorship",
  "Portfolio Building",
  "LinkedIn Optimization",
  "Interview Preparation",
  "Verified Certificates",
  "Career Guidance",
];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

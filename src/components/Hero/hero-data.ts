
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
  {
    title: "Industry-Based Projects",
    description:
      "Contribute to practical projects based on real-world industry requirements.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Mentor-Guided Execution",
    description:
      "Receive mentor guidance while working on assigned project tasks.",
    icon: Users,
  },
  {
    title: "Structured Learning",
    description:
      "Follow a structured learning path aligned with your project requirements.",
    icon: Clock,
  },
  {
    title: "Guided Learning Resources",
    description:
      "Access relevant resources to understand project concepts and technologies.",
    icon: BookOpen,
  },
  {
    title: "Collaborative Work",
    description:
      "Work with mentors and fellow interns to contribute to project deliverables.",
    icon: Network,
  },
  {
    title: "Practical Assignments",
    description:
      "Apply your knowledge through assigned tasks and practical deliverables.",
    icon: ClipboardCheck,
  },
  {
    title: "Doubt-Solving Support",
    description:
      "Get guidance to resolve doubts encountered during project work.",
    icon: MessageCircle,
  },
  {
    title: "Project Experience",
    description:
      "Develop practical experience through your contributions to project work.",
    icon: FolderKanban,
  },
  {
    title: "Internship Certificate",
    description:
      "Certificate eligibility is subject to program completion criteria.",
    icon: Award,
  },
  {
    title: "Project Completion Recognition",
    description:
      "Project completion recognition may be provided subject to applicable criteria.",
    icon: BadgeCheck,
  },
  {
    title: "Learning Community",
    description:
      "Engage with fellow learners and mentors through available program channels.",
    icon: Users,
  },
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
  "Industry-Based Project Experience",
  "Mentor-Guided Learning",
  "Collaborative Project Work",
  "Practical Skill Development",
  "Hands-On Assignments",
  "Real-World Problem Solving",
  "Project Deliverables",
  "Internship Certificate*",
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
  
  
  
];



export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

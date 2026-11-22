import type { LucideIcon } from "lucide-react";
import { Sigma, User, ClipboardCheck, FileText, MonitorSmartphone, Code2, Ruler, Globe } from "lucide-react";

export const site = {
  name: "Zarqa Munawar",
  role: "Mathematics Educator & Online Tutor",
  phone: "03111517259",
  phoneIntl: "923111517259",
  email: "mathtutor250@gmail.com",
  since: 2021,
  location: "Online, from Pakistan",
};

export const yearsTeaching = () => new Date().getFullYear() - site.since;

export const waLink = (text = "Hello Zarqa, I would like to book a free trial lesson.") =>
  `https://wa.me/${site.phoneIntl}?text=${encodeURIComponent(text)}`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export type Service = { icon: LucideIcon; title: string; text: string; points: string[] };

export const services: Service[] = [
  { icon: Sigma, title: "Maths, every course", text: "From school arithmetic to university-level mathematics, taught step by step.",
    points: ["Algebra, geometry, trigonometry", "Calculus and statistics, including data and probability", "Linear algebra and higher courses"] },
  { icon: User, title: "Personal 1-on-1 lessons", text: "Each lesson is built around your level, pace and goals.",
    points: ["Flexible timings", "All grades and levels", "Concept clarity before speed"] },
  { icon: ClipboardCheck, title: "Exam preparation", text: "Full preparation with tests and practice questions for good grades.",
    points: ["Topic-wise tests", "Past-paper style practice", "Homework help"] },
  { icon: FileText, title: "Assignments and quizzes", text: "Support with assignments and quizzes for university courses.",
    points: ["Worked explanations", "Deadline-friendly planning", "Support across universities"] },
  { icon: MonitorSmartphone, title: "LMS portal handling", text: "Help managing learning-management-system portals, submissions and schedules.",
    points: ["Uploads and submissions", "Quiz and assignment tracking", "Portal navigation for new students"] },
  { icon: Code2, title: "Computer subjects and C++", text: "Computer studies are my second strong area after maths, from basic computing to C++ fundamentals.",
    points: ["Basic computing and MS Office", "C++ variables, loops and functions", "Problem-solving practice"] },
  { icon: Ruler, title: "Maths projects", text: "Guidance and handling for maths projects and coursework.",
    points: ["Topic selection", "Structure and presentation", "Step-by-step guidance"] },
  { icon: Globe, title: "International students", text: "Assignment support for students studying abroad, across time zones.",
    points: ["Online sessions at your time", "Clear written explanations", "Regular progress updates"] },
];

export const subjects = [
  "Arithmetic", "Algebra", "Geometry", "Trigonometry", "Calculus", "Linear Algebra",
  "Differential Equations", "Real Analysis", "Number Theory", "Discrete Maths", "Statistics", "Computer Basics", "C++ Basics", "MS Office",
];

export const steps = [
  { title: "Free trial lesson", text: "Meet, try a short lesson and see if the teaching style suits you." },
  { title: "Find your level", text: "A quick assessment shows which topics are strong and which need work." },
  { title: "Learn with a plan", text: "1-on-1 lessons follow a plan tailored to your course and deadlines." },
  { title: "Practice and test", text: "Regular tests and practice questions turn understanding into grades." },
];

export const education = [
  { title: "M.Sc. Mathematics", place: "Virtual University of Pakistan", period: "2020 – 2022", detail: "CGPA 3.89 / 4.0, half scholarship in 2 semesters" },
  { title: "B.Ed.", place: "Virtual University of Pakistan", period: "2022 – 2023", detail: "CGPA 3.44 / 4.0" },
  { title: "B.Sc. Mathematics", place: "BISE Gujranwala", period: "2018 – 2020", detail: "480 / 600 marks" },
  { title: "Intermediate (F.Sc.)", place: "BISE Gujranwala", period: "2016 – 2018", detail: "648 / 1100 marks" },
  { title: "Matric", place: "BISE Gujranwala", period: "2014 – 2016", detail: "784 / 1100 marks" },
];

export const experience = [
  { title: "Online Teaching Projects", place: "Freelance, remote mathematics educator", period: "Present",
    detail: "Interactive virtual lectures, personalised digital tutoring and custom problem-solving sessions for remote students." },
  { title: "Federal Model High School", place: "Dherakan Kalan", period: "Recent",
    detail: "Taught mathematics to middle and high school students, designed assessments and raised participation with interactive methods." },
  { title: "Govt. Insaf Afternoon Elementary School", place: "Karmanwala", period: "Past",
    detail: "Two years of foundational teaching, improving engagement and performance in core subjects." },
];

export const skills = ["Mathematics instruction", "Lesson planning", "Classroom management", "Online teaching",
  "Student assessment", "MS Word", "Excel", "PowerPoint", "Communication", "LMS handling", "C++ basics"];

export const faqs = [
  { q: "Do you teach only maths?", a: "Maths is my main subject. Statistics and computer subjects (basic computing, MS Office, C++) are strong second areas, and I also help with LMS portals. Ask about any other subject and I will tell you honestly if I can help." },
  { q: "Which grades and levels do you teach?", a: "All grades and levels, from school classes to university courses." },
  { q: "How does the free trial work?", a: "Message me on WhatsApp or use the contact form. We pick a time and do a short trial lesson, with no obligation." },
  { q: "Can you work with my timezone?", a: "Yes. Classes are online with flexible timings, including for students studying abroad." },
  { q: "Are lessons one-on-one?", a: "Yes. Every lesson is personalised to your level, with tests and practice questions included." },
];

/**
 * REVIEWS: add only real feedback from real students or parents (WhatsApp message, email, or a short quote with permission).
 * The Reviews section stays hidden while this list is empty. Example entry:
 * { name: "Ayesha K.", role: "BS Mathematics student", category: "Maths", text: "She explained calculus step by step.", rating: 5 }
 */
export type ReviewCategory = "Maths" | "Assignments" | "Computer & Stats" | "General";
export type Review = { name: string; role: string; category: ReviewCategory; text: string; rating: 1 | 2 | 3 | 4 | 5 };
export const reviewCategories: ReviewCategory[] = ["Maths", "Assignments", "Computer & Stats", "General"];
export const reviews: Review[] = [];


import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Database,
  Brain,
  Code,
  LayoutGrid,
  Layers,
  SquareCode,
  Settings,
  Terminal,
  ImagesIcon,
} from "lucide-react";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ContactSection } from "@/components/ContactSection";
import { SkillsSection } from "@/components/SkillsSection";
import { MainHeader } from "@/components/MainHeader";
import { TypingEffect } from "@/components/TypingEffect";
import { Footer } from "@/components/Footer";
import { AchievementsGallery } from "@/components/AchievementsGallery";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

// Changed "Achievements" to "Gallery" in navigation links
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Gallery", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const NAME = "Sakshit Sharma";
const ABOUT =
  "I'm Sakshit Sharma, a skilled Data Engineer with experience in data analysis, AI/ML, and software development. I specialize in building efficient data pipelines, implementing machine learning models, and working with cloud platforms and modern data architectures. My goal is to solve real-world problems through data-driven solutions and contribute to the development of scalable systems.";

const PROJECTS = [
  {
    title: "Project One",
    description: "A simple description of your project goes here.",
    tech: ["React", "TypeScript", "Tailwind"],
    repo: "#",
    demo: "#",
  },
  {
    title: "Project Two",
    description: "Another awesome project that showcases your skills.",
    tech: ["Next.js", "Node.js", "Shadcn UI"],
    repo: "#",
    demo: "#",
  },
];

const SKILLS = [
  {
    name: "React",
    icon: LayoutGrid,
    color: "blue",
    description: "A JavaScript library for building UI.",
  },
  {
    name: "Next.js",
    icon: Layers,
    color: "purple",
    description: "A React framework for production-ready web apps.",
  },
  {
    name: "TypeScript",
    icon: SquareCode,
    color: "green",
    description: "Typed superset of JavaScript.",
  },
  {
    name: "Tailwind",
    icon: Settings,
    color: "amber",
    description: "A utility-first CSS framework.",
  },
  {
    name: "Node.js",
    icon: Terminal,
    color: "blue",
    description: "JavaScript runtime for server-side apps.",
  },
  {
    name: "Shadcn UI",
    icon: Code,
    color: "purple",
    description: "Beautiful UI components for React.",
  },
];

const SOCIALS = [
  { icon: Github, label: "GitHub", url: "https://github.com/sakshit2004" },
  { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/sakshitsharma/" },
  { icon: Mail, label: "Mail", url: "mailto:sakshit2004@gmail.com" },
];

const TYPING_WORDS = [
  "Data Engineer",
  "AI/ML Engineer",
  "Software Engineer",
];

const EXPERIENCE = [
  {
    role: "Founding AI/ML Engineer",
    company: "Xenara AI",
    period: "October 2024 - Present",
    description:
      "At Xenara AI, I've driven the end-to-end development of AI-powered customer chatbots, managing progress in Jira and using Git/GitHub for version control and code reviews across 70+ pull requests. I designed and tested over 15 RESTful APIs with FastAPI, incorporating comprehensive unit and end-to-end tests to guarantee performance. I also architected scalable microservice backends in Node.js, containerized with Docker and Kubernetes, and deployed on AWS to support real-time data processing and ensure high availability.",
    tools: "Python, FastAPI, RESTful APIs, MongoDB, Pinecone, Docker, Kubernetes, AWS (ECS, Lambda, Bedrock), Git/GitHub, Jira, Langchain, OpenAI, Azure AI Foundry, Node.js, Leadership, Technical Architect",
    skills: [], // Removing separate skills array as we'll derive from tools
    color: "blue",
    icon: Brain,
    logoUrl: "/lovable-uploads/14fc93c3-0867-4c90-a157-edc61b3c5290.png",
    companyUrl: "https://www.linkedin.com/company/xenara-ai/"
  },
  {
    role: "Data Engineer",
    company: "City of Ottawa",
    period: "May 2024 - December 2024",
    description:
      "At the City of Ottawa, I designed and maintained automated ETL workflows in Azure Data Factory and Python/SQL, consolidating departmental data into a centralized PostgreSQL warehouse that boosted integration and accessibility by 40%. I built interactive Power BI dashboards for 50+ users and resolved 25+ high-priority tickets across Power BI, Azure Data Factory, and Microsoft Fabric with 95% accuracy. I also led the migration of IBM DataStage ETL to SAP BW/4HANA—saving $150K annually—and automated Azure DevOps migrations via REST APIs, SQL, and Bash to cut licensing costs by $3.5K/month.",
    tools: "Python, SQL, Bash scripting, IBM, SAP, Azure (Data Factory, Synapse Analytics, power automate, power apps), Microsoft Fabric, Power BI, Azure DevOps, Data Pipelines, Data Warehousing, Data Modelling, ETL, ELT",
    skills: [], // Removing separate skills array as we'll derive from tools
    color: "purple",
    icon: Database,
    logoUrl: "/lovable-uploads/e20030ee-68c2-44e9-b4ab-00c94d9a0b18.png",
    companyUrl: "https://www.linkedin.com/company/city-of-ottawa/"
  },
  {
    role: "Vice President of Software Development",
    company: "Capital Technology Network",
    period: "November 2024 - Present",
    description:
      "As VP of Software Development, I lead a team of five in building and scaling our hackathon platform and community portal. I oversee Azure infrastructure management, ensure data quality and compliance, and coordinate open-source web app development—resulting in 3,500+ monthly visits and 15,000+ impressions. I've established CI/CD pipelines and modular architectures to support real-time judging, mentorship matchmaking, and project submissions for thousands of participants.",
    tools: "React.js, Node.js, Azure Cloud, Docker, Kubernetes, Git/GitHub, CI/CD (GitHub Actions), Tailwind CSS, Team Leadership, Open Source, Infrastructure",
    skills: [], // Removing separate skills array as we'll derive from tools
    color: "green",
    icon: Code,
    logoUrl: "/lovable-uploads/6b5f5954-a1d3-4e54-b0d4-93d26a7cd49d.png",
    companyUrl: "https://www.linkedin.com/company/hackthehill/"
  },
  {
    role: "Data Architect",
    company: "Pyralume",
    period: "January 2025 - April 2025",
    description:
      "At Pyralume, I architected a scalable video metadata system using Django and PostgreSQL, optimizing dimensional models and SQL queries to boost processing efficiency by 20%. I defined data modeling standards, implemented schema versioning, and leveraged Apache Kafka for ingesting telemetry streams—establishing a robust data governance framework that accelerated new source integrations by 40%.",
    tools: "Python, Django, PostgreSQL, Apache Kafka, SQL, dbt, Terraform, AWS (S3, Glue, Redshift), System Architecture, dimensional models, data modeling",
    skills: [], // Removing separate skills array as we'll derive from tools
    color: "amber",
    icon: Layers,
    logoUrl: "/lovable-uploads/fb5e050a-a49f-42f3-b1b7-624b303c9dd1.png",
    companyUrl: "https://www.linkedin.com/company/pyralume/"
  },
];

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <MainHeader NAV_LINKS={NAV_LINKS} />
      
      <main className="flex-1 flex flex-col">
        <section id="home" className="relative flex flex-col-reverse md:flex-row items-center justify-between min-h-[60vh] px-6 py-12 md:py-20 gap-8">
          <div className="flex-1 flex justify-center md:justify-start items-center order-2 md:order-1 mb-6 md:mb-0">
            <div className="w-48 h-48 md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-4 border-white/20 shadow-glass bg-card relative">
              <img
                src="/lovable-uploads/07a3aa8a-a284-45ee-bf0b-bf0d0cde12e1.png"
                alt="Sakshit Sharma"
                className="object-cover w-full h-full"
                style={{ objectPosition: "center" }}
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center md:items-start justify-center md:pl-10 order-1 md:order-2">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white text-center md:text-left">
              {NAME}
            </h1>
            <div className="block text-xl md:text-2xl font-semibold text-white mb-4 h-10 w-full text-center md:text-left">
              <TypingEffect
                words={TYPING_WORDS}
                typingDelay={220}
                erasingDelay={90}
                pauseDelay={1900}
              />
            </div>
            <div className="flex gap-4 mb-4">
              {SOCIALS.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  aria-label={item.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    "transition-all duration-300 p-2 rounded-full border-2 border-white bg-card/70 text-white shadow-md " +
                    "hover:scale-110 hover:border-yellow-300 hover:shadow-[0_0_24px_2px_rgba(254,247,205,0.6)] hover:bg-yellow-200/15"
                  }
                >
                  <item.icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-base font-normal text-white mb-3 max-w-xl text-center md:text-left">
              {ABOUT}
            </p>
          </div>
        </section>

        <ExperienceTimeline EXPERIENCE={EXPERIENCE} />
        <SkillsSection />
        <AchievementsGallery />
        <ContactSection />
      </main>
      
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

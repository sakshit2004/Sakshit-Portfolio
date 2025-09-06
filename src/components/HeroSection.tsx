import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { TypingEffect } from "@/components/TypingEffect";
import { Github, Linkedin, Mail } from "lucide-react";

const NAME = "Sakshit Sharma";
const ABOUT =
  "I'm Sakshit Sharma, a skilled Engineer with experience in data engineering/analysis, AI/ML, and software development. I specialize in building efficient data pipelines, implementing machine learning models, and working with cloud platforms and modern data architectures. My goal is to solve real-world problems through data-driven solutions and contribute to the development of scalable systems.";

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

export function HeroSection() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between min-h-[60vh] px-6 py-12 md:py-20 gap-8">
      <div className="flex-1 flex justify-center md:justify-start items-center order-2 md:order-1 mb-6 md:mb-0">
        <Avatar className="w-48 h-48 md:w-72 md:h-72 border-4 border-white/20 shadow-glass bg-card dark:border-white/20 light:border-gray-200">
          <AvatarImage
            src="/lovable-uploads/7a44270d-55d0-40aa-886f-9c29783033be.jpg"
            alt="Sakshit Sharma"
            className="object-cover"
            style={{
              objectPosition: "center",
              objectFit: "cover"
            }}
          />
          <AvatarFallback className="text-4xl md:text-5xl font-bold bg-muted/70 text-white dark:text-white light:text-gray-900">
            SS
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-1 flex flex-col items-center md:items-start justify-center md:pl-10 order-1 md:order-2">
        <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white dark:text-white light:text-gray-900 text-center md:text-left">
          {NAME}
        </h1>
        <span className="block text-xl md:text-2xl font-semibold text-white dark:text-white light:text-gray-900 mb-4 h-10 w-full text-center md:text-left">
          <TypingEffect
            words={TYPING_WORDS}
            typingDelay={220}
            erasingDelay={90}
            pauseDelay={1900}
          />
        </span>
        <div className="flex gap-4 mb-4">
          {SOCIALS.map((item) => (
            <a
              key={item.label}
              href={item.url}
              aria-label={item.label}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform p-2 rounded-full bg-card/70 border border-white text-white dark:border-white dark:text-white light:border-gray-300 light:text-gray-700 light:bg-white/80"
            >
              <item.icon size={20} />
            </a>
          ))}
        </div>
        <p className="text-base font-normal text-white dark:text-white light:text-gray-700 mb-3 max-w-xl text-center md:text-left">
          {ABOUT}
        </p>
      </div>
    </section>
  );
}

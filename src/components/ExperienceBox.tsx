
import React from "react";
import { LucideIcon } from "lucide-react";
import { SkillBadge } from "./SkillBadge";
import { DateTag } from "./DateTag";
import { ExperienceType } from "./ExperienceTimeline";

interface ExperienceBoxProps {
  exp: ExperienceType;
  idx: number;
}

export const ExperienceBox: React.FC<ExperienceBoxProps> = ({
  exp,
  idx
}) => {
  // Clean up the tools list by removing any text inside parentheses and any other symbols
  const cleanTools = (toolsString: string) => {
    if (!toolsString) return [];
    
    return toolsString
      .split(',')
      .map(tool => {
        // Remove anything inside parentheses and trim whitespace
        return tool
          .replace(/\([^)]*\)/g, '')  // Remove parentheses and their content
          .replace(/[^\w\s-/]/g, '')  // Remove any non-alphanumeric characters except spaces, hyphens and slashes
          .trim();
      })
      .filter(tool => tool.length > 0);
  };

  const toolsList = exp.tools ? cleanTools(exp.tools) : [];
  
  return (
    <div className="relative flex flex-col md:flex-row group animate-fade-in">
      {/* Left Circle with animated connector line */}
      <div className="absolute left-0 top-0 flex items-center justify-center z-10">
        <div className="w-9 h-9 rounded-full bg-black border-2 border-white shadow-md flex items-center justify-center transition-all duration-300
          group-hover:scale-110 group-hover:border-yellow-300 group-hover:shadow-[0_0_24px_2px_rgba(254,247,205,0.6)]
          dark:bg-black dark:border-white light:bg-white light:border-gray-300">
          <span
            className={`flex items-center justify-center w-7 h-7 rounded-full text-white dark:text-white light:text-gray-700 transition-all duration-300
              group-hover:bg-yellow-400/90 group-hover:text-black`}
            style={{
              background: exp.color === "blue"
                ? "rgba(84, 135, 255, 0.85)"
                : exp.color === "purple"
                ? "rgba(135, 90, 255, 0.8)"
                : exp.color === "green"
                ? "rgba(34,197,94,0.9)"
                : exp.color === "amber"
                ? "rgba(251,191,36,0.90)"
                : "rgba(255,255,255,0.2)"
            }}
          >
            <exp.icon size={15} />
          </span>
        </div>
      </div>
      <div className="ml-14 md:ml-20 flex-1">
        <div
          tabIndex={0}
          className="
            bg-white/10 border border-white/20 rounded-2xl shadow-glass px-5 py-6 backdrop-blur relative
            transition-all duration-300 ease-out
            group-hover:scale-[1.035] group-hover:-translate-y-1 group-hover:z-10
            group-hover:shadow-experienceGlow group-hover:border-yellow-300 group-hover:bg-yellow-200/15
            focus-visible:scale-[1.018] focus-visible:ring-4 focus-visible:ring-yellow-100/20
            active:scale-[0.98]
            cursor-pointer
            experience-hover-animate
          "
        >
          {/* Horizontal connection line with animation */}
          <div className="absolute left-[-22px] top-[18px] w-[22px] h-0.5 bg-white/30 dark:bg-white/30 light:bg-gray-400/50
            group-hover:bg-gradient-to-r from-yellow-300 to-white/30 dark:group-hover:from-yellow-300 dark:group-hover:to-white/30 light:group-hover:from-yellow-500 light:group-hover:to-gray-400/50
            transition-all duration-500 group-hover:h-1 group-hover:left-[-24px] group-hover:w-[24px]"></div>
          
          <div className="flex justify-between items-start mb-3">
            <div>
              <DateTag period={exp.period} />
              <h3 className="text-xl font-bold text-white dark:text-white light:text-gray-900 mb-1">{exp.role}</h3>
              <a 
                href={exp.companyUrl || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-lg text-white/70 dark:text-white/70 light:text-gray-600 hover:text-yellow-300 transition-colors"
              >
                {exp.company}
              </a>
            </div>
            
            {/* Company Logo */}
            {exp.logoUrl && (
              <a 
                href={exp.companyUrl || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-shrink-0 bg-white/5 p-1 rounded-md border border-white/10 ml-4 mt-1 hover:border-yellow-300 transition-colors dark:bg-white/5 dark:border-white/10 light:bg-gray-100 light:border-gray-200"
              >
                <img 
                  src={exp.logoUrl} 
                  alt={`${exp.company} logo`}
                  className="w-14 h-14 object-contain"
                />
              </a>
            )}
          </div>
          
          <p className="text-white/80 dark:text-white/80 light:text-gray-700 mb-4">{exp.description}</p>
          
          {/* Skills badges with cleaned up text */}
          <div className="flex flex-wrap gap-2">
            {toolsList.map((tool, i) => (
              <SkillBadge 
                key={`tool-${i}`} 
                skill={tool} 
              />
            ))}
            {exp.skills && exp.skills.map((skill, i) => (
              <SkillBadge
                key={`skill-${i}`}
                skill={skill}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

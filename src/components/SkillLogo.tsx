
import React from "react";
import {
  Code,
  Database,
  Brain,
  Layers,
  SquareCode,
  Terminal,
  LayoutGrid,
  Settings,
  LucideIcon,
} from "lucide-react";

interface SkillLogoProps {
  skill: string;
  imgSrc?: string;
}

// Using LucideIcon type which is compatible with all Lucide icons
const ICONS: Record<string, LucideIcon> = {
  "React": LayoutGrid,
  "Next.js": Layers,
  "TypeScript": SquareCode,
  "Tailwind": Settings,
  "Node.js": Terminal,
  "Shadcn UI": Code,
};

const SkillLogo: React.FC<SkillLogoProps> = ({ skill, imgSrc }) => {
  const Icon = ICONS[skill] || Brain;
  return (
    <div
      className="group bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center
      rounded-full w-12 h-12 md:w-16 md:h-16 shadow-glass transition-all
      hover:scale-110 hover:border-yellow-300 hover:shadow-[0_0_24px_2px_rgba(254,247,205,0.6)] hover:bg-yellow-200/15"
      title={skill}
      tabIndex={0}
      aria-label={skill}
    >
      {imgSrc ? (
        <img 
          src={imgSrc} 
          alt={skill} 
          className="max-w-[65%] max-h-[65%] object-contain"
        />
      ) : (
        <Icon size={34} className="text-white group-hover:text-yellow-400 transition-colors" />
      )}
    </div>
  );
};

export default SkillLogo;

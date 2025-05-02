
import React from "react";
import { LucideIcon } from "lucide-react";

type SkillType = {
  name: string;
  icon: LucideIcon;
  color: string;
  description?: string;
};

interface SkillBoxProps {
  skill: SkillType;
  idx: number;
}

const fallbackDescriptions: Record<string, string> = {
  "React": "A JavaScript library for building user interfaces.",
  "Next.js": "A React framework for production.",
  "TypeScript": "Typed superset of JavaScript.",
  "Tailwind": "A utility-first CSS framework.",
  "Node.js": "JavaScript runtime for server-side applications.",
  "Shadcn UI": "Beautifully designed React UI components.",
};

const SkillBox: React.FC<SkillBoxProps> = ({ skill, idx }) => {
  const color =
    skill.color === "blue"
      ? "rgba(84, 135, 255, 0.85)"
      : skill.color === "purple"
      ? "rgba(135, 90, 255, 0.8)"
      : skill.color === "green"
      ? "rgba(34,197,94,0.9)"
      : skill.color === "amber"
      ? "rgba(251,191,36,0.90)"
      : "rgba(255,255,255,0.2)";

  return (
    <div className="relative flex flex-col md:flex-row group animate-fade-in">
      <div className="absolute left-0 top-0 flex items-center justify-center z-10">
        <div className="w-9 h-9 rounded-full bg-black border-2 border-white shadow-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-yellow-300 group-hover:shadow-[0_0_24px_2px_rgba(254,247,205,0.6)]">
          <span
            className="flex items-center justify-center w-7 h-7 rounded-full text-white transition-all duration-300 group-hover:bg-yellow-400/90 group-hover:text-black"
            style={{ background: color }}
          >
            <skill.icon size={15} />
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
          <div className="absolute left-[-22px] top-[18px] w-[22px] h-0.5 bg-white/30" />
          <h3 className="text-xl font-bold text-white mb-1">{skill.name}</h3>
          <p className="text-white/80 mb-2">
            {skill.description ?? fallbackDescriptions[skill.name] ?? ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillBox;

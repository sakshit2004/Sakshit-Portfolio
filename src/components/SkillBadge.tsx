
import React from "react";

interface SkillBadgeProps {
  skill: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <span
      className={
        `text-xs font-medium rounded-full px-3 py-1 border transition duration-200 focus:outline-none
         bg-white/10 border border-white/30 text-white/80
         hover:bg-yellow-200 hover:text-black hover:shadow-md hover:scale-105`
      }
      style={{
        transition: "all 0.2s cubic-bezier(0.4,0,0.6,1)"
      }}
      tabIndex={0}
    >
      {skill}
    </span>
  );
};

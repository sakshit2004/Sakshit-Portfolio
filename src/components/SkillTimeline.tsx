
import React from "react";
import SkillBox from "./SkillBox";
import { LucideIcon } from "lucide-react";

// You can extend this with icon and description for every skill
type SkillType = {
  name: string;
  icon: LucideIcon;
  color: string;
  description?: string;
};

interface SkillTimelineProps {
  SKILLS: SkillType[];
}

const SkillTimeline: React.FC<SkillTimelineProps> = ({ SKILLS }) => {
  return (
    <section
      id="skills"
      className="fade-in max-w-5xl mx-auto my-16 px-4 pb-16 relative"
    >
      <h2 className="text-3xl font-bold mb-10 text-center text-white bg-gradient-to-r from-white/70 via-white to-white/70 bg-clip-text">
        My Skills
      </h2>
      <div className="space-y-10 md:space-y-16 relative">
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-white/40 via-white/20 to-white/0 rounded-full" />
        {SKILLS.map((skill, idx) => (
          <SkillBox key={skill.name} skill={skill} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default SkillTimeline;

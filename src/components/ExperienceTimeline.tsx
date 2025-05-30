
import React from "react";
import { ExperienceBox } from "./ExperienceBox";
import { LucideIcon } from "lucide-react";

export type ExperienceType = {
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  color: string;
  icon: LucideIcon;
  logoUrl?: string;
  tools?: string;
  companyUrl?: string;
};

interface ExperienceTimelineProps {
  EXPERIENCE: ExperienceType[];
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  EXPERIENCE
}) => {
  return (
    <section
      id="experience"
      className="fade-in max-w-5xl mx-auto my-16 px-4 pb-16 relative"
    >
      <h2 className="text-3xl font-bold mb-10 text-center text-white bg-gradient-to-r from-white/70 via-white to-white/70 bg-clip-text">
        My Professional Journey
      </h2>
      <div className="space-y-10 md:space-y-16 relative">
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-white/40 via-white/20 to-white/0 rounded-full" />
        {EXPERIENCE.map((exp, idx) => (
          <ExperienceBox
            key={idx}
            exp={exp}
            idx={idx}
          />
        ))}
      </div>
    </section>
  );
};


import React from "react";
import { Calendar } from "lucide-react";

interface DateTagProps {
  period: string;
}

export const DateTag: React.FC<DateTagProps> = ({ period }) => {
  return (
    <span
      className="
        inline-flex items-center gap-1.5
        rounded-full px-3 py-1 mb-2
        text-sm font-medium
        bg-white/10 border border-white/30 text-white/80
        transition duration-200
        hover:bg-yellow-200 hover:text-black hover:shadow-md hover:scale-105
        cursor-default
        select-none
      "
      tabIndex={0}
    >
      <Calendar size={14} className="text-white/65" />
      <span>{period}</span>
    </span>
  );
};

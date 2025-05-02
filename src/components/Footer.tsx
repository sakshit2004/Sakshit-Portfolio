import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black border-t border-white/10 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold text-white mb-2">Sakshit Sharma</h3>
          <p className="text-white/70 text-sm text-center md:text-left">
            Data Engineer | AI/ML Engineer | Software Developer
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/sakshit2004"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 p-2 rounded-full border-2 border-white bg-card/70 text-white shadow-md hover:scale-110 hover:border-yellow-300 hover:shadow-[0_0_24px_2px_rgba(254,247,205,0.6)] hover:bg-yellow-200/15"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/sakshitsharma/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 p-2 rounded-full border-2 border-white bg-card/70 text-white shadow-md hover:scale-110 hover:border-yellow-300 hover:shadow-[0_0_24px_2px_rgba(254,247,205,0.6)] hover:bg-yellow-200/15"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:sakshit2004@gmail.com"
            className="transition-all duration-300 p-2 rounded-full border-2 border-white bg-card/70 text-white shadow-md hover:scale-110 hover:border-yellow-300 hover:shadow-[0_0_24px_2px_rgba(254,247,205,0.6)] hover:bg-yellow-200/15"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-2 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} Sakshit Sharma. All rights reserved.
      </div>
    </footer>
  );
};

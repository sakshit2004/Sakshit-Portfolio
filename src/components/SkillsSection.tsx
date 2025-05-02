
import React from "react";

// Define skills with just image sources
const SKILLS = [
  { imgSrc: "/lovable-uploads/992aa889-a557-491e-87e3-7c851c0ee857.png", alt: "Python" },
  { imgSrc: "/lovable-uploads/ce637b50-4cca-4be5-a546-b7cace65bb16.png", alt: "Java" },
  { imgSrc: "/lovable-uploads/1a3573fa-5202-4a67-8aca-befe9097d22d.png", alt: "SQL" },
  { imgSrc: "/lovable-uploads/22ef3936-454f-440e-a51c-6d91ea07bddd.png", alt: "HTML/CSS/JS" },
  { imgSrc: "/lovable-uploads/01c818c9-c518-434a-a0d7-d747f41f0a5b.png", alt: "Azure" },
  { imgSrc: "/lovable-uploads/929ea0eb-6c35-4ef5-80bb-27d4f0300f66.png", alt: "AWS" },
  { imgSrc: "/lovable-uploads/e93e51d6-b2d8-4030-9959-6e9cb8590273.png", alt: "Google Cloud" },
  { imgSrc: "/lovable-uploads/ce6bd176-48f0-4751-b970-55998355b87f.png", alt: "Apache Airflow" },
  { imgSrc: "/lovable-uploads/26ebc72e-0305-41de-91f6-c9cf91aa68ae.png", alt: "SAP" },
  { imgSrc: "/lovable-uploads/eee36cc2-1216-4c87-8a13-9d3a3cf7c071.png", alt: "DBT" },
  { imgSrc: "/lovable-uploads/18aaf748-58e2-4c75-a746-5d6384843d5b.png", alt: "Power BI" },
  { imgSrc: "/lovable-uploads/dd7ff339-32b3-4588-998b-3b10410b1fa8.png", alt: "MySQL" },
  { imgSrc: "/lovable-uploads/8f26c08e-88dd-4c78-831e-c8ecfcfe53b7.png", alt: "PostgreSQL" },
  { imgSrc: "/lovable-uploads/a95c7237-f138-4ee4-a224-07a0d6997b0d.png", alt: "Oracle" },
  { imgSrc: "/lovable-uploads/2ddcf108-b737-4e87-bb3e-fdfef874974e.png", alt: "MongoDB" },
  { imgSrc: "/lovable-uploads/8693cb11-ddf9-4dbd-ac38-956b979c6dff.png", alt: "Pinecone" },
  { imgSrc: "/lovable-uploads/44475384-aa94-4459-959e-2549dab3e0ff.png", alt: "Git" },
  { imgSrc: "/lovable-uploads/a894fd1f-3d26-40d4-9894-31bbba3429a6.png", alt: "GitHub" },
  { imgSrc: "/lovable-uploads/eea20c30-074a-4c18-a567-d330bcc99ac6.png", alt: "Docker" },
  { imgSrc: "/lovable-uploads/0404c529-9360-4cf9-9eb2-85761c7dd641.png", alt: "Linux" },
];

export const SkillsSection = () => {
  // Duplicate skills for seamless infinite marquee
  const allSkills = [...SKILLS, ...SKILLS];

  return (
    <section id="skills" className="fade-in max-w-[100vw] mx-auto my-16 px-4 pb-16 overflow-hidden">
      <h2 className="text-3xl font-bold mb-8 text-center text-white bg-gradient-to-r from-white/70 via-white to-white/70 bg-clip-text">
        My Skills
      </h2>

      <div className="skills-marquee-wrapper overflow-hidden">
        <div className="skills-marquee flex space-x-8 px-4">
          {allSkills.map((skill, index) => (
            <div 
              key={`skill-${index}`} 
              className="flex-shrink-0"
            >
              <img 
                src={skill.imgSrc} 
                alt={skill.alt}
                className="w-16 h-16 object-contain transition-all hover:scale-110" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

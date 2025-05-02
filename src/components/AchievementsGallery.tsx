import React from "react";
import { ImagesIcon, ImagePlus } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const AchievementsGallery = () => {
  const achievements = [
    {
      id: 1,
      imageUrl: "/lovable-uploads/22e2d042-9d52-428f-8650-6874bcf87935.png",
      alt: "AWS event at Parliament Hill with Ottawa skyline in the background",
    },
    {
      id: 2,
      imageUrl: "/lovable-uploads/d7a660c6-05f0-4124-8e67-584b7e67bfef.png",
      alt: "Award ceremony with team members",
    },
    {
      id: 3,
      imageUrl: "/lovable-uploads/dd2fe66c-6446-4f2a-aef5-98ec1a120a8b.png",
      alt: "Receiving an award certificate",
    },
    {
      id: 4,
      imageUrl: "/lovable-uploads/6d3bd3eb-67cf-4c29-8158-e6c8133302bf.png",
      alt: "Speaking at CDAO Canada Public Sector conference",
    },
    {
      id: 5,
      imageUrl: "/lovable-uploads/a702b21a-f89e-4644-b2b8-64becc1f0070.png",
      alt: "Panel discussion at conference",
    },
    {
      id: 6,
      imageUrl: "/lovable-uploads/ac421a66-b0d3-41ba-9728-39527bc61a60.png",
      alt: "Ottawa Semi-Finalists CEOx1DAY recognition",
    },
    {
      id: 7,
      imageUrl: "/lovable-uploads/f76a3975-fa7e-4651-9336-4872f8f6577d.png",
      alt: "Airflow Summit 2023 attendance",
    },
    {
      id: 8,
      imageUrl: "/lovable-uploads/4b0a5753-d68b-4fd1-9f8f-016458f09826.png",
      alt: "Speaking at Algonquin College",
    },
    {
      id: 9,
      imageUrl: "/lovable-uploads/8a97fdd4-4451-4a7d-a5e5-a9a7dc213eb0.png",
      alt: "Presenting at a conference",
    },
    {
      id: 10,
      imageUrl: "/lovable-uploads/e47b961c-d65f-40e4-ac93-3b54b772565b.png",
      alt: "Meeting with industry leader",
    },
  ];

  const openFullSizeImage = (imageUrl: string, alt: string) => {
    window.open(imageUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="achievements" className="fade-in w-full max-w-[1800px] mx-auto py-16 px-2 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white bg-gradient-to-r from-white/70 via-white to-white/70 bg-clip-text">
        <span className="flex items-center justify-center gap-2">
          <ImagesIcon className="inline-block" size={32} />
          Gallery
        </span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {achievements.map((achievement) => (
          <div 
            key={achievement.id} 
            className="overflow-hidden bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-yellow-300 transition-all duration-300 group hover:shadow-[0_0_30px_5px_rgba(254,247,205,0.5)] rounded-lg cursor-pointer transform hover:scale-[1.02]"
            onClick={() => openFullSizeImage(achievement.imageUrl, achievement.alt)}
          >
            <div className="relative">
              <AspectRatio ratio={16/12} className="relative">
                <img 
                  src={achievement.imageUrl} 
                  alt={achievement.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-sm md:text-base font-medium text-white/90">{achievement.alt}</span>
                </div>
                <div className="absolute top-2 right-2 bg-yellow-300/30 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ImagePlus size={18} className="text-yellow-300" />
                </div>
              </AspectRatio>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

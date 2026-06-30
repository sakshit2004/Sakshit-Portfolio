const PHOTOS = [
  { url: "/lovable-uploads/22e2d042-9d52-428f-8650-6874bcf87935.png", alt: "AWS event at Parliament Hill, Ottawa" },
  { url: "/lovable-uploads/d7a660c6-05f0-4124-8e67-584b7e67bfef.png", alt: "Award ceremony with team" },
  { url: "/lovable-uploads/dd2fe66c-6446-4f2a-aef5-98ec1a120a8b.png", alt: "Receiving award certificate" },
  { url: "/lovable-uploads/6d3bd3eb-67cf-4c29-8158-e6c8133302bf.png", alt: "Speaking at CDAO Canada conference" },
  { url: "/lovable-uploads/a702b21a-f89e-4644-b2b8-64becc1f0070.png", alt: "Panel discussion at conference" },
  { url: "/lovable-uploads/ac421a66-b0d3-41ba-9728-39527bc61a60.png", alt: "Ottawa Semi-Finalists CEOx1DAY" },
  { url: "/lovable-uploads/f76a3975-fa7e-4651-9336-4872f8f6577d.png", alt: "Airflow Summit 2023" },
  { url: "/lovable-uploads/4b0a5753-d68b-4fd1-9f8f-016458f09826.png", alt: "Speaking at Algonquin College" },
  { url: "/lovable-uploads/8a97fdd4-4451-4a7d-a5e5-a9a7dc213eb0.png", alt: "Presenting at conference" },
  { url: "/lovable-uploads/e47b961c-d65f-40e4-ac93-3b54b772565b.png", alt: "Meeting with industry leader" },
];

export function AchievementsGallery() {
  return (
    <div className="gallery-grid">
      {PHOTOS.map((p, i) => (
        <div
          key={i}
          className="gallery-item"
          onClick={() => window.open(p.url, "_blank", "noopener,noreferrer")}
        >
          <img src={p.url} alt={p.alt} loading="lazy" />
          <div className="img-label">
            <span>{p.alt}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

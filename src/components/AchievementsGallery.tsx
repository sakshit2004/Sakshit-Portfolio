const PHOTOS = [
  { url: "/uploads/d7a660c6-05f0-4124-8e67-584b7e67bfef.png", alt: "Award ceremony with team" },
  { url: "/uploads/6d3bd3eb-67cf-4c29-8158-e6c8133302bf.png", alt: "Speaking at CDAO Canada conference" },
  { url: "/uploads/a702b21a-f89e-4644-b2b8-64becc1f0070.png", alt: "Panel discussion at conference" },
  { url: "/uploads/ac421a66-b0d3-41ba-9728-39527bc61a60.png", alt: "Ottawa Semi-Finalists CEOx1DAY" },
  { url: "/uploads/8a97fdd4-4451-4a7d-a5e5-a9a7dc213eb0.png", alt: "Presenting at conference" },
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

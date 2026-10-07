// Decorative Gargantua-style black hole (Interstellar), drawn purely in CSS.
// Layers back to front: glow → lensed ring → event horizon → accretion disk.
export function BlackHole() {
  return (
    <div className="blackhole" aria-hidden="true">
      <div className="bh-glow" />
      <div className="bh-lensed" />
      <div className="bh-horizon" />
      <div className="bh-disk" />
    </div>
  );
}

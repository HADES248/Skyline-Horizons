// A thin skyline silhouette used as the seam between "night" (ink) and
// "day" (paper) sections — the literal horizon line the brand is named for.
// `flip` mirrors it so the same asset can read as either edge of a section.
export default function SkylineDivider({ flip = false, className = '' }) {
  return (
    <div
      className={`w-full leading-[0] select-none ${flip ? 'rotate-180' : ''} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="w-full h-10 sm:h-14"
      >
        <path
          d="M0 60 L0 34 L40 34 L40 20 L64 20 L64 40 L96 40 L96 10 L120 10 L120 30 L160 30 L160 44 L200 44 L200 24 L224 24 L224 4 L248 4 L248 24 L280 24 L280 38 L320 38 L320 14 L344 14 L344 44 L384 44 L384 28 L420 28 L420 8 L452 8 L452 34 L492 34 L492 18 L520 18 L520 40 L560 40 L560 22 L588 22 L588 2 L616 2 L616 30 L656 30 L656 12 L688 12 L688 42 L724 42 L724 26 L752 26 L752 6 L780 6 L780 32 L820 32 L820 16 L848 16 L848 44 L888 44 L888 20 L916 20 L916 0 L944 0 L944 28 L980 28 L980 12 L1008 12 L1008 40 L1048 40 L1048 24 L1076 24 L1076 4 L1104 4 L1104 30 L1140 30 L1140 14 L1164 14 L1164 44 L1200 44 L1200 22 L1232 22 L1232 6 L1260 6 L1260 34 L1300 34 L1300 18 L1328 18 L1328 40 L1368 40 L1368 26 L1392 26 L1392 10 L1440 10 L1440 60 Z"
          fill="var(--color-gold)"
          opacity="0.9"
        />
      </svg>
    </div>
  );
}
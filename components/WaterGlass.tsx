"use client";

type Props = {
  onClick: () => void;
  className?: string;
  progress: number;
};

export default function WaterGlass({
  onClick,
  className = "",
  progress,
}: Props) {
  const clamped = Math.min(Math.max(progress, 0), 100);
  const waterBottom = 147;
  const waterTop = 25;
  const waterLevel = waterBottom - (clamped / 100) * (waterBottom - waterTop);
  const isFull = clamped >= 100;

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative p-2">
        <button
          onClick={onClick}
          className="group relative cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Add water"
        >
          <svg
            width="160"
            height="200"
            viewBox="0 0 120 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-xl"
          >
            <defs>
              <linearGradient
                id="waterGrad"
                x1="0%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#1a8cff" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#65b0e4" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient
                id="glassBody"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.04)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur
                  stdDeviation="3"
                  result="coloredBlur"
                />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <clipPath id="waterClip">
                <rect
                  x="0"
                  y={waterLevel}
                  width="120"
                  height={waterBottom - waterLevel}
                />
              </clipPath>
            </defs>

            {/* Glass body */}
            <path
              d="M30 15 L25 130 C25 145 35 150 60 150 C85 150 95 145 95 130 L90 15 Z"
              fill="url(#glassBody)"
              stroke="var(--color-border)"
              strokeWidth="1.5"
              className="transition-colors duration-300"
            />

            {/* Glass rim */}
            <ellipse
              cx="60"
              cy="15"
              rx="30"
              ry="5"
              fill="none"
              stroke="var(--color-border)"
              strokeWidth="1.5"
            />

            {/* Glass shine */}
            <path
              d="M40 20 L38 120"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.15"
            />

            {/* Water fill (clipped) */}
            <g clipPath="url(#waterClip)">
              <path
                d="M33 25 L28 128 C28 142 38 147 60 147 C82 147 92 142 92 128 L87 25 Z"
                fill="url(#waterGrad)"
              />

              {/* Shimmer */}
              <path
                d="M33 25 L28 128 C28 142 38 147 60 147 C82 147 92 142 92 128 L87 25 Z"
                fill="rgba(255,255,255,0.06)"
              />

              {/* Bubbles */}
              {clamped > 20 && (
                <circle cx="50" cy="130" r="2" fill="white" opacity="0.35">
                  <animate
                    attributeName="cy"
                    values="130;115;100"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.35;0.1;0"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
              {clamped > 40 && (
                <circle cx="68" cy="125" r="1.5" fill="white" opacity="0.3">
                  <animate
                    attributeName="cy"
                    values="125;108;90"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.3;0.1;0"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
              {clamped > 60 && (
                <circle cx="55" cy="135" r="1" fill="white" opacity="0.25">
                  <animate
                    attributeName="cy"
                    values="135;118;100"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.25;0.05;0"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
            </g>

            {/* Water surface */}
            <ellipse
              cx="60"
              cy={waterLevel}
              rx="26"
              ry="3.5"
              fill="url(#waterGrad)"
              opacity="0.9"
            />

            {/* Goal-reached effects */}
            {isFull && (
              <>
                <path
                  d="M30 15 L25 130 C25 145 35 150 60 150 C85 150 95 145 95 130 L90 15 Z"
                  fill="none"
                  stroke="#1a8cff"
                  strokeWidth="3"
                  opacity="0.6"
                  filter="url(#glow)"
                />
                <circle cx="60" cy="80" r="14" fill="#22c55e" opacity="0.95" />
                <path
                  d="M53 80 L58 85 L67 74"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </>
            )}
          </svg>

          {/* Hover ripple */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="w-24 h-24 rounded-full border-2 border-brand-300 animate-ripple" />
          </div>
        </button>
      </div>

      {/* Progress text */}
      <div className="text-center mt-1">
        <p className="text-4xl font-bold text-brand-500 drop-shadow-sm">
          {Math.round(clamped)}%
        </p>
        <p className="text-xs text-[var(--color-text-muted)] mt-1.5">
          {isFull ? "Daily goal reached!" : "Tap the glass to add water"}
        </p>
      </div>
    </div>
  );
}

import React from "react";

/**
 * OrbitMark — The celestial visual identity for SATAT Orbit.
 * Faithful to SATAT's geometry:
 * - 28° inclined orbital ring
 * - Glowing central planetary core
 * - Traveling orbital satellite
 * - Multi-state support: 'idle' | 'thinking' | 'responding'
 */
export const OrbitIcon = ({
    size = 48,
    className = "",
    state = "idle"
}) => {
    const isThinking = state === "thinking";
    const isResponding = state === "responding";

    return (
        <div
            className={`relative flex items-center justify-center shrink-0 ${className}`}
            style={{ width: size, height: size }}
        >
            <svg
                width={size}
                height={size}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible"
            >
                <defs>
                    <radialGradient
                        id="orbitCoreGlow"
                        cx="50%"
                        cy="50%"
                        r="50%"
                    >
                        <stop offset="0%" stopColor={isResponding ? "#3A6351" : isThinking ? "#D95338" : "#141413"} stopOpacity="1" />
                        <stop offset="100%" stopColor={isResponding ? "#2E4E40" : isThinking ? "#B83B22" : "#383633"} stopOpacity="0.85" />
                    </radialGradient>
                    <linearGradient
                        id="orbitRingGrad"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                    >
                        <stop offset="0%" stopColor="#141413" stopOpacity="0.6" />
                        <stop offset="50%" stopColor={isResponding ? "#3A6351" : isThinking ? "#D95338" : "#8E8A83"} stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#141413" stopOpacity="0.2" />
                    </linearGradient>
                </defs>

                {/* Outer Glow Halo for Active States */}
                {(isThinking || isResponding) && (
                    <circle
                        cx="16"
                        cy="16"
                        r="12"
                        fill={isResponding ? "#3A6351" : "#D95338"}
                        opacity="0.18"
                        className="animate-pulse"
                    />
                )}

                {/* 28-degree Inclined Celestial Orbital Ring */}
                <g transform="rotate(-28 16 16)">
                    <ellipse
                        cx="16"
                        cy="16"
                        rx="12.5"
                        ry="5.5"
                        stroke="url(#orbitRingGrad)"
                        strokeWidth="1.4"
                        strokeDasharray={isThinking ? "3 3" : "none"}
                        className={isThinking ? "animate-spin" : ""}
                        style={{ transformOrigin: "16px 16px", animationDuration: "6s" }}
                    />

                    {/* Orbiting Satellite Node */}
                    <circle
                        cx="28.5"
                        cy="16"
                        r="1.8"
                        fill={isResponding ? "#3A6351" : isThinking ? "#D95338" : "#141413"}
                        className="transition-transform duration-500"
                    />
                </g>

                {/* Central Luminous Core */}
                <circle
                    cx="16"
                    cy="16"
                    r="4.8"
                    fill="url(#orbitCoreGlow)"
                    className="shadow-sm"
                />

                {/* Inner Specular Highlight */}
                <circle
                    cx="14.8"
                    cy="14.6"
                    r="1.3"
                    fill="#FAF7F3"
                    opacity="0.75"
                />
            </svg>
        </div>
    );
};

export default OrbitIcon;


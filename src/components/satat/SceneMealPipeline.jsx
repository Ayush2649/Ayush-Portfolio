import React, { useState } from "react";

/**
 * SCENE 2 — TWO-STAGE MEAL ANALYSIS
 * Highlights the dual-routing architecture:
 * Stage 1: Multimodal vision identifies food items & portions.
 * Stage 2: Synchronous router classifies items:
 *   - Canonical items -> Deterministic Food Database (exact nutrient lookup)
 *   - Non-canonical (confidence >= 0.60) -> AI Nutrition Estimator
 */
const SceneMealPipeline = () => {
    const [activeRoute, setActiveRoute] = useState("canonical"); // "canonical" | "ai"
    const [activeStage, setActiveStage] = useState(null); // null | 1 | 2 | 3 | 4

    const stages = [
        {
            num: "01",
            name: "Image Input",
            sub: "Multimodal Capture",
            desc: "User captures or uploads meal photo via client camera.",
            tech: "Web API · Canvas",
            icon: "📷",
        },
        {
            num: "02",
            name: "Gemini Vision",
            sub: "Item & Portion Detection",
            desc: "Identifies dish candidates, ingredients, and portion volume.",
            tech: "Gemini 2.0 Flash",
            icon: "👁️",
        },
        {
            num: "03",
            name: "Classification Router",
            sub: "Decision Engine",
            desc: "Evaluates confidence threshold (≥ 0.60) to select resolution path.",
            tech: "Pure Classifier",
            icon: "⚡",
        },
        {
            num: "04",
            name: activeRoute === "canonical" ? "Deterministic DB" : "AI Estimator",
            sub: activeRoute === "canonical" ? "Exact Nutrient Lookup" : "Contextual Estimation",
            desc:
                activeRoute === "canonical"
                    ? "Resolves canonical recipes against verified nutritional values with zero hallucination."
                    : "Multi-stage nutritional reasoning for open-world dishes and recipes.",
            tech: activeRoute === "canonical" ? "Food DB" : "DeepSeek API",
            icon: activeRoute === "canonical" ? "✓" : "🧠",
        },
    ];

    return (
        <div className="w-full flex flex-col items-center">
            {/* Header Switcher */}
            <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl gap-3 mb-4 px-1">
                <div className="flex items-center gap-2 text-xs font-editorial-mono text-[#5C5955]">
                    <span className="w-2 h-2 rounded-full bg-[#3A6351]" />
                    <span className="uppercase tracking-wider">Sequential Multi-Stage Pipeline</span>
                </div>

                {/* Interactive Routing Selector */}
                <div className="inline-flex items-center p-1 rounded-full bg-[#FAF7F3] border border-[#141413]/15 text-xs font-editorial-sans shadow-2xs">
                    <button
                        onClick={() => setActiveRoute("canonical")}
                        className={`px-3.5 py-1.5 rounded-full transition-all duration-200 font-semibold ${
                            activeRoute === "canonical"
                                ? "bg-[#3A6351] text-[#FAF7F3] shadow-xs"
                                : "text-[#5C5955] hover:text-[#141413]"
                        }`}
                    >
                        Route A: Deterministic Food DB
                    </button>
                    <button
                        onClick={() => setActiveRoute("ai")}
                        className={`px-3.5 py-1.5 rounded-full transition-all duration-200 font-semibold ${
                            activeRoute === "ai"
                                ? "bg-[#D95338] text-[#FAF7F3] shadow-xs"
                                : "text-[#5C5955] hover:text-[#141413]"
                        }`}
                    >
                        Route B: AI Estimation
                    </button>
                </div>
            </div>

            {/* Pipeline Visualization */}
            <div className="relative w-full max-w-4xl rounded-2xl bg-[#FAF7F3] border border-[#141413]/12 p-5 sm:p-7 shadow-sm">
                {/* 4 Pipeline Steps in Balanced Horizontal Chain */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-5">
                    {stages.map((st, idx) => {
                        const isLast = idx === 3;
                        const isHovered = activeStage === idx + 1;
                        return (
                            <div
                                key={st.num}
                                onMouseEnter={() => setActiveStage(idx + 1)}
                                onMouseLeave={() => setActiveStage(null)}
                                className={`relative p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between cursor-default ${
                                    isLast
                                        ? activeRoute === "canonical"
                                            ? "bg-[#3A6351]/10 border-[#3A6351]/30 text-[#141413]"
                                            : "bg-[#D95338]/10 border-[#D95338]/30 text-[#141413]"
                                        : isHovered
                                        ? "bg-[#EBE6DD] border-[#141413]/30 shadow-xs"
                                        : "bg-[#F2EEE7] border-[#141413]/10"
                                }`}
                            >
                                <div>
                                    <div className="flex items-center justify-between text-[10px] font-editorial-mono pb-1 border-b border-[#141413]/8">
                                        <span className="font-bold text-[#7A756F]">STAGE {st.num}</span>
                                        <span
                                            className={`font-semibold ${
                                                isLast
                                                    ? activeRoute === "canonical"
                                                        ? "text-[#3A6351]"
                                                        : "text-[#D95338]"
                                                    : "text-[#141413]"
                                            }`}
                                        >
                                            {st.tech}
                                        </span>
                                    </div>
                                    <div className="text-sm font-editorial-sans font-black text-[#141413] mt-2">
                                        {st.name}
                                    </div>
                                    <div className="text-[11px] font-editorial-mono text-[#5C5955] mt-0.5 font-medium">
                                        {st.sub}
                                    </div>
                                    <p className="text-[11px] font-editorial-sans text-[#4A4744] mt-2 leading-snug">
                                        {st.desc}
                                    </p>
                                </div>

                                <div className="mt-3 pt-2 border-t border-[#141413]/8 flex items-center justify-between text-xs">
                                    <span>{st.icon}</span>
                                    <span className="text-[10px] font-editorial-mono text-[#7A756F]">
                                        {idx < 3 ? "Pipeline Step →" : "Resolved Output ✓"}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Example Walkthrough Box */}
                <div className="p-4 rounded-xl bg-[#F2EEE7]/90 border border-[#141413]/10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-editorial-mono text-[#5C5955] pb-2 border-b border-[#141413]/10 mb-3 gap-2">
                        <span className="font-bold text-[#141413]">
                            {activeRoute === "canonical"
                                ? "EXAMPLE TRACE: CANONICAL DISH (DAL TADKA & ROTI)"
                                : "EXAMPLE TRACE: OPEN-WORLD DISH (CUSTOM CAFE BOWL)"}
                        </span>
                        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#FAF7F3] border border-[#141413]/12 font-semibold">
                            {activeRoute === "canonical"
                                ? "Classification Confidence: 0.94 (DB Match)"
                                : "Classification Confidence: 0.78 (AI Route)"}
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-editorial-sans">
                        <div className="p-3 rounded-lg bg-[#FAF7F3] border border-[#141413]/8">
                            <span className="text-[10px] font-editorial-mono text-[#7A756F]">IDENTIFIED INGREDIENTS</span>
                            <div className="font-bold text-[#141413] mt-1 text-xs sm:text-[13px]">
                                {activeRoute === "canonical"
                                    ? "1 Bowl Dal Tadka + 2 Whole Wheat Rotis"
                                    : "1 Quinoa Power Bowl with Grilled Paneer & Dressing"}
                            </div>
                        </div>

                        <div className="p-3 rounded-lg bg-[#FAF7F3] border border-[#141413]/8">
                            <span className="text-[10px] font-editorial-mono text-[#7A756F]">RESOLUTION PIPELINE</span>
                            <div className="font-bold text-[#141413] mt-1 flex items-center gap-1.5 text-xs sm:text-[13px]">
                                <span
                                    className={`w-2 h-2 rounded-full ${
                                        activeRoute === "canonical" ? "bg-[#3A6351]" : "bg-[#D95338]"
                                    }`}
                                />
                                {activeRoute === "canonical" ? "Deterministic Food DB" : "DeepSeek Nutritional Estimator"}
                            </div>
                        </div>

                        <div className="p-3 rounded-lg bg-[#FAF7F3] border border-[#141413]/8">
                            <span className="text-[10px] font-editorial-mono text-[#7A756F]">RESOLVED TELEMETRY</span>
                            <div className="font-editorial-mono text-[11px] text-[#141413] font-bold mt-1">
                                {activeRoute === "canonical"
                                    ? "420 kcal · 18g Protein · 64g Carbs · 9g Fats"
                                    : "510 kcal · 24g Protein · 52g Carbs · 19g Fats"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SceneMealPipeline;

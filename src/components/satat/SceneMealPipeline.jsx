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

    return (
        <div className="w-full flex flex-col items-center">
            {/* Header Switcher */}
            <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl gap-3 mb-6">
                <div className="flex items-center gap-2 text-xs font-editorial-mono text-[#5C5955]">
                    <span className="w-2 h-2 rounded-full bg-[#3A6351]" />
                    <span className="uppercase tracking-wider">Two-Stage Meal Analysis</span>
                </div>

                {/* Interactive Routing Selector */}
                <div className="inline-flex items-center p-1 rounded-full bg-[#FAF7F3] border border-[#141413]/15 text-xs font-editorial-sans">
                    <button
                        onClick={() => setActiveRoute("canonical")}
                        className={`px-3 py-1 rounded-full transition-all duration-200 font-medium ${
                            activeRoute === "canonical"
                                ? "bg-[#3A6351] text-[#FAF7F3] shadow-xs"
                                : "text-[#5C5955] hover:text-[#141413]"
                        }`}
                    >
                        Path A: Deterministic Food DB
                    </button>
                    <button
                        onClick={() => setActiveRoute("ai")}
                        className={`px-3 py-1 rounded-full transition-all duration-200 font-medium ${
                            activeRoute === "ai"
                                ? "bg-[#D95338] text-[#FAF7F3] shadow-xs"
                                : "text-[#5C5955] hover:text-[#141413]"
                        }`}
                    >
                        Path B: AI Estimation
                    </button>
                </div>
            </div>

            {/* Pipeline Visualization */}
            <div className="relative w-full max-w-4xl rounded-2xl bg-[#FAF7F3] border border-[#141413]/12 p-6 sm:p-8 shadow-sm">
                
                {/* 4 Pipeline Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    
                    {/* Step 1: Meal Ingestion */}
                    <div className="p-4 rounded-xl bg-[#F2EEE7] border border-[#141413]/10 flex flex-col justify-between">
                        <div>
                            <div className="text-[10px] font-editorial-mono text-[#7A756F] uppercase">Stage 01 · Ingestion</div>
                            <div className="text-sm font-editorial-sans font-bold text-[#141413] mt-1">Image Capture</div>
                            <p className="text-[11px] font-editorial-sans text-[#5C5955] mt-1.5">
                                User takes a photo of the meal via the camera or image upload.
                            </p>
                        </div>
                        <div className="mt-3 p-2 rounded-lg bg-[#FAF7F3] border border-[#141413]/8 text-[11px] font-editorial-mono text-[#5C5955] flex items-center gap-1.5">
                            <span>📷</span>
                            <span className="truncate">meal_photo.jpg</span>
                        </div>
                    </div>

                    {/* Step 2: Gemini Vision */}
                    <div className="p-4 rounded-xl bg-[#F2EEE7] border border-[#141413]/10 flex flex-col justify-between">
                        <div>
                            <div className="text-[10px] font-editorial-mono text-[#3A6351] font-semibold uppercase">Stage 02 · Vision</div>
                            <div className="text-sm font-editorial-sans font-bold text-[#141413] mt-1">Gemini 2.0 Multimodal</div>
                            <p className="text-[11px] font-editorial-sans text-[#5C5955] mt-1.5">
                                Identifies distinct food items, portion quantities, and confidence levels.
                            </p>
                        </div>
                        <div className="mt-3 p-2 rounded-lg bg-[#FAF7F3] border border-[#141413]/8 text-[10px] font-editorial-mono text-[#3A6351] font-medium">
                            ✓ Portion &amp; Item Detection
                        </div>
                    </div>

                    {/* Step 3: Decision Router */}
                    <div className="p-4 rounded-xl bg-[#141413] text-[#FAF7F3] shadow-sm flex flex-col justify-between">
                        <div>
                            <div className="text-[10px] font-editorial-mono text-emerald-400 font-semibold uppercase">Stage 03 · Router</div>
                            <div className="text-sm font-editorial-sans font-bold text-[#FAF7F3] mt-1">Classification Router</div>
                            <p className="text-[11px] font-editorial-sans text-[#C9C5BE] mt-1.5">
                                Pure classifier: routes known dishes to deterministic data, open-world dishes to AI estimation.
                            </p>
                        </div>
                        <div className="mt-3 text-[10px] font-editorial-mono text-amber-300">
                            Threshold: Confidence &ge; 0.60
                        </div>
                    </div>

                    {/* Step 4: Routed Destination */}
                    <div className={`p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                        activeRoute === "canonical"
                            ? "bg-[#3A6351]/10 border-[#3A6351]/30 text-[#141413]"
                            : "bg-[#D95338]/10 border-[#D95338]/30 text-[#141413]"
                    }`}>
                        <div>
                            <div className="text-[10px] font-editorial-mono font-bold uppercase" style={{ color: activeRoute === "canonical" ? "#3A6351" : "#D95338" }}>
                                {activeRoute === "canonical" ? "Route A · Deterministic" : "Route B · AI Estimator"}
                            </div>
                            <div className="text-sm font-editorial-sans font-bold text-[#141413] mt-1">
                                {activeRoute === "canonical" ? "Deterministic Food DB" : "DeepSeek Estimation"}
                            </div>
                            <p className="text-[11px] font-editorial-sans text-[#4A4744] mt-1.5">
                                {activeRoute === "canonical"
                                    ? "Resolves canonical recipes against verified nutritional values with zero hallucination."
                                    : "Applies multi-stage nutritional estimation for open-world dishes."}
                            </p>
                        </div>
                        <div className="mt-3 text-[10px] font-editorial-mono font-semibold" style={{ color: activeRoute === "canonical" ? "#2E4E40" : "#B83B22" }}>
                            {activeRoute === "canonical" ? "✓ Exact Nutrient Lookup" : "⚡ Contextual Estimation"}
                        </div>
                    </div>

                </div>

                {/* Example Walkthrough Box */}
                <div className="p-4 rounded-xl bg-[#F2EEE7]/80 border border-[#141413]/10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-editorial-mono text-[#5C5955] pb-2 border-b border-[#141413]/10 mb-3 gap-2">
                        <span className="font-bold text-[#141413]">
                            {activeRoute === "canonical" ? "EXAMPLE: CANONICAL DISH (DAL TADKA & ROTI)" : "EXAMPLE: OPEN-WORLD DISH (CUSTOM CAFE BOWL)"}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-[#FAF7F3] border border-[#141413]/10">
                            {activeRoute === "canonical" ? "Confidence: 0.94 (Database Match)" : "Confidence: 0.78 (AI Fallback)"}
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-editorial-sans">
                        <div className="p-2.5 rounded-lg bg-[#FAF7F3] border border-[#141413]/8">
                            <span className="text-[10px] font-editorial-mono text-[#7A756F]">IDENTIFIED ITEMS</span>
                            <div className="font-semibold text-[#141413] mt-0.5">
                                {activeRoute === "canonical" ? "1 Bowl Dal Tadka + 2 Phulka Roti" : "1 Quinoa Bowl with Grilled Paneer"}
                            </div>
                        </div>

                        <div className="p-2.5 rounded-lg bg-[#FAF7F3] border border-[#141413]/8">
                            <span className="text-[10px] font-editorial-mono text-[#7A756F]">RESOLUTION METHOD</span>
                            <div className="font-semibold text-[#141413] mt-0.5 flex items-center gap-1.5">
                                <span className={`w-1.5 h-1.5 rounded-full ${activeRoute === "canonical" ? "bg-[#3A6351]" : "bg-[#D95338]"}`} />
                                {activeRoute === "canonical" ? "Deterministic Database" : "AI Estimation Model"}
                            </div>
                        </div>

                        <div className="p-2.5 rounded-lg bg-[#FAF7F3] border border-[#141413]/8">
                            <span className="text-[10px] font-editorial-mono text-[#7A756F]">RESOLVED MACROS</span>
                            <div className="font-mono text-[11px] text-[#141413] font-semibold mt-0.5">
                                {activeRoute === "canonical" ? "420 kcal | P: 18g | C: 64g | F: 9g" : "510 kcal | P: 24g | C: 52g | F: 19g"}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SceneMealPipeline;

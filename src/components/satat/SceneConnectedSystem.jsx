import React, { useRef, useState, useLayoutEffect } from "react";

/**
 * SCENE 1 — ONE CONNECTED SYSTEM
 * Demonstrates how Tasks, Workouts, and Nutrition converge into SATAT's unified core.
 * Features dynamic edge-to-edge SVG connectors on desktop and a clean vertical flow on mobile.
 */
const SceneConnectedSystem = () => {
    const containerRef = useRef(null);
    const tasksRef = useRef(null);
    const workoutsRef = useRef(null);
    const nutritionRef = useRef(null);
    const coreRef = useRef(null);
    const [paths, setPaths] = useState({ tasks: "", workouts: "", nutrition: "" });

    useLayoutEffect(() => {
        const updateConnectors = () => {
            if (
                !containerRef.current ||
                !tasksRef.current ||
                !workoutsRef.current ||
                !nutritionRef.current ||
                !coreRef.current
            ) {
                return;
            }

            const cRect = containerRef.current.getBoundingClientRect();
            const tRect = tasksRef.current.getBoundingClientRect();
            const wRect = workoutsRef.current.getBoundingClientRect();
            const nRect = nutritionRef.current.getBoundingClientRect();
            const coreR = coreRef.current.getBoundingClientRect();

            // Only calculate SVG curves if layout is side-by-side (>= 768px)
            if (cRect.width < 720) return;

            // 1. Tasks -> Core (Right edge of Tasks to Left edge of Core)
            const tStart = { x: tRect.right - cRect.left, y: tRect.top + tRect.height / 2 - cRect.top };
            const tEnd = { x: coreR.left - cRect.left, y: coreR.top + coreR.height * 0.35 - cRect.top };
            const tDx = Math.max((tEnd.x - tStart.x) * 0.5, 20);
            const tasksPath = `M ${tStart.x} ${tStart.y} C ${tStart.x + tDx} ${tStart.y}, ${tEnd.x - tDx} ${tEnd.y}, ${tEnd.x} ${tEnd.y}`;

            // 2. Workouts -> Core (Right edge of Workouts to Left edge of Core)
            const wStart = { x: wRect.right - cRect.left, y: wRect.top + wRect.height / 2 - cRect.top };
            const wEnd = { x: coreR.left - cRect.left, y: coreR.top + coreR.height * 0.65 - cRect.top };
            const wDx = Math.max((wEnd.x - wStart.x) * 0.5, 20);
            const workoutsPath = `M ${wStart.x} ${wStart.y} C ${wStart.x + wDx} ${wStart.y}, ${wEnd.x - wDx} ${wEnd.y}, ${wEnd.x} ${wEnd.y}`;

            // 3. Nutrition -> Core (Left edge of Nutrition to Right edge of Core)
            const nStart = { x: nRect.left - cRect.left, y: nRect.top + nRect.height / 2 - cRect.top };
            const nEnd = { x: coreR.right - cRect.left, y: coreR.top + coreR.height * 0.5 - cRect.top };
            const nDx = Math.max((nStart.x - nEnd.x) * 0.5, 20);
            const nutritionPath = `M ${nStart.x} ${nStart.y} C ${nStart.x - nDx} ${nStart.y}, ${nEnd.x + nDx} ${nEnd.y}, ${nEnd.x} ${nEnd.y}`;

            setPaths({ tasks: tasksPath, workouts: workoutsPath, nutrition: nutritionPath });
        };

        updateConnectors();
        window.addEventListener("resize", updateConnectors);
        const timer = setTimeout(updateConnectors, 150);
        return () => {
            window.removeEventListener("resize", updateConnectors);
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="w-full flex flex-col items-center">
            {/* Stage Container */}
            <div
                ref={containerRef}
                className="relative w-full max-w-4xl min-h-[380px] md:min-h-[460px] p-5 sm:p-8 rounded-2xl bg-[#FAF7F3] border border-[#141413]/12 shadow-sm overflow-hidden"
            >
                {/* DYNAMIC SVG CONNECTORS (Desktop/Tablet) */}
                <svg
                    className="hidden md:block absolute inset-0 w-full h-full pointer-events-none select-none z-0"
                    aria-hidden="true"
                >
                    <defs>
                        <linearGradient id="connGradTasks" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#141413" stopOpacity="0.35" />
                            <stop offset="100%" stopColor="#3A6351" stopOpacity="0.85" />
                        </linearGradient>
                        <linearGradient id="connGradWorkouts" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#D95338" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#3A6351" stopOpacity="0.85" />
                        </linearGradient>
                        <linearGradient id="connGradNutrition" x1="100%" y1="0%" x2="0%" y2="0%">
                            <stop offset="0%" stopColor="#3A6351" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#3A6351" stopOpacity="0.85" />
                        </linearGradient>
                    </defs>

                    {/* Accurate Edge-to-Edge Curves */}
                    {paths.tasks && (
                        <path
                            d={paths.tasks}
                            stroke="url(#connGradTasks)"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                            fill="none"
                        />
                    )}
                    {paths.workouts && (
                        <path
                            d={paths.workouts}
                            stroke="url(#connGradWorkouts)"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                            fill="none"
                        />
                    )}
                    {paths.nutrition && (
                        <path
                            d={paths.nutrition}
                            stroke="url(#connGradNutrition)"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                            fill="none"
                        />
                    )}
                </svg>

                {/* CONTENT NODES */}
                <div className="relative z-10 w-full flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 items-center justify-between">
                    
                    {/* Left Column: Tasks & Workouts */}
                    <div className="flex flex-col gap-4 sm:gap-5 w-full">
                        {/* Tasks Module */}
                        <div
                            ref={tasksRef}
                            className="p-4 rounded-xl bg-[#F2EEE7] border border-[#141413]/10 shadow-xs hover:border-[#141413]/25 transition-all"
                        >
                            <div className="flex items-center justify-between text-xs font-editorial-mono pb-2 border-b border-[#141413]/8">
                                <span className="font-bold text-[#141413]">TASKS &amp; ROUTINES</span>
                                <span className="text-[10px] bg-emerald-600/10 text-emerald-800 px-2 py-0.5 rounded-full font-semibold">Scheduled</span>
                            </div>
                            <div className="text-sm font-editorial-sans font-bold text-[#141413] mt-2">
                                Goal-Linked Habits
                            </div>
                            <p className="text-[11px] font-editorial-sans text-[#5C5955] mt-1 leading-normal">
                                Daily recurring habits mapped to focus blocks with push notifications.
                            </p>
                        </div>

                        {/* Mobile Downward Flow Indicator */}
                        <div className="md:hidden flex justify-center text-xs font-mono text-[#7A756F]">
                            ↓
                        </div>

                        {/* Workouts Module */}
                        <div
                            ref={workoutsRef}
                            className="p-4 rounded-xl bg-[#F2EEE7] border border-[#141413]/10 shadow-xs hover:border-[#D95338]/30 transition-all"
                        >
                            <div className="flex items-center justify-between text-xs font-editorial-mono pb-2 border-b border-[#141413]/8">
                                <span className="font-bold text-[#141413]">WORKOUTS</span>
                                <span className="text-[10px] bg-[#D95338]/10 text-[#D95338] px-2 py-0.5 rounded-full font-semibold">Tonnage</span>
                            </div>
                            <div className="text-sm font-editorial-sans font-bold text-[#141413] mt-2">
                                Strength &amp; Cardio Volume
                            </div>
                            <p className="text-[11px] font-editorial-sans text-[#5C5955] mt-1 leading-normal">
                                Exercise volume logs, tonnage calculation, and workout telemetry.
                            </p>
                        </div>
                    </div>

                    {/* Mobile Downward Flow Indicator */}
                    <div className="md:hidden flex justify-center text-xs font-mono text-[#7A756F]">
                        ↓
                    </div>

                    {/* Central SATAT Core */}
                    <div
                        ref={coreRef}
                        className="my-2 md:my-0 flex flex-col items-center justify-center text-center w-full max-w-[240px]"
                    >
                        <div className="w-full p-6 sm:p-7 rounded-3xl bg-[#141413] text-[#FAF7F3] shadow-xl border border-[#FAF7F3]/15 flex flex-col items-center">
                            <div className="w-12 h-12 rounded-2xl bg-[#3A6351] text-[#FAF7F3] flex items-center justify-center font-editorial-sans font-black text-xl mb-2.5 shadow-sm">
                                S
                            </div>
                            <div className="text-sm font-editorial-sans font-black tracking-wider uppercase text-[#FAF7F3]">
                                SATAT CORE
                            </div>
                            <div className="text-[10px] font-editorial-mono text-emerald-400 mt-0.5 font-medium">
                                Unified Telemetry Engine
                            </div>
                            <div className="mt-3 pt-3 border-t border-[#FAF7F3]/15 text-[11px] font-editorial-serif italic text-[#C9C5BE]">
                                Continuous Daily Discipline Score
                            </div>
                        </div>
                    </div>

                    {/* Mobile Downward Flow Indicator */}
                    <div className="md:hidden flex justify-center text-xs font-mono text-[#7A756F]">
                        ↓
                    </div>

                    {/* Right Column: Nutrition */}
                    <div className="flex flex-col gap-4 sm:gap-5 w-full">
                        {/* Nutrition Module */}
                        <div
                            ref={nutritionRef}
                            className="p-4 rounded-xl bg-[#F2EEE7] border border-[#141413]/10 shadow-xs hover:border-[#3A6351]/30 transition-all"
                        >
                            <div className="flex items-center justify-between text-xs font-editorial-mono pb-2 border-b border-[#141413]/8">
                                <span className="font-bold text-[#141413]">NUTRITION</span>
                                <span className="text-[10px] bg-[#3A6351]/10 text-[#3A6351] px-2 py-0.5 rounded-full font-semibold">Two-Stage</span>
                            </div>
                            <div className="text-sm font-editorial-sans font-bold text-[#141413] mt-2">
                                Vision &amp; Macro Intelligence
                            </div>
                            <p className="text-[11px] font-editorial-sans text-[#5C5955] mt-1 leading-normal">
                                Meal scans routed through deterministic database or AI estimation.
                            </p>
                        </div>

                        {/* Integration Outcome Note */}
                        <div className="p-3.5 rounded-xl bg-[#FAF7F3] border border-[#141413]/15 text-xs font-editorial-sans text-[#4A4744]">
                            <div className="flex items-center gap-1.5 font-bold text-[#141413] mb-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#3A6351]" />
                                <span>Zero Context Fragmentation</span>
                            </div>
                            <p className="text-[11px] text-[#5C5955] leading-relaxed">
                                Completing tasks, hitting workout targets, and logging meals synchronously updates Orbit context.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SceneConnectedSystem;

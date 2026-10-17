import React, { useRef, useState, useLayoutEffect } from "react";

/**
 * SCENE 1 — ONE CONNECTED SYSTEM
 * Demonstrates how Tasks, Workouts, Nutrition, and Telemetry Sync converge into SATAT Core.
 * Dynamic edge-to-edge SVG connectors in neutral black/charcoal calculated with ResizeObserver.
 * Continuous charcoal data-flow indicators moving smoothly toward the central SATAT Core node.
 * No colored lines, no colored particles, no development annotations.
 */
const SceneConnectedSystem = () => {
    const containerRef = useRef(null);
    const tasksRef = useRef(null);
    const workoutsRef = useRef(null);
    const nutritionRef = useRef(null);
    const syncRef = useRef(null);
    const coreRef = useRef(null);

    const [paths, setPaths] = useState({
        tasks: "",
        workouts: "",
        nutrition: "",
        sync: "",
    });

    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useLayoutEffect(() => {
        const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mql.matches);

        const motionHandler = (e) => setPrefersReducedMotion(e.matches);
        mql.addEventListener("change", motionHandler);

        const updateConnectors = () => {
            if (
                !containerRef.current ||
                !tasksRef.current ||
                !workoutsRef.current ||
                !nutritionRef.current ||
                !syncRef.current ||
                !coreRef.current
            ) {
                return;
            }

            const cRect = containerRef.current.getBoundingClientRect();
            const tRect = tasksRef.current.getBoundingClientRect();
            const wRect = workoutsRef.current.getBoundingClientRect();
            const nRect = nutritionRef.current.getBoundingClientRect();
            const sRect = syncRef.current.getBoundingClientRect();
            const coreR = coreRef.current.getBoundingClientRect();

            // Only draw SVG bezier curves on desktop/tablet where cards flank the core (width >= 720)
            if (cRect.width < 720) {
                setPaths({ tasks: "", workouts: "", nutrition: "", sync: "" });
                return;
            }

            // 1. Tasks -> Core (Right edge of Tasks to Left edge of Core, upper anchor)
            const tStart = { x: tRect.right - cRect.left, y: tRect.top + tRect.height / 2 - cRect.top };
            const tEnd = { x: coreR.left - cRect.left, y: coreR.top + coreR.height * 0.32 - cRect.top };
            const tDx = Math.max((tEnd.x - tStart.x) * 0.5, 20);
            const tasksPath = `M ${tStart.x} ${tStart.y} C ${tStart.x + tDx} ${tStart.y}, ${tEnd.x - tDx} ${tEnd.y}, ${tEnd.x} ${tEnd.y}`;

            // 2. Workouts -> Core (Right edge of Workouts to Left edge of Core, lower anchor)
            const wStart = { x: wRect.right - cRect.left, y: wRect.top + wRect.height / 2 - cRect.top };
            const wEnd = { x: coreR.left - cRect.left, y: coreR.top + coreR.height * 0.68 - cRect.top };
            const wDx = Math.max((wEnd.x - wStart.x) * 0.5, 20);
            const workoutsPath = `M ${wStart.x} ${wStart.y} C ${wStart.x + wDx} ${wStart.y}, ${wEnd.x - wDx} ${wEnd.y}, ${wEnd.x} ${wEnd.y}`;

            // 3. Nutrition -> Core (Left edge of Nutrition to Right edge of Core, upper anchor)
            const nStart = { x: nRect.left - cRect.left, y: nRect.top + nRect.height / 2 - cRect.top };
            const nEnd = { x: coreR.right - cRect.left, y: coreR.top + coreR.height * 0.32 - cRect.top };
            const nDx = Math.max((nStart.x - nEnd.x) * 0.5, 20);
            const nutritionPath = `M ${nStart.x} ${nStart.y} C ${nStart.x - nDx} ${nStart.y}, ${nEnd.x + nDx} ${nEnd.y}, ${nEnd.x} ${nEnd.y}`;

            // 4. Telemetry Sync -> Core (Left edge of Sync to Right edge of Core, lower anchor)
            const sStart = { x: sRect.left - cRect.left, y: sRect.top + sRect.height / 2 - cRect.top };
            const sEnd = { x: coreR.right - cRect.left, y: coreR.top + coreR.height * 0.68 - cRect.top };
            const sDx = Math.max((sStart.x - sEnd.x) * 0.5, 20);
            const syncPath = `M ${sStart.x} ${sStart.y} C ${sStart.x - sDx} ${sStart.y}, ${sEnd.x + sDx} ${sEnd.y}, ${sEnd.x} ${sEnd.y}`;

            setPaths({ tasks: tasksPath, workouts: workoutsPath, nutrition: nutritionPath, sync: syncPath });
        };

        updateConnectors();
        window.addEventListener("resize", updateConnectors);

        let observer = null;
        if (typeof ResizeObserver !== "undefined" && containerRef.current) {
            observer = new ResizeObserver(() => {
                updateConnectors();
            });
            observer.observe(containerRef.current);
            if (tasksRef.current) observer.observe(tasksRef.current);
            if (workoutsRef.current) observer.observe(workoutsRef.current);
            if (nutritionRef.current) observer.observe(nutritionRef.current);
            if (syncRef.current) observer.observe(syncRef.current);
            if (coreRef.current) observer.observe(coreRef.current);
        }

        const timer = setTimeout(updateConnectors, 120);

        return () => {
            mql.removeEventListener("change", motionHandler);
            window.removeEventListener("resize", updateConnectors);
            if (observer) observer.disconnect();
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="w-full flex flex-col items-center">
            {/* Stage Container: Balanced composition with purposeful whitespace */}
            <div
                ref={containerRef}
                className="relative w-full max-w-4xl p-5 sm:p-7 md:p-8 rounded-2xl bg-[#FAF7F3] border border-[#141413]/12 shadow-sm overflow-hidden"
            >
                {/* DYNAMIC SVG CONNECTORS & FLOW INDICATORS (BLACK/CHARCOAL ONLY) */}
                <svg
                    className="hidden md:block absolute inset-0 w-full h-full pointer-events-none select-none z-0"
                    aria-hidden="true"
                >
                    {/* Tasks -> Core */}
                    {paths.tasks && (
                        <g>
                            <path
                                d={paths.tasks}
                                stroke="#141413"
                                strokeWidth="1.75"
                                strokeDasharray="4 4"
                                strokeOpacity="0.45"
                                fill="none"
                            />
                            {!prefersReducedMotion && (
                                <circle r="3" fill="#141413">
                                    <animateMotion
                                        path={paths.tasks}
                                        dur="3.2s"
                                        repeatCount="indefinite"
                                    />
                                </circle>
                            )}
                        </g>
                    )}

                    {/* Workouts -> Core */}
                    {paths.workouts && (
                        <g>
                            <path
                                d={paths.workouts}
                                stroke="#141413"
                                strokeWidth="1.75"
                                strokeDasharray="4 4"
                                strokeOpacity="0.45"
                                fill="none"
                            />
                            {!prefersReducedMotion && (
                                <circle r="3" fill="#141413">
                                    <animateMotion
                                        path={paths.workouts}
                                        dur="3.8s"
                                        begin="0.7s"
                                        repeatCount="indefinite"
                                    />
                                </circle>
                            )}
                        </g>
                    )}

                    {/* Nutrition -> Core */}
                    {paths.nutrition && (
                        <g>
                            <path
                                d={paths.nutrition}
                                stroke="#141413"
                                strokeWidth="1.75"
                                strokeDasharray="4 4"
                                strokeOpacity="0.45"
                                fill="none"
                            />
                            {!prefersReducedMotion && (
                                <circle r="3" fill="#141413">
                                    <animateMotion
                                        path={paths.nutrition}
                                        dur="3.4s"
                                        begin="1.2s"
                                        repeatCount="indefinite"
                                    />
                                </circle>
                            )}
                        </g>
                    )}

                    {/* Telemetry Sync -> Core */}
                    {paths.sync && (
                        <g>
                            <path
                                d={paths.sync}
                                stroke="#141413"
                                strokeWidth="1.75"
                                strokeDasharray="4 4"
                                strokeOpacity="0.45"
                                fill="none"
                            />
                            {!prefersReducedMotion && (
                                <circle r="3" fill="#141413">
                                    <animateMotion
                                        path={paths.sync}
                                        dur="4.0s"
                                        begin="0.4s"
                                        repeatCount="indefinite"
                                    />
                                </circle>
                            )}
                        </g>
                    )}
                </svg>

                {/* CONTENT NODES */}
                <div className="relative z-10 w-full flex flex-col md:grid md:grid-cols-12 gap-5 md:gap-6 items-center justify-between">
                    
                    {/* Left Column (4 Cols on md/lg): Tasks & Workouts */}
                    <div className="w-full md:col-span-4 flex flex-col gap-4">
                        {/* Tasks Module */}
                        <div
                            ref={tasksRef}
                            className="p-4 rounded-xl bg-[#F2EEE7] border border-[#141413]/10 shadow-2xs hover:border-[#141413]/30 hover:bg-[#EBE6DD] transition-all relative z-10"
                        >
                            <div className="flex items-center justify-between text-xs font-editorial-mono pb-2 border-b border-[#141413]/8">
                                <span className="font-bold text-[#141413]">TASKS &amp; ROUTINES</span>
                                <span className="text-[10px] bg-[#141413]/10 text-[#141413] px-2 py-0.5 rounded-full font-semibold">Scheduled</span>
                            </div>
                            <div className="text-sm font-editorial-sans font-bold text-[#141413] mt-2">
                                Goal-Linked Habits
                            </div>
                            <p className="text-[11px] font-editorial-sans text-[#5C5955] mt-1 leading-normal">
                                Daily recurring habits mapped to focus blocks with push notifications.
                            </p>
                        </div>

                        {/* Mobile Flow Marker */}
                        <div className="md:hidden flex justify-center text-xs font-mono text-[#7A756F]">
                            ↓
                        </div>

                        {/* Workouts Module */}
                        <div
                            ref={workoutsRef}
                            className="p-4 rounded-xl bg-[#F2EEE7] border border-[#141413]/10 shadow-2xs hover:border-[#141413]/30 hover:bg-[#EBE6DD] transition-all relative z-10"
                        >
                            <div className="flex items-center justify-between text-xs font-editorial-mono pb-2 border-b border-[#141413]/8">
                                <span className="font-bold text-[#141413]">WORKOUTS</span>
                                <span className="text-[10px] bg-[#141413]/10 text-[#141413] px-2 py-0.5 rounded-full font-semibold">Tonnage</span>
                            </div>
                            <div className="text-sm font-editorial-sans font-bold text-[#141413] mt-2">
                                Strength &amp; Cardio Volume
                            </div>
                            <p className="text-[11px] font-editorial-sans text-[#5C5955] mt-1 leading-normal">
                                Exercise volume logs, tonnage calculation, and workout telemetry.
                            </p>
                        </div>
                    </div>

                    {/* Mobile Flow Marker */}
                    <div className="md:hidden flex justify-center text-xs font-mono text-[#7A756F]">
                        ↓
                    </div>

                    {/* Central SATAT Core Node (4 Cols on md/lg) */}
                    <div
                        ref={coreRef}
                        className="w-full md:col-span-4 flex flex-col items-center justify-center text-center my-2 md:my-0 relative z-20"
                    >
                        <div className="w-full max-w-[240px] p-5 sm:p-6 rounded-3xl bg-[#141413] text-[#FAF7F3] shadow-lg border border-[#FAF7F3]/15 flex flex-col items-center hover:scale-[1.02] transition-transform duration-300 relative">
                            <div className="relative w-12 h-12 rounded-2xl bg-[#242422] text-[#FAF7F3] flex items-center justify-center font-editorial-sans font-black text-xl mb-2.5 shadow-sm border border-[#FAF7F3]/15">
                                <span>S</span>
                                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#141413]" />
                            </div>
                            <div className="text-sm font-editorial-sans font-black tracking-wider uppercase text-[#FAF7F3]">
                                SATAT CORE
                            </div>
                            <div className="text-[10px] font-editorial-mono text-[#A6A29A] mt-0.5 font-medium">
                                Central Telemetry Engine
                            </div>
                            <div className="mt-3 pt-3 border-t border-[#FAF7F3]/15 text-[11px] font-editorial-serif italic text-[#C9C5BE] leading-tight">
                                Continuous Daily Discipline Score
                            </div>
                        </div>
                    </div>

                    {/* Mobile Flow Marker */}
                    <div className="md:hidden flex justify-center text-xs font-mono text-[#7A756F]">
                        ↓
                    </div>

                    {/* Right Column (4 Cols on md/lg): Nutrition & Sync */}
                    <div className="w-full md:col-span-4 flex flex-col gap-4">
                        {/* Nutrition Module */}
                        <div
                            ref={nutritionRef}
                            className="p-4 rounded-xl bg-[#F2EEE7] border border-[#141413]/10 shadow-2xs hover:border-[#141413]/30 hover:bg-[#EBE6DD] transition-all relative z-10"
                        >
                            <div className="flex items-center justify-between text-xs font-editorial-mono pb-2 border-b border-[#141413]/8">
                                <span className="font-bold text-[#141413]">NUTRITION</span>
                                <span className="text-[10px] bg-[#141413]/10 text-[#141413] px-2 py-0.5 rounded-full font-semibold">Two-Stage</span>
                            </div>
                            <div className="text-sm font-editorial-sans font-bold text-[#141413] mt-2">
                                Vision &amp; Macro Intelligence
                            </div>
                            <p className="text-[11px] font-editorial-sans text-[#5C5955] mt-1 leading-normal">
                                Meal scans routed through deterministic database or AI estimation.
                            </p>
                        </div>

                        {/* Mobile Flow Marker */}
                        <div className="md:hidden flex justify-center text-xs font-mono text-[#7A756F]">
                            ↓
                        </div>

                        {/* Telemetry Sync Module */}
                        <div
                            ref={syncRef}
                            className="p-4 rounded-xl bg-[#F2EEE7] border border-[#141413]/10 shadow-2xs hover:border-[#141413]/30 hover:bg-[#EBE6DD] transition-all relative z-10"
                        >
                            <div className="flex items-center justify-between text-xs font-editorial-mono pb-2 border-b border-[#141413]/8">
                                <span className="font-bold text-[#141413]">TELEMETRY SYNC</span>
                                <span className="text-[10px] bg-[#141413]/10 text-[#141413] px-2 py-0.5 rounded-full font-semibold">Webhooks</span>
                            </div>
                            <div className="text-sm font-editorial-sans font-bold text-[#141413] mt-2">
                                Background Ingestion
                            </div>
                            <p className="text-[11px] font-editorial-sans text-[#5C5955] mt-1 leading-normal">
                                Health Auto Export webhooks stream biometrics and training logs directly.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SceneConnectedSystem;

import React, { useState } from "react";
import OrbitIcon from "./OrbitIcon.jsx";

/**
 * SCENE 3 — ORBIT AI CONTEXT ENGINE
 * Highlights Orbit's multi-domain context engine:
 * Ingests 4 live streams:
 * 1. Logged Meals & Calories
 * 2. Nutritional Macro Targets
 * 3. Recent Workout Volume
 * 4. Pending Daily Tasks & Habits
 */
const SceneOrbitContext = () => {
    const [orbitState, setOrbitState] = useState("responding"); // "idle" | "thinking" | "responding"

    return (
        <div className="w-full flex flex-col items-center">
            {/* Header Switcher */}
            <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl gap-3 mb-6">
                <div className="flex items-center gap-2 text-xs font-editorial-mono text-[#5C5955]">
                    <span className="w-2 h-2 rounded-full bg-[#3A6351]" />
                    <span className="uppercase tracking-wider">Orbit AI Context Engine</span>
                </div>

                {/* State Controller */}
                <div className="inline-flex items-center p-1 rounded-full bg-[#FAF7F3] border border-[#141413]/15 text-xs font-editorial-sans">
                    <button
                        onClick={() => setOrbitState("idle")}
                        className={`px-3 py-1 rounded-full transition-all duration-200 font-medium ${
                            orbitState === "idle"
                                ? "bg-[#141413] text-[#FAF7F3] shadow-xs"
                                : "text-[#5C5955] hover:text-[#141413]"
                        }`}
                    >
                        Idle
                    </button>
                    <button
                        onClick={() => setOrbitState("thinking")}
                        className={`px-3 py-1 rounded-full transition-all duration-200 font-medium ${
                            orbitState === "thinking"
                                ? "bg-[#D95338] text-[#FAF7F3] shadow-xs"
                                : "text-[#5C5955] hover:text-[#141413]"
                        }`}
                    >
                        Thinking
                    </button>
                    <button
                        onClick={() => setOrbitState("responding")}
                        className={`px-3 py-1 rounded-full transition-all duration-200 font-medium ${
                            orbitState === "responding"
                                ? "bg-[#3A6351] text-[#FAF7F3] shadow-xs"
                                : "text-[#5C5955] hover:text-[#141413]"
                        }`}
                    >
                        Responding
                    </button>
                </div>
            </div>

            {/* Main Stage */}
            <div className="relative w-full max-w-4xl rounded-2xl bg-[#FAF7F3] border border-[#141413]/12 p-6 sm:p-8 shadow-sm">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    
                    {/* Left Side: 4 Ingested Context Streams */}
                    <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                        
                        {/* Stream 1: Logged Meals */}
                        <div className="p-3 rounded-xl bg-[#F2EEE7] border border-[#141413]/8">
                            <div className="flex items-center justify-between text-[10px] font-editorial-mono text-[#7A756F]">
                                <span>CONTEXT FEED 01</span>
                                <span className="text-[#3A6351] font-semibold">Active</span>
                            </div>
                            <div className="text-xs font-editorial-sans font-bold text-[#141413] mt-0.5">
                                Logged Meals &amp; Nutrition
                            </div>
                            <div className="text-[10px] font-editorial-mono text-[#5C5955] mt-1">
                                1,840 kcal · 142g Protein logged
                            </div>
                        </div>

                        {/* Stream 2: Macro Targets */}
                        <div className="p-3 rounded-xl bg-[#F2EEE7] border border-[#141413]/8">
                            <div className="flex items-center justify-between text-[10px] font-editorial-mono text-[#7A756F]">
                                <span>CONTEXT FEED 02</span>
                                <span className="text-[#3A6351] font-semibold">Targets</span>
                            </div>
                            <div className="text-xs font-editorial-sans font-bold text-[#141413] mt-0.5">
                                Nutritional Benchmarks
                            </div>
                            <div className="text-[10px] font-editorial-mono text-[#5C5955] mt-1">
                                Target: 160g Protein · 2,200 kcal
                            </div>
                        </div>

                        {/* Stream 3: Recent Workouts */}
                        <div className="p-3 rounded-xl bg-[#F2EEE7] border border-[#141413]/8">
                            <div className="flex items-center justify-between text-[10px] font-editorial-mono text-[#7A756F]">
                                <span>CONTEXT FEED 03</span>
                                <span className="text-[#D95338] font-semibold">Training</span>
                            </div>
                            <div className="text-xs font-editorial-sans font-bold text-[#141413] mt-0.5">
                                Completed Workout Session
                            </div>
                            <div className="text-[10px] font-editorial-mono text-[#5C5955] mt-1">
                                Upper Body · 3,420 kg total volume
                            </div>
                        </div>

                        {/* Stream 4: Pending Tasks */}
                        <div className="p-3 rounded-xl bg-[#F2EEE7] border border-[#141413]/8">
                            <div className="flex items-center justify-between text-[10px] font-editorial-mono text-[#7A756F]">
                                <span>CONTEXT FEED 04</span>
                                <span className="text-[#141413] font-semibold">Schedule</span>
                            </div>
                            <div className="text-xs font-editorial-sans font-bold text-[#141413] mt-0.5">
                                Pending Tasks &amp; Habits
                            </div>
                            <div className="text-[10px] font-editorial-mono text-[#5C5955] mt-1">
                                2 priority tasks open before 9:00 PM
                            </div>
                        </div>

                    </div>

                    {/* Right Side: Orbit Companion Interactive Display */}
                    <div className="lg:col-span-7">
                        <div className="p-6 rounded-2xl bg-[#141413] text-[#FAF7F3] shadow-md flex flex-col justify-between min-h-[320px]">
                            
                            {/* Orbit Identity Header */}
                            <div className="flex items-center justify-between pb-4 border-b border-[#FAF7F3]/15">
                                <div className="flex items-center gap-3">
                                    <OrbitIcon size={36} state={orbitState} />
                                    <div>
                                        <div className="font-editorial-sans font-bold text-base text-[#FAF7F3] leading-none">
                                            Orbit Intelligence
                                        </div>
                                        <div className="text-[10px] font-editorial-mono text-[#A6A29A] mt-1">
                                            Context Engine · Multi-Domain Synthesis
                                        </div>
                                    </div>
                                </div>

                                <div className="text-[10px] font-editorial-mono px-2.5 py-1 rounded-full border border-[#FAF7F3]/15 uppercase tracking-wider">
                                    State: <span className={orbitState === "responding" ? "text-emerald-400 font-bold" : orbitState === "thinking" ? "text-amber-400 font-bold" : "text-[#A6A29A]"}>{orbitState}</span>
                                </div>
                            </div>

                            {/* Dynamic State Output */}
                            <div className="my-auto py-5">
                                {orbitState === "idle" && (
                                    <div className="text-center py-4">
                                        <div className="text-sm font-editorial-serif italic text-[#C9C5BE]">
                                            Orbit is monitoring active telemetry feeds...
                                        </div>
                                        <p className="text-[11px] font-editorial-sans text-[#7A756F] mt-1">
                                            Awaiting scheduled prompt trigger or user conversation initiation.
                                        </p>
                                    </div>
                                )}

                                {orbitState === "thinking" && (
                                    <div className="text-center py-4">
                                        <div className="inline-flex items-center gap-2 text-sm font-editorial-mono text-amber-400">
                                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                                            <span>Synthesizing multi-domain context stream...</span>
                                        </div>
                                        <p className="text-[11px] font-editorial-sans text-[#A6A29A] mt-2">
                                            Evaluating workout load against remaining caloric deficit and pending evening tasks.
                                        </p>
                                    </div>
                                )}

                                {orbitState === "responding" && (
                                    <div className="p-4 rounded-xl bg-[#212120] border border-[#FAF7F3]/15 text-xs font-editorial-sans text-[#EAE6DF] leading-relaxed">
                                        <div className="text-[10px] font-editorial-mono text-emerald-400 mb-1.5 flex items-center gap-1.5 font-semibold">
                                            <span>✓ CONTEXT-AWARE SYNTHESIS</span>
                                        </div>
                                        <p className="text-sm font-editorial-sans text-[#FAF7F3]">
                                            &ldquo;You logged a demanding Upper Body workout (3,420 kg volume) today and are 18g short of your 160g protein target. You still have 2 pending focus tasks before 9:00 PM. Recommend a quick 20g whey or Greek yogurt snack to hit recovery macros while finishing your deep-work block.&rdquo;
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Footer Status */}
                            <div className="pt-3 border-t border-[#FAF7F3]/15 flex items-center justify-between text-[10px] font-editorial-mono text-[#8E8A83]">
                                <span>Multi-Modal Context</span>
                                <span>Realtime Firestore Feed</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default SceneOrbitContext;

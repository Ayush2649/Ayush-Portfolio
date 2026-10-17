import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SceneConnectedSystem from "../components/satat/SceneConnectedSystem.jsx";
import SceneMealPipeline from "../components/satat/SceneMealPipeline.jsx";
import SceneOrbitContext from "../components/satat/SceneOrbitContext.jsx";
import SceneArchitecture from "../components/satat/SceneArchitecture.jsx";
import { projectsData } from "../constants/index.js";

gsap.registerPlugin(ScrollTrigger);

const scenes = [
    {
        id: "connected",
        number: "01",
        title: "One Connected System",
        tag: "Tasks · Workouts · Nutrition",
    },
    {
        id: "meal-pipeline",
        number: "02",
        title: "Two-Stage Meal Analysis",
        tag: "Gemini Vision · Food Database",
    },
    {
        id: "orbit-context",
        number: "03",
        title: "Orbit AI Context Engine",
        tag: "Multi-Domain Telemetry Stream",
    },
    {
        id: "architecture",
        number: "04",
        title: "Engineering Architecture",
        tag: "NextAuth Bridge · Firestore Rules",
    },
];

const Projects = () => {
    const [activeSceneId, setActiveSceneId] = useState("connected");
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const satatRef = useRef(null);
    const solutionLibRef = useRef(null);
    const arrhythmiaRef = useRef(null);
    const csToCsRef = useRef(null);
    const sapSmartEditRef = useRef(null);

    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            mm.add("(prefers-reduced-motion: no-preference)", () => {
                // Header reveal
                if (headerRef.current) {
                    gsap.from(headerRef.current, {
                        y: 18,
                        opacity: 0,
                        duration: 0.5,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: headerRef.current,
                            start: "top 92%",
                            once: true,
                        },
                    });
                }

                // 1. SATAT Card Reveal
                if (satatRef.current) {
                    gsap.from(satatRef.current, {
                        y: 24,
                        opacity: 0,
                        duration: 0.55,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: satatRef.current,
                            start: "top 88%",
                            once: true,
                        },
                    });
                }

                // 2. Solution Library Card + Staggered Phase Diagram
                if (solutionLibRef.current) {
                    gsap.from(solutionLibRef.current, {
                        y: 24,
                        opacity: 0,
                        duration: 0.55,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: solutionLibRef.current,
                            start: "top 88%",
                            once: true,
                        },
                    });
                    const phases = solutionLibRef.current.querySelectorAll(".solution-phase");
                    if (phases.length > 0) {
                        gsap.from(phases, {
                            y: 12,
                            opacity: 0,
                            duration: 0.45,
                            stagger: 0.1,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: solutionLibRef.current,
                                start: "top 80%",
                                once: true,
                            },
                        });
                    }
                }

                // 3. Arrhythmia Detection Card + Visual Reveal
                if (arrhythmiaRef.current) {
                    gsap.from(arrhythmiaRef.current, {
                        y: 24,
                        opacity: 0,
                        duration: 0.55,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: arrhythmiaRef.current,
                            start: "top 88%",
                            once: true,
                        },
                    });
                    const visual = arrhythmiaRef.current.querySelector(".arrhythmia-visual");
                    if (visual) {
                        gsap.from(visual, {
                            scale: 0.97,
                            opacity: 0,
                            duration: 0.5,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: visual,
                                start: "top 85%",
                                once: true,
                            },
                        });
                    }
                }

                // 4. CS-to-CS Migration Tool Card + Staggered Pipeline Steps
                if (csToCsRef.current) {
                    gsap.from(csToCsRef.current, {
                        y: 24,
                        opacity: 0,
                        duration: 0.55,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: csToCsRef.current,
                            start: "top 88%",
                            once: true,
                        },
                    });
                    const steps = csToCsRef.current.querySelectorAll(".migration-step");
                    if (steps.length > 0) {
                        gsap.from(steps, {
                            y: 12,
                            opacity: 0,
                            duration: 0.45,
                            stagger: 0.1,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: csToCsRef.current,
                                start: "top 80%",
                                once: true,
                            },
                        });
                    }
                }

                // 5. SAP SmartEdit Connector Card + Progressive ETL Stages
                if (sapSmartEditRef.current) {
                    gsap.from(sapSmartEditRef.current, {
                        y: 24,
                        opacity: 0,
                        duration: 0.55,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: sapSmartEditRef.current,
                            start: "top 88%",
                            once: true,
                        },
                    });
                    const stages = sapSmartEditRef.current.querySelectorAll(".etl-stage");
                    if (stages.length > 0) {
                        gsap.from(stages, {
                            y: 12,
                            opacity: 0,
                            duration: 0.45,
                            stagger: 0.1,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: sapSmartEditRef.current,
                                start: "top 80%",
                                once: true,
                            },
                        });
                    }
                }
            });

            mm.add("(prefers-reduced-motion: reduce)", () => {
                gsap.set(
                    [
                        headerRef.current,
                        satatRef.current,
                        solutionLibRef.current,
                        arrhythmiaRef.current,
                        csToCsRef.current,
                        sapSmartEditRef.current,
                    ],
                    { opacity: 1, y: 0, scale: 1 }
                );
            });
        },
        { scope: sectionRef }
    );

    const { flagship, additional } = projectsData;
    const satat = flagship[0];
    const solutionLib = flagship[1];
    const arrhythmia = flagship[2];
    const csToCs = additional[0];
    const sapSmartEdit = additional[1];

    return (
        <section
            id="work"
            ref={sectionRef}
            className="relative w-full py-16 md:py-24 lg:py-28 paper-texture border-t border-[#141413]/10"
        >
            <div className="page-container w-full">
                {/* SECTION HEADER */}
                <div ref={headerRef} className="mb-10 md:mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141413]/5 border border-[#141413]/10 text-xs font-editorial-mono text-[#5C5955] uppercase tracking-wider mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D95338]" />
                        <span>02 / Selected Work</span>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                        <div>
                            <h2 className="font-editorial-sans font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#141413] tracking-tight uppercase leading-[0.98]">
                                Featured Projects &amp; Research
                            </h2>
                            <p className="font-editorial-serif italic text-lg sm:text-xl md:text-2xl text-[#5C5955] mt-2 max-w-2xl">
                                Production software engineering, enterprise internal systems, and deep learning research.
                            </p>
                        </div>
                        <div className="text-xs font-editorial-mono text-[#8E8A83] shrink-0 pb-1">
                            <span>05 Engineering Works</span>
                        </div>
                    </div>
                </div>

                {/* ========================================================
                    PROJECT 01: SATAT (Interactive Flagship Showcase)
                ======================================================== */}
                <div
                    id="satat"
                    ref={satatRef}
                    className="mb-12 md:mb-16 rounded-3xl bg-[#F2EEE7]/70 border border-[#141413]/12 p-6 sm:p-8 md:p-12 shadow-xs hover:border-[#141413]/25 transition-all duration-300"
                >
                    {/* Project Header & Highlights */}
                    <div className="mb-10">
                        {/* Status Badges */}
                        <div className="flex flex-wrap items-center gap-2.5 mb-4 text-xs font-editorial-mono">
                            <span className="font-bold text-[#141413] tracking-wider">
                                [ {satat.number} ]
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full bg-[#3A6351]/10 text-[#3A6351] font-semibold border border-[#3A6351]/20">
                                {satat.badge}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 font-medium border border-emerald-500/20 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                                {satat.status}
                            </span>
                        </div>

                        {/* Title & Short Description */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                            <div className="lg:col-span-7">
                                <h3 className="font-editorial-sans font-black text-3xl sm:text-4xl md:text-5xl text-[#141413] tracking-tight uppercase">
                                    {satat.title}
                                </h3>
                                <p className="font-editorial-serif italic text-lg sm:text-xl text-[#3A6351] mt-1.5 mb-4">
                                    {satat.description}
                                </p>

                                {/* 4 Engineering Highlights */}
                                <ul className="space-y-2 mb-6">
                                    {satat.bullets.map((b, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-2.5 text-xs sm:text-sm font-editorial-sans text-[#4A4744]"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#3A6351] mt-1.5 shrink-0" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap items-center gap-3">
                                    <a
                                        href={satat.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary group"
                                    >
                                        <span>Launch Live Product</span>
                                        <span className="arrow-icon text-xs">↗</span>
                                    </a>
                                    <a
                                        href={satat.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary group"
                                    >
                                        <span>GitHub Repository</span>
                                        <span className="arrow-icon text-xs">↗</span>
                                    </a>
                                </div>
                            </div>

                            {/* Tech Stack Box */}
                            <div className="lg:col-span-5 p-5 rounded-2xl bg-[#FAF7F3] border border-[#141413]/10">
                                <div className="text-xs font-editorial-mono text-[#7A756F] uppercase tracking-wider pb-2 border-b border-[#141413]/10 mb-3">
                                    Verified Technology Stack
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                    {satat.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-1 rounded-md bg-[#F2EEE7] border border-[#141413]/10 text-[11px] font-editorial-mono text-[#383633] font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-[11px] font-editorial-sans text-[#5C5955] mt-3 pt-3 border-t border-[#141413]/8">
                                    Full-stack architecture featuring custom token authentication bridge, granular security rules, and multi-model AI routing.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Interactive 4-Scene Product Story */}
                    <div className="w-full pt-8 border-t border-[#141413]/10">
                        {/* Scene Tabs */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 mb-6">
                            {scenes.map((scene) => {
                                const isActive = activeSceneId === scene.id;
                                return (
                                    <button
                                        key={scene.id}
                                        type="button"
                                        onClick={() => setActiveSceneId(scene.id)}
                                        className={`p-3 sm:p-3.5 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141413] ${
                                            isActive
                                                ? "bg-[#141413] text-[#FAF7F3] border-[#141413] shadow-xs"
                                                : "bg-[#FAF7F3] text-[#5C5955] border-[#141413]/10 hover:border-[#141413]/30 hover:bg-[#F2EEE7] hover:-translate-y-0.5"
                                        }`}
                                    >
                                        <div className={`text-[10px] font-editorial-mono font-semibold uppercase ${
                                            isActive ? "text-emerald-400" : "text-[#7A756F]"
                                        }`}>
                                            Scene {scene.number}
                                        </div>
                                        <div className={`text-xs sm:text-sm font-editorial-sans font-bold mt-0.5 leading-snug ${
                                            isActive ? "text-[#FAF7F3]" : "text-[#141413]"
                                        }`}>
                                            {scene.title}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Active Scene Display with smooth cross-fade */}
                        <div className="w-full transition-opacity duration-200" key={activeSceneId}>
                            {activeSceneId === "connected" && <SceneConnectedSystem />}
                            {activeSceneId === "meal-pipeline" && <SceneMealPipeline />}
                            {activeSceneId === "orbit-context" && <SceneOrbitContext />}
                            {activeSceneId === "architecture" && <SceneArchitecture />}
                        </div>
                    </div>
                </div>

                {/* ========================================================
                    PROJECT 02: SOLUTION LIBRARY (Enterprise Case Study)
                ======================================================== */}
                <div
                    id="solution-library"
                    ref={solutionLibRef}
                    className="mb-12 md:mb-16 rounded-3xl bg-[#FAF7F3] border border-[#141413]/15 p-6 sm:p-8 md:p-12 shadow-xs hover:border-[#141413]/30 transition-all duration-300"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* Visual Side: Architecture Blueprint */}
                        <div className="lg:col-span-5 order-2 lg:order-1">
                            <div className="rounded-2xl bg-[#141413] text-[#FAF7F3] p-6 sm:p-7 shadow-lg flex flex-col justify-between min-h-[380px]">
                                <div className="flex items-center justify-between pb-3 border-b border-[#FAF7F3]/15 text-xs font-editorial-mono text-[#8E8A83]">
                                    <span>CONTENTSTACK ARCHITECTURE</span>
                                    <span className="text-amber-400 font-semibold">INTERNAL PLATFORM</span>
                                </div>

                                {/* Flow Diagram */}
                                <div className="my-auto py-4 space-y-3">
                                    <div className="solution-phase p-3 rounded-xl bg-[#212120] border border-[#FAF7F3]/10">
                                        <div className="flex items-center justify-between text-[11px] font-editorial-mono text-[#8E8A83]">
                                            <span>PHASE 01</span>
                                            <span className="text-emerald-400">Standardized Schema</span>
                                        </div>
                                        <div className="text-sm font-editorial-sans font-bold text-[#FAF7F3] mt-0.5">
                                            Solution Authoring &amp; Review
                                        </div>
                                        <div className="text-[11px] text-[#A6A29A] mt-1">
                                            Engineers package verified microservices &amp; UI modules
                                        </div>
                                    </div>

                                    <div className="flex justify-center text-[#8E8A83] text-xs font-mono">↓</div>

                                    <div className="solution-phase p-3 rounded-xl bg-[#212120] border border-[#FAF7F3]/10">
                                        <div className="flex items-center justify-between text-[11px] font-editorial-mono text-[#8E8A83]">
                                            <span>PHASE 02</span>
                                            <span className="text-amber-400">Taxonomy &amp; Discovery</span>
                                        </div>
                                        <div className="text-sm font-editorial-sans font-bold text-[#FAF7F3] mt-0.5">
                                            Semantic Search &amp; Indexing
                                        </div>
                                        <div className="text-[11px] text-[#A6A29A] mt-1">
                                            Instant retrieval of production-tested blueprints
                                        </div>
                                    </div>

                                    <div className="flex justify-center text-[#8E8A83] text-xs font-mono">↓</div>

                                    <div className="solution-phase p-3 rounded-xl bg-[#2B2927] border border-amber-400/30">
                                        <div className="flex items-center justify-between text-[11px] font-editorial-mono text-amber-400">
                                            <span>IMPACT</span>
                                            <span className="font-bold">Verified Velocity</span>
                                        </div>
                                        <div className="text-sm font-editorial-sans font-bold text-[#FAF7F3] mt-0.5">
                                            30%+ Engineering Productivity Gain
                                        </div>
                                        <div className="text-[11px] text-[#D1CCC4] mt-1">
                                            Eliminated recurring redundant code across developer pods
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-3 border-t border-[#FAF7F3]/15 flex items-center justify-between text-[11px] font-editorial-mono text-[#8E8A83]">
                                    <span>Engineering Knowledge System</span>
                                    <span className="text-[#FAF7F3]">Contentstack</span>
                                </div>
                            </div>
                        </div>

                        {/* Narrative Side */}
                        <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-between">
                            <div>
                                {/* Badges */}
                                <div className="flex flex-wrap items-center gap-2.5 mb-4 text-xs font-editorial-mono">
                                    <span className="font-bold text-[#141413] tracking-wider">
                                        [ {solutionLib.number} ]
                                    </span>
                                    <span className="px-2.5 py-0.5 rounded-full bg-[#141413] text-[#FAF7F3] font-semibold">
                                        {solutionLib.badge}
                                    </span>
                                    <span className="px-2.5 py-0.5 rounded-full bg-[#D95338]/10 text-[#D95338] font-bold border border-[#D95338]/20">
                                        {solutionLib.metric}
                                    </span>
                                </div>

                                <h3 className="font-editorial-sans font-black text-2xl sm:text-3xl md:text-4xl text-[#141413] tracking-tight uppercase">
                                    {solutionLib.title}
                                </h3>
                                <p className="font-editorial-serif italic text-base sm:text-lg text-[#5C5955] mt-1 mb-4">
                                    {solutionLib.subtitle}
                                </p>

                                <p className="text-sm sm:text-base font-editorial-sans text-[#2B2927] leading-relaxed mb-6">
                                    {solutionLib.description}
                                </p>

                                <ul className="space-y-2.5 mb-6">
                                    {solutionLib.bullets.map((bullet, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-2.5 text-xs sm:text-sm font-editorial-sans text-[#4A4744]"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#141413] mt-1.5 shrink-0" />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-1.5 mb-6">
                                    {solutionLib.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-1 rounded-md bg-[#F2EEE7] border border-[#141413]/10 text-[11px] font-editorial-mono text-[#383633] font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Internal Project Footer (No fake external links) */}
                            <div className="pt-4 border-t border-[#141413]/10 flex items-center justify-between text-xs font-editorial-mono text-[#7A756F]">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#5C5955]" />
                                    <span>Professional Internal Engineering Project · Contentstack</span>
                                </div>
                                <span className="text-[11px] text-[#8E8A83]">Enterprise Case Study</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ========================================================
                    PROJECT 03: EXPLAINABLE ARRHYTHMIA DETECTION (Research)
                ======================================================== */}
                <div
                    id="arrhythmia"
                    ref={arrhythmiaRef}
                    className="mb-12 md:mb-16 rounded-3xl bg-[#F2EEE7]/70 border border-[#141413]/12 p-6 sm:p-8 md:p-12 shadow-xs hover:border-[#141413]/25 transition-all duration-300"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* Narrative Side */}
                        <div className="lg:col-span-7 flex flex-col justify-between">
                            <div>
                                <div className="flex flex-wrap items-center gap-2.5 mb-4 text-xs font-editorial-mono">
                                    <span className="font-bold text-[#141413] tracking-wider">
                                        [ {arrhythmia.number} ]
                                    </span>
                                    <span className="px-2.5 py-0.5 rounded-full bg-[#D95338]/10 text-[#D95338] font-bold border border-[#D95338]/20">
                                        {arrhythmia.badge}
                                    </span>
                                    <span className="px-2.5 py-0.5 rounded-full bg-[#FAF7F3] border border-[#141413]/10 text-[#5C5955] font-medium">
                                        MIT-BIH Database
                                    </span>
                                </div>

                                <h3 className="font-editorial-sans font-black text-2xl sm:text-3xl md:text-4xl text-[#141413] tracking-tight uppercase">
                                    {arrhythmia.title}
                                </h3>
                                <p className="font-editorial-serif italic text-base sm:text-lg text-[#5C5955] mt-1 mb-4">
                                    {arrhythmia.subtitle}
                                </p>

                                <p className="text-sm sm:text-base font-editorial-sans text-[#2B2927] leading-relaxed mb-6">
                                    {arrhythmia.description}
                                </p>

                                <ul className="space-y-2.5 mb-6">
                                    {arrhythmia.bullets.map((bullet, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-2.5 text-xs sm:text-sm font-editorial-sans text-[#4A4744]"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#D95338] mt-1.5 shrink-0" />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-1.5 mb-6">
                                    {arrhythmia.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-1 rounded-md bg-[#FAF7F3] border border-[#141413]/10 text-[11px] font-editorial-mono text-[#383633] font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-[#141413]/10">
                                <a
                                    href={arrhythmia.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary group"
                                >
                                    <span>GitHub Research Repository</span>
                                    <span className="arrow-icon text-xs">↗</span>
                                </a>
                            </div>
                        </div>

                        {/* Visual Side: Real Clinical Plot */}
                        <div className="lg:col-span-5">
                            <div className="arrhythmia-visual relative rounded-2xl bg-[#FAF7F3] border border-[#141413]/15 overflow-hidden shadow-md flex flex-col justify-between">
                                <div className="flex items-center justify-between px-4 py-3 bg-[#FAF7F3] border-b border-[#141413]/10 text-xs font-editorial-mono text-[#7A756F]">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-[#D95338] animate-pulse" />
                                        <span>GRAD-CAM HEATMAP TELEMETRY</span>
                                    </div>
                                    <span className="text-[10px]">1D CNN-LSTM</span>
                                </div>

                                <div className="relative bg-[#141413] p-2 overflow-hidden flex items-center justify-center">
                                    <img
                                        src={arrhythmia.image}
                                        alt="Explainable 1D CNN Arrhythmia Detection Grad-CAM Output"
                                        className="w-full h-auto object-contain rounded-lg filter contrast-105"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="p-4 bg-[#FAF7F3] border-t border-[#141413]/10">
                                    <div className="flex items-center justify-between text-xs font-editorial-sans font-semibold text-[#141413]">
                                        <span>Clinical Usability Evaluation</span>
                                        <span className="font-editorial-mono text-[11px] text-[#3A6351]">F1 · Precision · Recall</span>
                                    </div>
                                    <p className="text-[11px] font-editorial-sans text-[#6B6661] mt-1 leading-normal">
                                        Gradient activations mapped across temporal beat sequences validate morphological feature attribution for clinical verification.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ========================================================
                    PROJECT 04: CS-TO-CS MIGRATION TOOL (Migration Workflow Engine)
                ======================================================== */}
                <div
                    id="cs-to-cs"
                    ref={csToCsRef}
                    className="mb-12 md:mb-16 rounded-3xl bg-[#FAF7F3] border border-[#141413]/15 p-6 sm:p-8 md:p-12 shadow-xs hover:border-[#141413]/30 transition-all duration-300"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* Narrative Side (7 cols) */}
                        <div className="lg:col-span-7 flex flex-col justify-between">
                            <div>
                                <div className="flex flex-wrap items-center gap-2.5 mb-4 text-xs font-editorial-mono">
                                    <span className="font-bold text-[#141413] tracking-wider">
                                        [ {csToCs.number} ]
                                    </span>
                                    <span className="px-2.5 py-0.5 rounded-full bg-[#141413] text-[#FAF7F3] font-semibold">
                                        Contentstack · Enterprise
                                    </span>
                                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 font-bold border border-emerald-500/20">
                                        {csToCs.metric}
                                    </span>
                                </div>

                                <h3 className="font-editorial-sans font-black text-2xl sm:text-3xl md:text-4xl text-[#141413] tracking-tight uppercase">
                                    {csToCs.title}
                                </h3>
                                <p className="font-editorial-serif italic text-base sm:text-lg text-[#5C5955] mt-1 mb-4">
                                    High-Throughput Cross-Region Migration &amp; Schema Transformation Engine
                                </p>

                                <p className="text-sm sm:text-base font-editorial-sans text-[#2B2927] leading-relaxed mb-6">
                                    {csToCs.description}
                                </p>

                                <ul className="space-y-2.5 mb-6">
                                    {csToCs.bullets.map((bullet, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-2.5 text-xs sm:text-sm font-editorial-sans text-[#4A4744]"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#141413] mt-1.5 shrink-0" />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-1.5 mb-6">
                                    {csToCs.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-1 rounded-md bg-[#F2EEE7] border border-[#141413]/10 text-[11px] font-editorial-mono text-[#383633] font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-[#141413]/10 flex items-center justify-between text-xs font-editorial-mono text-[#7A756F]">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                                    <span>Professional Internal Engineering Project · Contentstack</span>
                                </div>
                                <span className="text-[11px] text-[#8E8A83]">Zero Data Corruption</span>
                            </div>
                        </div>

                        {/* Visual Schematic Side (5 cols): High-Throughput Migration Workflow Engine */}
                        <div className="lg:col-span-5">
                            <div className="rounded-2xl bg-[#141413] text-[#FAF7F3] p-6 sm:p-7 shadow-lg flex flex-col justify-between min-h-[380px]">
                                <div className="flex items-center justify-between pb-3 border-b border-[#FAF7F3]/15 text-xs font-editorial-mono text-[#8E8A83]">
                                    <span className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                        <span>MIGRATION ENGINE PIPELINE</span>
                                    </span>
                                    <span className="text-emerald-400 font-semibold">CROSS-REGION</span>
                                </div>

                                <div className="my-auto py-4 space-y-3">
                                    {/* Source */}
                                    <div className="migration-step p-3 rounded-xl bg-[#212120] border border-[#FAF7F3]/10">
                                        <div className="flex items-center justify-between text-[11px] font-editorial-mono text-[#8E8A83]">
                                            <span>STEP 01 · EXTRACTION</span>
                                            <span className="text-sky-400">Source Stack (NA / EU)</span>
                                        </div>
                                        <div className="text-sm font-editorial-sans font-bold text-[#FAF7F3] mt-0.5">
                                            Async Extraction Queue
                                        </div>
                                        <div className="text-[11px] text-[#A6A29A] mt-1 font-editorial-mono">
                                            ContentTypes · Global Fields · Nested Assets
                                        </div>
                                    </div>

                                    <div className="flex justify-center text-[#8E8A83] text-xs font-mono">↓</div>

                                    {/* Resolver */}
                                    <div className="migration-step p-3 rounded-xl bg-[#212120] border border-[#FAF7F3]/10">
                                        <div className="flex items-center justify-between text-[11px] font-editorial-mono text-[#8E8A83]">
                                            <span>STEP 02 · RESOLVER</span>
                                            <span className="text-amber-400">Schema Validation</span>
                                        </div>
                                        <div className="text-sm font-editorial-sans font-bold text-[#FAF7F3] mt-0.5">
                                            Dependency &amp; Reference Graph
                                        </div>
                                        <div className="text-[11px] text-[#A6A29A] mt-1 font-editorial-mono">
                                            UID Re-mapping · Circular Reference Resolution
                                        </div>
                                    </div>

                                    <div className="flex justify-center text-[#8E8A83] text-xs font-mono">↓</div>

                                    {/* Target */}
                                    <div className="migration-step p-3 rounded-xl bg-[#2B2927] border border-emerald-500/30">
                                        <div className="flex items-center justify-between text-[11px] font-editorial-mono text-emerald-400">
                                            <span>STEP 03 · VERIFICATION</span>
                                            <span className="font-bold">Target Stack Complete</span>
                                        </div>
                                        <div className="text-sm font-editorial-sans font-bold text-[#FAF7F3] mt-0.5">
                                            High-Concurrency Batch Ingestion
                                        </div>
                                        <div className="text-[11px] text-[#D1CCC4] mt-1 font-editorial-mono">
                                            20,000+ Verified Production Entries · 0% Corruption
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-3 border-t border-[#FAF7F3]/15 flex items-center justify-between text-[11px] font-editorial-mono text-[#8E8A83]">
                                    <span>High-Throughput CLI Engine</span>
                                    <span className="text-emerald-400">20+ Stacks</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ========================================================
                    PROJECT 05: SAP SMARTEDIT CONNECTOR (ETL Transformation Engine)
                ======================================================== */}
                <div
                    id="sap-smartedit"
                    ref={sapSmartEditRef}
                    className="mb-8 md:mb-12 rounded-3xl bg-[#F2EEE7]/80 border border-[#141413]/12 p-6 sm:p-8 md:p-12 shadow-xs hover:border-[#141413]/25 transition-all duration-300"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* Visual Schematic Side (5 cols): ETL Stream Schematic (Order 2 on mobile, Order 1 on lg) */}
                        <div className="lg:col-span-5 order-2 lg:order-1">
                            <div className="rounded-2xl bg-[#141413] text-[#FAF7F3] p-6 sm:p-7 shadow-lg flex flex-col justify-between min-h-[380px]">
                                <div className="flex items-center justify-between pb-3 border-b border-[#FAF7F3]/15 text-xs font-editorial-mono text-[#8E8A83]">
                                    <span className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                                        <span>CMS ETL ARCHITECTURE</span>
                                    </span>
                                    <span className="text-sky-400 font-semibold">HEADLESS TRANSFORM</span>
                                </div>

                                <div className="my-auto py-4 space-y-3">
                                    {/* E: Extraction */}
                                    <div className="etl-stage p-3 rounded-xl bg-[#212120] border border-[#FAF7F3]/10">
                                        <div className="flex items-center justify-between text-[11px] font-editorial-mono text-[#8E8A83]">
                                            <span>STAGE 1 · EXTRACTION</span>
                                            <span className="text-amber-400">SAP SmartEdit</span>
                                        </div>
                                        <div className="text-sm font-editorial-sans font-bold text-[#FAF7F3] mt-0.5">
                                            Monolithic Commerce Slots
                                        </div>
                                        <div className="text-[11px] text-[#A6A29A] mt-1 font-editorial-mono">
                                            Catalogs · Page Layouts · Content Component Trees
                                        </div>
                                    </div>

                                    <div className="flex justify-center text-[#8E8A83] text-xs font-mono">↓</div>

                                    {/* T: Transformation */}
                                    <div className="etl-stage p-3 rounded-xl bg-[#212120] border border-[#FAF7F3]/10">
                                        <div className="flex items-center justify-between text-[11px] font-editorial-mono text-[#8E8A83]">
                                            <span>STAGE 2 · TRANSFORMATION</span>
                                            <span className="text-sky-400">Normalization Engine</span>
                                        </div>
                                        <div className="text-sm font-editorial-sans font-bold text-[#FAF7F3] mt-0.5">
                                            Schema Decoupling &amp; Mapping
                                        </div>
                                        <div className="text-[11px] text-[#A6A29A] mt-1 font-editorial-mono">
                                            Deconstructs rigid CMS slots into modular components
                                        </div>
                                    </div>

                                    <div className="flex justify-center text-[#8E8A83] text-xs font-mono">↓</div>

                                    {/* L: Loading */}
                                    <div className="etl-stage p-3 rounded-xl bg-[#2B2927] border border-sky-400/30">
                                        <div className="flex items-center justify-between text-[11px] font-editorial-mono text-sky-400">
                                            <span>STAGE 3 · DELIVERY</span>
                                            <span className="font-bold">Contentstack Headless</span>
                                        </div>
                                        <div className="text-sm font-editorial-sans font-bold text-[#FAF7F3] mt-0.5">
                                            Omnichannel JSON API Delivery
                                        </div>
                                        <div className="text-[11px] text-[#D1CCC4] mt-1 font-editorial-mono">
                                            10,000+ Production Entries · 7+ Reusable Workflows
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-3 border-t border-[#FAF7F3]/15 flex items-center justify-between text-[11px] font-editorial-mono text-[#8E8A83]">
                                    <span>Automated CMS Migration</span>
                                    <span className="text-sky-400">Enterprise ETL</span>
                                </div>
                            </div>
                        </div>

                        {/* Narrative Side (7 cols) */}
                        <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-between">
                            <div>
                                <div className="flex flex-wrap items-center gap-2.5 mb-4 text-xs font-editorial-mono">
                                    <span className="font-bold text-[#141413] tracking-wider">
                                        [ {sapSmartEdit.number} ]
                                    </span>
                                    <span className="px-2.5 py-0.5 rounded-full bg-[#141413] text-[#FAF7F3] font-semibold">
                                        Contentstack · Enterprise
                                    </span>
                                    <span className="px-2.5 py-0.5 rounded-full bg-sky-600/10 text-sky-800 font-bold border border-sky-600/20">
                                        {sapSmartEdit.metric}
                                    </span>
                                </div>

                                <h3 className="font-editorial-sans font-black text-2xl sm:text-3xl md:text-4xl text-[#141413] tracking-tight uppercase">
                                    {sapSmartEdit.title}
                                </h3>
                                <p className="font-editorial-serif italic text-base sm:text-lg text-[#5C5955] mt-1 mb-4">
                                    Automated CMS ETL Pipeline for Headless Commerce Migration
                                </p>

                                <p className="text-sm sm:text-base font-editorial-sans text-[#2B2927] leading-relaxed mb-6">
                                    {sapSmartEdit.description}
                                </p>

                                <ul className="space-y-2.5 mb-6">
                                    {sapSmartEdit.bullets.map((bullet, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-2.5 text-xs sm:text-sm font-editorial-sans text-[#4A4744]"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#141413] mt-1.5 shrink-0" />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-1.5 mb-6">
                                    {sapSmartEdit.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-1 rounded-md bg-[#FAF7F3] border border-[#141413]/10 text-[11px] font-editorial-mono text-[#383633] font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-[#141413]/10 flex items-center justify-between text-xs font-editorial-mono text-[#7A756F]">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-sky-700" />
                                    <span>Professional Internal Engineering Project · Contentstack</span>
                                </div>
                                <span className="text-[11px] text-[#8E8A83]">Headless Commerce Integration</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;

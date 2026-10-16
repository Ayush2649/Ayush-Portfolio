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
    const additionalGridRef = useRef(null);

    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            mm.add("(prefers-reduced-motion: no-preference)", () => {
                // Header reveal
                if (headerRef.current) {
                    gsap.fromTo(
                        headerRef.current,
                        { y: 25, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.6,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: headerRef.current,
                                start: "top 90%",
                                once: true,
                            },
                        }
                    );
                }

                // Project cards staggered reveals
                const cards = [satatRef.current, solutionLibRef.current, arrhythmiaRef.current, additionalGridRef.current];
                cards.forEach((card) => {
                    if (!card) return;
                    gsap.fromTo(
                        card,
                        { y: 30, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.65,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: card,
                                start: "top 92%",
                                once: true,
                            },
                        }
                    );
                });
            });

            mm.add("(prefers-reduced-motion: reduce)", () => {
                gsap.set(
                    [headerRef.current, satatRef.current, solutionLibRef.current, arrhythmiaRef.current, additionalGridRef.current],
                    { opacity: 1, y: 0 }
                );
            });
        },
        { scope: sectionRef }
    );

    const { flagship, additional } = projectsData;
    const satat = flagship[0];
    const solutionLib = flagship[1];
    const arrhythmia = flagship[2];

    return (
        <section
            id="work"
            ref={sectionRef}
            className="relative w-full py-24 md:py-32 paper-texture border-t border-[#141413]/10"
        >
            <div className="page-container w-full">
                {/* SECTION HEADER */}
                <div ref={headerRef} className="mb-14 md:mb-20">
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
                    ref={satatRef}
                    className="mb-16 md:mb-24 rounded-3xl bg-[#F2EEE7]/70 border border-[#141413]/12 p-6 sm:p-8 md:p-12 shadow-xs hover:border-[#141413]/25 transition-all duration-300"
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
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#141413] text-[#FAF7F3] text-xs sm:text-sm font-editorial-sans font-semibold hover:bg-[#3A6351] transition-colors duration-200 shadow-xs"
                                    >
                                        <span>Launch Live Product</span>
                                        <span className="text-xs font-mono">↗</span>
                                    </a>
                                    <a
                                        href={satat.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF7F3] border border-[#141413]/20 text-[#141413] text-xs sm:text-sm font-editorial-sans font-semibold hover:bg-[#141413] hover:text-[#FAF7F3] transition-colors duration-200"
                                    >
                                        <span>GitHub Repository</span>
                                        <span className="text-xs font-mono">↗</span>
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
                                        onClick={() => setActiveSceneId(scene.id)}
                                        className={`p-3 sm:p-3.5 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                                            isActive
                                                ? "bg-[#141413] text-[#FAF7F3] border-[#141413] shadow-sm"
                                                : "bg-[#FAF7F3] text-[#5C5955] border-[#141413]/10 hover:border-[#141413]/25 hover:bg-[#F2EEE7]"
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

                        {/* Active Scene Display */}
                        <div className="w-full">
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
                    ref={solutionLibRef}
                    className="mb-16 md:mb-24 rounded-3xl bg-[#FAF7F3] border border-[#141413]/15 p-6 sm:p-8 md:p-12 shadow-xs hover:border-[#141413]/30 transition-all duration-300"
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
                                    <div className="p-3 rounded-xl bg-[#212120] border border-[#FAF7F3]/10">
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

                                    <div className="p-3 rounded-xl bg-[#212120] border border-[#FAF7F3]/10">
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

                                    <div className="p-3 rounded-xl bg-[#2B2927] border border-amber-400/30">
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
                    ref={arrhythmiaRef}
                    className="mb-16 md:mb-24 rounded-3xl bg-[#F2EEE7]/70 border border-[#141413]/12 p-6 sm:p-8 md:p-12 shadow-xs hover:border-[#141413]/25 transition-all duration-300"
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
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#141413] text-[#FAF7F3] text-xs sm:text-sm font-editorial-sans font-semibold hover:bg-[#D95338] transition-colors duration-200 shadow-xs"
                                >
                                    <span>GitHub Research Repository</span>
                                    <span className="text-xs font-mono">↗</span>
                                </a>
                            </div>
                        </div>

                        {/* Visual Side: Real Clinical Plot */}
                        <div className="lg:col-span-5">
                            <div className="relative rounded-2xl bg-[#FAF7F3] border border-[#141413]/15 overflow-hidden shadow-md flex flex-col justify-between">
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
                    PROJECTS 04 & 05: INTERNAL MIGRATION ENGINES (Contentstack)
                ======================================================== */}
                <div ref={additionalGridRef} className="pt-8 border-t border-[#141413]/15">
                    <div className="mb-8">
                        <div className="text-xs font-editorial-mono text-[#7A756F] uppercase tracking-wider mb-1">
                            Enterprise Internal Infrastructure
                        </div>
                        <h3 className="font-editorial-sans font-black text-xl sm:text-2xl text-[#141413] tracking-tight uppercase">
                            Migration &amp; Integration Tooling
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {additional.map((project) => (
                            <div
                                key={project.id}
                                className="rounded-2xl bg-[#F2EEE7]/80 border border-[#141413]/12 p-6 sm:p-7 flex flex-col justify-between hover:border-[#141413]/25 hover:-translate-y-0.5 transition-all duration-200"
                            >
                                <div>
                                    <div className="flex items-center justify-between text-xs font-editorial-mono mb-3">
                                        <span className="font-bold text-[#141413]">
                                            [ {project.number} ]
                                        </span>
                                        <span className="px-2.5 py-0.5 rounded-full bg-[#141413]/5 text-[#141413] font-semibold border border-[#141413]/10">
                                            {project.company} Internal
                                        </span>
                                    </div>

                                    <h4 className="font-editorial-sans font-black text-xl text-[#141413] tracking-tight uppercase">
                                        {project.title}
                                    </h4>
                                    <div className="inline-block mt-1 mb-3 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 text-[11px] font-editorial-mono font-semibold">
                                        {project.metric}
                                    </div>

                                    <p className="text-xs sm:text-sm font-editorial-sans text-[#4A4744] leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    <ul className="space-y-2 mb-6">
                                        {project.bullets.map((b, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-2 text-xs font-editorial-sans text-[#5C5955]"
                                            >
                                                <span className="w-1 h-1 rounded-full bg-[#141413] mt-1.5 shrink-0" />
                                                <span>{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#141413]/10">
                                        {project.stack.map((t) => (
                                            <span
                                                key={t}
                                                className="px-2 py-0.5 rounded bg-[#FAF7F3] border border-[#141413]/8 text-[10px] font-editorial-mono text-[#383633]"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-3 text-[11px] font-editorial-mono text-[#8E8A83]">
                                        Enterprise Internal Engineering · Contentstack
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;

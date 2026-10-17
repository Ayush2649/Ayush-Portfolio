import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const skillDomains = [
    {
        id: "programming",
        title: "Programming",
        badge: "Core Languages",
        skills: [
            { name: "Python", project: "Arrhythmia Detection" },
            { name: "JavaScript", project: "Contentstack Tools" },
            { name: "TypeScript", project: "SATAT" },
            { name: "Java", project: "Academic CS" },
            { name: "C++", project: "Algorithms & Systems" },
            { name: "SQL", project: "Data Engineering" },
        ],
    },
    {
        id: "fullstack",
        title: "Full-Stack & Application Development",
        badge: "Web Systems",
        skills: [
            { name: "React", project: "Solution Library" },
            { name: "Node.js", project: "CS-to-CS Migration Tool" },
            { name: "Express.js", project: "Backend APIs" },
            { name: "Next.js", project: "SATAT" },
            { name: "FastAPI", project: "Microservices" },
            { name: "REST APIs", project: "Contentstack APIs" },
            { name: "GraphQL", project: "Headless Schemas" },
            { name: "HTML", project: "Design Systems" },
            { name: "CSS", project: "Tailwind UI" },
        ],
    },
    {
        id: "ai-data",
        title: "AI & Data Engineering",
        badge: "Applied Intelligence",
        skills: [
            { name: "Generative AI", project: "SATAT Orbit Companion" },
            { name: "Large Language Models", project: "Gemini / Groq / DeepSeek" },
            { name: "NLP", project: "Aspiring Media Tech" },
            { name: "Retrieval-Augmented Generation", project: "Context Engines" },
            { name: "Agentic AI", project: "Autonomous Workflows" },
            { name: "Multi-Agent Systems", project: "Distributed Logic" },
            { name: "LangChain", project: "Semantic AI Pipelines" },
            { name: "LangGraph", project: "Stateful Agent Graphs" },
            { name: "Semantic Kernel", project: "AI Orchestration" },
        ],
    },
    {
        id: "databases",
        title: "Databases & Data Engineering",
        badge: "Data Integrity",
        skills: [
            { name: "PostgreSQL", project: "Relational Schemas" },
            { name: "MySQL", project: "Enterprise Databases" },
            { name: "MongoDB", project: "MERN Stack" },
            { name: "SQL Server", project: "Enterprise Data" },
            { name: "Redis", project: "High-Throughput Caching" },
            { name: "Data Migration", project: "CS-to-CS Tool (20k+ entries)" },
            { name: "Data Transformation", project: "SAP SmartEdit ETL" },
            { name: "Data Validation", project: "Zero-Corruption Pipelines" },
        ],
    },
    {
        id: "cloud-infra",
        title: "Cloud & Infrastructure",
        badge: "Deployment & DevOps",
        skills: [
            { name: "Microsoft Azure", project: "Cloud Compute" },
            { name: "Azure OpenAI", project: "Enterprise LLMs" },
            { name: "Azure AI Foundry", project: "Model Management" },
            { name: "Azure AI Search", project: "Vector Indexing" },
            { name: "AWS", project: "Lambda Microservices" },
            { name: "Docker", project: "Containerization" },
            { name: "CI/CD", project: "Automated Deployments" },
        ],
    },
    {
        id: "fundamentals",
        title: "Engineering Fundamentals",
        badge: "Computer Science",
        skills: [
            { name: "Data Structures & Algorithms", project: "LeetCode & System Design" },
            { name: "Object-Oriented Programming", project: "Architecture & Design Patterns" },
            { name: "Database Management Systems", project: "ACID & Query Optimization" },
            { name: "Operating Systems", project: "Processes & Concurrency" },
            { name: "Computer Networks", project: "Protocols & Low-Latency APIs" },
            { name: "Testing", project: "Vitest & Integration Suites" },
            { name: "Debugging", project: "Telemetry Tracing & Observability" },
            { name: "Code Reviews", project: "Quality Standards & Schema Audits" },
        ],
    },
];

const Skills = () => {
    const [selectedDomain, setSelectedDomain] = useState("all");
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const gridRef = useRef(null);

    useGSAP(
        () => {
            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            if (prefersReducedMotion) {
                gsap.set([headerRef.current, ".skill-domain-card"], { opacity: 1, y: 0 });
                return;
            }

            if (headerRef.current) {
                gsap.from(headerRef.current, {
                    y: 20,
                    duration: 0.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 95%",
                        once: true,
                    },
                });
            }

            gsap.from(".skill-domain-card", {
                y: 20,
                duration: 0.5,
                stagger: 0.08,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 92%",
                    once: true,
                },
            });
        },
        { scope: sectionRef }
    );

    const displayedDomains =
        selectedDomain === "all"
            ? skillDomains
            : skillDomains.filter((d) => d.id === selectedDomain);

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="relative w-full py-16 md:py-24 lg:py-28 paper-texture border-t border-[#141413]/10"
        >
            <div className="page-container w-full">
                {/* SECTION HEADER */}
                <div ref={headerRef} className="mb-10 md:mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141413]/5 border border-[#141413]/10 text-xs font-editorial-mono text-[#5C5955] uppercase tracking-wider mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D95338]" />
                        <span>04 / Technical Capabilities</span>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                        <div>
                            <h2 className="font-editorial-sans font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#141413] tracking-tight uppercase leading-[0.98]">
                                Skills &amp; Domains
                            </h2>
                            <p className="font-editorial-serif italic text-lg sm:text-xl md:text-2xl text-[#5C5955] mt-2 max-w-2xl">
                                Disciplined full-stack architectures, applied deep learning, data engineering, and core systems.
                            </p>
                        </div>
                    </div>

                    {/* Interactive Filter Pills */}
                    <div className="flex flex-wrap gap-2 mt-7">
                        <button
                            type="button"
                            onClick={() => setSelectedDomain("all")}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-editorial-mono transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141413] ${
                                selectedDomain === "all"
                                    ? "bg-[#141413] text-[#FAF7F3] shadow-xs"
                                    : "bg-[#FAF7F3] border border-[#141413]/12 text-[#5C5955] hover:border-[#141413]/30 hover:bg-[#F2EEE7] hover:-translate-y-0.5"
                            }`}
                        >
                            All Domains ({skillDomains.length})
                        </button>
                        {skillDomains.map((d) => (
                            <button
                                key={d.id}
                                type="button"
                                onClick={() => setSelectedDomain(d.id)}
                                className={`px-3.5 py-1.5 rounded-full text-xs font-editorial-mono transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#141413] ${
                                    selectedDomain === d.id
                                        ? "bg-[#141413] text-[#FAF7F3] shadow-xs"
                                        : "bg-[#FAF7F3] border border-[#141413]/12 text-[#5C5955] hover:border-[#141413]/30 hover:bg-[#F2EEE7] hover:-translate-y-0.5"
                                }`}
                            >
                                {d.badge}
                            </button>
                        ))}
                    </div>
                </div>

                {/* SKILL DOMAINS GRID */}
                <div
                    ref={gridRef}
                    key={selectedDomain}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-opacity duration-200"
                >
                    {displayedDomains.map((domain) => (
                        <div
                            key={domain.id}
                            className="skill-domain-card rounded-3xl bg-[#FAF7F3] border border-[#141413]/15 p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:border-[#141413]/30 transition-all duration-300"
                        >
                            <div>
                                <div className="flex items-center justify-between pb-3 border-b border-[#141413]/10 text-xs font-editorial-mono mb-4">
                                    <span className="text-emerald-800 font-semibold">{domain.badge}</span>
                                    <span className="text-[#8E8A83]">{domain.skills.length} competencies</span>
                                </div>

                                <h3 className="font-editorial-sans font-bold text-lg sm:text-xl text-[#141413] mb-4">
                                    {domain.title}
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {domain.skills.map((skill, sIdx) => (
                                        <div
                                            key={sIdx}
                                            className="group relative inline-flex flex-col px-3 py-1.5 rounded-xl bg-[#F2EEE7] border border-[#141413]/8 hover:border-[#141413]/30 hover:bg-[#FAF7F3] hover:-translate-y-0.5 hover:shadow-2xs transition-all duration-200 cursor-default"
                                        >
                                            <span className="text-xs font-editorial-sans font-semibold text-[#141413]">
                                                {skill.name}
                                            </span>
                                            <span className="text-[10px] font-editorial-mono text-[#7A756F] leading-tight">
                                                {skill.project}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;


import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const timelineRef = useRef(null);

    useGSAP(
        () => {
            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            if (prefersReducedMotion) {
                gsap.set([headerRef.current, ".timeline-card"], { opacity: 1, y: 0 });
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

            gsap.from(".timeline-card", {
                y: 25,
                duration: 0.55,
                stagger: 0.12,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: timelineRef.current,
                    start: "top 92%",
                    once: true,
                },
            });
        },
        { scope: sectionRef }
    );

    const experiences = [
        {
            id: "contentstack",
            company: "Contentstack",
            period: "January 2026 – September 2026",
            roles: [
                { title: "Associate Software Engineer", badge: "Engineering Progression" },
                { title: "Associate Software Engineering Intern", badge: "Internship" },
            ],
            type: "Enterprise Engineering",
            contributions: [
                "Developed internal engineering platforms and migration tooling to streamline developer velocity.",
                "Built Solution Library for reusable architectural pattern discovery across development pods.",
                "Enhanced CMS content migration workflows and structured schema transformation logic.",
                "Developed and improved the SAP SmartEdit Connector for automated enterprise content ingestion.",
                "Built high-throughput CS-to-CS migration tooling facilitating automated transfer across isolated cloud regions.",
            ],
            linkedProjects: [
                { name: "Solution Library", href: "#work" },
                { name: "CS-to-CS Migration Tool", href: "#work" },
                { name: "SAP SmartEdit Connector", href: "#work" },
            ],
            stack: ["React", "Node.js", "Contentstack APIs", "AWS Lambda", "REST Architecture", "ETL Pipelines"],
        },
        {
            id: "aspiring-media",
            company: "Aspiring Media Tech",
            period: "June 2024 – December 2024",
            roles: [
                { title: "Web Developer Intern", badge: "Internship" },
            ],
            type: "Full-Stack & NLP",
            contributions: [
                "Built and optimized a full-stack campaign tracking platform handling multi-channel reporting.",
                "Improved system responsiveness and page load times through application optimization and caching.",
                "Implemented AI-powered metadata enrichment workflows for structured digital assets.",
                "Developed NLP-based content auto-tagging and classification pipelines to automate taxonomy tagging.",
                "Streamlined internal editorial search and categorization workflows.",
            ],
            linkedProjects: [],
            stack: ["JavaScript", "Python", "Node.js", "Express", "NLP", "REST APIs", "SQL"],
        },
    ];

    const education = {
        institution: "University of Mumbai",
        degree: "Bachelor of Engineering in Computer Science",
        period: "July 2022 – June 2026",
        score: "8.55 / 10 CGPA",
        coursework: [
            "Data Structures & Algorithms",
            "Operating Systems",
            "Computer Networks",
            "Database Management Systems",
            "Object-Oriented Programming",
            "Machine Learning",
        ],
    };

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="relative w-full py-24 md:py-32 paper-texture border-t border-[#141413]/10"
        >
            <div className="page-container w-full">
                {/* SECTION HEADER */}
                <div ref={headerRef} className="mb-14 md:mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141413]/5 border border-[#141413]/10 text-xs font-editorial-mono text-[#5C5955] uppercase tracking-wider mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3A6351]" />
                        <span>03 / Career Timeline</span>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                        <div>
                            <h2 className="font-editorial-sans font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#141413] tracking-tight uppercase leading-[0.98]">
                                Experience &amp; Education
                            </h2>
                            <p className="font-editorial-serif italic text-lg sm:text-xl md:text-2xl text-[#5C5955] mt-2 max-w-2xl">
                                Professional software engineering, enterprise systems development, and academic foundations.
                            </p>
                        </div>
                    </div>
                </div>

                {/* TIMELINE CONTAINER */}
                <div ref={timelineRef} className="w-full max-w-5xl mx-auto space-y-10 md:space-y-14">
                    
                    {/* WORK EXPERIENCE ENTRIES */}
                    <div className="space-y-8 md:space-y-10">
                        {experiences.map((exp, idx) => (
                            <div
                                key={exp.id}
                                className="timeline-card rounded-3xl bg-[#FAF7F3] border border-[#141413]/15 p-6 sm:p-8 md:p-10 shadow-xs hover:border-[#141413]/30 transition-all duration-300"
                            >
                                {/* Top Meta Header */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-5 border-b border-[#141413]/10">
                                    <div>
                                        <div className="text-xs font-editorial-mono text-[#7A756F] uppercase tracking-wider mb-1">
                                            [ 0{idx + 1} · {exp.type} ]
                                        </div>
                                        <h3 className="font-editorial-sans font-black text-2xl sm:text-3xl text-[#141413] tracking-tight">
                                            {exp.company}
                                        </h3>
                                    </div>
                                    <div className="sm:text-right">
                                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#F2EEE7] border border-[#141413]/10 font-editorial-mono text-xs text-[#383633] font-semibold">
                                            {exp.period}
                                        </div>
                                    </div>
                                </div>

                                {/* Roles Progression */}
                                <div className="py-5 border-b border-[#141413]/8">
                                    <div className="text-[11px] font-editorial-mono text-[#7A756F] uppercase tracking-wider mb-2.5">
                                        Roles &amp; Progression
                                    </div>
                                    <div className="flex flex-wrap items-center gap-3">
                                        {exp.roles.map((r, rIdx) => (
                                            <div
                                                key={rIdx}
                                                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#F2EEE7] border border-[#141413]/10 text-xs sm:text-sm font-editorial-sans font-semibold text-[#141413]"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                                                <span>{r.title}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Contributions Bullets */}
                                <div className="py-6">
                                    <div className="text-[11px] font-editorial-mono text-[#7A756F] uppercase tracking-wider mb-3">
                                        Key Engineering Contributions
                                    </div>
                                    <ul className="space-y-2.5">
                                        {exp.contributions.map((bullet, bIdx) => (
                                            <li
                                                key={bIdx}
                                                className="flex items-start gap-2.5 text-xs sm:text-sm font-editorial-sans text-[#4A4744] leading-relaxed"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#141413] mt-1.5 shrink-0" />
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies & Case Study Internal Links */}
                                <div className="pt-5 border-t border-[#141413]/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex flex-wrap gap-1.5">
                                        {exp.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2.5 py-1 rounded-md bg-[#F2EEE7] border border-[#141413]/10 text-[11px] font-editorial-mono text-[#383633] font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {exp.linkedProjects.length > 0 && (
                                        <div className="flex flex-wrap items-center gap-2 text-xs font-editorial-sans">
                                            <span className="text-[#7A756F]">Case Studies:</span>
                                            {exp.linkedProjects.map((p, pIdx) => (
                                                <a
                                                    key={pIdx}
                                                    href={p.href}
                                                    className="inline-flex items-center gap-1 font-semibold text-[#141413] hover:text-[#3A6351] underline underline-offset-2 transition-colors"
                                                >
                                                    <span>{p.name}</span>
                                                    <span className="text-[10px]">↓</span>
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* EDUCATION ENTRY */}
                    <div className="timeline-card rounded-3xl bg-[#F2EEE7]/80 border border-[#141413]/15 p-6 sm:p-8 md:p-10 shadow-xs">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-5 border-b border-[#141413]/10">
                            <div>
                                <div className="text-xs font-editorial-mono text-[#7A756F] uppercase tracking-wider mb-1">
                                    [ Academic Foundation ]
                                </div>
                                <h3 className="font-editorial-sans font-black text-2xl sm:text-3xl text-[#141413] tracking-tight">
                                    {education.institution}
                                </h3>
                                <div className="text-sm sm:text-base font-editorial-serif italic text-[#5C5955] mt-1">
                                    {education.degree}
                                </div>
                            </div>
                            <div className="sm:text-right flex flex-col sm:items-end gap-1.5">
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#FAF7F3] border border-[#141413]/10 font-editorial-mono text-xs text-[#383633] font-semibold">
                                    {education.period}
                                </div>
                                <div className="inline-flex items-center gap-1.5 font-editorial-mono text-xs font-bold text-emerald-800 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                                    <span>CGPA:</span>
                                    <span>{education.score}</span>
                                </div>
                            </div>
                        </div>

                        {/* Coursework */}
                        <div className="pt-5">
                            <div className="text-[11px] font-editorial-mono text-[#7A756F] uppercase tracking-wider mb-3">
                                Relevant Computer Science Coursework
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {education.coursework.map((course) => (
                                    <span
                                        key={course}
                                        className="px-3 py-1 rounded-lg bg-[#FAF7F3] border border-[#141413]/10 text-xs font-editorial-sans text-[#2B2927] font-medium"
                                    >
                                        {course}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;


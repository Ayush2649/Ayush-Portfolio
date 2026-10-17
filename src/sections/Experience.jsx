import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const timelineContainerRef = useRef(null);
    const lineRef = useRef(null);

    useGSAP(
        () => {
            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            if (prefersReducedMotion) {
                return;
            }

            // Refresh ScrollTrigger after DOM has settled
            ScrollTrigger.refresh();

            // Section Header reveal
            if (headerRef.current) {
                gsap.from(headerRef.current, {
                    y: 16,
                    opacity: 0,
                    duration: 0.45,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 95%",
                        once: true,
                    },
                });
            }

            // Animated Vertical Timeline Guide Line
            if (lineRef.current) {
                gsap.fromTo(
                    lineRef.current,
                    { scaleY: 0 },
                    {
                        scaleY: 1,
                        duration: 0.75,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: timelineContainerRef.current,
                            start: "top 85%",
                            once: true,
                        },
                    }
                );
            }

            // Individual Timeline Entries (each triggers on its own position)
            const entries = sectionRef.current?.querySelectorAll(".timeline-entry");
            if (entries && entries.length > 0) {
                entries.forEach((entry) => {
                    gsap.from(entry, {
                        y: 18,
                        opacity: 0.15,
                        duration: 0.5,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: entry,
                            start: "top 94%",
                            once: true,
                        },
                    });
                });
            }
        },
        { scope: sectionRef }
    );

    // Bulletproof fallback: Guarantee everything is 100% visible regardless of scroll state
    useEffect(() => {
        const handleHashOrState = () => {
            if (window.location.hash === "#experience") {
                const els = sectionRef.current?.querySelectorAll(
                    ".timeline-entry, [ref], .timeline-card"
                );
                els?.forEach((el) => {
                    el.style.opacity = "1";
                    el.style.transform = "none";
                });
            }
        };

        window.addEventListener("hashchange", handleHashOrState);
        const timer = setTimeout(() => {
            const els = sectionRef.current?.querySelectorAll(".timeline-entry");
            els?.forEach((el) => {
                if (window.getComputedStyle(el).opacity === "0") {
                    el.style.opacity = "1";
                    el.style.transform = "none";
                }
            });
        }, 2000);

        return () => {
            window.removeEventListener("hashchange", handleHashOrState);
            clearTimeout(timer);
        };
    }, []);

    const contentstackProjects = [
        {
            id: "solution-lib",
            title: "Solution Library",
            badge: "Internal Platform",
            anchor: "#solution-library",
            description:
                "Centralized reusable engineering solutions. Improved solution discovery and reuse across developer pods.",
            highlight: "30%+ Engineering Velocity Gain",
        },
        {
            id: "cs-to-cs",
            title: "CS-to-CS Migration Tool",
            badge: "Migration Engine",
            anchor: "#cs-to-cs",
            description:
                "Content migration between Contentstack stacks with automated schema validation workflows.",
            highlight: "Zero Data Corruption · 20+ Stacks",
        },
        {
            id: "sap-smartedit",
            title: "SAP SmartEdit Connector",
            badge: "CMS ETL Pipeline",
            anchor: "#sap-smartedit",
            description:
                "CMS content migration extraction, transformation, validation, and loading into headless architectures.",
            highlight: "Headless Content Ingestion",
        },
    ];

    const contentstackBullets = [
        "Developed internal engineering platforms and migration tooling.",
        "Built Solution Library for engineering knowledge discovery.",
        "Developed and enhanced CMS migration workflows.",
        "Contributed to CS-to-CS migration and SAP SmartEdit tooling.",
    ];

    const aspiringMediaBullets = [
        "Built and optimized a full-stack campaign tracking platform.",
        "Implemented AI-powered metadata enrichment.",
        "Developed NLP-based content auto-tagging.",
        "Improved campaign-content search and classification workflows.",
    ];

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="relative w-full py-16 md:py-24 lg:py-28 paper-texture border-t border-[#141413]/10 scroll-mt-24 md:scroll-mt-28"
        >
            <div className="page-container w-full">
                {/* ========================================================
                    1. SECTION HEADING
                ======================================================== */}
                <div ref={headerRef} className="mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141413]/5 border border-[#141413]/10 text-xs font-editorial-mono text-[#5C5955] uppercase tracking-wider mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3A6351]" />
                        <span>03 / Career Timeline</span>
                    </div>
                    <div>
                        <h2 className="font-editorial-sans font-black text-3.5xl sm:text-5xl md:text-6xl text-[#141413] tracking-tight uppercase leading-[0.98]">
                            Experience
                        </h2>
                        <p className="font-editorial-serif italic text-lg sm:text-xl md:text-2xl text-[#5C5955] mt-2 max-w-3xl">
                            A timeline of the teams I&apos;ve worked with and the systems I&apos;ve helped build.
                        </p>
                    </div>
                </div>

                {/* ========================================================
                    2. CAREER TIMELINE CONTAINER
                ======================================================== */}
                <div
                    ref={timelineContainerRef}
                    className="relative w-full max-w-5xl mx-auto space-y-12 md:space-y-16"
                >
                    {/* Continuous Vertical Timeline Spine (Responsive: Mobile 16px, Desktop 210px / 254px) */}
                    <div
                        ref={lineRef}
                        className="absolute left-4 md:left-[210px] lg:left-[254px] -translate-x-1/2 top-4 bottom-8 w-[2px] bg-[#141413]/15 origin-top will-change-transform pointer-events-none"
                        aria-hidden="true"
                    />

                    {/* ----------------------------------------------------
                        ENTRY 01: CONTENTSTACK
                    ---------------------------------------------------- */}
                    <article className="timeline-entry scroll-mt-24 md:scroll-mt-28 relative pl-10 md:pl-0 md:grid md:grid-cols-[190px_40px_1fr] lg:grid-cols-[230px_48px_1fr] items-start">
                        {/* MOBILE TIMELINE NODE (Mobile only: on spine at left-4) */}
                        <div
                            className="md:hidden absolute left-4 -translate-x-1/2 top-1.5 w-3.5 h-3.5 rounded-full bg-[#FAF7F3] border-2 border-[#141413] flex items-center justify-center z-10"
                            aria-hidden="true"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#141413]" />
                        </div>

                        {/* MOBILE HEADER (Mobile only) */}
                        <div className="md:hidden mb-3.5">
                            <div className="flex items-center gap-2">
                                <span className="font-editorial-mono font-black text-xl text-[#141413]">
                                    2026
                                </span>
                                <span className="font-editorial-mono text-xs text-[#7A756F]">
                                    January 2026 – September 2026
                                </span>
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                                <h3 className="font-editorial-sans font-black text-lg text-[#141413]">
                                    Contentstack
                                </h3>
                                <span className="text-[#8E8A83] text-[11px] font-editorial-mono">
                                    · Enterprise CMS · Mumbai
                                </span>
                            </div>
                        </div>

                        {/* DESKTOP COLUMN 1: Date, Period & Employer Info */}
                        <div className="hidden md:block pt-2 text-right pr-2">
                            <div className="font-editorial-mono font-black text-2xl lg:text-3xl text-[#141413] tracking-tight leading-none">
                                2026
                            </div>
                            <div className="mt-1 font-editorial-mono text-xs text-[#7A756F] font-medium">
                                January 2026 – September 2026
                            </div>
                            <div className="mt-3">
                                <h3 className="font-editorial-sans font-black text-xl lg:text-2xl text-[#141413] tracking-tight leading-snug">
                                    Contentstack
                                </h3>
                                <div className="text-[11px] font-editorial-mono text-[#8E8A83] uppercase tracking-wider mt-0.5">
                                    Enterprise CMS · Mumbai
                                </div>
                            </div>
                        </div>

                        {/* DESKTOP COLUMN 2: Timeline Node (Centered on spine) */}
                        <div className="hidden md:flex flex-col items-center pt-2.5 relative">
                            <div
                                className="w-4 h-4 rounded-full bg-[#FAF7F3] border-2 border-[#141413] flex items-center justify-center z-10 shrink-0"
                                aria-hidden="true"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#141413]" />
                            </div>
                        </div>

                        {/* COLUMN 3: Roles, Bullets & Project Highlights Card */}
                        <div className="rounded-3xl bg-[#FAF7F3] border border-[#141413]/12 p-6 sm:p-8 md:p-8 lg:p-9 shadow-xs hover:border-[#141413]/25 transition-all duration-300">
                            {/* Role Progression Header */}
                            <div className="pb-5 border-b border-[#141413]/10">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                    <span className="px-2.5 py-0.5 rounded-full bg-[#3A6351]/10 text-[#3A6351] font-editorial-mono text-[11px] font-bold border border-[#3A6351]/20 whitespace-nowrap">
                                        Engineering Progression
                                    </span>
                                    <span className="font-editorial-mono text-xs text-[#7A756F]">
                                        Overall Tenure: Jan 2026 – Sept 2026
                                    </span>
                                </div>
                                <div className="space-y-1.5">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                                        <h4 className="font-editorial-sans font-bold text-lg sm:text-xl text-[#141413]">
                                            Associate Software Engineer
                                        </h4>
                                    </div>
                                    <div className="flex items-center gap-2 pl-4 text-xs font-editorial-sans font-semibold text-[#6B6661]">
                                        <span className="text-[#8E8A83]">↳</span>
                                        <span>Associate Software Engineering Intern</span>
                                    </div>
                                </div>
                            </div>

                            {/* Contribution Bullets */}
                            <div className="py-6">
                                <div className="text-[11px] font-editorial-mono text-[#8E8A83] uppercase tracking-wider mb-3">
                                    Key Contributions
                                </div>
                                <ul className="space-y-3">
                                    {contentstackBullets.map((bullet, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span
                                                className="bullet-marker w-1.5 h-1.5 rounded-full bg-[#141413] mt-2 shrink-0"
                                                aria-hidden="true"
                                            />
                                            <span className="bullet-content text-xs sm:text-sm font-editorial-sans text-[#2B2927] leading-relaxed flex-1">
                                                {bullet}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack Chips */}
                            <div className="pb-6 border-b border-[#141413]/10 flex flex-wrap gap-1.5">
                                {[
                                    "Node.js",
                                    "React",
                                    "Contentstack APIs",
                                    "AWS Lambda",
                                    "ETL Pipelines",
                                    "REST Microservices",
                                    "Schema Transformation",
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2.5 py-1 rounded-md bg-[#F2EEE7] border border-[#141413]/10 text-[11px] font-editorial-mono text-[#4A4744] font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Related Contentstack Projects (3 Compact Highlights) */}
                            <div className="pt-6">
                                <div className="flex items-center justify-between mb-3.5">
                                    <div className="text-[11px] font-editorial-mono text-[#8E8A83] uppercase tracking-wider">
                                        Related Engineering Work Highlights
                                    </div>
                                    <span className="text-[10px] font-editorial-mono text-[#7A756F]">
                                        Click to jump to case study
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                                    {contentstackProjects.map((p) => (
                                        <a
                                            key={p.id}
                                            href={p.anchor}
                                            className="group rounded-2xl bg-[#F2EEE7]/80 hover:bg-[#F2EEE7] border border-[#141413]/10 hover:border-[#D95338]/40 p-4 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 shadow-2xs"
                                        >
                                            <div>
                                                <div className="flex items-center justify-between gap-1 text-[10px] font-editorial-mono mb-2">
                                                    <span className="px-1.5 py-0.5 rounded bg-[#FAF7F3] border border-[#141413]/10 text-[#5C5955] font-semibold whitespace-nowrap">
                                                        {p.badge}
                                                    </span>
                                                    <span className="text-[#8E8A83] group-hover:text-[#D95338] transition-colors whitespace-nowrap">
                                                        Case Study ↓
                                                    </span>
                                                </div>
                                                <h5 className="font-editorial-sans font-bold text-sm text-[#141413] group-hover:text-[#D95338] transition-colors">
                                                    {p.title}
                                                </h5>
                                                <p className="font-editorial-sans text-xs text-[#5C5955] mt-1.5 line-clamp-3 leading-relaxed">
                                                    {p.description}
                                                </p>
                                            </div>
                                            <div className="mt-3 pt-2.5 border-t border-[#141413]/8 flex items-center justify-between text-[10px] font-editorial-mono text-[#7A756F]">
                                                <span className="line-clamp-1">{p.highlight}</span>
                                                <span className="text-[#141413] group-hover:text-[#D95338] group-hover:translate-x-0.5 transition-all ml-1 shrink-0">
                                                    →
                                                </span>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* ----------------------------------------------------
                        ENTRY 02: ASPIRING MEDIA TECH
                    ---------------------------------------------------- */}
                    <article className="timeline-entry scroll-mt-24 md:scroll-mt-28 relative pl-10 md:pl-0 md:grid md:grid-cols-[190px_40px_1fr] lg:grid-cols-[230px_48px_1fr] items-start">
                        {/* MOBILE TIMELINE NODE (Mobile only: on spine at left-4) */}
                        <div
                            className="md:hidden absolute left-4 -translate-x-1/2 top-1.5 w-3.5 h-3.5 rounded-full bg-[#FAF7F3] border-2 border-[#141413] flex items-center justify-center z-10"
                            aria-hidden="true"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#141413]" />
                        </div>

                        {/* MOBILE HEADER (Mobile only) */}
                        <div className="md:hidden mb-3.5">
                            <div className="flex items-center gap-2">
                                <span className="font-editorial-mono font-black text-xl text-[#141413]">
                                    2024
                                </span>
                                <span className="font-editorial-mono text-xs text-[#7A756F]">
                                    June 2024 – December 2024
                                </span>
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                                <h3 className="font-editorial-sans font-black text-lg text-[#141413]">
                                    Aspiring Media Tech
                                </h3>
                                <span className="text-[#8E8A83] text-[11px] font-editorial-mono">
                                    · Full-Stack &amp; NLP · Mumbai
                                </span>
                            </div>
                        </div>

                        {/* DESKTOP COLUMN 1: Date, Period & Employer Info */}
                        <div className="hidden md:block pt-2 text-right pr-2">
                            <div className="font-editorial-mono font-black text-2xl lg:text-3xl text-[#141413] tracking-tight leading-none">
                                2024
                            </div>
                            <div className="mt-1 font-editorial-mono text-xs text-[#7A756F] font-medium">
                                June 2024 – December 2024
                            </div>
                            <div className="mt-3">
                                <h3 className="font-editorial-sans font-black text-xl lg:text-2xl text-[#141413] tracking-tight leading-snug">
                                    Aspiring Media Tech
                                </h3>
                                <div className="text-[11px] font-editorial-mono text-[#8E8A83] uppercase tracking-wider mt-0.5">
                                    Full-Stack &amp; NLP · Mumbai
                                </div>
                            </div>
                        </div>

                        {/* DESKTOP COLUMN 2: Timeline Node (Centered on spine) */}
                        <div className="hidden md:flex flex-col items-center pt-2.5 relative">
                            <div
                                className="w-4 h-4 rounded-full bg-[#FAF7F3] border-2 border-[#141413] flex items-center justify-center z-10 shrink-0"
                                aria-hidden="true"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#141413]" />
                            </div>
                        </div>

                        {/* COLUMN 3: Role, Bullets & Verified Metrics Card */}
                        <div className="rounded-3xl bg-[#FAF7F3] border border-[#141413]/12 p-6 sm:p-8 md:p-8 lg:p-9 shadow-xs hover:border-[#141413]/25 transition-all duration-300">
                            {/* Role Header */}
                            <div className="pb-5 border-b border-[#141413]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                                        <h4 className="font-editorial-sans font-bold text-lg sm:text-xl text-[#141413]">
                                            Web Developer Intern
                                        </h4>
                                    </div>
                                    <div className="text-xs font-editorial-mono text-[#6B6661] mt-0.5">
                                        Campaign Analytics &amp; NLP Platform Engineering
                                    </div>
                                </div>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#F2EEE7] border border-[#141413]/10 font-editorial-mono text-[11px] text-[#5C5955] font-semibold w-fit">
                                    Internship Tenure
                                </span>
                            </div>

                            {/* Contribution Bullets */}
                            <div className="py-6">
                                <div className="text-[11px] font-editorial-mono text-[#8E8A83] uppercase tracking-wider mb-3">
                                    Key Contributions
                                </div>
                                <ul className="space-y-3">
                                    {aspiringMediaBullets.map((bullet, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span
                                                className="bullet-marker w-1.5 h-1.5 rounded-full bg-[#141413] mt-2 shrink-0"
                                                aria-hidden="true"
                                            />
                                            <span className="bullet-content text-xs sm:text-sm font-editorial-sans text-[#2B2927] leading-relaxed flex-1">
                                                {bullet}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Verified Resume Performance Metrics Callout */}
                            <div className="py-4 px-5 rounded-2xl bg-[#F2EEE7]/80 border border-[#141413]/10 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse shrink-0" />
                                    <span className="font-editorial-mono text-xs uppercase tracking-wider text-[#5C5955] font-semibold">
                                        Verified Engineering Impact:
                                    </span>
                                </div>
                                <div className="flex items-center gap-4 text-xs font-editorial-mono">
                                    <div className="flex items-center gap-1.5 bg-[#FAF7F3] px-3 py-1 rounded-full border border-[#141413]/10">
                                        <span className="font-bold text-emerald-800">+30%</span>
                                        <span className="text-[#6B6661]">System Performance</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 bg-[#FAF7F3] px-3 py-1 rounded-full border border-[#141413]/10">
                                        <span className="font-bold text-emerald-800">+40%</span>
                                        <span className="text-[#6B6661]">Search Efficiency</span>
                                    </div>
                                </div>
                            </div>

                            {/* Tech Stack Chips */}
                            <div className="flex flex-wrap gap-1.5">
                                {[
                                    "JavaScript",
                                    "Python",
                                    "Node.js",
                                    "Express",
                                    "Hugging Face Transformers",
                                    "NLP Pipelines",
                                    "SQL",
                                    "REST APIs",
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2.5 py-1 rounded-md bg-[#F2EEE7] border border-[#141413]/10 text-[11px] font-editorial-mono text-[#4A4744] font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Experience;

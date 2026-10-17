import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const cardRef = useRef(null);

    useGSAP(
        () => {
            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            if (prefersReducedMotion) {
                gsap.set([headerRef.current, cardRef.current], { opacity: 1, y: 0 });
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

            if (cardRef.current) {
                gsap.from(cardRef.current, {
                    y: 25,
                    duration: 0.55,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: "top 92%",
                        once: true,
                    },
                });
            }
        },
        { scope: sectionRef }
    );

    return (
        <section
            id="resume"
            ref={sectionRef}
            className="relative w-full py-20 md:py-28 paper-texture border-t border-[#141413]/10"
        >
            <div className="page-container w-full">
                {/* SECTION HEADER */}
                <div ref={headerRef} className="mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141413]/5 border border-[#141413]/10 text-xs font-editorial-mono text-[#5C5955] uppercase tracking-wider mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#141413]" />
                        <span>05 / Curriculum Vitae</span>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                        <div>
                            <h2 className="font-editorial-sans font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#141413] tracking-tight uppercase leading-[0.98]">
                                Resume &amp; Credentials
                            </h2>
                            <p className="font-editorial-serif italic text-lg sm:text-xl md:text-2xl text-[#5C5955] mt-2 max-w-2xl">
                                Formal credentials, verified production contributions, and academic background.
                            </p>
                        </div>

                        {/* Download CTA Button */}
                        <div className="pt-2 lg:pt-0 shrink-0">
                            <a
                                href="/resume.pdf"
                                download="Ayush_Sahu_Resume.pdf"
                                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#141413] text-[#FAF7F3] font-editorial-sans font-semibold text-sm hover:bg-[#333331] transition-all duration-200 shadow-sm hover:shadow-md group"
                            >
                                <svg
                                    className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 duration-200"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                    />
                                </svg>
                                <span>Download Official Resume (PDF)</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* COMPACT CREDENTIALS PREVIEW CARD */}
                <div
                    ref={cardRef}
                    className="max-w-4xl mx-auto rounded-2xl bg-[#F2EEE7]/80 border border-[#141413]/15 p-6 sm:p-8 md:p-10 shadow-xs"
                >
                    {/* Header Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#141413]/10">
                        <div>
                            <h3 className="font-editorial-sans font-bold text-2xl text-[#141413]">
                                Ayush Sahu
                            </h3>
                            <p className="font-editorial-mono text-xs text-[#6B6661] mt-0.5">
                                Software Engineer · AI Engineer · Mumbai, India
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3A6351]/10 text-[#3A6351] border border-[#3A6351]/20 font-editorial-mono text-[11px] font-semibold">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#3A6351]" />
                                Verified Profile
                            </span>
                            <span className="font-editorial-mono text-[11px] text-[#7A756F]">
                                2026 Edition
                            </span>
                        </div>
                    </div>

                    {/* 3-Column Summary Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-b border-[#141413]/10">
                        {/* 1. Education */}
                        <div className="space-y-2">
                            <div className="font-editorial-mono text-[11px] text-[#8E8A83] uppercase tracking-wider">
                                Education
                            </div>
                            <div className="font-editorial-sans font-bold text-sm text-[#141413]">
                                University of Mumbai
                            </div>
                            <div className="font-editorial-sans text-xs text-[#5C5955]">
                                Bachelor of Engineering in Computer Engineering
                            </div>
                            <div className="inline-block px-2 py-0.5 rounded bg-[#141413]/5 border border-[#141413]/10 font-editorial-mono text-[11px] font-medium text-[#141413]">
                                CGPA: 8.55 / 10.0
                            </div>
                            <div className="font-editorial-mono text-[10px] text-[#8E8A83]">
                                2022 – 2026
                            </div>
                        </div>

                        {/* 2. Professional Experience */}
                        <div className="space-y-2">
                            <div className="font-editorial-mono text-[11px] text-[#8E8A83] uppercase tracking-wider">
                                Current &amp; Prior Experience
                            </div>
                            <div className="font-editorial-sans font-bold text-sm text-[#141413]">
                                Contentstack
                            </div>
                            <div className="font-editorial-sans text-xs text-[#5C5955]">
                                Associate Software Engineer (Progression from ASE Intern)
                            </div>
                            <div className="font-editorial-mono text-[10px] text-[#8E8A83]">
                                Jan 2026 – Sept 2026
                            </div>
                            <div className="pt-1">
                                <div className="font-editorial-sans font-medium text-xs text-[#141413]">
                                    SATAT
                                </div>
                                <div className="font-editorial-mono text-[10px] text-[#6B6661]">
                                    Founder &amp; Lead Engineer · Live in Production
                                </div>
                            </div>
                        </div>

                        {/* 3. Core Competencies */}
                        <div className="space-y-2">
                            <div className="font-editorial-mono text-[11px] text-[#8E8A83] uppercase tracking-wider">
                                Core Competencies
                            </div>
                            <div className="flex flex-wrap gap-1.5 pt-0.5">
                                {[
                                    "Next.js / React",
                                    "Node.js / Express",
                                    "Python / PyTorch",
                                    "1D CNN-LSTM / Grad-CAM",
                                    "TypeScript",
                                    "PostgreSQL & Firestore",
                                    "AWS Lambda & Docker",
                                    "ETL & Data Migration",
                                    "RAG & Multi-Agent AI",
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-0.5 rounded bg-[#FAF7F3] border border-[#141413]/10 text-[11px] font-editorial-mono text-[#4A4744]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-xs font-editorial-sans text-[#6B6661]">
                            <svg
                                className="w-4 h-4 text-[#3A6351] shrink-0"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>Includes complete technical deep-dives, GitHub links, and verifiable metrics.</span>
                        </div>
                        <a
                            href="/resume.pdf"
                            download="Ayush_Sahu_Resume.pdf"
                            className="inline-flex items-center gap-2 font-editorial-sans font-semibold text-xs text-[#141413] hover:text-[#5C5955] transition-colors"
                        >
                            <span>Download PDF Copy</span>
                            <span>↓</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;


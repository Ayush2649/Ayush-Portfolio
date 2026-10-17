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
            className="relative w-full py-16 md:py-24 lg:py-28 paper-texture border-t border-[#141413]/10 scroll-mt-24 md:scroll-mt-28"
        >
            <div className="page-container w-full">
                {/* SECTION HEADER */}
                <div ref={headerRef} className="mb-10 md:mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141413]/5 border border-[#141413]/10 text-xs font-editorial-mono text-[#5C5955] uppercase tracking-wider mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#141413]" />
                        <span>05 / Curriculum Vitae</span>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                        <div>
                            <h2 className="font-editorial-sans font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#141413] tracking-tight uppercase leading-[0.98]">
                                Resume
                            </h2>
                            <p className="font-editorial-serif italic text-lg sm:text-xl md:text-2xl text-[#5C5955] mt-2 max-w-2xl">
                                Official resume covering professional experience, technical systems, and academic background.
                            </p>
                        </div>

                        {/* Top Download CTA Button */}
                        <div className="pt-2 lg:pt-0 shrink-0">
                            <a
                                href="/resume.pdf"
                                download="Ayush_Sahu_Resume.pdf"
                                className="btn-primary group py-2.5 px-5 sm:py-3 sm:px-6 text-xs sm:text-sm"
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
                                <span>Download Resume (PDF)</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* RESUME VIEWER / PREVIEW CONTAINER */}
                <div ref={cardRef}>
                    {/* DESKTOP / TABLET: Genuine PDF Preview Viewer (>= 768px) */}
                    <div className="hidden md:block w-full max-w-5xl mx-auto rounded-3xl bg-[#F2EEE7]/85 border border-[#141413]/15 p-5 lg:p-7 shadow-xs">
                        {/* Viewer Control Bar */}
                        <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#141413]/10">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-[#FAF7F3] border border-[#141413]/10 flex items-center justify-center font-editorial-mono text-xs font-bold text-[#D95338]">
                                    PDF
                                </div>
                                <div>
                                    <div className="font-editorial-sans font-bold text-sm text-[#141413]">
                                        Ayush_Sahu_Resume.pdf
                                    </div>
                                    <div className="font-editorial-mono text-[11px] text-[#7A756F]">
                                        Official Document · 2 Pages · PDF
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary py-2 px-3.5 text-xs"
                                >
                                    <span>Open in New Tab</span>
                                    <span className="arrow-icon text-xs">↗</span>
                                </a>
                                <a
                                    href="/resume.pdf"
                                    download="Ayush_Sahu_Resume.pdf"
                                    className="btn-primary py-2 px-4 text-xs"
                                >
                                    <svg
                                        className="w-3.5 h-3.5"
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
                                    <span>Download PDF</span>
                                </a>
                            </div>
                        </div>

                        {/* PDF Embed / Object Frame */}
                        <div className="pt-5">
                            <iframe
                                src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=1"
                                title="Ayush Sahu Resume PDF Viewer"
                                className="w-full h-[720px] lg:h-[820px] rounded-2xl border border-[#141413]/10 bg-white"
                            />
                        </div>
                    </div>

                    {/* MOBILE: Compact Responsive Resume Panel (< 768px) */}
                    <div className="md:hidden w-full max-w-lg mx-auto rounded-3xl bg-[#F2EEE7]/85 border border-[#141413]/15 p-6 shadow-xs">
                        {/* File Header */}
                        <div className="flex items-center gap-3.5 pb-4 border-b border-[#141413]/10">
                            <div className="w-10 h-10 rounded-xl bg-[#FAF7F3] border border-[#141413]/10 flex items-center justify-center font-editorial-mono text-sm font-bold text-[#D95338] shrink-0">
                                PDF
                            </div>
                            <div>
                                <h3 className="font-editorial-sans font-bold text-base text-[#141413]">
                                    Ayush_Sahu_Resume.pdf
                                </h3>
                                <p className="font-editorial-mono text-xs text-[#7A756F] mt-0.5">
                                    Official Resume · 2 Pages · PDF
                                </p>
                            </div>
                        </div>

                        {/* Key Sections Overview */}
                        <div className="py-4 space-y-2">
                            <div className="font-editorial-mono text-[11px] text-[#8E8A83] uppercase tracking-wider mb-2">
                                Document Overview
                            </div>
                            <ul className="space-y-2 font-editorial-sans text-xs text-[#2B2927]">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#141413] shrink-0" />
                                    <span>Full-Stack &amp; Systems Engineering</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#141413] shrink-0" />
                                    <span>Professional Experience (Contentstack, SATAT)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#141413] shrink-0" />
                                    <span>Applied Deep Learning &amp; AI Architectures</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#141413] shrink-0" />
                                    <span>Academic Background · University of Mumbai</span>
                                </li>
                            </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="pt-4 border-t border-[#141413]/10 flex flex-col gap-2.5">
                            <a
                                href="/resume.pdf"
                                download="Ayush_Sahu_Resume.pdf"
                                className="btn-primary w-full py-3 text-xs justify-center"
                            >
                                <svg
                                    className="w-4 h-4"
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
                                <span>Download Resume (PDF)</span>
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary w-full py-2.5 text-xs justify-center"
                            >
                                <span>Open PDF in New Tab</span>
                                <span className="arrow-icon text-xs">↗</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;


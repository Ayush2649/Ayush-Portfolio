import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const cardRef = useRef(null);

    useGSAP(
        () => {
            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            if (prefersReducedMotion) {
                return;
            }

            // Header entrance
            if (headerRef.current) {
                gsap.from(headerRef.current, {
                    y: 16,
                    opacity: 0.15,
                    duration: 0.45,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 95%",
                        once: true,
                    },
                });
            }

            // University card entrance
            if (cardRef.current) {
                gsap.from(cardRef.current, {
                    y: 20,
                    opacity: 0.15,
                    duration: 0.5,
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

    // Fail-safe cleanup: Guarantee visibility even if scroll calculation desyncs
    useEffect(() => {
        const handleHashOrState = () => {
            if (window.location.hash === "#education") {
                if (headerRef.current) headerRef.current.style.opacity = "1";
                if (cardRef.current) cardRef.current.style.opacity = "1";
            }
        };

        window.addEventListener("hashchange", handleHashOrState);
        const timer = setTimeout(() => {
            if (cardRef.current && window.getComputedStyle(cardRef.current).opacity === "0") {
                cardRef.current.style.opacity = "1";
                cardRef.current.style.transform = "none";
            }
        }, 1500);

        return () => {
            window.removeEventListener("hashchange", handleHashOrState);
            clearTimeout(timer);
        };
    }, []);

    const educationData = {
        institution: "University of Mumbai",
        degree: "Bachelor of Engineering in Computer Science",
        period: "July 2022 – June 2026",
        score: "8.55 / 10 CGPA",
        coursework: [
            "Data Structures and Algorithms",
            "Operating Systems",
            "Computer Networks",
            "Database Management Systems",
            "Object-Oriented Programming",
            "Machine Learning",
        ],
    };

    return (
        <section
            id="education"
            ref={sectionRef}
            className="relative w-full py-16 md:py-24 lg:py-28 paper-texture border-t border-[#141413]/10 scroll-mt-24 md:scroll-mt-28"
        >
            <div className="page-container w-full">
                {/* SECTION HEADER */}
                <div ref={headerRef} className="mb-10 md:mb-14 max-w-5xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141413]/5 border border-[#141413]/10 text-xs font-editorial-mono text-[#5C5955] uppercase tracking-wider mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#141413]" />
                        <span>Academic Foundation</span>
                    </div>
                    <div>
                        <h2 className="font-editorial-sans font-black text-3.5xl sm:text-5xl md:text-6xl text-[#141413] tracking-tight uppercase leading-[0.98]">
                            Education
                        </h2>
                        <p className="font-editorial-serif italic text-lg sm:text-xl md:text-2xl text-[#5C5955] mt-2 max-w-3xl">
                            Formal computer science foundations, core systems engineering, and academic coursework.
                        </p>
                    </div>
                </div>

                {/* INDEPENDENT UNIVERSITY CARD */}
                <div
                    ref={cardRef}
                    className="max-w-5xl mx-auto rounded-3xl bg-[#F2EEE7]/85 border border-[#141413]/15 p-6 sm:p-8 md:p-10 shadow-xs hover:border-[#141413]/25 transition-all duration-300"
                >
                    {/* Header Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#141413]/10">
                        <div>
                            <div className="text-[11px] font-editorial-mono text-[#8E8A83] uppercase tracking-wider mb-1">
                                Degree &amp; Institution
                            </div>
                            <h3 className="font-editorial-sans font-black text-2xl sm:text-3xl text-[#141413] tracking-tight">
                                {educationData.institution}
                            </h3>
                            <div className="text-base sm:text-lg font-editorial-serif italic text-[#4A4744] mt-0.5">
                                {educationData.degree}
                            </div>
                        </div>
                        <div className="sm:text-right flex flex-col sm:items-end gap-2">
                            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#FAF7F3] border border-[#141413]/10 font-editorial-mono text-xs text-[#383633] font-semibold">
                                {educationData.period}
                            </div>
                            <div className="inline-flex items-center gap-1.5 font-editorial-mono text-xs font-bold text-emerald-800 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                                <span>CGPA:</span>
                                <span>{educationData.score}</span>
                            </div>
                        </div>
                    </div>

                    {/* Relevant Coursework */}
                    <div className="pt-6">
                        <div className="text-[11px] font-editorial-mono text-[#7A756F] uppercase tracking-wider mb-3.5">
                            Relevant Computer Science Coursework
                        </div>
                        <div className="flex flex-wrap gap-2 sm:gap-2.5">
                            {educationData.coursework.map((course) => (
                                <span
                                    key={course}
                                    className="px-3.5 py-1.5 rounded-xl bg-[#FAF7F3] border border-[#141413]/10 text-xs sm:text-sm font-editorial-sans text-[#2B2927] font-medium shadow-2xs hover:border-[#141413]/20 transition-colors"
                                >
                                    {course}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;


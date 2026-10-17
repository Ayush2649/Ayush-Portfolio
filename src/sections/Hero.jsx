import React, { useRef } from "react";
import { personalInfo, heroTags } from "../constants/index.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
    const heroRef = useRef(null);
    const portraitRef = useRef(null);
    const bgTypoRef = useRef(null);
    const identityRef = useRef(null);

    useGSAP(
        () => {
            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            if (prefersReducedMotion) {
                gsap.set(
                    [
                        identityRef.current,
                        bgTypoRef.current,
                        portraitRef.current,
                        ".hero-highlight-card",
                        ".hero-fade",
                    ],
                    { opacity: 1, y: 0 }
                );
                return;
            }

            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // 1. Reveal primary identity & background typography
            tl.fromTo(
                identityRef.current,
                { y: 25, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.9 }
            )
                .fromTo(
                    bgTypoRef.current,
                    { y: 35, opacity: 0, scale: 0.98 },
                    { y: 0, opacity: 1, scale: 1, duration: 1.1 },
                    "-=0.6"
                )
                // 2. Rise of the central portrait
                .fromTo(
                    portraitRef.current,
                    { y: 50, opacity: 0, scale: 0.96 },
                    { y: 0, opacity: 1, scale: 1, duration: 1.1, ease: "power2.out" },
                    "-=0.8"
                )
                // 3. Staggered reveal of technical highlight blocks
                .fromTo(
                    ".hero-highlight-card",
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
                    "-=0.6"
                )
                // 4. Reveal bottom narrative and CTAs
                .fromTo(
                    ".hero-fade",
                    { y: 15, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.7, stagger: 0.08 },
                    "-=0.4"
                );

            // Subtle restrained mouse parallax on desktop (>= 1200px)
            const handleMouseMove = (e) => {
                if (window.innerWidth < 1200 || prefersReducedMotion) return;

                const { clientX, clientY } = e;
                const xPercent = (clientX / window.innerWidth - 0.5) * 2;
                const yPercent = (clientY / window.innerHeight - 0.5) * 2;

                gsap.to(portraitRef.current, {
                    x: xPercent * 6,
                    y: yPercent * 4,
                    duration: 1.2,
                    ease: "power1.out",
                    overwrite: "auto",
                });

                gsap.to(bgTypoRef.current, {
                    x: -xPercent * 4,
                    y: -yPercent * 3,
                    duration: 1.4,
                    ease: "power1.out",
                    overwrite: "auto",
                });
            };

            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);
        },
        { scope: heroRef }
    );

    const sweTag1 = heroTags[0];
    const sweTag2 = heroTags[1];
    const aieTag1 = heroTags[2];
    const aieTag2 = heroTags[3];

    return (
        <section
            id="about"
            ref={heroRef}
            className="relative w-full min-h-[100dvh] pt-24 md:pt-28 pb-14 md:pb-20 flex flex-col justify-between overflow-x-hidden paper-texture"
        >
            <div id="top" className="absolute top-0 left-0" />
            {/* Top Status & Coordinates Bar */}
            <div className="page-container w-full">
                <div className="flex items-center justify-between text-xs font-editorial-sans text-[#5C5955] pb-4 border-b border-[#141413]/10 hero-fade">
                    <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse shrink-0" />
                        <span className="font-medium text-[#141413]">
                            {personalInfo.availability}
                        </span>
                    </div>
                    <div className="hidden sm:flex items-center gap-3 font-editorial-mono text-[11px] text-[#7A756F]">
                        <span>{personalInfo.location}</span>
                        <span>·</span>
                        <span>{personalInfo.coordinates}</span>
                    </div>
                </div>
            </div>

            {/* Main Hero Composition Container */}
            <div className="page-container w-full my-auto flex flex-col items-center justify-center pt-5 md:pt-8 relative z-10">
                {/* 1. PRIMARY IDENTITY & DUAL ROLE HEADER */}
                <header ref={identityRef} className="text-center z-30 mb-2 md:mb-4 w-full">
                    {/* Primary Name Identity */}
                    <h1 className="font-editorial-sans font-black tracking-tight text-[#141413] text-[clamp(2.4rem,7vw,5.75rem)] leading-[0.96] uppercase">
                        {personalInfo.name}
                    </h1>

                    {/* Dual Role Badges: Communicates Software & AI Engineering identities */}
                    <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 font-editorial-sans w-full">
                        {/* Role 1: Software Engineer */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141413] text-[#FAF7F3] text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                            <span>Software Engineer</span>
                        </div>

                        <span className="hidden sm:inline text-[#8E8A83] font-editorial-serif italic text-lg sm:text-xl">
                            &amp;
                        </span>

                        {/* Role 2: AI Engineer */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F2EEE7] border border-[#141413]/15 text-[#141413] text-xs sm:text-sm font-bold tracking-wide shadow-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D95338] shrink-0" />
                            <span>AI Engineer</span>
                        </div>
                    </div>
                </header>

                {/* 2. CENTRAL VISUAL COMPOSITION:
                    - Desktop (>= 1200px): Centered Portrait flanked on the LEFT and RIGHT by the four technical cards.
                      Cards occupy the empty side spaces below the horizontal background typography without overlapping the portrait.
                    - Tablet (768px - 1199px): Centered portrait on top, 4 cards arranged in 2 columns underneath.
                    - Mobile (< 768px): Centered portrait on top, 4 cards arranged in grouped stacks underneath.
                */}
                <div className="relative w-full flex flex-col items-center justify-center min-h-[340px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[500px] xl:min-h-[530px]">
                    {/* Full-bleed Monumental Background Typography Layer */}
                    <div
                        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen pointer-events-none select-none z-0 overflow-hidden flex items-center justify-center"
                        aria-hidden="true"
                    >
                        <div
                            ref={bgTypoRef}
                            className="w-full flex flex-col items-center justify-center"
                        >
                            <div className="hero-bg-text-wrapper">
                                <span>SOFTWARE</span>
                                <span>ENGINEER</span>
                            </div>
                            <span className="font-editorial-serif italic text-[#141413]/[0.04] md:text-[#141413]/[0.06] text-[clamp(1.15rem,2.2vw,2.5rem)] leading-tight mt-1.5 sm:mt-2 text-center">
                                Applied AI &amp; Systems Architecture
                            </span>
                        </div>
                    </div>

                    {/* Flanking Hero Grid */}
                    <div className="hero-flanked-grid">
                        
                        {/* LEFT COLUMN: 2 Vertically Stacked Software Engineering Blocks */}
                        <div className="hero-flanked-left">
                            {/* Block 1: Systems & Architecture */}
                            <div className="hero-highlight-card group p-4 rounded-2xl bg-[#FAF7F3]/95 border border-[#141413]/12 hover:border-[#141413]/30 hover:bg-[#F2EEE7]/90 hover:-translate-y-0.5 transition-all duration-300 shadow-2xs backdrop-blur-xs flex flex-col justify-between text-left">
                                <div className="flex items-center gap-2 text-xs font-editorial-sans font-bold text-[#141413]">
                                    <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0 transition-transform duration-300 group-hover:scale-125" />
                                    <span className="tracking-tight">{sweTag1.label}</span>
                                </div>
                                <div className="text-[12px] font-editorial-sans text-[#6B6661] mt-1.5 leading-snug">
                                    {sweTag1.detail}
                                </div>
                            </div>

                            {/* Block 2: Real-Time Telemetry */}
                            <div className="hero-highlight-card group p-4 rounded-2xl bg-[#FAF7F3]/95 border border-[#141413]/12 hover:border-[#141413]/30 hover:bg-[#F2EEE7]/90 hover:-translate-y-0.5 transition-all duration-300 shadow-2xs backdrop-blur-xs flex flex-col justify-between text-left">
                                <div className="flex items-center gap-2 text-xs font-editorial-sans font-bold text-[#141413]">
                                    <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0 transition-transform duration-300 group-hover:scale-125" />
                                    <span className="tracking-tight">{sweTag2.label}</span>
                                </div>
                                <div className="text-[12px] font-editorial-sans text-[#6B6661] mt-1.5 leading-snug">
                                    {sweTag2.detail}
                                </div>
                            </div>
                        </div>

                        {/* CENTER COLUMN: Centered Foreground Portrait */}
                        <div
                            ref={portraitRef}
                            className="hero-flanked-portrait will-change-transform pointer-events-auto"
                        >
                            <div className="relative w-[280px] sm:w-[340px] md:w-[390px] lg:w-[430px] xl:w-[460px]">
                                <img
                                    src="/images/ayush-new-portrait.png"
                                    alt="Ayush Sahu — Software Engineer & AI Developer"
                                    className="w-full h-auto object-contain filter drop-shadow-[0_20px_35px_rgba(20,20,19,0.12)] select-none rounded-2xl"
                                    loading="eager"
                                    decoding="async"
                                />
                            </div>
                        </div>

                        {/* RIGHT COLUMN: 2 Vertically Stacked AI Engineering Blocks */}
                        <div className="hero-flanked-right">
                            {/* Block 3: Applied Deep Learning */}
                            <div className="hero-highlight-card group p-4 rounded-2xl bg-[#FAF7F3]/95 border border-[#141413]/12 hover:border-[#D95338]/30 hover:bg-[#F2EEE7]/90 hover:-translate-y-0.5 transition-all duration-300 shadow-2xs backdrop-blur-xs flex flex-col justify-between text-left">
                                <div className="flex items-center gap-2 text-xs font-editorial-sans font-bold text-[#141413]">
                                    <span className="w-2 h-2 rounded-full bg-[#D95338] shrink-0 transition-transform duration-300 group-hover:scale-125" />
                                    <span className="tracking-tight">{aieTag1.label}</span>
                                </div>
                                <div className="text-[12px] font-editorial-sans text-[#6B6661] mt-1.5 leading-snug">
                                    {aieTag1.detail}
                                </div>
                            </div>

                            {/* Block 4: Semantic AI Pipelines */}
                            <div className="hero-highlight-card group p-4 rounded-2xl bg-[#FAF7F3]/95 border border-[#141413]/12 hover:border-[#D95338]/30 hover:bg-[#F2EEE7]/90 hover:-translate-y-0.5 transition-all duration-300 shadow-2xs backdrop-blur-xs flex flex-col justify-between text-left">
                                <div className="flex items-center gap-2 text-xs font-editorial-sans font-bold text-[#141413]">
                                    <span className="w-2 h-2 rounded-full bg-[#D95338] shrink-0 transition-transform duration-300 group-hover:scale-125" />
                                    <span className="tracking-tight">{aieTag2.label}</span>
                                </div>
                                <div className="text-[12px] font-editorial-sans text-[#6B6661] mt-1.5 leading-snug">
                                    {aieTag2.detail}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* 4. BOTTOM NARRATIVE & ACTION ROW */}
            <div className="page-container w-full pt-8 md:pt-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-7 md:gap-8 items-end relative z-30 border-t border-[#141413]/10 pt-6 md:pt-8 hero-fade">
                    {/* Left Column: Editorial Manifesto Bullets */}
                    <div className="md:col-span-7 flex flex-col gap-3">
                        <div className="font-editorial-sans font-semibold text-xs text-[#7A756F] uppercase tracking-wider">
                            Engineering Philosophy &amp; Focus
                        </div>
                        <ul className="space-y-2 font-editorial-sans text-sm md:text-[15px] text-[#4A4744] leading-relaxed">
                            {personalInfo.manifesto.map((item) => (
                                <li key={item.id} className="flex items-start gap-3">
                                    <span className="font-editorial-mono text-xs font-semibold text-[#141413] mt-1 shrink-0 px-1.5 py-0.5 rounded bg-[#F2EEE7]">
                                        {item.id}
                                    </span>
                                    <div>
                                        <strong className="font-semibold text-[#141413]">
                                            {item.heading}:
                                        </strong>{" "}
                                        <span>{item.text}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Actions & Scroll Cue */}
                    <div className="md:col-span-5 flex flex-col md:items-end gap-4">
                        <div className="flex flex-wrap items-center gap-3">
                            <a
                                href="#work"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#141413] text-[#FAF7F3] text-sm font-editorial-sans font-medium hover:bg-[#333331] transition-all duration-200 shadow-sm hover:shadow-md shrink-0"
                            >
                                <span>Explore Featured Work</span>
                                <span className="text-xs">↓</span>
                            </a>
                            <a
                                href="https://github.com/Ayush2649"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full border border-[#141413]/15 text-[#141413] text-sm font-editorial-sans font-medium hover:bg-[#F2EEE7] transition-all duration-200 shrink-0"
                            >
                                <span>GitHub</span>
                                <span className="text-xs">↗</span>
                            </a>
                        </div>

                        {/* Scroll Cue */}
                        <a
                            href="#work"
                            className="inline-flex items-center gap-2 text-xs font-editorial-sans font-medium text-[#7A756F] hover:text-[#141413] transition-colors group"
                        >
                            <span>Scroll down to explore</span>
                            <span className="inline-block transition-transform duration-300 group-hover:translate-y-1">
                                ↓
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
import React, { useRef } from "react";
import { personalInfo, heroTags } from "../constants/index.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
    const heroRef = useRef(null);
    const portraitRef = useRef(null);
    const bgTypoRef = useRef(null);
    const identityRef = useRef(null);
    const leftTagsRef = useRef([]);
    const rightTagsRef = useRef([]);

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
                        ".hero-badge-item",
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
                // 3. Staggered reveal of safe flank badges
                .fromTo(
                    ".hero-badge-item",
                    { y: 15, opacity: 0 },
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

            // Subtle restrained mouse parallax on desktop (>= 1024px)
            const handleMouseMove = (e) => {
                if (window.innerWidth < 1024 || prefersReducedMotion) return;

                const { clientX, clientY } = e;
                const xPercent = (clientX / window.innerWidth - 0.5) * 2;
                const yPercent = (clientY / window.innerHeight - 0.5) * 2;

                gsap.to(portraitRef.current, {
                    x: xPercent * 7,
                    y: yPercent * 5,
                    duration: 1.2,
                    ease: "power1.out",
                    overwrite: "auto",
                });

                gsap.to(bgTypoRef.current, {
                    x: -xPercent * 5,
                    y: -yPercent * 3.5,
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

    const leftBadges = heroTags.filter((t) => t.side === "left");
    const rightBadges = heroTags.filter((t) => t.side === "right");

    return (
        <section
            id="top"
            ref={heroRef}
            className="relative w-full min-h-[100dvh] pt-24 md:pt-28 pb-14 md:pb-20 flex flex-col justify-between overflow-x-hidden paper-texture"
        >
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
            <div className="page-container w-full my-auto flex flex-col items-center justify-center pt-6 md:pt-10">
                {/* 1. PRIMARY IDENTITY & DUAL ROLE HEADER */}
                <header ref={identityRef} className="text-center z-30 mb-2 md:mb-5 w-full">
                    {/* Primary Name Identity */}
                    <h1 className="font-editorial-sans font-black tracking-tight text-[#141413] text-[clamp(2.4rem,7vw,5.75rem)] leading-[0.96] uppercase">
                        {personalInfo.name}
                    </h1>

                    {/* Prominent Dual Role Badges: Stacks vertically on mobile, side-by-side on desktop */}
                    <div className="mt-3.5 sm:mt-4 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 font-editorial-sans w-full">
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

                {/* 2. THE VISUAL STAGE */}
                <div className="relative w-full flex items-center justify-center min-h-[340px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[520px]">
                    {/* FULL-BLEED MONUMENTAL BACKGROUND TYPOGRAPHY LAYER:
                        Breaks out to 100vw across the full viewport width while keeping the visual stage aligned.
                    */}
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

                    {/* SAFE FLANK LEFT: Desktop Dedicated Positions */}
                    <div className="hidden lg:flex flex-col gap-5 w-64 xl:w-72 2xl:w-80 absolute left-0 z-20">
                        {leftBadges.map((badge, idx) => (
                            <div
                                key={badge.id}
                                ref={(el) => (leftTagsRef.current[idx] = el)}
                                className="hero-badge-item p-3.5 rounded-2xl bg-[#FAF7F3]/90 border border-[#141413]/10 shadow-xs backdrop-blur-xs hover:-translate-y-0.5 transition-transform duration-200"
                            >
                                <div className="flex items-center gap-2 text-xs font-editorial-sans font-semibold text-[#141413]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                                    <span>{badge.label}</span>
                                </div>
                                <div className="text-[12px] font-editorial-sans text-[#6B6661] mt-1 pl-3.5">
                                    {badge.detail}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* LAYER 2: Dominant Central Portrait */}
                    <div
                        ref={portraitRef}
                        className="relative z-10 flex justify-center items-end will-change-transform pointer-events-auto"
                    >
                        <div className="relative w-[260px] sm:w-[330px] md:w-[400px] lg:w-[460px] xl:w-[500px] 2xl:w-[540px]">
                            <img
                                src="/images/ayush-new-portrait.png"
                                alt="Ayush Sahu — Software Engineer & AI Developer"
                                className="w-full h-auto object-contain filter drop-shadow-[0_20px_35px_rgba(20,20,19,0.12)] select-none rounded-2xl"
                                loading="eager"
                                decoding="async"
                            />
                        </div>
                    </div>

                    {/* SAFE FLANK RIGHT: Desktop Dedicated Positions */}
                    <div className="hidden lg:flex flex-col gap-5 w-64 xl:w-72 2xl:w-80 absolute right-0 z-20">
                        {rightBadges.map((badge, idx) => (
                            <div
                                key={badge.id}
                                ref={(el) => (rightTagsRef.current[idx] = el)}
                                className="hero-badge-item p-3.5 rounded-2xl bg-[#FAF7F3]/90 border border-[#141413]/10 shadow-xs backdrop-blur-xs hover:-translate-y-0.5 transition-transform duration-200"
                            >
                                <div className="flex items-center gap-2 text-xs font-editorial-sans font-semibold text-[#141413]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#D95338] shrink-0" />
                                    <span>{badge.label}</span>
                                </div>
                                <div className="text-[12px] font-editorial-sans text-[#6B6661] mt-1 pl-3.5">
                                    {badge.detail}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* MOBILE / TABLET CHIP TRAY */}
                <div className="lg:hidden w-full max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-5 z-20">
                    {heroTags.map((badge) => (
                        <div
                            key={badge.id}
                            className="hero-badge-item p-3 rounded-xl bg-[#F2EEE7]/80 border border-[#141413]/10 text-left"
                        >
                            <div className="text-xs font-editorial-sans font-semibold text-[#141413] flex items-center gap-2">
                                <span
                                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                                        badge.side === "left"
                                            ? "bg-emerald-600"
                                            : "bg-[#D95338]"
                                    }`}
                                />
                                <span>{badge.label}</span>
                            </div>
                            <div className="text-[11px] font-editorial-sans text-[#6B6661] mt-0.5 pl-3.5">
                                {badge.detail}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. BOTTOM NARRATIVE & ACTION ROW */}
            <div className="page-container w-full pt-8 md:pt-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-7 md:gap-8 items-end relative z-30 border-t border-[#141413]/10 pt-6 md:pt-8 hero-fade">
                    {/* Left Column: Human, Editorial Manifesto Bullets */}
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
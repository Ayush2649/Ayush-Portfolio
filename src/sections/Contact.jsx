import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { personalInfo, socialLinks } from "../constants/index.js";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(personalInfo.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    useGSAP(
        () => {
            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            if (prefersReducedMotion) {
                gsap.set(contentRef.current, { opacity: 1, y: 0 });
                return;
            }

            if (contentRef.current) {
                gsap.from(contentRef.current, {
                    y: 25,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: contentRef.current,
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
            id="contact"
            ref={sectionRef}
            className="relative w-full pt-16 md:pt-24 lg:pt-28 pb-12 paper-texture border-t border-[#141413]/10"
        >
            <div className="page-container w-full">
                <div ref={contentRef} className="max-w-5xl mx-auto">
                    {/* SECTION HEADER */}
                    <div className="mb-10 md:mb-14 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141413]/5 border border-[#141413]/10 text-xs font-editorial-mono text-[#5C5955] uppercase tracking-wider mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                            <span>06 / Direct Engagement</span>
                        </div>
                        <h2 className="font-editorial-sans font-black text-3.5xl sm:text-5xl md:text-6xl lg:text-7xl text-[#141413] tracking-tight uppercase leading-[0.95]">
                            Let&apos;s Build Together.
                        </h2>
                        <p className="font-editorial-serif italic text-lg sm:text-xl md:text-2xl text-[#5C5955] mt-3 max-w-2xl">
                            Available for high-impact Software Engineering and AI Engineering opportunities.
                        </p>
                    </div>

                    {/* CONTACT INTERACTION CARD */}
                    <div className="rounded-3xl bg-[#F2EEE7]/85 border border-[#141413]/15 p-7 sm:p-10 md:p-12 mb-12 shadow-xs">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            {/* Left: Email CTA */}
                            <div className="lg:col-span-7 space-y-4">
                                <div className="font-editorial-mono text-xs uppercase tracking-wider text-[#8E8A83]">
                                    Primary Communication Channel
                                </div>
                                <div className="break-all">
                                    <a
                                        href={`mailto:${personalInfo.email}`}
                                        className="font-editorial-sans font-bold text-lg min-[380px]:text-xl sm:text-2xl md:text-4xl text-[#141413] hover:text-[#D95338] transition-colors underline decoration-[#141413]/30 hover:decoration-[#D95338] underline-offset-8"
                                    >
                                        {personalInfo.email}
                                    </a>
                                </div>
                                <div className="pt-2 flex flex-wrap items-center gap-3">
                                    <button
                                        type="button"
                                        onClick={handleCopyEmail}
                                        className="btn-primary group text-xs sm:text-sm"
                                    >
                                        {copied ? (
                                            <>
                                                <svg
                                                    className="w-3.5 h-3.5 text-emerald-300"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2.5"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                <span>Copied to Clipboard!</span>
                                            </>
                                        ) : (
                                            <>
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
                                                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                                                    />
                                                </svg>
                                                <span>Copy Email Address</span>
                                            </>
                                        )}
                                    </button>
                                    <a
                                        href={`mailto:${personalInfo.email}`}
                                        className="btn-secondary group text-xs sm:text-sm"
                                    >
                                        <span>Open in Mail Client</span>
                                        <span className="arrow-icon text-[10px]">↗</span>
                                    </a>
                                </div>
                            </div>

                            {/* Right: Availability & Location Pill */}
                            <div className="lg:col-span-5 rounded-2xl bg-[#FAF7F3]/90 border border-[#141413]/10 p-5 space-y-3.5">
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                                    <span className="font-editorial-sans font-bold text-xs uppercase tracking-wider text-[#141413]">
                                        Current Status
                                    </span>
                                </div>
                                <p className="font-editorial-sans text-xs text-[#5C5955] leading-relaxed">
                                    Actively interviewing for full-time Software Engineer and AI Engineer roles. Open to Mumbai-based and remote engineering teams.
                                </p>
                                <div className="pt-2 border-t border-[#141413]/10 flex items-center justify-between text-[11px] font-editorial-mono text-[#7A756F]">
                                    <span>Location</span>
                                    <span className="text-[#141413] font-medium">{personalInfo.location}</span>
                                </div>
                                <div className="flex items-center justify-between text-[11px] font-editorial-mono text-[#7A756F]">
                                    <span>Focus</span>
                                    <span className="text-[#141413] font-medium">Full-Stack &amp; Applied AI</span>
                                </div>
                            </div>
                        </div>

                        {/* Social / Profiles Grid */}
                        <div className="mt-8 pt-8 border-t border-[#141413]/10 grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {socialLinks.map(({ name, url, handle }) => (
                                <a
                                    key={name}
                                    href={url}
                                    target={name !== "Email" ? "_blank" : undefined}
                                    rel={name !== "Email" ? "noopener noreferrer" : undefined}
                                    className="p-3.5 rounded-xl bg-[#FAF7F3] border border-[#141413]/10 hover:border-[#141413]/30 hover:bg-[#FAF7F3] hover:-translate-y-0.5 transition-all duration-200 group flex flex-col justify-between"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="font-editorial-sans font-semibold text-xs text-[#141413] group-hover:text-[#D95338] transition-colors">
                                            {name}
                                        </span>
                                        <span className="arrow-icon text-xs text-[#8E8A83]">
                                            ↗
                                        </span>
                                    </div>
                                    <span className="font-editorial-mono text-[10px] text-[#7A756F] truncate mt-1">
                                        {handle}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* EDITORIAL FOOTER */}
                    <footer className="pt-8 pb-4 border-t border-[#141413]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-editorial-sans text-[#7A756F]">
                        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
                            <span className="font-medium text-[#141413]">
                                Ayush Sahu · {new Date().getFullYear()}
                            </span>
                            <span className="hidden sm:inline">·</span>
                            <span>Architected with React, Vite, Tailwind CSS &amp; GSAP</span>
                        </div>
                        <a
                            href="#top"
                            className="btn-secondary group text-xs py-1.5 px-3.5 font-editorial-mono"
                        >
                            <span>Back to Top</span>
                            <span className="arrow-icon text-xs">↑</span>
                        </a>
                    </footer>
                </div>
            </div>
        </section>
    );
};

export default Contact;

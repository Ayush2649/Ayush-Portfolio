import React from "react";

/**
 * SCENE 4 — FULL ENGINEERING ARCHITECTURE
 * Highlights SATAT's production architecture:
 * - Client: Next.js 14 App Router, TypeScript, Tailwind, Radix UI
 * - Server & API: Route handlers & Server Actions
 * - Security: NextAuth-to-Firebase custom-token bridge + granular Firestore rules
 * - Database: Cloud Firestore with user-isolated collections
 * - Multi-LLM Engine: Gemini (Vision) + Groq (Voice & Chat) + DeepSeek (Nutrition)
 * - Telemetry Ingestion: Health Auto Export webhook for workouts
 */
const SceneArchitecture = () => {
    return (
        <div className="w-full flex flex-col items-center">
            {/* Header Badge */}
            <div className="flex items-center gap-2 text-xs font-editorial-mono text-[#5C5955] mb-6">
                <span className="w-2 h-2 rounded-full bg-[#3A6351]" />
                <span className="uppercase tracking-wider">Engineering Architecture &amp; Security</span>
            </div>

            {/* Architecture Diagram Container */}
            <div className="relative w-full max-w-4xl rounded-2xl bg-[#FAF7F3] border border-[#141413]/12 p-6 sm:p-8 shadow-sm">
                
                {/* 4 Architectural Tiers */}
                <div className="space-y-6">
                    
                    {/* Tier 1: Client Application Layer */}
                    <div className="p-4 rounded-xl bg-[#F2EEE7] border border-[#141413]/10">
                        <div className="flex items-center justify-between text-xs font-editorial-mono text-[#5C5955] pb-2 border-b border-[#141413]/8 mb-3">
                            <span className="font-bold text-[#141413]">TIER 01 · CLIENT APPLICATION</span>
                            <span className="text-[11px] text-[#3A6351]">Next.js 14 App Router</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-editorial-sans">
                            <div className="p-2.5 rounded-lg bg-[#FAF7F3] border border-[#141413]/8">
                                <span className="text-[10px] font-editorial-mono text-[#7A756F]">FRAMEWORK</span>
                                <div className="font-bold text-[#141413] mt-0.5">Next.js 14 + React 18</div>
                            </div>
                            <div className="p-2.5 rounded-lg bg-[#FAF7F3] border border-[#141413]/8">
                                <span className="text-[10px] font-editorial-mono text-[#7A756F]">TYPE SAFETY</span>
                                <div className="font-bold text-[#141413] mt-0.5">TypeScript 5 + Zod</div>
                            </div>
                            <div className="p-2.5 rounded-lg bg-[#FAF7F3] border border-[#141413]/8">
                                <span className="text-[10px] font-editorial-mono text-[#7A756F]">UI &amp; PRIMITIVES</span>
                                <div className="font-bold text-[#141413] mt-0.5">Tailwind + Radix UI</div>
                            </div>
                            <div className="p-2.5 rounded-lg bg-[#FAF7F3] border border-[#141413]/8">
                                <span className="text-[10px] font-editorial-mono text-[#7A756F]">NOTIFICATIONS</span>
                                <div className="font-bold text-[#141413] mt-0.5">Web Push API + PWA</div>
                            </div>
                        </div>
                    </div>

                    {/* Connector Arrow */}
                    <div className="flex justify-center text-xs font-editorial-mono text-[#8E8A83]">
                        <span>↓ Authenticated Requests &amp; Route Handlers ↓</span>
                    </div>

                    {/* Tier 2: Authentication Bridge & Security Layer */}
                    <div className="p-4 rounded-xl bg-[#141413] text-[#FAF7F3] shadow-sm">
                        <div className="flex items-center justify-between text-xs font-editorial-mono text-[#8E8A83] pb-2 border-b border-[#FAF7F3]/15 mb-3">
                            <span className="font-bold text-amber-400">TIER 02 · SECURITY &amp; AUTHENTICATION BRIDGE</span>
                            <span>Custom Token Minting</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-editorial-sans">
                            <div className="p-3 rounded-lg bg-[#212120] border border-[#FAF7F3]/10">
                                <div className="text-[10px] font-editorial-mono text-emerald-400">NextAuth → Firebase Token Bridge</div>
                                <div className="text-sm font-bold text-[#FAF7F3] mt-1">Custom Token Exchange</div>
                                <p className="text-[11px] text-[#A6A29A] mt-1">
                                    NextAuth session triggers secure custom Firebase token generation, authorizing client-side Firestore listeners.
                                </p>
                            </div>
                            <div className="p-3 rounded-lg bg-[#212120] border border-[#FAF7F3]/10">
                                <div className="text-[10px] font-editorial-mono text-emerald-400">Granular Security Rules</div>
                                <div className="text-sm font-bold text-[#FAF7F3] mt-1">User-Scoped Firestore Access</div>
                                <p className="text-[11px] text-[#A6A29A] mt-1">
                                    Zero cross-user data leakage with automated unit testing via Firebase Emulator &amp; Vitest.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Connector Arrow */}
                    <div className="flex justify-center text-xs font-editorial-mono text-[#8E8A83]">
                        <span>↓ Ingested Streams &amp; Storage ↓</span>
                    </div>

                    {/* Tier 3: Storage & Specialized AI Model Engine */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        
                        {/* Storage & Telemetry */}
                        <div className="p-4 rounded-xl bg-[#F2EEE7] border border-[#141413]/10 flex flex-col justify-between">
                            <div>
                                <div className="text-[10px] font-editorial-mono text-[#7A756F] uppercase">TIER 03A · DATA PERSISTENCE</div>
                                <div className="text-sm font-editorial-sans font-bold text-[#141413] mt-1">
                                    Cloud Firestore &amp; Telemetry
                                </div>
                                <ul className="space-y-1.5 text-xs font-editorial-sans text-[#4A4744] mt-2.5">
                                    <li className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#3A6351]" />
                                        <span>User-scoped collections: Tasks, Meals, Workouts</span>
                                    </li>
                                    <li className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#3A6351]" />
                                        <span>Health Auto Export webhook integration</span>
                                    </li>
                                    <li className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#3A6351]" />
                                        <span>7-day rolling window temporal resolution</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Multi-LLM Engine */}
                        <div className="p-4 rounded-xl bg-[#F2EEE7] border border-[#141413]/10 flex flex-col justify-between">
                            <div>
                                <div className="text-[10px] font-editorial-mono text-[#7A756F] uppercase">TIER 03B · SPECIALIZED AI ENGINE</div>
                                <div className="text-sm font-editorial-sans font-bold text-[#141413] mt-1">
                                    Multi-Model Routing
                                </div>
                                <ul className="space-y-1.5 text-xs font-editorial-sans text-[#4A4744] mt-2.5">
                                    <li className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#3A6351]" />
                                        <span><strong>Gemini 2.0:</strong> Meal image multimodal detection</span>
                                    </li>
                                    <li className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#141413]" />
                                        <span><strong>Groq SDK:</strong> Sub-second voice &amp; conversational chat</span>
                                    </li>
                                    <li className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#D95338]" />
                                        <span><strong>DeepSeek:</strong> Nutritional macro reasoning &amp; estimation</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default SceneArchitecture;

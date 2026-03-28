

import React from "react";
import { MACHINES } from "../../data/machines";
import { QUALITY_PROMISES } from "../../utils/constants";

const GlossyStyles = () => (
    <style>{`
        @keyframes fireFlicker {
            0%   { transform: scale(1)    rotate(-3deg); opacity: 1;    filter: brightness(1); }
            25%  { transform: scale(1.15) rotate(2deg);  opacity: 0.85; filter: brightness(1.4); }
            50%  { transform: scale(0.95) rotate(-2deg); opacity: 1;    filter: brightness(0.9); }
            75%  { transform: scale(1.1)  rotate(3deg);  opacity: 0.9;  filter: brightness(1.3); }
            100% { transform: scale(1)    rotate(-3deg); opacity: 1;    filter: brightness(1); }
        }
        .fire-flicker {
            display: inline-block;
            animation: fireFlicker 0.8s ease-in-out infinite;
            transform-origin: bottom center;
        }
        .machine-card:hover {
            border-color: rgba(212,175,55,0.35) !important;
            transform: translateY(-2px);
            transition: all 0.2s ease;
        }
        .promise-card:hover {
            border-color: rgba(124,58,237,0.4) !important;
            transform: translateY(-2px);
            transition: all 0.2s ease;
        }
    `}</style>
);

export const About = () => {
    return (
        <div style={{ paddingTop: 80, background: "#0e0818", minHeight: "100vh" }}>
            <GlossyStyles />

            {/* Hero Section */}
            <section
                style={{
                    background: "linear-gradient(160deg, #0e0818 0%, #1a0f2e 45%, #0a0510 100%)",
                    position: "relative",
                    overflow: "hidden",
                }}
                className="py-16 md:py-20"
            >
                {/* Glossy top sheen */}
                <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: "50%",
                    background: "linear-gradient(180deg, rgba(160,100,255,0.07) 0%, transparent 100%)",
                    pointerEvents: "none",
                }} />
                {/* Gold radial glow top-right */}
                <div style={{
                    position: "absolute", top: -100, right: -100, width: 400, height: 400,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)",
                    pointerEvents: "none",
                }} />
                {/* Purple radial glow bottom-left */}
                <div style={{
                    position: "absolute", bottom: -80, left: -80, width: 320, height: 320,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
                    pointerEvents: "none",
                }} />

                <div className="max-w-7xl mx-auto px-4" style={{ position: "relative", zIndex: 1 }}>
                    {/* Badge */}
                    <div style={{
                        display: "inline-block",
                        background: "rgba(160,100,255,0.15)",
                        border: "1px solid rgba(160,100,255,0.35)",
                        color: "#C084FC",
                        padding: "6px 16px",
                        borderRadius: 100,
                        fontSize: 12,
                        fontFamily: "sans-serif",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        marginBottom: 24,
                    }}>
                        Our Story
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h1 style={{
                                fontFamily: "'Georgia', serif",
                                fontSize: "clamp(36px, 5vw, 48px)",
                                fontWeight: 900,
                                color: "white",
                                lineHeight: 1.1,
                                marginBottom: 20,
                            }}>
                                Printing with
                                <br />
                                <span style={{ color: "#ffc400" }}>Passion</span> Since 2014
                            </h1>
                            <p style={{
                                color: "rgba(200,170,255,0.55)",
                                fontSize: 16,
                                lineHeight: 1.8,
                                marginBottom: 20,
                                fontFamily: "sans-serif",
                            }}>
                                FlexPrint started as a small shop in Pune with a single printer and a big dream. Today, we're one of the
                                region's most trusted flex printing presses — serving advertising agencies, retail brands, event
                                organizers, and small businesses alike.
                            </p>
                            <p style={{
                                color: "rgba(200,170,255,0.55)",
                                fontSize: 16,
                                lineHeight: 1.8,
                                fontFamily: "sans-serif",
                            }}>
                                Our commitment: no shortcuts on quality. Every print that leaves our facility is inspected, color-matched,
                                and packaged with care.
                            </p>
                        </div>

                        {/* Quote Card */}
                        <div style={{
                            background: "rgba(124,58,237,0.1)",
                            border: "1px solid rgba(124,58,237,0.22)",
                            borderRadius: 10,
                            padding: 32,
                            position: "relative",
                            overflow: "hidden",
                        }}>
                            {/* Glossy sheen */}
                            <div style={{
                                position: "absolute", top: 0, left: 0, right: 0, height: "45%",
                                background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)",
                                borderRadius: "10px 10px 0 0",
                                pointerEvents: "none",
                            }} />
                            {/* Gold corner glow */}
                            <div style={{
                                position: "absolute", top: 0, right: 0, width: 80, height: 80,
                                background: "radial-gradient(circle at top right, rgba(212,175,55,0.18) 0%, transparent 70%)",
                                pointerEvents: "none",
                            }} />
                            <div style={{
                                color: "#ffc400",
                                fontSize: 56,
                                fontFamily: "'Georgia', serif",
                                fontWeight: 900,
                                lineHeight: 1,
                            }}>
                                "
                            </div>
                            <p style={{
                                color: "rgba(235,220,255,0.9)",
                                fontSize: 18,
                                lineHeight: 1.7,
                                fontFamily: "'Georgia', serif",
                                fontStyle: "italic",
                                margin: "16px 0",
                            }}>
                                We don't just print banners. We print statements — for brands that want to be seen, remembered, and
                                trusted.
                            </p>
                            <div style={{
                                color: "#ffc400",
                                fontSize: 13,
                                fontFamily: "sans-serif",
                                fontWeight: 700,
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                            }}>
                                — Founder, FlexPrint Pune
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Machinery Section */}
            <section
                style={{
                    background: "linear-gradient(180deg, #0a0510 0%, #0e0818 100%)",
                    position: "relative",
                    overflow: "hidden",
                }}
                className="py-20"
            >
                {/* Center purple ambient glow */}
                <div style={{
                    position: "absolute", top: "50%", left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 700, height: 700, borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)",
                    pointerEvents: "none",
                }} />

                <div className="max-w-7xl mx-auto px-4" style={{ position: "relative", zIndex: 1 }}>
                    <h2 style={{
                        fontFamily: "'Georgia', serif",
                        fontSize: 36,
                        fontWeight: 900,
                        color: "white",
                        textAlign: "center",
                        marginBottom: 8,
                    }}>
                        Our <span style={{ color: "#ffc400" }}>Machinery</span>
                    </h2>
                    <p style={{
                        color: "rgba(192,132,252,0.5)",
                        textAlign: "center",
                        marginBottom: 48,
                        fontFamily: "sans-serif",
                        fontSize: 15,
                    }}>
                        State-of-the-art equipment for every printing need.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {MACHINES.map((machine, index) => (
                            <div
                                key={index}
                                className="machine-card"
                                style={{
                                    background: "rgba(124,58,237,0.08)",
                                    border: "1px solid rgba(124,58,237,0.2)",
                                    borderRadius: 10,
                                    padding: 28,
                                    display: "flex",
                                    gap: 20,
                                    alignItems: "flex-start",
                                    position: "relative",
                                    overflow: "hidden",
                                    transition: "all 0.2s ease",
                                }}
                            >
                                {/* Glossy sheen */}
                                <div style={{
                                    position: "absolute", top: 0, left: 0, right: 0, height: "45%",
                                    background: "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)",
                                    borderRadius: "10px 10px 0 0",
                                    pointerEvents: "none",
                                }} />
                                {/* Gold corner accent */}
                                <div style={{
                                    position: "absolute", top: 0, right: 0, width: 60, height: 60,
                                    background: "radial-gradient(circle at top right, rgba(212,175,55,0.14) 0%, transparent 70%)",
                                    pointerEvents: "none",
                                }} />

                                {/* Icon box */}
                                <div style={{
                                    background: "rgba(212,175,55,0.12)",
                                    border: "1px solid rgba(212,175,55,0.25)",
                                    width: 52,
                                    height: 52,
                                    borderRadius: 10,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                    fontSize: 22,
                                    position: "relative",
                                    overflow: "hidden",
                                }}>
                                    <div style={{
                                        position: "absolute", top: 0, left: 0, right: 0, height: "50%",
                                        background: "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)",
                                        pointerEvents: "none",
                                    }} />
                                    {machine.icon}
                                </div>

                                <div style={{ position: "relative", zIndex: 1 }}>
                                    <div style={{
                                        color: "white",
                                        fontFamily: "'Georgia', serif",
                                        fontSize: 20,
                                        fontWeight: 700,
                                        marginBottom: 4,
                                    }}>
                                        {machine.name}
                                    </div>
                                    <div style={{
                                        color: "#ffc400",
                                        fontFamily: "sans-serif",
                                        fontSize: 12,
                                        fontWeight: 700,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.1em",
                                        marginBottom: 8,
                                    }}>
                                        {machine.type}
                                    </div>
                                    <div style={{
                                        color: "rgba(192,132,252,0.6)",
                                        fontFamily: "sans-serif",
                                        fontSize: 14,
                                    }}>
                                        {machine.spec}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Promises */}
            <section
                style={{
                    background: "linear-gradient(135deg, #0e0818 0%, #1a0f2e 40%, #2d1a4a 65%, #1a1200 85%, #0d0900 100%)",
                    position: "relative",
                    overflow: "hidden",
                }}
                className="py-20"
            >
                {/* Gold glow right */}
                <div style={{
                    position: "absolute", top: "50%", right: -80,
                    transform: "translateY(-50%)",
                    width: 320, height: 320, borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)",
                    pointerEvents: "none",
                }} />
                {/* Purple glow left */}
                <div style={{
                    position: "absolute", top: "50%", left: -80,
                    transform: "translateY(-50%)",
                    width: 320, height: 320, borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
                    pointerEvents: "none",
                }} />

                <div className="max-w-5xl mx-auto px-4 text-center" style={{ position: "relative", zIndex: 1 }}>
                    <h2 style={{
                        fontFamily: "'Georgia', serif",
                        fontSize: 36,
                        fontWeight: 900,
                        color: "white",
                        marginBottom: 48,
                    }}>
                        Our <span style={{ color: "#ffc400" }}>Quality Promise</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {QUALITY_PROMISES.map((promise, index) => (
                            <div
                                key={index}
                                className="promise-card"
                                style={{
                                    background: "rgba(124,58,237,0.1)",
                                    border: "1px solid rgba(124,58,237,0.2)",
                                    borderRadius: 10,
                                    padding: 36,
                                    position: "relative",
                                    overflow: "hidden",
                                    transition: "all 0.2s ease",
                                }}
                            >
                                {/* Glossy sheen */}
                                <div style={{
                                    position: "absolute", top: 0, left: 0, right: 0, height: "45%",
                                    background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)",
                                    borderRadius: "10px 10px 0 0",
                                    pointerEvents: "none",
                                }} />
                                {/* Gold corner accent */}
                                <div style={{
                                    position: "absolute", top: 0, right: 0, width: 70, height: 70,
                                    background: "radial-gradient(circle at top right, rgba(212,175,55,0.15) 0%, transparent 70%)",
                                    pointerEvents: "none",
                                }} />

                                <div style={{ fontSize: 40, marginBottom: 20, position: "relative", zIndex: 1 }}>
                                    {promise.icon}
                                </div>
                                <div style={{
                                    color: "#ffc400",
                                    fontFamily: "'Georgia', serif",
                                    fontSize: 20,
                                    fontWeight: 700,
                                    marginBottom: 12,
                                    position: "relative", zIndex: 1,
                                }}>
                                    {promise.title}
                                </div>
                                <div style={{
                                    color: "rgba(192,132,252,0.6)",
                                    fontFamily: "sans-serif",
                                    fontSize: 14,
                                    lineHeight: 1.7,
                                    position: "relative", zIndex: 1,
                                }}>
                                    {promise.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
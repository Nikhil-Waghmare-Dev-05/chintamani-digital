import React from "react";
import { MACHINES } from "../../data/machines";
import { QUALITY_PROMISES } from "../../utils/constants";

export const About = () => {
    return (
        <div style={{ paddingTop: 80, background: "#0a0a0a", minHeight: "100vh" }}>
            {/* Hero Section */}
            <section style={{ background: "linear-gradient(to bottom, #1a0a00, #0a0a0a)" }} className="py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div
                        style={{
                            display: "inline-block",
                            background: "rgba(255,107,53,0.15)",
                            border: "1px solid rgba(255,107,53,0.3)",
                            color: "#FF6B35",
                            padding: "6px 16px",
                            borderRadius: 100,
                            fontSize: 12,
                            fontFamily: "sans-serif",
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            marginBottom: 24,
                        }}
                    >
                        Our Story
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h1
                                style={{
                                    fontFamily: "'Georgia', serif",
                                    fontSize: "clamp(36px, 5vw, 48px)",
                                    fontWeight: 900,
                                    color: "white",
                                    lineHeight: 1.1,
                                    marginBottom: 20,
                                }}
                            >
                                Printing with
                                <br />
                                <span style={{ color: "#FF6B35" }}>Passion</span> Since 2014
                            </h1>
                            <p
                                style={{
                                    color: "#999",
                                    fontSize: 16,
                                    lineHeight: 1.8,
                                    marginBottom: 20,
                                    fontFamily: "sans-serif",
                                }}
                            >
                                FlexPrint started as a small shop in Pune with a single printer and a big dream. Today, we're one of the
                                region's most trusted flex printing presses — serving advertising agencies, retail brands, event
                                organizers, and small businesses alike.
                            </p>
                            <p
                                style={{
                                    color: "#999",
                                    fontSize: 16,
                                    lineHeight: 1.8,
                                    fontFamily: "sans-serif",
                                }}
                            >
                                Our commitment: no shortcuts on quality. Every print that leaves our facility is inspected, color-matched,
                                and packaged with care.
                            </p>
                        </div>

                        <div
                            style={{
                                background: "#1a1a1a",
                                border: "1px solid #2a2a2a",
                                borderRadius: 8,
                                padding: 32,
                            }}
                        >
                            <div style={{ color: "#FF6B35", fontSize: 48, fontFamily: "'Georgia', serif", fontWeight: 900, lineHeight: 1 }}>
                                "
                            </div>
                            <p
                                style={{
                                    color: "#ccc",
                                    fontSize: 18,
                                    lineHeight: 1.7,
                                    fontFamily: "'Georgia', serif",
                                    fontStyle: "italic",
                                    margin: "16px 0",
                                }}
                            >
                                We don't just print banners. We print statements — for brands that want to be seen, remembered, and
                                trusted.
                            </p>
                            <div
                                style={{
                                    color: "#FF6B35",
                                    fontSize: 13,
                                    fontFamily: "sans-serif",
                                    fontWeight: 700,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em",
                                }}
                            >
                                — Founder, FlexPrint Pune
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Machinery Section */}
            <section style={{ background: "#0f0f0f" }} className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2
                        style={{
                            fontFamily: "'Georgia', serif",
                            fontSize: 36,
                            fontWeight: 900,
                            color: "white",
                            textAlign: "center",
                            marginBottom: 8,
                        }}
                    >
                        Our <span style={{ color: "#FF6B35" }}>Machinery</span>
                    </h2>
                    <p
                        style={{
                            color: "#666",
                            textAlign: "center",
                            marginBottom: 48,
                            fontFamily: "sans-serif",
                            fontSize: 15,
                        }}
                    >
                        State-of-the-art equipment for every printing need.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {MACHINES.map((machine, index) => (
                            <div
                                key={index}
                                style={{
                                    background: "#1a1a1a",
                                    border: "1px solid #2a2a2a",
                                    borderRadius: 8,
                                    padding: 28,
                                    display: "flex",
                                    gap: 20,
                                    alignItems: "flex-start",
                                }}
                            >
                                <div
                                    style={{
                                        background: "rgba(255,107,53,0.15)",
                                        width: 48,
                                        height: 48,
                                        borderRadius: 8,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                        fontSize: 22,
                                    }}
                                >
                                    {machine.icon}
                                </div>
                                <div>
                                    <div
                                        style={{
                                            color: "white",
                                            fontFamily: "'Georgia', serif",
                                            fontSize: 20,
                                            fontWeight: 700,
                                            marginBottom: 4,
                                        }}
                                    >
                                        {machine.name}
                                    </div>
                                    <div
                                        style={{
                                            color: "#FF6B35",
                                            fontFamily: "sans-serif",
                                            fontSize: 12,
                                            fontWeight: 700,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.1em",
                                            marginBottom: 8,
                                        }}
                                    >
                                        {machine.type}
                                    </div>
                                    <div style={{ color: "#777", fontFamily: "sans-serif", fontSize: 14 }}>{machine.spec}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Promises */}
            <section style={{ background: "#0a0a0a" }} className="py-20">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2
                        style={{
                            fontFamily: "'Georgia', serif",
                            fontSize: 36,
                            fontWeight: 900,
                            color: "white",
                            marginBottom: 48,
                        }}
                    >
                        Our <span style={{ color: "#FF6B35" }}>Quality Promise</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {QUALITY_PROMISES.map((promise, index) => (
                            <div
                                key={index}
                                style={{
                                    background: "#1a1a1a",
                                    border: "1px solid #2a2a2a",
                                    borderRadius: 8,
                                    padding: 36,
                                }}
                            >
                                <div style={{ fontSize: 40, marginBottom: 20 }}>{promise.icon}</div>
                                <div
                                    style={{
                                        color: "white",
                                        fontFamily: "'Georgia', serif",
                                        fontSize: 20,
                                        fontWeight: 700,
                                        marginBottom: 12,
                                    }}
                                >
                                    {promise.title}
                                </div>
                                <div
                                    style={{
                                        color: "#777",
                                        fontFamily: "sans-serif",
                                        fontSize: 14,
                                        lineHeight: 1.7,
                                    }}
                                >
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
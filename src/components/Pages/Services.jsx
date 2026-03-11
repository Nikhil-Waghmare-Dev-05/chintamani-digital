import React from "react";
import { Link } from "../../components/common/Link";
import { PrintIllustration } from "../../components/common/PrintIllustration";
import { SERVICES } from "../../data/services";

export const Services = () => {
    return (
        <div style={{ paddingTop: 80, background: "#0a0a0a", minHeight: "100vh" }}>
            {/* Header */}
            <section style={{ background: "linear-gradient(to bottom, #1a0a00, #0a0a0a)" }} className="py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
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
                        What We Print
                    </div>
                    <h1
                        style={{
                            fontFamily: "'Georgia', serif",
                            fontSize: "clamp(36px, 5vw, 48px)",
                            fontWeight: 900,
                            color: "white",
                            marginBottom: 16,
                        }}
                    >
                        Our <span style={{ color: "#FF6B35" }}>Services</span>
                    </h1>
                    <p
                        style={{
                            color: "#888",
                            fontSize: 16,
                            fontFamily: "sans-serif",
                            maxWidth: 560,
                            margin: "0 auto",
                        }}
                    >
                        From star flex to specialty media — we print it all with precision and speed.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8">
                        {SERVICES.map((service, index) => (
                            <div
                                key={index}
                                style={{ background: "#111", border: "1px solid #222", borderRadius: 12, overflow: "hidden" }}
                                className="hover:border-primary/30 transition-colors"
                            >
                                <div style={{ padding: "0 0 0 0" }}>
                                    <PrintIllustration type={service.type} className="w-full" />
                                </div>
                                <div style={{ padding: 28 }}>
                                    <div className="flex items-center justify-between mb-3">
                                        <h3
                                            style={{
                                                fontFamily: "'Georgia', serif",
                                                fontSize: 24,
                                                fontWeight: 700,
                                                color: "white",
                                            }}
                                        >
                                            {service.name}
                                        </h3>
                                        <span
                                            style={{
                                                background: `${service.tagColor}22`,
                                                color: service.tagColor,
                                                padding: "4px 12px",
                                                borderRadius: 100,
                                                fontSize: 11,
                                                fontFamily: "sans-serif",
                                                fontWeight: 700,
                                                letterSpacing: "0.08em",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            {service.tag}
                                        </span>
                                    </div>
                                    <p
                                        style={{
                                            color: "#888",
                                            fontFamily: "sans-serif",
                                            fontSize: 14,
                                            lineHeight: 1.7,
                                            marginBottom: 16,
                                        }}
                                    >
                                        {service.description}
                                    </p>
                                    <div style={{ marginBottom: 20 }}>
                                        <div
                                            style={{
                                                color: "#555",
                                                fontFamily: "sans-serif",
                                                fontSize: 11,
                                                textTransform: "uppercase",
                                                letterSpacing: "0.1em",
                                                marginBottom: 10,
                                            }}
                                        >
                                            Common uses
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {service.uses.map((use, j) => (
                                                <span
                                                    key={j}
                                                    style={{
                                                        background: "#1a1a1a",
                                                        color: "#aaa",
                                                        padding: "4px 12px",
                                                        borderRadius: 4,
                                                        fontSize: 12,
                                                        fontFamily: "sans-serif",
                                                        border: "1px solid #2a2a2a",
                                                    }}
                                                >
                                                    {use}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span style={{ color: "#555", fontSize: 12, fontFamily: "sans-serif" }}>Starting from </span>
                                            <span
                                                style={{
                                                    color: "#FF6B35",
                                                    fontSize: 22,
                                                    fontWeight: 900,
                                                    fontFamily: "'Georgia', serif",
                                                }}
                                            >
                                                {service.priceFrom}
                                            </span>
                                        </div>
                                        <Link
                                            to="#order"
                                            style={{
                                                background: "#FF6B35",
                                                color: "white",
                                                padding: "10px 24px",
                                                borderRadius: 4,
                                                textDecoration: "none",
                                                fontFamily: "sans-serif",
                                                fontWeight: 700,
                                                fontSize: 13,
                                                letterSpacing: "0.06em",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            Order Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
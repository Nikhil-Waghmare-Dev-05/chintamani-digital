import React from "react";
import { Link } from "../../components/common/Link";
import { PrintIllustration } from "../../components/common/PrintIllustration";
import { STATS, FEATURES } from "../../utils/constants";

export const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section
                style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a0a00 100%)" }}
                className="min-h-screen flex items-center pt-20"
            >
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in">
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
                                🔥 Latur's #1 Flex Printing Press
                            </div>

                            <h1
                                style={{
                                    fontFamily: "'Georgia', serif",
                                    fontSize: "clamp(36px, 5vw, 64px)",
                                    fontWeight: 900,
                                    color: "white",
                                    lineHeight: 1.1,
                                    marginBottom: 20,
                                }}
                            >
                                Print That
                                <br />
                                <span style={{ color: "#FF6B35" }}>Commands</span>
                                <br />
                                Attention
                            </h1>

                            <p
                                style={{
                                    color: "#999",
                                    fontSize: 16,
                                    lineHeight: 1.7,
                                    marginBottom: 32,
                                    fontFamily: "sans-serif",
                                    maxWidth: 480,
                                }}
                            >
                                From massive outdoor banners to premium indoor displays — we bring your brand to life with vivid,
                                durable, and professional flex printing solutions.
                            </p>

                            <div className="flex gap-4 flex-wrap">
                                <Link
                                    to="#order"
                                    style={{
                                        background: "#FF6B35",
                                        color: "white",
                                        padding: "14px 32px",
                                        borderRadius: 4,
                                        fontFamily: "sans-serif",
                                        fontWeight: 700,
                                        textDecoration: "none",
                                        fontSize: 14,
                                        letterSpacing: "0.08em",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    Order Now
                                </Link>
                                <Link
                                    to="#services"
                                    style={{
                                        background: "transparent",
                                        color: "white",
                                        padding: "14px 32px",
                                        borderRadius: 4,
                                        fontFamily: "sans-serif",
                                        fontWeight: 700,
                                        textDecoration: "none",
                                        fontSize: 14,
                                        letterSpacing: "0.08em",
                                        textTransform: "uppercase",
                                        border: "1px solid #444",
                                    }}
                                >
                                    Our Services
                                </Link>
                            </div>
                        </div>

                        <div className="animate-slide-up">
                            <PrintIllustration type="hero" className="w-full" />
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
                        {STATS.map((stat, index) => (
                            <div
                                key={index}
                                style={{
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid #222",
                                    borderRadius: 8,
                                    padding: "24px 20px",
                                    textAlign: "center",
                                }}
                                className="hover:border-primary/30 transition-colors"
                            >
                                <div
                                    style={{
                                        fontSize: 32,
                                        fontWeight: 900,
                                        color: "#FF6B35",
                                        fontFamily: "'Georgia', serif",
                                    }}
                                >
                                    {stat.value}
                                </div>
                                <div
                                    style={{
                                        fontSize: 12,
                                        color: "#888",
                                        fontFamily: "sans-serif",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.1em",
                                        marginTop: 4,
                                    }}
                                >
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section style={{ background: "#0f0f0f" }} className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2
                        style={{
                            fontFamily: "'Georgia', serif",
                            fontSize: 36,
                            fontWeight: 900,
                            color: "white",
                            textAlign: "center",
                            marginBottom: 12,
                        }}
                    >
                        Why Choose <span style={{ color: "#FF6B35" }}>Chintamani Digital?</span>
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
                        Professional-grade printing for businesses that mean business.
                    </p>

                    <div className="grid md:grid-cols-4 gap-6">
                        {FEATURES.map((feature, index) => (
                            <div
                                key={index}
                                style={{
                                    background: "#1a1a1a",
                                    border: "1px solid #2a2a2a",
                                    borderRadius: 8,
                                    padding: 28,
                                }}
                                className="hover:border-primary/30 transition-colors"
                            >
                                <div style={{ fontSize: 32, marginBottom: 16 }}>{feature.icon}</div>
                                <h3
                                    style={{
                                        color: "white",
                                        fontFamily: "'Georgia', serif",
                                        fontSize: 18,
                                        fontWeight: 700,
                                        marginBottom: 8,
                                    }}
                                >
                                    {feature.title}
                                </h3>
                                <p
                                    style={{
                                        color: "#777",
                                        fontFamily: "sans-serif",
                                        fontSize: 14,
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ background: "#FF6B35" }} className="py-16">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2
                        style={{
                            fontFamily: "'Georgia', serif",
                            fontSize: 36,
                            fontWeight: 900,
                            color: "white",
                            marginBottom: 12,
                        }}
                    >
                        Ready to Print Something Incredible?
                    </h2>
                    <p
                        style={{
                            color: "rgba(255,255,255,0.85)",
                            fontFamily: "sans-serif",
                            fontSize: 16,
                            marginBottom: 32,
                        }}
                    >
                        Use our instant price calculator and order directly online.
                    </p>
                    <Link
                        to="#order"
                        style={{
                            background: "white",
                            color: "#FF6B35",
                            padding: "16px 40px",
                            borderRadius: 4,
                            fontFamily: "sans-serif",
                            fontWeight: 800,
                            textDecoration: "none",
                            fontSize: 15,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            display: "inline-block",
                        }}
                    >
                        Calculate Your Price
                    </Link>
                </div>
            </section>
        </div>
    );
};
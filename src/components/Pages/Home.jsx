import React from "react";
import { Link } from "../../components/common/Link";
import { PrintIllustration } from "../../components/common/PrintIllustration";
import { STATS, FEATURES } from "../../utils/constants";

// ── Fire flicker style injected directly ──
const GlossyDotStyle = () => (
    <style>{`
        @keyframes glossyBlink {
            0% {
                transform: scale(1);
                opacity: 0.9;
                box-shadow: 0 0 6px rgba(212,175,55,0.4);
            }
            50% {
                transform: scale(1.4);
                opacity: 1;
                box-shadow: 0 0 18px rgba(212,175,55,0.9),
                            0 0 30px rgba(212,175,55,0.5);
            }
            100% {
                transform: scale(1);
                opacity: 0.9;
                box-shadow: 0 0 6px rgba(212,175,55,0.4);
            }
        }

        .glossy-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            display: inline-block;
            margin-right: 8px;
        background: radial-gradient(
            circle at 30% 30%,
            #ffffff 0%,
            #e9d5ff 15%,
            #a855f7 45%,
            #7c3aed 70%,
            #4c1d95 100%
        );
            animation: glossyBlink 1.2s ease-in-out infinite;
            position: relative;
        }

        /* top gloss shine */
        .glossy-dot::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 50%;
            border-radius: 50%;
            background: linear-gradient(
                180deg,
                rgba(255,255,255,0.8) 0%,
                transparent 100%
            );
        }
    `}</style>
);



export const Home = () => {
    return (
        <div>
            <GlossyDotStyle />

            {/* Hero Section */}
            <section
                style={{
                    background: "linear-gradient(160deg, #0e0818 0%, #1a0f2e 45%, #0a0510 100%)",
                    position: "relative",
                    overflow: "hidden",
                }}
                className="min-h-screen flex items-center pt-20"
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

                <div className="max-w-7xl mx-auto px-4 py-16" style={{ position: "relative", zIndex: 1 }}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in">
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
                                <span className="glossy-dot"></span> Latur's #1 Flex Printing Press
                            </div>

                            <h1 style={{
                                fontFamily: "'Georgia', serif",
                                fontSize: "clamp(36px, 5vw, 64px)",
                                fontWeight: 900,
                                color: "white",
                                lineHeight: 1.1,
                                marginBottom: 20,
                            }}>
                                Print That
                                <br />
                                <span style={{ color: "#ffc400" }}>Commands</span>
                                <br />
                                Attention
                            </h1>

                            <p style={{
                                color: "rgba(200,170,255,0.55)",
                                fontSize: 16,
                                lineHeight: 1.7,
                                marginBottom: 32,
                                fontFamily: "sans-serif",
                                maxWidth: 480,
                            }}>
                                From massive outdoor banners to premium indoor displays — we bring your brand to life with vivid,
                                durable, and professional flex printing solutions.
                            </p>

                            <div className="flex gap-4 flex-wrap">
                                <Link
                                    to="#order"
                                    style={{
                                        background: "linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #6D28D9 100%)",
                                        color: "white",
                                        padding: "14px 32px",
                                        borderRadius: 4,
                                        fontFamily: "sans-serif",
                                        fontWeight: 700,
                                        textDecoration: "none",
                                        fontSize: 14,
                                        letterSpacing: "0.08em",
                                        textTransform: "uppercase",
                                        boxShadow: "0 4px 24px rgba(124,58,237,0.4)",
                                        position: "relative",
                                        overflow: "hidden",
                                    }}
                                >
                                    Order Now
                                </Link>
                                <Link
                                    to="#services"
                                    style={{
                                        background: "transparent",
                                        color: "#ffc400",
                                        padding: "14px 32px",
                                        borderRadius: 4,
                                        fontFamily: "sans-serif",
                                        fontWeight: 700,
                                        textDecoration: "none",
                                        fontSize: 14,
                                        letterSpacing: "0.08em",
                                        textTransform: "uppercase",
                                        border: "1px solid rgba(212,175,55,0.35)",
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
                                    background: "rgba(124,58,237,0.1)",
                                    border: "1px solid rgba(124,58,237,0.22)",
                                    borderRadius: 10,
                                    padding: "24px 20px",
                                    textAlign: "center",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                                className="hover:border-primary/30 transition-colors"
                            >
                                <div style={{
                                    position: "absolute", top: 0, left: 0, right: 0, height: "45%",
                                    background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)",
                                    borderRadius: "10px 10px 0 0",
                                    pointerEvents: "none",
                                }} />
                                <div style={{
                                    fontSize: 32,
                                    fontWeight: 900,
                                    color: "#ffc400",
                                    fontFamily: "'Georgia', serif",
                                }}>
                                    {stat.value}
                                </div>
                                <div style={{
                                    fontSize: 12,
                                    color: "rgba(192,132,252,0.55)",
                                    fontFamily: "sans-serif",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em",
                                    marginTop: 4,
                                }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section
                style={{
                    background: "linear-gradient(180deg, #0a0510 0%, #0e0818 100%)",
                    position: "relative",
                    overflow: "hidden",
                }}
                className="py-20"
            >
                <div style={{
                    position: "absolute", top: "50%", left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 600, height: 600, borderRadius: "50%",
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
                        marginBottom: 12,
                    }}>
                        Why Choose <span style={{ color: "#ffc400" }}>Chintamani Digital?</span>
                    </h2>
                    <p style={{
                        color: "rgba(192,132,252,0.5)",
                        textAlign: "center",
                        marginBottom: 48,
                        fontFamily: "sans-serif",
                        fontSize: 15,
                    }}>
                        Professional-grade printing for businesses that mean business.
                    </p>

                    <div className="grid md:grid-cols-4 gap-6">
                        {FEATURES.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={index}
                                    style={{
                                        background: "rgba(124,58,237,0.1)",
                                        border: "1px solid rgba(124,58,237,0.2)",
                                        borderRadius: 10,
                                        padding: 28,
                                        position: "relative",
                                        overflow: "hidden",
                                        transition: "border-color 0.2s, transform 0.2s",
                                    }}
                                    className="hover:border-primary/30 transition-colors"
                                >
                                    <div style={{
                                        position: "absolute", top: 0, left: 0, right: 0, height: "45%",
                                        background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)",
                                        borderRadius: "10px 10px 0 0",
                                        pointerEvents: "none",
                                    }} />

                                    <div style={{
                                        position: "absolute", top: 0, right: 0,
                                        width: 60, height: 60,
                                        background: "radial-gradient(circle at top right, rgba(212,175,55,0.15) 0%, transparent 70%)",
                                        pointerEvents: "none",
                                    }} />
                                    <div
                                        style={{
                                            width: 52,
                                            height: 52,
                                            borderRadius: 12,
                                            background: "rgba(168,85,247,0.1)",
                                            border: "1px solid rgba(168,85,247,0.25)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginBottom: 16,
                                        }}
                                    >
                                        <Icon size={24} color="#c084fc" />
                                    </div>

                                    <h3 style={{
                                        color: "#ffc400",
                                        fontFamily: "'Georgia', serif",
                                        fontSize: 18,
                                        fontWeight: 700,
                                        marginBottom: 8,
                                    }}>
                                        {feature.title}
                                    </h3>

                                    <p style={{
                                        color: "rgba(192,132,252,0.55)",
                                        fontFamily: "sans-serif",
                                        fontSize: 14,
                                        lineHeight: 1.6,
                                    }}>
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                style={{
                    background: "linear-gradient(135deg, #0e0818 0%, #1a0f2e 40%, #2d1a4a 65%, #1a1200 85%, #0d0900 100%)",
                    border: "1px solid rgba(160,100,255,0.2)",
                    position: "relative",
                    overflow: "hidden",
                }}
                className="py-16"
            >
                <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: "50%",
                    background: "linear-gradient(180deg, rgba(160,100,255,0.07) 0%, transparent 100%)",
                    pointerEvents: "none",
                }} />
                <div style={{
                    position: "absolute", top: "50%", right: -60,
                    transform: "translateY(-50%)",
                    width: 280, height: 280, borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(212,175,55,0.14) 0%, transparent 70%)",
                    pointerEvents: "none",
                }} />
                <div style={{
                    position: "absolute", top: "50%", left: -60,
                    transform: "translateY(-50%)",
                    width: 280, height: 280, borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
                    pointerEvents: "none",
                }} />

                <div className="max-w-3xl mx-auto px-4 text-center" style={{ position: "relative", zIndex: 1 }}>
                    <h2 style={{
                        fontFamily: "'Georgia', serif",
                        fontSize: 36,
                        fontWeight: 900,
                        color: "#ffc400",
                        marginBottom: 12,
                    }}>
                        Ready to Print Something Incredible?
                    </h2>
                    <p style={{
                        color: "rgba(192,132,252,0.6)",
                        fontFamily: "sans-serif",
                        fontSize: 16,
                        marginBottom: 32,
                    }}>
                        Use our instant price calculator and order directly online.
                    </p>
                    <Link
                        to="#order"
                        style={{
                            background: "linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #6D28D9 100%)",
                            color: "white",
                            padding: "16px 40px",
                            borderRadius: 4,
                            fontFamily: "sans-serif",
                            fontWeight: 800,
                            textDecoration: "none",
                            fontSize: 15,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            display: "inline-block",
                            boxShadow: "0 4px 28px rgba(124,58,237,0.45)",
                        }}
                    >
                        Calculate Your Price
                    </Link>
                </div>
            </section>
        </div>
    );
};
import React from "react";
import { Link } from "../../components/common/Link";
import { PrintIllustration } from "../../components/common/PrintIllustration";
import { SERVICES } from "../../data/services";

const GlossyStyles = () => (
    <style>{`
        .service-card:hover {
            border-color: rgba(212,175,55,0.35) !important;
            transform: translateY(-3px);
            transition: all 0.25s ease;
        }
        .service-card {
            transition: all 0.25s ease;
        }
        .order-btn:hover {
            background: linear-gradient(135deg, #6D28D9 0%, #9333EA 50%, #5B21B6 100%) !important;
            box-shadow: 0 6px 28px rgba(124,58,237,0.55) !important;
            transform: translateY(-1px);
            transition: all 0.2s ease;
        }
        .order-btn {
            transition: all 0.2s ease;
        }
    `}</style>
);

export const Services = () => {
    return (
        <div style={{ paddingTop: 80, background: "#0e0818", minHeight: "100vh" }}>
            <GlossyStyles />

            {/* Header */}
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

                <div className="max-w-7xl mx-auto px-4 text-center" style={{ position: "relative", zIndex: 1 }}>
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
                        What We Print
                    </div>

                    <h1 style={{
                        fontFamily: "'Georgia', serif",
                        fontSize: "clamp(36px, 5vw, 48px)",
                        fontWeight: 900,
                        color: "white",
                        marginBottom: 16,
                    }}>
                        Our <span style={{ color: "#ffc400" }}>Services</span>
                    </h1>
                    <p style={{
                        color: "rgba(200,170,255,0.55)",
                        fontSize: 16,
                        fontFamily: "sans-serif",
                        maxWidth: 560,
                        margin: "0 auto",
                    }}>
                        From star flex to specialty media — we print it all with precision and speed.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section
                style={{
                    background: "linear-gradient(180deg, #0a0510 0%, #0e0818 100%)",
                    position: "relative",
                    overflow: "hidden",
                }}
                className="py-16 md:py-20"
            >
                {/* Center purple ambient glow */}
                <div style={{
                    position: "absolute", top: "50%", left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 800, height: 800, borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
                    pointerEvents: "none",
                }} />

                <div className="max-w-7xl mx-auto px-4" style={{ position: "relative", zIndex: 1 }}>
                    <div className="grid md:grid-cols-2 gap-8">
                        {SERVICES.map((service, index) => (
                            <div
                                key={index}
                                className="service-card"
                                style={{
                                    background: "rgba(124,58,237,0.08)",
                                    border: "1px solid rgba(124,58,237,0.2)",
                                    borderRadius: 12,
                                    overflow: "hidden",
                                    position: "relative",
                                }}
                            >
                                {/* Glossy top sheen on card */}
                                <div style={{
                                    position: "absolute", top: 0, left: 0, right: 0, height: "30%",
                                    background: "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)",
                                    pointerEvents: "none",
                                    zIndex: 1,
                                }} />
                                {/* Gold corner accent */}
                                <div style={{
                                    position: "absolute", top: 0, right: 0, width: 80, height: 80,
                                    background: "radial-gradient(circle at top right, rgba(212,175,55,0.14) 0%, transparent 70%)",
                                    pointerEvents: "none",
                                    zIndex: 1,
                                }} />

                                {/* Illustration */}
                                <div>
                                    <PrintIllustration type={service.type} className="w-full" />
                                </div>

                                <div style={{ padding: 28, position: "relative", zIndex: 2 }}>
                                    {/* Title + Tag */}
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 style={{
                                            fontFamily: "'Georgia', serif",
                                            fontSize: 24,
                                            fontWeight: 700,
                                            color: "white",
                                        }}>
                                            {service.name}
                                        </h3>
                                        <span style={{
                                            background: "rgba(212,175,55,0.12)",
                                            color: "#ffc400",
                                            border: "1px solid rgba(212,175,55,0.25)",
                                            padding: "4px 12px",
                                            borderRadius: 100,
                                            fontSize: 11,
                                            fontFamily: "sans-serif",
                                            fontWeight: 700,
                                            letterSpacing: "0.08em",
                                            textTransform: "uppercase",
                                        }}>
                                            {service.tag}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p style={{
                                        color: "rgba(200,170,255,0.55)",
                                        fontFamily: "sans-serif",
                                        fontSize: 14,
                                        lineHeight: 1.7,
                                        marginBottom: 16,
                                    }}>
                                        {service.description}
                                    </p>

                                    {/* Common Uses */}
                                    <div style={{ marginBottom: 20 }}>
                                        <div style={{
                                            color: "rgba(192,132,252,0.4)",
                                            fontFamily: "sans-serif",
                                            fontSize: 11,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.1em",
                                            marginBottom: 10,
                                        }}>
                                            Common uses
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {service.uses.map((use, j) => (
                                                <span
                                                    key={j}
                                                    style={{
                                                        background: "rgba(124,58,237,0.12)",
                                                        color: "rgba(192,132,252,0.75)",
                                                        padding: "4px 12px",
                                                        borderRadius: 4,
                                                        fontSize: 12,
                                                        fontFamily: "sans-serif",
                                                        border: "1px solid rgba(124,58,237,0.2)",
                                                    }}
                                                >
                                                    {use}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Price + CTA */}
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span style={{
                                                color: "rgba(192,132,252,0.45)",
                                                fontSize: 12,
                                                fontFamily: "sans-serif",
                                            }}>
                                                Starting from{" "}
                                            </span>
                                            <span style={{
                                                color: "#ffc400",
                                                fontSize: 22,
                                                fontWeight: 900,
                                                fontFamily: "'Georgia', serif",
                                            }}>
                                                {service.priceFrom}
                                            </span>
                                        </div>
                                        <Link
                                            to="#order"
                                            className="order-btn"
                                            style={{
                                                background: "linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #6D28D9 100%)",
                                                color: "white",
                                                padding: "10px 24px",
                                                borderRadius: 4,
                                                textDecoration: "none",
                                                fontFamily: "sans-serif",
                                                fontWeight: 700,
                                                fontSize: 13,
                                                letterSpacing: "0.06em",
                                                textTransform: "uppercase",
                                                boxShadow: "0 4px 20px rgba(124,58,237,0.35)",
                                                display: "inline-block",
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
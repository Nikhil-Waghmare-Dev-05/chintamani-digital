import React, { useState } from "react";
import { COMPANY_INFO } from "../../utils/constants";

const GlossyStyles = () => (
    <style>{`
        .contact-input {
            background: rgba(124,58,237,0.08) !important;
            border: 1px solid rgba(124,58,237,0.2) !important;
            border-radius: 6px;
            color: white !important;
            padding: 12px 16px;
            font-family: sans-serif;
            font-size: 14px;
            width: 100%;
            outline: none;
            transition: border-color 0.2s;
        }
        .contact-input:focus {
            border-color: rgba(212,175,55,0.45) !important;
        }
        .contact-input::placeholder { color: rgba(192,132,252,0.35); }
        .info-card {
            transition: border-color 0.2s, transform 0.2s;
        }
        .info-card:hover {
            border-color: rgba(212,175,55,0.35) !important;
            transform: translateX(4px);
        }
        .send-btn {
            transition: all 0.2s ease;
        }
        .send-btn:hover {
            background: linear-gradient(135deg, #6D28D9 0%, #9333EA 50%, #5B21B6 100%) !important;
            box-shadow: 0 6px 28px rgba(124,58,237,0.6) !important;
            transform: translateY(-1px);
        }
        .again-btn {
            transition: all 0.2s ease;
        }
        .again-btn:hover {
            background: linear-gradient(135deg, #6D28D9 0%, #9333EA 50%, #5B21B6 100%) !important;
            transform: translateY(-1px);
        }
    `}</style>
);

const inputStyle = {
    background: "rgba(124,58,237,0.08)",
    border: "1px solid rgba(124,58,237,0.2)",
    borderRadius: 6,
    color: "white",
    padding: "12px 16px",
    fontFamily: "sans-serif",
    fontSize: 14,
    width: "100%",
    outline: "none",
};

const labelStyle = {
    color: "rgba(192,132,252,0.6)",
    fontFamily: "sans-serif",
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: 8,
    display: "block",
};

export const Contact = () => {
    const [sent, setSent] = useState(false);
    const [formData, setFormData] = useState({
        name: "", email: "", phone: "", message: "",
    });

    const handleChange = (key, value) => setFormData((prev) => ({ ...prev, [key]: value }));

    const handleSubmit = () => {
        if (!formData.name || !formData.phone || !formData.message) {
            alert("Please fill required fields.");
            return;
        }
        setSent(true);
    };

    const contactInfo = [
        { icon: "📍", title: "Address",  text: COMPANY_INFO.address },
        { icon: "📞", title: "Phone",    text: COMPANY_INFO.phone.join(" / ") },
        { icon: "✉️", title: "Email",    text: COMPANY_INFO.email },
        {
            icon: "🕐", title: "Hours",
            text: `Mon–Sat: ${COMPANY_INFO.hours.weekdays}\nSunday: ${COMPANY_INFO.hours.sunday}`,
        },
    ];

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
                        marginBottom: 20,
                    }}>
                        Contact Us
                    </div>
                    <h1 style={{
                        fontFamily: "'Georgia', serif",
                        fontSize: "clamp(36px, 5vw, 48px)",
                        fontWeight: 900,
                        color: "white",
                        marginBottom: 12,
                    }}>
                        Get In <span style={{ color: "#ffc400" }}>Touch</span>
                    </h1>
                    <p style={{ color: "rgba(200,170,255,0.55)", fontFamily: "sans-serif", fontSize: 16 }}>
                        We're here Mon–Sat, 9am to 8pm. Drop us a message anytime.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section
                style={{
                    background: "linear-gradient(180deg, #0a0510 0%, #0e0818 100%)",
                    position: "relative",
                    overflow: "hidden",
                }}
                className="py-12 md:py-20"
            >
                {/* Ambient center glow */}
                <div style={{
                    position: "absolute", top: "40%", left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 800, height: 800, borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)",
                    pointerEvents: "none",
                }} />

                <div className="max-w-7xl mx-auto px-4" style={{ position: "relative", zIndex: 1 }}>
                    <div className="grid md:grid-cols-2 gap-12">

                        {/* ── Left: Contact Info + Map ── */}
                        <div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 28 }}>
                                {contactInfo.map((info, index) => (
                                    <div
                                        key={index}
                                        className="info-card"
                                        style={{
                                            background: "rgba(124,58,237,0.08)",
                                            border: "1px solid rgba(124,58,237,0.2)",
                                            borderRadius: 10,
                                            padding: 20,
                                            display: "flex",
                                            gap: 16,
                                            alignItems: "flex-start",
                                            position: "relative",
                                            overflow: "hidden",
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
                                            position: "absolute", top: 0, right: 0, width: 50, height: 50,
                                            background: "radial-gradient(circle at top right, rgba(212,175,55,0.14) 0%, transparent 70%)",
                                            pointerEvents: "none",
                                        }} />

                                        {/* Icon box */}
                                        <div style={{
                                            background: "rgba(212,175,55,0.1)",
                                            border: "1px solid rgba(212,175,55,0.22)",
                                            width: 44, height: 44,
                                            borderRadius: 10,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                            fontSize: 20,
                                            position: "relative",
                                            overflow: "hidden",
                                        }}>
                                            <div style={{
                                                position: "absolute", top: 0, left: 0, right: 0, height: "50%",
                                                background: "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)",
                                                pointerEvents: "none",
                                            }} />
                                            {info.icon}
                                        </div>

                                        <div style={{ position: "relative", zIndex: 1 }}>
                                            <div style={{
                                                color: "#ffc400",
                                                fontFamily: "sans-serif",
                                                fontSize: 12,
                                                fontWeight: 700,
                                                textTransform: "uppercase",
                                                letterSpacing: "0.1em",
                                                marginBottom: 4,
                                            }}>
                                                {info.title}
                                            </div>
                                            <div style={{
                                                color: "rgba(235,220,255,0.8)",
                                                fontFamily: "sans-serif",
                                                fontSize: 14,
                                                lineHeight: 1.6,
                                                whiteSpace: "pre-line",
                                            }}>
                                                {info.text}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Google Maps Embed */}
                            <div style={{
                                borderRadius: 10,
                                overflow: "hidden",
                                border: "1px solid rgba(124,58,237,0.25)",
                                position: "relative",
                            }}>
                                {/* Gold corner on map */}
                                <div style={{
                                    position: "absolute", top: 0, right: 0,
                                    width: 80, height: 80, zIndex: 1,
                                    background: "radial-gradient(circle at top right, rgba(212,175,55,0.18) 0%, transparent 70%)",
                                    pointerEvents: "none",
                                }} />
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2601456978936!2d73.84689337497644!3d18.52042468257894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sShivajinagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699012345678!5m2!1sen!2sin"
                                    width="100%"
                                    height="260"
                                    style={{
                                        border: 0, display: "block",
                                        filter: "invert(90%) hue-rotate(180deg) saturate(0.6)",
                                    }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="FlexPrint Location"
                                />
                            </div>
                        </div>

                        {/* ── Right: Contact Form ── */}
                        <div style={{
                            background: "rgba(124,58,237,0.08)",
                            border: "1px solid rgba(124,58,237,0.2)",
                            borderRadius: 12,
                            padding: 32,
                            position: "relative",
                            overflow: "hidden",
                        }}>
                            {/* Glossy sheen on form card */}
                            <div style={{
                                position: "absolute", top: 0, left: 0, right: 0, height: "35%",
                                background: "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)",
                                borderRadius: "12px 12px 0 0",
                                pointerEvents: "none",
                            }} />
                            {/* Gold corner accent */}
                            <div style={{
                                position: "absolute", top: 0, right: 0, width: 100, height: 100,
                                background: "radial-gradient(circle at top right, rgba(212,175,55,0.15) 0%, transparent 70%)",
                                pointerEvents: "none",
                            }} />
                            {/* Purple bottom glow */}
                            <div style={{
                                position: "absolute", bottom: -40, left: "50%",
                                transform: "translateX(-50%)",
                                width: 300, height: 150, borderRadius: "50%",
                                background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
                                pointerEvents: "none",
                            }} />

                            <div style={{ position: "relative", zIndex: 1 }}>
                                {sent ? (
                                    /* ── Success State ── */
                                    <div style={{ textAlign: "center", padding: "40px 0" }}>
                                        <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
                                        <h3 style={{
                                            color: "white",
                                            fontFamily: "'Georgia', serif",
                                            fontSize: 26,
                                            fontWeight: 700,
                                            marginBottom: 12,
                                        }}>
                                            Message Sent!
                                        </h3>
                                        <p style={{ color: "rgba(200,170,255,0.55)", fontFamily: "sans-serif", marginBottom: 28 }}>
                                            We'll get back to you within 2 hours.
                                        </p>
                                        <button
                                            className="again-btn"
                                            onClick={() => {
                                                setSent(false);
                                                setFormData({ name: "", email: "", phone: "", message: "" });
                                            }}
                                            style={{
                                                background: "linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #6D28D9 100%)",
                                                color: "white", border: "none",
                                                padding: "12px 28px", borderRadius: 4,
                                                cursor: "pointer", fontFamily: "sans-serif",
                                                fontWeight: 700, fontSize: 14,
                                                boxShadow: "0 4px 20px rgba(124,58,237,0.4)",
                                            }}
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    /* ── Form ── */
                                    <>
                                        <h3 style={{
                                            color: "white",
                                            fontFamily: "'Georgia', serif",
                                            fontSize: 24,
                                            fontWeight: 700,
                                            marginBottom: 8,
                                        }}>
                                            Send a <span style={{ color: "#ffc400" }}>Message</span>
                                        </h3>
                                        <p style={{
                                            color: "rgba(192,132,252,0.5)",
                                            fontFamily: "sans-serif",
                                            fontSize: 13,
                                            marginBottom: 28,
                                        }}>
                                            We typically respond within 2 hours on business days.
                                        </p>

                                        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label style={labelStyle}>Name *</label>
                                                    <input
                                                        type="text" placeholder="Your name"
                                                        value={formData.name}
                                                        onChange={(e) => handleChange("name", e.target.value)}
                                                        style={inputStyle} className="contact-input"
                                                    />
                                                </div>
                                                <div>
                                                    <label style={labelStyle}>Phone *</label>
                                                    <input
                                                        type="tel" placeholder="+91 XXXXX XXXXX"
                                                        value={formData.phone}
                                                        onChange={(e) => handleChange("phone", e.target.value)}
                                                        style={inputStyle} className="contact-input"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label style={labelStyle}>Email</label>
                                                <input
                                                    type="email" placeholder="you@example.com"
                                                    value={formData.email}
                                                    onChange={(e) => handleChange("email", e.target.value)}
                                                    style={inputStyle} className="contact-input"
                                                />
                                            </div>

                                            <div>
                                                <label style={labelStyle}>Message *</label>
                                                <textarea
                                                    rows={5}
                                                    placeholder="Tell us about your requirement..."
                                                    value={formData.message}
                                                    onChange={(e) => handleChange("message", e.target.value)}
                                                    style={{ ...inputStyle, resize: "vertical" }}
                                                    className="contact-input"
                                                />
                                            </div>

                                            <button
                                                onClick={handleSubmit}
                                                className="send-btn"
                                                style={{
                                                    background: "linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #6D28D9 100%)",
                                                    color: "white", border: "none",
                                                    padding: "14px", borderRadius: 6,
                                                    cursor: "pointer", fontFamily: "sans-serif",
                                                    fontWeight: 800, fontSize: 15,
                                                    textTransform: "uppercase", letterSpacing: "0.08em",
                                                    boxShadow: "0 4px 20px rgba(124,58,237,0.4)",
                                                }}
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
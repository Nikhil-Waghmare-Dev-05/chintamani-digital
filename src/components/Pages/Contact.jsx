import React, { useState } from "react";
import { COMPANY_INFO } from "../../utils/constants";

export const Contact = () => {
    const [sent, setSent] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleSubmit = () => {
        if (!formData.name || !formData.phone || !formData.message) {
            alert("Please fill required fields.");
            return;
        }
        setSent(true);
    };

    const inputStyle = {
        background: "#111",
        border: "1px solid #333",
        borderRadius: 6,
        color: "white",
        padding: "12px 16px",
        fontFamily: "sans-serif",
        fontSize: 14,
        width: "100%",
        outline: "none",
    };

    const labelStyle = {
        color: "#888",
        fontFamily: "sans-serif",
        fontSize: 12,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        marginBottom: 8,
        display: "block",
    };

    const contactInfo = [
        {
            icon: "📍",
            title: "Address",
            text: COMPANY_INFO.address,
        },
        {
            icon: "📞",
            title: "Phone",
            text: COMPANY_INFO.phone.join(" / "),
        },
        {
            icon: "✉️",
            title: "Email",
            text: COMPANY_INFO.email,
        },
        {
            icon: "🕐",
            title: "Hours",
            text: `Mon–Sat: ${COMPANY_INFO.hours.weekdays}\nSunday: ${COMPANY_INFO.hours.sunday}`,
        },
    ];

    return (
        <div style={{ paddingTop: 80, background: "#0a0a0a", minHeight: "100vh" }}>
            {/* Header */}
            <section style={{ background: "linear-gradient(to bottom, #1a0a00, #0a0a0a)" }} className="py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h1
                        style={{
                            fontFamily: "'Georgia', serif",
                            fontSize: "clamp(36px, 5vw, 48px)",
                            fontWeight: 900,
                            color: "white",
                            marginBottom: 12,
                        }}
                    >
                        Get In <span style={{ color: "#FF6B35" }}>Touch</span>
                    </h1>
                    <p style={{ color: "#888", fontFamily: "sans-serif", fontSize: 16 }}>
                        We're here Mon–Sat, 9am to 8pm. Drop us a message anytime.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 36 }}>
                                {contactInfo.map((info, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            background: "#111",
                                            border: "1px solid #222",
                                            borderRadius: 8,
                                            padding: 20,
                                            display: "flex",
                                            gap: 16,
                                        }}
                                    >
                                        <div style={{ fontSize: 24 }}>{info.icon}</div>
                                        <div>
                                            <div
                                                style={{
                                                    color: "#FF6B35",
                                                    fontFamily: "sans-serif",
                                                    fontSize: 12,
                                                    fontWeight: 700,
                                                    textTransform: "uppercase",
                                                    letterSpacing: "0.1em",
                                                    marginBottom: 4,
                                                }}
                                            >
                                                {info.title}
                                            </div>
                                            <div
                                                style={{
                                                    color: "#ccc",
                                                    fontFamily: "sans-serif",
                                                    fontSize: 14,
                                                    lineHeight: 1.6,
                                                    whiteSpace: "pre-line",
                                                }}
                                            >
                                                {info.text}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Google Maps Embed */}
                            <div style={{ borderRadius: 8, overflow: "hidden", border: "1px solid #222" }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2601456978936!2d73.84689337497644!3d18.52042468257894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sShivajinagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699012345678!5m2!1sen!2sin"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0, display: "block", filter: "invert(90%) hue-rotate(180deg)" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="FlexPrint Location"
                                />
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div
                            style={{
                                background: "#111",
                                border: "1px solid #222",
                                borderRadius: 10,
                                padding: 32,
                            }}
                        >
                            {sent ? (
                                <div style={{ textAlign: "center", padding: "40px 0" }}>
                                    <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                                    <h3
                                        style={{
                                            color: "white",
                                            fontFamily: "'Georgia', serif",
                                            fontSize: 24,
                                            marginBottom: 12,
                                        }}
                                    >
                                        Message Sent!
                                    </h3>
                                    <p style={{ color: "#888", fontFamily: "sans-serif" }}>We'll get back to you within 2 hours.</p>
                                    <button
                                        onClick={() => {
                                            setSent(false);
                                            setFormData({ name: "", email: "", phone: "", message: "" });
                                        }}
                                        style={{
                                            marginTop: 24,
                                            background: "#FF6B35",
                                            color: "white",
                                            border: "none",
                                            padding: "12px 24px",
                                            borderRadius: 4,
                                            cursor: "pointer",
                                            fontFamily: "sans-serif",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h3
                                        style={{
                                            color: "white",
                                            fontFamily: "'Georgia', serif",
                                            fontSize: 24,
                                            fontWeight: 700,
                                            marginBottom: 24,
                                        }}
                                    >
                                        Send a Message
                                    </h3>
                                    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label style={labelStyle}>Name *</label>
                                                <input
                                                    type="text"
                                                    placeholder="Your name"
                                                    value={formData.name}
                                                    onChange={(e) => handleChange("name", e.target.value)}
                                                    style={inputStyle}
                                                />
                                            </div>
                                            <div>
                                                <label style={labelStyle}>Phone *</label>
                                                <input
                                                    type="tel"
                                                    placeholder="+91 XXXXX XXXXX"
                                                    value={formData.phone}
                                                    onChange={(e) => handleChange("phone", e.target.value)}
                                                    style={inputStyle}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Email</label>
                                            <input
                                                type="email"
                                                placeholder="you@example.com"
                                                value={formData.email}
                                                onChange={(e) => handleChange("email", e.target.value)}
                                                style={inputStyle}
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
                                            />
                                        </div>
                                        <button
                                            onClick={handleSubmit}
                                            style={{
                                                background: "#FF6B35",
                                                color: "white",
                                                border: "none",
                                                padding: "14px",
                                                borderRadius: 6,
                                                cursor: "pointer",
                                                fontFamily: "sans-serif",
                                                fontWeight: 800,
                                                fontSize: 15,
                                                textTransform: "uppercase",
                                                letterSpacing: "0.08em",
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
            </section>
        </div>
    );
};
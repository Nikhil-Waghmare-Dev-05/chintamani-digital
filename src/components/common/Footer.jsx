import React from "react";
import { Link } from "./Link";
import { COMPANY_INFO, NAV_LINKS } from "../../utils/constants";

const FooterStyles = () => (
    <style>{`
        .footer-link {
            transition: color 0.2s ease;
        }
        .footer-link:hover {
            color: #ffc400 !important;
        }
    `}</style>
);

export const Footer = () => {
    const footerLinks = [
        {
            title: "Pages",
            links: NAV_LINKS,
        },
        {
            title: "Services",
            links: [
                { to: "#services", label: "Star Flex" },
                { to: "#services", label: "Vinyl Sticker" },
                { to: "#services", label: "Backlit Board" },
                { to: "#services", label: "Sunpack Board" },
            ],
        },
        {
            title: "Contact",
            links: [
                { to: `tel:${COMPANY_INFO.phone[0].replace(/\s/g, "")}`, label: COMPANY_INFO.phone[0] },
                { to: `mailto:${COMPANY_INFO.email}`, label: COMPANY_INFO.email },
                { to: "#contact", label: "Khori Galli, Latur" },
            ],
        },
    ];

    return (
        <footer style={{
            background: "linear-gradient(180deg, #0a0510 0%, #060310 100%)",
            borderTop: "1px solid rgba(124,58,237,0.2)",
            padding: "56px 0 24px",
            position: "relative",
            overflow: "hidden",
        }}>
            <FooterStyles />

            {/* Glossy top sheen */}
            <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "30%",
                background: "linear-gradient(180deg, rgba(160,100,255,0.05) 0%, transparent 100%)",
                pointerEvents: "none",
            }} />
            {/* Gold glow right */}
            <div style={{
                position: "absolute", bottom: -60, right: -60, width: 300, height: 300,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />
            {/* Purple glow left */}
            <div style={{
                position: "absolute", bottom: -60, left: -60, width: 300, height: 300,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />

            <div className="max-w-7xl mx-auto px-4" style={{ position: "relative", zIndex: 1 }}>
                <div className="grid md:grid-cols-4 gap-8 mb-12">

                    {/* Brand Column */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                            <div style={{
                                background: "linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)",
                                width: 34, height: 34,
                                display: "flex", alignItems: "center", justifyContent: "center",
                                borderRadius: 6,
                                boxShadow: "0 2px 12px rgba(124,58,237,0.4)",
                                position: "relative", overflow: "hidden",
                            }}>
                                <div style={{
                                    position: "absolute", top: 0, left: 0, right: 0, height: "50%",
                                    background: "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 100%)",
                                    pointerEvents: "none",
                                }} />
                                <span style={{ color: "white", fontWeight: 900, fontSize: 15, fontFamily: "serif", position: "relative", zIndex: 1 }}>
                                    CM
                                </span>
                            </div>
                            <span style={{ color: "white", fontWeight: 800, fontSize: 16, fontFamily: "'Georgia', serif" }}>
                                CHINTAMANI<span style={{ color: "#ffc400" }}>DIGITAL</span>
                            </span>
                        </div>
                        <p style={{ color: "rgba(192,132,252,0.45)", fontFamily: "sans-serif", fontSize: 13, lineHeight: 1.7 }}>
                            {COMPANY_INFO.tagline}
                        </p>

                        {/* Decorative gold divider */}
                        <div style={{
                            marginTop: 20,
                            width: 48, height: 2,
                            background: "linear-gradient(90deg, #ffc400, transparent)",
                            borderRadius: 2,
                        }} />
                    </div>

                    {/* Link Columns */}
                    {footerLinks.map((column) => (
                        <div key={column.title}>
                            <div style={{
                                color: "#ffc400",
                                fontFamily: "sans-serif",
                                fontSize: 12,
                                fontWeight: 700,
                                textTransform: "uppercase",
                                letterSpacing: "0.12em",
                                marginBottom: 18,
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                            }}>
                                {/* Gold dot accent */}
                                <span style={{
                                    display: "inline-block",
                                    width: 6, height: 6, borderRadius: "50%",
                                    background: "#ffc400",
                                    flexShrink: 0,
                                }} />
                                {column.title}
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                {column.links.map((link, index) => (
                                    <Link
                                        key={index}
                                        to={link.to}
                                        className="footer-link"
                                        style={{
                                            color: "rgba(192,132,252,0.5)",
                                            fontFamily: "sans-serif",
                                            fontSize: 13,
                                            textDecoration: "none",
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div style={{
                    borderTop: "1px solid rgba(124,58,237,0.15)",
                    paddingTop: 24,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 8,
                }} >
                    <div style={{ color: "rgba(192,132,252,0.3)", fontFamily: "sans-serif", fontSize: 12 }}>
                        © 2024 Chintamani Digital, Latur. All rights reserved.
                    </div>
                    <div style={{ color: "rgba(192,132,252,0.3)", fontFamily: "sans-serif", fontSize: 12 }}>
                        Made with <span style={{ color: "#ffc400" }}>❤️</span> by Nikhil.Dev in Latur
                    </div>
                </div>
            </div>
        </footer>
    );
};
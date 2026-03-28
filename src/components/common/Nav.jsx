import React, { useState } from "react";
import { Link } from "./Link";
import { useRoute } from "../../hooks/userRoutes";
import { NAV_LINKS } from "../../utils/constants";

const NavStyles = () => (
   <div style={{
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)",
}} />
);

export const Nav = () => {
    const route = useRoute();
    const [isOpen, setIsOpen] = useState(false);

    const getLinkStyle = (to) => ({
        color: route === to ? "#ffc400" : "#aaa",
        background: route === to ? "rgba(212,175,55,0.1)" : "transparent",
        borderRadius: "4px",
        fontFamily: "sans-serif",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        fontSize: "12px",
        border: route === to ? "1px solid rgba(212,175,55,0.25)" : "1px solid transparent",
    });

    return (
        <nav
            style={{
                background: "rgba(14,8,24,0.92)",
                borderBottom: "1px solid rgba(124,58,237,0.3)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
            }}
        >
            <NavStyles />

            {/* Glossy top sheen on nav */}
            <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "50%",
                background: "linear-gradient(180deg, rgba(160,100,255,0.06) 0%, transparent 100%)",
                pointerEvents: "none",
            }} />

            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16"
                style={{ position: "relative", zIndex: 1 }}>

                {/* Logo */}
                <Link to="#home" className="flex items-center gap-2 no-underline">
                    <div style={{
                        background: "linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)",
                        width: 36, height: 36,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        borderRadius: 6,
                        boxShadow: "0 2px 12px rgba(124,58,237,0.45)",
                        position: "relative", overflow: "hidden",
                    }}>
                        {/* Logo gloss */}
                        <div style={{
                            position: "absolute", top: 0, left: 0, right: 0, height: "50%",
                            background: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 100%)",
                            pointerEvents: "none",
                        }} />
                        <span style={{ color: "white", fontWeight: 900, fontSize: 16, fontFamily: "serif", position: "relative", zIndex: 1 }}>
                            CM
                        </span>
                    </div>
                    <span style={{
                        color: "white", fontWeight: 800, fontSize: 18,
                        fontFamily: "'Georgia', serif", letterSpacing: "0.05em",
                    }}>
                        CHINTAMANI<span style={{ color: "#ffc400" }}>DIGITAL</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.to} to={link.to}
                            className="nav-link px-4 py-2 text-sm font-medium no-underline"
                            style={getLinkStyle(link.to)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        to="#order"
                        className="quote-btn"
                        style={{
                            background: "linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #6D28D9 100%)",
                            color: "white",
                            padding: "8px 20px",
                            borderRadius: 4,
                            fontFamily: "sans-serif",
                            fontWeight: 700,
                            fontSize: 12,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            textDecoration: "none",
                            marginLeft: 8,
                            boxShadow: "0 2px 14px rgba(124,58,237,0.4)",
                        }}
                    >
                        Get Quote
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}
                >
                    {[
                        { transform: isOpen ? "rotate(45deg) translate(5px, 5px)" : "none", color: isOpen ? "#ffc400" : "white" },
                        { opacity: isOpen ? 0 : 1, color: "white" },
                        { transform: isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none", color: isOpen ? "#ffc400" : "white" },
                    ].map((bar, i) => (
                        <div key={i} style={{
                            width: 24, height: 2,
                            background: bar.color,
                            marginBottom: i < 2 ? 5 : 0,
                            transition: "all 0.3s",
                            ...bar,
                        }} />
                    ))}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div style={{
                    background: "rgba(14,8,24,0.97)",
                    borderTop: "1px solid rgba(124,58,237,0.2)",
                    padding: "12px 16px",
                    position: "relative",
                }}>
                    <div style={{
                        position: "absolute", top: 0, left: 0, right: 0, height: "40%",
                        background: "linear-gradient(180deg, rgba(124,58,237,0.05) 0%, transparent 100%)",
                        pointerEvents: "none",
                    }} />
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.to} to={link.to}
                            className="mobile-link"
                            onClick={() => setIsOpen(false)}
                            style={{
                                display: "block",
                                color: route === link.to ? "#ffc400" : "#aaa",
                                padding: "11px 0",
                                textDecoration: "none",
                                fontFamily: "sans-serif",
                                fontSize: "13px",
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                                borderBottom: "1px solid rgba(124,58,237,0.12)",
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        to="#order"
                        onClick={() => setIsOpen(false)}
                        style={{
                            display: "block",
                            marginTop: 12,
                            background: "linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #6D28D9 100%)",
                            color: "white",
                            padding: "12px",
                            borderRadius: 4,
                            textAlign: "center",
                            fontFamily: "sans-serif",
                            fontWeight: 700,
                            fontSize: 13,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            textDecoration: "none",
                            boxShadow: "0 2px 14px rgba(124,58,237,0.4)",
                        }}
                    >
                        Get Quote
                    </Link>
                </div>
            )}
        </nav>
    );
};
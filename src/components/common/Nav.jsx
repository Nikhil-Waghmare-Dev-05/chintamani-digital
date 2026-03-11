import React, { useState } from "react";
import { Link } from "./Link";
import { useRoute } from "../../hooks/userRoutes";
import { NAV_LINKS } from "../../utils/constants";

export const Nav = () => {
    const route = useRoute();
    const [isOpen, setIsOpen] = useState(false);

    const getLinkStyle = (to) => ({
        color: route === to ? "#FF6B35" : "#ccc",
        background: route === to ? "rgba(255,107,53,0.1)" : "transparent",
        borderRadius: "4px",
        fontFamily: "sans-serif",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        fontSize: "12px",
    });

    const mobileLinkStyle = {
        display: "block",
        color: "#ccc",
        padding: "10px 0",
        textDecoration: "none",
        fontFamily: "sans-serif",
        fontSize: "13px",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        borderBottom: "1px solid #1a1a1a",
    };

    return (
        <nav
            style={{ background: "#0a0a0a", borderBottom: "1px solid #FF6B35" }}
            className="fixed top-0 left-0 right-0 z-50"
        >
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
                <Link to="#home" className="flex items-center gap-2 no-underline">
                    <div
                        style={{
                            background: "#FF6B35",
                            width: 36,
                            height: 36,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 4,
                        }}
                    >
                        <span style={{ color: "white", fontWeight: 900, fontSize: 18, fontFamily: "serif" }}>CM</span>
                    </div>
                    <span
                        style={{
                            color: "white",
                            fontWeight: 800,
                            fontSize: 18,
                            fontFamily: "'Georgia', serif",
                            letterSpacing: "0.05em",
                        }}
                    >
                        CHINTAMANI<span style={{ color: "#FF6B35" }}>DIGITAL</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                    {NAV_LINKS.map((link) => (
                        <Link key={link.to} to={link.to} className="px-4 py-2 text-sm font-medium no-underline transition-all" style={getLinkStyle(link.to)}>
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        to="#order"
                        style={{
                            background: "#FF6B35",
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
                    <div
                        style={{
                            width: 24,
                            height: 2,
                            background: isOpen ? "#FF6B35" : "white",
                            marginBottom: 5,
                            transition: "all 0.3s",
                            transform: isOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
                        }}
                    />
                    <div
                        style={{
                            width: 24,
                            height: 2,
                            background: "white",
                            marginBottom: 5,
                            opacity: isOpen ? 0 : 1,
                            transition: "all 0.3s",
                        }}
                    />
                    <div
                        style={{
                            width: 24,
                            height: 2,
                            background: isOpen ? "#FF6B35" : "white",
                            transition: "all 0.3s",
                            transform: isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
                        }}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div style={{ background: "#111", borderTop: "1px solid #222", padding: "12px 16px" }}>
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            onClick={() => setIsOpen(false)}
                            style={{
                                ...mobileLinkStyle,
                                color: route === link.to ? "#FF6B35" : "#ccc",
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};
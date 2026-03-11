import React from "react";
import { Link } from "./Link";
import { COMPANY_INFO, NAV_LINKS } from "../../utils/constants";

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
        { to: "#contact", label: "Khori Galli,Latur" },
      ],
    },
  ];

  return (
    <footer style={{ background: "#050505", borderTop: "1px solid #1a1a1a", padding: "48px 0 24px" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div
                style={{
                  background: "#FF6B35",
                  width: 32,
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 4,
                }}
              >
                <span style={{ color: "white", fontWeight: 900, fontSize: 16, fontFamily: "serif" }}>F</span>
              </div>
              <span style={{ color: "white", fontWeight: 800, fontSize: 16, fontFamily: "'Georgia', serif" }}>
                FLEX<span style={{ color: "#FF6B35" }}>PRINT</span>
              </span>
            </div>
            <p style={{ color: "#555", fontFamily: "sans-serif", fontSize: 13, lineHeight: 1.7 }}>
              {COMPANY_INFO.tagline}
            </p>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <div
                style={{
                  color: "#FF6B35",
                  fontFamily: "sans-serif",
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  marginBottom: 16,
                }}
              >
                {column.title}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {column.links.map((link, index) => (
                  <Link
                    key={index}
                    to={link.to}
                    style={{ color: "#666", fontFamily: "sans-serif", fontSize: 13, textDecoration: "none" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: "1px solid #1a1a1a",
            paddingTop: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <div style={{ color: "#444", fontFamily: "sans-serif", fontSize: 12 }}>
            © 2024 Chintamani Digital,Latur. All rights reserved.
          </div>
          <div style={{ color: "#444", fontFamily: "sans-serif", fontSize: 12 }}>Made with Nikhil.Dev ❤️ in Latur</div>
        </div>
      </div>
    </footer>
  );
};
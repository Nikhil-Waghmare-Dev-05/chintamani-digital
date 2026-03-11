import React from "react";
import PropTypes from "prop-types";

const illustrations = {
    flex: (
        <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="flexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6B35" />
                    <stop offset="100%" stopColor="#F7C59F" />
                </linearGradient>
            </defs>
            <rect width="300" height="200" fill="#1a1a2e" rx="8" />
            <rect x="20" y="20" width="260" height="160" fill="#16213e" rx="4" />
            <rect x="40" y="40" width="220" height="120" fill="url(#flexGrad)" rx="2" opacity="0.9" />
            <text x="150" y="95" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="serif">
                STAR FLEX
            </text>
            <text x="150" y="115" textAnchor="middle" fill="white" fontSize="11" fontFamily="sans-serif" opacity="0.8">
                Premium Outdoor Banner
            </text>
            <rect x="30" y="170" width="10" height="20" fill="#555" />
            <rect x="260" y="170" width="10" height="20" fill="#555" />
        </svg>
    ),
    vinyl: (
        <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="vinylGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00B4D8" />
                    <stop offset="100%" stopColor="#0077B6" />
                </linearGradient>
            </defs>
            <rect width="300" height="200" fill="#0d1b2a" rx="8" />
            <ellipse cx="150" cy="100" rx="80" ry="80" fill="url(#vinylGrad)" />
            <ellipse cx="150" cy="100" rx="60" ry="60" fill="#0d1b2a" />
            <ellipse cx="150" cy="100" rx="40" ry="40" fill="url(#vinylGrad)" opacity="0.6" />
            <ellipse cx="150" cy="100" rx="10" ry="10" fill="#0d1b2a" />
            <text x="150" y="185" textAnchor="middle" fill="#00B4D8" fontSize="12" fontFamily="sans-serif">
                VINYL STICKER
            </text>
        </svg>
    ),
    backlit: (
        <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="backlitGlow" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#FFD700" stopOpacity="1" />
                    <stop offset="60%" stopColor="#FF8C00" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FF4500" stopOpacity="0.3" />
                </radialGradient>
            </defs>
            <rect width="300" height="200" fill="#111" rx="8" />
            <rect x="30" y="30" width="240" height="140" fill="#1a1a1a" rx="4" stroke="#333" strokeWidth="1" />
            <rect x="40" y="40" width="220" height="120" fill="url(#backlitGlow)" rx="2" opacity="0.85" />
            <rect x="50" y="50" width="200" height="100" fill="none" stroke="white" strokeWidth="1" opacity="0.2" rx="1" />
            <text x="150" y="95" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="serif">
                BACKLIT
            </text>
            <text x="150" y="115" textAnchor="middle" fill="white" fontSize="10" fontFamily="sans-serif" opacity="0.9">
                Illuminated Display
            </text>
            {[60, 90, 120, 150, 180, 210, 240].map((x, i) => (
                <line key={i} x1={x} y1="160" x2={x} y2="175" stroke="#FFD700" strokeWidth="1" opacity="0.4" />
            ))}
        </svg>
    ),
    sunpack: (
        <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="sunpackGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2DC653" />
                    <stop offset="50%" stopColor="#F72585" />
                    <stop offset="100%" stopColor="#7209B7" />
                </linearGradient>
            </defs>
            <rect width="300" height="200" fill="#0f0e17" rx="8" />
            <rect x="25" y="35" width="250" height="130" fill="url(#sunpackGrad)" rx="3" />
            <rect x="35" y="45" width="230" height="110" fill="white" opacity="0.08" rx="2" />
            <text x="150" y="90" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="serif">
                SUNPACK BOARD
            </text>
            <text x="150" y="110" textAnchor="middle" fill="white" fontSize="10" fontFamily="sans-serif" opacity="0.85">
                Rigid Indoor Signage
            </text>
            <circle cx="60" cy="165" r="5" fill="#555" />
            <circle cx="240" cy="165" r="5" fill="#555" />
        </svg>
    ),
    hero: (
        <svg viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6B35" />
                    <stop offset="100%" stopColor="#F7C59F" />
                </linearGradient>
                <linearGradient id="heroGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00B4D8" />
                    <stop offset="100%" stopColor="#0077B6" />
                </linearGradient>
            </defs>
            <rect width="600" height="350" fill="#0d0d0d" rx="12" />
            <rect x="30" y="30" width="350" height="180" fill="url(#heroGrad)" rx="4" />
            <text x="205" y="110" textAnchor="middle" fill="white" fontSize="28" fontWeight="bold" fontFamily="serif">
                YOUR BRAND
            </text>
            <text x="205" y="140" textAnchor="middle" fill="white" fontSize="14" fontFamily="sans-serif" opacity="0.9">
                High-Impact Flex Printing
            </text>
            <rect x="400" y="30" width="170" height="280" fill="url(#heroGrad2)" rx="4" />
            <text
                x="485"
                y="165"
                textAnchor="middle"
                fill="white"
                fontSize="14"
                fontWeight="bold"
                fontFamily="serif"
                transform="rotate(-90, 485, 165)"
            >
                VERTICAL BANNER
            </text>
            <rect x="30" y="230" width="350" height="80" fill="#1a1a1a" rx="4" />
            <rect x="40" y="240" width="100" height="60" fill="#FF6B35" rx="3" opacity="0.7" />
            <rect x="155" y="240" width="100" height="60" fill="#00B4D8" rx="3" opacity="0.7" />
            <rect x="270" y="240" width="100" height="60" fill="#2DC653" rx="3" opacity="0.7" />
            <rect x="30" y="320" width="540" height="4" fill="#333" rx="2" />
        </svg>
    ),
};

/**
 * Print illustration component
 * @param {Object} props - Component props
 * @param {string} props.type - Illustration type
 * @param {string} props.className - Additional CSS classes
 */
export const PrintIllustration = ({ type, className }) => {
    return illustrations[type] || illustrations.flex;
};

PrintIllustration.propTypes = {
    type: PropTypes.oneOf(["flex", "vinyl", "backlit", "sunpack", "hero"]),
    className: PropTypes.string,
};

PrintIllustration.defaultProps = {
    type: "flex",
    className: "",
};
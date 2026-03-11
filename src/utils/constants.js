export const ROUTES = {
    HOME: "#home",
    ABOUT: "#about",
    SERVICES: "#services",
    ORDER: "#order",
    CONTACT: "#contact",
};

export const COMPANY_INFO = {
    name: "Chintamani Digital Latur",
    fullName: "CHINTAMANI DIGITAL",
    tagline: "Latur's Trusted Flex Printing Press Since 2014",
    founded: 2014,
    phone: ["+91 9960245719", "+91 9405421667"],
    email: "chintamanidigitalltr@gmail.com",
    address: "Chhatrapati Shivaji Maharaj Chowk, Latur, Maharashtra 413512",
    hours: {
        weekdays: "10:00 AM – 9:00 PM",
        saturday: "10:00 AM – 9:00 PM",
        sunday: "10:00 AM – 4:00 PM",
    },
    social: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
    },
};

export const NAV_LINKS = [
    { to: ROUTES.HOME, label: "Home" },
    { to: ROUTES.ABOUT, label: "About" },
    { to: ROUTES.SERVICES, label: "Services" },
    { to: ROUTES.ORDER, label: "Order Flex" },
    { to: ROUTES.CONTACT, label: "Contact" },
];

export const STATS = [
    { value: "10+", label: "Years Experience" },
    { value: "5000+", label: "Happy Clients" },
    { value: "50+", label: "Products" },
    { value: "24hr", label: "Turnaround" },
];

export const FEATURES = [
    {
        icon: "🖨️",
        title: "HD Printing",
        description: "Ultra-high resolution prints at 1440 DPI for crystal-clear visuals.",
    },
    {
        icon: "☀️",
        title: "UV Resistant",
        description: "Inks that withstand harsh sunlight and outdoor conditions for years.",
    },
    {
        icon: "⚡",
        title: "Fast Delivery",
        description: "Same-day and next-day options for urgent requirements.",
    },
    {
        icon: "💰",
        title: "Best Rates",
        description: "Competitive wholesale pricing with no compromise on quality.",
    },
];

export const QUALITY_PROMISES = [
    {
        icon: "🎨",
        title: "Color Accuracy",
        description: "Pantone-matched colors with ICC profile calibration on every job.",
    },
    {
        icon: "🔬",
        title: "Quality Check",
        description: "Every print inspected under controlled lighting before dispatch.",
    },
    {
        icon: "♻️",
        title: "Eco Inks",
        description: "Solvent-free, eco-friendly inks that are safe for indoor use.",
    },
];
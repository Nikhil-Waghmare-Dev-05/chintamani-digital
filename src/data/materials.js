export const MATERIALS = [
    {
        id: "star_flex",
        label: "Star Flex",
        basePrice: 20,
        description: "Heavy-duty outdoor",
        category: "outdoor",
    },
    {
        id: "vinyl",
        label: "Vinyl Sticker",
        basePrice: 35,
        description: "Glossy/matte finish",
        category: "sticker",
    },
    {
        id: "backlit",
        label: "Backlit Flex",
        basePrice: 45,
        description: "Illuminated display",
        category: "specialty",
    },
    {
        id: "sunpack",
        label: "Sunpack Board",
        basePrice: 25,
        description: "Rigid indoor board",
        category: "rigid",
    },
    {
        id: "one_way",
        label: "One-Way Vision",
        basePrice: 55,
        description: "Perforated window vinyl",
        category: "specialty",
    },
];

export const FINISHES = [
    { id: "none", label: "No Finish", multiplier: 1 },
    { id: "matte_lam", label: "Matte Lamination", multiplier: 1.25 },
    { id: "gloss_lam", label: "Gloss Lamination", multiplier: 1.2 },
    { id: "uv_coat", label: "UV Coating", multiplier: 1.35 },
];

export const URGENCY_OPTIONS = [
    { id: "standard", label: "Standard", time: "3-5 days", multiplier: 1, description: "Normal rates" },
    { id: "express", label: "Express", time: "1-2 days", multiplier: 1.5, description: "+50% charge" },
    { id: "sameday", label: "Same Day", time: "Today", multiplier: 2, description: "+100% charge" },
];

export const QUANTITIES = [1, 2, 5, 10, 25, 50, 100];
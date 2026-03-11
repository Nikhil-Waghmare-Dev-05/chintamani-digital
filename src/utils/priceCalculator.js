/**
 * Utility functions for price calculation
 */

/**
 * Convert dimensions to feet
 * @param {number} value - Dimension value
 * @param {string} unit - Unit of measurement (feet/inches/meters)
 * @returns {number} Dimension in feet
 */
export const convertToFeet = (value, unit) => {
    if (!value || isNaN(value)) return 0;

    switch (unit) {
        case "inches":
            return value / 12;
        case "meters":
            return value * 3.281;
        case "feet":
        default:
            return value;
    }
};

/**
 * Calculate total area
 * @param {number} width - Width in feet
 * @param {number} height - Height in feet
 * @returns {number} Area in square feet
 */
export const calculateArea = (width, height) => {
    return width * height;
};

/**
 * Calculate base price
 * @param {number} area - Area in square feet
 * @param {number} basePrice - Price per square foot
 * @param {number} finishMultiplier - Finish multiplier
 * @returns {number} Base price
 */
export const calculateBasePrice = (area, basePrice, finishMultiplier) => {
    return area * basePrice * finishMultiplier;
};

/**
 * Calculate eyelet cost
 * @param {number} width - Width in feet
 * @param {number} height - Height in feet
 * @param {boolean} hasEyelets - Whether eyelets are included
 * @returns {number} Eyelet cost
 */
export const calculateEyeletCost = (width, height, hasEyelets) => {
    if (!hasEyelets || width <= 0 || height <= 0) return 0;
    const perimeter = 2 * (width + height);
    const eyeletCount = Math.ceil(perimeter);
    return eyeletCount * 2;
};

/**
 * Calculate hemming cost
 * @param {number} width - Width in feet
 * @param {number} height - Height in feet
 * @param {boolean} hasHemming - Whether hemming is included
 * @returns {number} Hemming cost
 */
export const calculateHemmingCost = (width, height, hasHemming) => {
    if (!hasHemming || width <= 0 || height <= 0) return 0;
    const perimeter = 2 * (width + height);
    return Math.ceil(perimeter) * 5;
};

/**
 * Calculate total cost
 * @param {Object} params - Calculation parameters
 * @returns {Object} Cost breakdown and total
 */
export const calculateTotalCost = ({
    material,
    width,
    height,
    unit,
    quantity,
    finish,
    eyelets,
    hemming,
    urgency,
}) => {
    const widthInFeet = convertToFeet(width, unit);
    const heightInFeet = convertToFeet(height, unit);
    const area = calculateArea(widthInFeet, heightInFeet);

    const basePrice = material.basePrice;
    const finishMultiplier = finish.multiplier;
    const urgencyMultiplier = urgency.multiplier;

    const baseTotal = calculateBasePrice(area, basePrice, finishMultiplier);
    const eyeletCost = calculateEyeletCost(widthInFeet, heightInFeet, eyelets);
    const hemmingCost = calculateHemmingCost(widthInFeet, heightInFeet, hemming);

    const perPieceCost = (baseTotal + eyeletCost + hemmingCost) * urgencyMultiplier;
    const totalCost = perPieceCost * quantity;

    return {
        area: area.toFixed(2),
        widthFeet: widthInFeet.toFixed(2),
        heightFeet: heightInFeet.toFixed(2),
        baseTotal: baseTotal.toFixed(0),
        eyeletCost: eyeletCost.toFixed(0),
        hemmingCost: hemmingCost.toFixed(0),
        perPieceCost: perPieceCost.toFixed(0),
        totalCost: totalCost.toFixed(0),
        hasValidDimensions: widthInFeet > 0 && heightInFeet > 0,
    };
};
import React, { useState } from "react";
import { MATERIALS, FINISHES, URGENCY_OPTIONS, QUANTITIES } from "../../data/materials";
import { calculateTotalCost } from "../../utils/priceCalculator";

export const Order = () => {
    const [orderType, setOrderType] = useState("retail"); // "retail" or "dealer"

    const [formData, setFormData] = useState({
        // Common fields
        material: MATERIALS[0].id,
        width: "",
        height: "",
        unit: "feet",
        quantity: 1,
        finish: FINISHES[0].id,
        eyelets: false,
        hemming: false,
        urgency: URGENCY_OPTIONS[0].id,

        // Retail fields
        name: "",
        phone: "",
        notes: "",

        // Dealer fields
        dealerName: "",
        dealerCode: "",
        companyName: "",
        gstNumber: "",
        dealerPhone: "",
        dealerEmail: "",
        dealerNotes: "",
        file: null,
        fileName: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [dealerDiscount] = useState(15);

    const getMaterial = () => MATERIALS.find((m) => m.id === formData.material);
    const getFinish = () => FINISHES.find((f) => f.id === formData.finish);
    const getUrgency = () => URGENCY_OPTIONS.find((u) => u.id === formData.urgency);

    const handleChange = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({
                ...prev,
                file: file,
                fileName: file.name,
            }));
        }
    };

    const calculate = () => {
        const material = getMaterial();
        const finish = getFinish();
        const urgency = getUrgency();

        const baseCalculation = calculateTotalCost({
            material,
            width: parseFloat(formData.width) || 0,
            height: parseFloat(formData.height) || 0,
            unit: formData.unit,
            quantity: formData.quantity,
            finish,
            eyelets: formData.eyelets,
            hemming: formData.hemming,
            urgency,
        });

        // Apply dealer discount if applicable
        if (orderType === "dealer") {
            const total = parseFloat(baseCalculation.totalCost);
            const discountedTotal = total - (total * dealerDiscount / 100);
            return {
                ...baseCalculation,
                totalCost: discountedTotal.toFixed(0),
                originalTotal: baseCalculation.totalCost,
                discountAmount: (total * dealerDiscount / 100).toFixed(0),
                discountPercentage: dealerDiscount,
            };
        }

        return baseCalculation;
    };

    const handleSubmit = () => {
        // Validation based on order type
        if (orderType === "retail") {
            if (!formData.name || !formData.phone) {
                alert("Please fill in your name and phone number.");
                return;
            }
        } else {
            if (!formData.dealerName || !formData.dealerPhone || !formData.dealerCode) {
                alert("Please fill in dealer name, phone number, and dealer code.");
                return;
            }
            if (!formData.file) {
                alert("Please upload the design file.");
                return;
            }
        }

        const { hasValidDimensions } = calculate();
        if (!hasValidDimensions) {
            alert("Please enter valid dimensions.");
            return;
        }

        // Here you would typically upload the file to a server
        if (orderType === "dealer" && formData.file) {
            console.log("File to upload:", formData.file);
            // Add file upload logic here
        }

        setSubmitted(true);
    };

    const inputStyle = {
        background: "#111",
        border: "1px solid #333",
        borderRadius: 6,
        color: "white",
        padding: "10px 14px",
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

    if (submitted) {
        const calculation = calculate();
        const totalCost = calculation.totalCost;

        return (
            <div className="pt-20 min-h-screen bg-dark-100 flex items-center justify-center">
                <div style={{ textAlign: "center", maxWidth: 480, padding: 40 }}>
                    <div style={{ fontSize: 64, marginBottom: 24 }}>✅</div>
                    <h2
                        style={{
                            fontFamily: "'Georgia', serif",
                            fontSize: 32,
                            fontWeight: 900,
                            color: "white",
                            marginBottom: 16,
                        }}
                    >
                        Order Submitted!
                    </h2>
                    <p
                        style={{
                            color: "#888",
                            fontFamily: "sans-serif",
                            lineHeight: 1.7,
                            marginBottom: 32,
                        }}
                    >
                        Thank you! {orderType === "dealer" ? "Our dealer support team" : "We"} will contact you within 30 minutes to confirm details and
                        payment.
                        {orderType === "dealer" && formData.file && " Your design file has been received."}
                    </p>
                    <div
                        style={{
                            background: "#1a1a1a",
                            border: "1px solid #FF6B35",
                            borderRadius: 8,
                            padding: 20,
                            marginBottom: 32,
                        }}
                    >
                        <div style={{ color: "#888", fontSize: 13, fontFamily: "sans-serif", marginBottom: 4 }}>
                            Estimated Total
                        </div>
                        <div
                            style={{
                                color: "#FF6B35",
                                fontSize: 36,
                                fontFamily: "'Georgia', serif",
                                fontWeight: 900,
                            }}
                        >
                            ₹{totalCost}
                        </div>
                        {orderType === "dealer" && calculation.discountAmount && (
                            <div style={{ color: "#4CAF50", fontSize: 14, fontFamily: "sans-serif", marginTop: 8 }}>
                                You saved: ₹{calculation.discountAmount} ({calculation.discountPercentage}% dealer discount)
                            </div>
                        )}
                    </div>
                    <button
                        onClick={() => {
                            setSubmitted(false);
                            setOrderType("retail");
                        }}
                        style={{
                            background: "#FF6B35",
                            color: "white",
                            border: "none",
                            padding: "12px 32px",
                            borderRadius: 4,
                            cursor: "pointer",
                            fontFamily: "sans-serif",
                            fontWeight: 700,
                            fontSize: 14,
                        }}
                    >
                        Place Another Order
                    </button>
                </div>
            </div>
        );
    }

    const calculation = calculate();
    const { totalCost, hasValidDimensions } = calculation;

    return (
        <div style={{ paddingTop: 80, background: "#0a0a0a", minHeight: "100vh" }}>
            <section
                style={{ background: "linear-gradient(to bottom, #1a0a00, #0a0a0a)" }}
                className="py-12 md:py-16"
            >
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1
                        style={{
                            fontFamily: "'Georgia', serif",
                            fontSize: "clamp(32px, 5vw, 42px)",
                            fontWeight: 900,
                            color: "white",
                            marginBottom: 12,
                        }}
                    >
                        Order <span style={{ color: "#FF6B35" }}>Flex Print</span>
                    </h1>
                    <p style={{ color: "#888", fontFamily: "sans-serif", fontSize: 15 }}>
                        Fill in your requirements below — get an instant price estimate.
                    </p>
                </div>
            </section>

            <section className="py-12 md:py-20">
                <div className="max-w-5xl mx-auto px-4">
                    {/* Order Type Toggle */}
                    <div style={{ marginBottom: 24, display: "flex", justifyContent: "center" }}>
                        <div style={{
                            display: "inline-flex",
                            background: "#111",
                            border: "1px solid #333",
                            borderRadius: 50,
                            padding: 4,
                        }}>
                            <button
                                onClick={() => setOrderType("retail")}
                                style={{
                                    padding: "10px 30px",
                                    borderRadius: 50,
                                    border: "none",
                                    cursor: "pointer",
                                    fontFamily: "sans-serif",
                                    fontWeight: 600,
                                    fontSize: 14,
                                    background: orderType === "retail" ? "#FF6B35" : "transparent",
                                    color: orderType === "retail" ? "white" : "#888",
                                    transition: "all 0.3s",
                                }}
                            >
                                Retail Customer
                            </button>
                            <button
                                onClick={() => setOrderType("dealer")}
                                style={{
                                    padding: "10px 30px",
                                    borderRadius: 50,
                                    border: "none",
                                    cursor: "pointer",
                                    fontFamily: "sans-serif",
                                    fontWeight: 600,
                                    fontSize: 14,
                                    background: orderType === "dealer" ? "#FF6B35" : "transparent",
                                    color: orderType === "dealer" ? "white" : "#888",
                                    transition: "all 0.3s",
                                }}
                            >
                                Dealer
                            </button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Form */}
                        <div className="md:col-span-2" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                            {/* Material Selection */}
                            <div style={{ background: "#111", border: "1px solid #222", borderRadius: 10, padding: 24 }}>
                                <h3
                                    style={{
                                        color: "white",
                                        fontFamily: "'Georgia', serif",
                                        fontSize: 20,
                                        fontWeight: 700,
                                        marginBottom: 16,
                                    }}
                                >
                                    1. Select Material
                                </h3>
                                <div className="grid grid-cols-1 gap-3">
                                    {MATERIALS.map((material) => (
                                        <label key={material.id} style={{ cursor: "pointer" }}>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 12,
                                                    background: formData.material === material.id ? "rgba(255,107,53,0.1)" : "#1a1a1a",
                                                    border: `1px solid ${formData.material === material.id ? "#FF6B35" : "#2a2a2a"}`,
                                                    borderRadius: 8,
                                                    padding: "12px 16px",
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    name="material"
                                                    value={material.id}
                                                    checked={formData.material === material.id}
                                                    onChange={(e) => handleChange("material", e.target.value)}
                                                    style={{ accentColor: "#FF6B35" }}
                                                />
                                                <div style={{ flex: 1 }}>
                                                    <div style={{ color: "white", fontFamily: "sans-serif", fontWeight: 600, fontSize: 14 }}>
                                                        {material.label}
                                                    </div>
                                                    <div style={{ color: "#666", fontFamily: "sans-serif", fontSize: 12 }}>
                                                        {material.description}
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        color: "#FF6B35",
                                                        fontFamily: "'Georgia', serif",
                                                        fontWeight: 700,
                                                        fontSize: 16,
                                                    }}
                                                >
                                                    ₹{material.basePrice}/sqft
                                                </div>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Dimensions */}
                            <div style={{ background: "#111", border: "1px solid #222", borderRadius: 10, padding: 24 }}>
                                <h3
                                    style={{
                                        color: "white",
                                        fontFamily: "'Georgia', serif",
                                        fontSize: 20,
                                        fontWeight: 700,
                                        marginBottom: 16,
                                    }}
                                >
                                    2. Enter Dimensions
                                </h3>
                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <label style={labelStyle}>Width</label>
                                        <input
                                            type="number"
                                            placeholder="e.g. 4"
                                            value={formData.width}
                                            onChange={(e) => handleChange("width", e.target.value)}
                                            style={inputStyle}
                                            min="0"
                                            step="0.1"
                                        />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Height</label>
                                        <input
                                            type="number"
                                            placeholder="e.g. 3"
                                            value={formData.height}
                                            onChange={(e) => handleChange("height", e.target.value)}
                                            style={inputStyle}
                                            min="0"
                                            step="0.1"
                                        />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Unit</label>
                                        <select
                                            value={formData.unit}
                                            onChange={(e) => handleChange("unit", e.target.value)}
                                            style={inputStyle}
                                        >
                                            <option value="feet">Feet</option>
                                            <option value="inches">Inches</option>
                                            <option value="meters">Meters</option>
                                        </select>
                                    </div>
                                </div>
                                {hasValidDimensions && (
                                    <div
                                        style={{
                                            marginTop: 12,
                                            background: "rgba(255,107,53,0.08)",
                                            border: "1px solid rgba(255,107,53,0.2)",
                                            borderRadius: 6,
                                            padding: "10px 16px",
                                            color: "#FF6B35",
                                            fontFamily: "sans-serif",
                                            fontSize: 13,
                                        }}
                                    >
                                        Area: {calculation.area} sq.ft
                                    </div>
                                )}
                            </div>

                            {/* Quantity & Finish */}
                            <div style={{ background: "#111", border: "1px solid #222", borderRadius: 10, padding: 24 }}>
                                <h3
                                    style={{
                                        color: "white",
                                        fontFamily: "'Georgia', serif",
                                        fontSize: 20,
                                        fontWeight: 700,
                                        marginBottom: 16,
                                    }}
                                >
                                    3. Quantity & Finish
                                </h3>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label style={labelStyle}>Quantity</label>
                                        <select
                                            value={formData.quantity}
                                            onChange={(e) => handleChange("quantity", parseInt(e.target.value))}
                                            style={inputStyle}
                                        >
                                            {QUANTITIES.map((q) => (
                                                <option key={q} value={q}>
                                                    {q} {q === 1 ? "piece" : "pieces"}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Finish / Lamination</label>
                                        <select
                                            value={formData.finish}
                                            onChange={(e) => handleChange("finish", e.target.value)}
                                            style={inputStyle}
                                        >
                                            {FINISHES.map((f) => (
                                                <option key={f.id} value={f.id}>
                                                    {f.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <label
                                        style={{
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 10,
                                            background: "#1a1a1a",
                                            border: `1px solid ${formData.eyelets ? "#FF6B35" : "#2a2a2a"}`,
                                            borderRadius: 8,
                                            padding: "12px 16px",
                                        }}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={formData.eyelets}
                                            onChange={(e) => handleChange("eyelets", e.target.checked)}
                                            style={{ accentColor: "#FF6B35", width: 16, height: 16 }}
                                        />
                                        <div>
                                            <div style={{ color: "white", fontFamily: "sans-serif", fontSize: 13, fontWeight: 600 }}>
                                                Eyelets / Grommets
                                            </div>
                                            <div style={{ color: "#666", fontSize: 11, fontFamily: "sans-serif" }}>₹2 per eyelet</div>
                                        </div>
                                    </label>
                                    <label
                                        style={{
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 10,
                                            background: "#1a1a1a",
                                            border: `1px solid ${formData.hemming ? "#FF6B35" : "#2a2a2a"}`,
                                            borderRadius: 8,
                                            padding: "12px 16px",
                                        }}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={formData.hemming}
                                            onChange={(e) => handleChange("hemming", e.target.checked)}
                                            style={{ accentColor: "#FF6B35", width: 16, height: 16 }}
                                        />
                                        <div>
                                            <div style={{ color: "white", fontFamily: "sans-serif", fontSize: 13, fontWeight: 600 }}>
                                                Hemming / Stitching
                                            </div>
                                            <div style={{ color: "#666", fontSize: 11, fontFamily: "sans-serif" }}>₹5 per running ft</div>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            {/* Urgency */}
                            <div style={{ background: "#111", border: "1px solid #222", borderRadius: 10, padding: 24 }}>
                                <h3
                                    style={{
                                        color: "white",
                                        fontFamily: "'Georgia', serif",
                                        fontSize: 20,
                                        fontWeight: 700,
                                        marginBottom: 16,
                                    }}
                                >
                                    4. Delivery Speed
                                </h3>
                                <div className="grid grid-cols-3 gap-3">
                                    {URGENCY_OPTIONS.map((option) => (
                                        <label key={option.id} style={{ cursor: "pointer" }}>
                                            <div
                                                style={{
                                                    background: formData.urgency === option.id ? "rgba(255,107,53,0.1)" : "#1a1a1a",
                                                    border: `1px solid ${formData.urgency === option.id ? "#FF6B35" : "#2a2a2a"}`,
                                                    borderRadius: 8,
                                                    padding: "14px 12px",
                                                    textAlign: "center",
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    name="urgency"
                                                    value={option.id}
                                                    checked={formData.urgency === option.id}
                                                    onChange={(e) => handleChange("urgency", e.target.value)}
                                                    style={{ display: "none" }}
                                                />
                                                <div style={{ color: "white", fontFamily: "sans-serif", fontWeight: 700, fontSize: 14 }}>
                                                    {option.label}
                                                </div>
                                                <div style={{ color: "#FF6B35", fontFamily: "sans-serif", fontSize: 12, margin: "4px 0" }}>
                                                    {option.time}
                                                </div>
                                                <div style={{ color: "#666", fontFamily: "sans-serif", fontSize: 11 }}>
                                                    {option.description}
                                                </div>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Customer Details - Conditional based on order type */}
                            {orderType === "retail" ? (
                                /* Retail Customer Details */
                                <div style={{ background: "#111", border: "1px solid #222", borderRadius: 10, padding: 24 }}>
                                    <h3
                                        style={{
                                            color: "white",
                                            fontFamily: "'Georgia', serif",
                                            fontSize: 20,
                                            fontWeight: 700,
                                            marginBottom: 16,
                                        }}
                                    >
                                        5. Your Details
                                    </h3>
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
                                    <div style={{ marginTop: 16 }}>
                                        <label style={labelStyle}>Special Notes (optional)</label>
                                        <textarea
                                            rows={3}
                                            placeholder="Design file format, specific color requirements, delivery address..."
                                            value={formData.notes}
                                            onChange={(e) => handleChange("notes", e.target.value)}
                                            style={{ ...inputStyle, resize: "vertical" }}
                                        />
                                    </div>
                                </div>
                            ) : (
                                /* Dealer Details */
                                <div style={{ background: "#111", border: "1px solid #222", borderRadius: 10, padding: 24 }}>
                                    <h3
                                        style={{
                                            color: "white",
                                            fontFamily: "'Georgia', serif",
                                            fontSize: 20,
                                            fontWeight: 700,
                                            marginBottom: 16,
                                        }}
                                    >
                                        5. Dealer Information
                                    </h3>

                                    {/* Dealer Code & Name */}
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label style={labelStyle}>Dealer Code *</label>
                                            <input
                                                type="text"
                                                placeholder="Enter dealer code"
                                                value={formData.dealerCode}
                                                onChange={(e) => handleChange("dealerCode", e.target.value)}
                                                style={inputStyle}
                                            />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Dealer Name *</label>
                                            <input
                                                type="text"
                                                placeholder="Dealer name"
                                                value={formData.dealerName}
                                                onChange={(e) => handleChange("dealerName", e.target.value)}
                                                style={inputStyle}
                                            />
                                        </div>
                                    </div>

                                    {/* Company & GST */}
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label style={labelStyle}>Company Name</label>
                                            <input
                                                type="text"
                                                placeholder="Company name"
                                                value={formData.companyName}
                                                onChange={(e) => handleChange("companyName", e.target.value)}
                                                style={inputStyle}
                                            />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>GST Number</label>
                                            <input
                                                type="text"
                                                placeholder="22AAAAA0000A1Z5"
                                                value={formData.gstNumber}
                                                onChange={(e) => handleChange("gstNumber", e.target.value)}
                                                style={inputStyle}
                                            />
                                        </div>
                                    </div>

                                    {/* Contact Details */}
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label style={labelStyle}>Phone *</label>
                                            <input
                                                type="tel"
                                                placeholder="+91 XXXXX XXXXX"
                                                value={formData.dealerPhone}
                                                onChange={(e) => handleChange("dealerPhone", e.target.value)}
                                                style={inputStyle}
                                            />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Email</label>
                                            <input
                                                type="email"
                                                placeholder="dealer@company.com"
                                                value={formData.dealerEmail}
                                                onChange={(e) => handleChange("dealerEmail", e.target.value)}
                                                style={inputStyle}
                                            />
                                        </div>
                                    </div>

                                    {/* File Upload */}
                                    <div style={{ marginBottom: 16 }}>
                                        <label style={labelStyle}>Upload Design File *</label>
                                        <div
                                            style={{
                                                border: "2px dashed #444",
                                                borderRadius: 8,
                                                padding: 20,
                                                textAlign: "center",
                                                background: "#1a1a1a",
                                                cursor: "pointer",
                                            }}
                                            onClick={() => document.getElementById("file-upload").click()}
                                        >
                                            <input
                                                id="file-upload"
                                                type="file"
                                                onChange={handleFileChange}
                                                style={{ display: "none" }}
                                                accept=".pdf,.ai,.eps,.cdr,.jpg,.png,.psd"
                                            />
                                            <div style={{ fontSize: 32, marginBottom: 8 }}>📁</div>
                                            {formData.fileName ? (
                                                <div>
                                                    <div style={{ color: "#4CAF50", fontFamily: "sans-serif", fontSize: 14 }}>
                                                        ✓ {formData.fileName}
                                                    </div>
                                                    <div style={{ color: "#888", fontSize: 12, marginTop: 4 }}>
                                                        Click to change file
                                                    </div>
                                                </div>
                                            ) : (
                                                <div>
                                                    <div style={{ color: "white", fontFamily: "sans-serif", fontSize: 14 }}>
                                                        Click to upload or drag and drop
                                                    </div>
                                                    <div style={{ color: "#666", fontSize: 12, marginTop: 4 }}>
                                                        Supported formats: PDF, AI, EPS, CDR, JPG, PNG, PSD (Max 25MB)
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Dealer Notes */}
                                    <div>
                                        <label style={labelStyle}>Additional Instructions</label>
                                        <textarea
                                            rows={3}
                                            placeholder="Special requirements, printing instructions, etc..."
                                            value={formData.dealerNotes}
                                            onChange={(e) => handleChange("dealerNotes", e.target.value)}
                                            style={{ ...inputStyle, resize: "vertical" }}
                                        />
                                    </div>

                                    {/* Discount Info */}
                                    <div
                                        style={{
                                            marginTop: 16,
                                            padding: 12,
                                            background: "rgba(76, 175, 80, 0.1)",
                                            border: "1px solid #4CAF50",
                                            borderRadius: 6,
                                        }}
                                    >
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <span style={{ color: "#4CAF50", fontFamily: "sans-serif", fontSize: 13 }}>
                                                Dealer Discount Applied:
                                            </span>
                                            <span style={{ color: "#4CAF50", fontFamily: "sans-serif", fontSize: 16, fontWeight: "bold" }}>
                                                {dealerDiscount}% OFF
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Price Summary */}
                        <div>
                            <div style={{ position: "sticky", top: 100 }}>
                                <div style={{ background: "#111", border: "1px solid #333", borderRadius: 10, overflow: "hidden" }}>
                                    <div style={{ background: "#FF6B35", padding: "16px 20px" }}>
                                        <div
                                            style={{
                                                color: "rgba(255,255,255,0.8)",
                                                fontFamily: "sans-serif",
                                                fontSize: 12,
                                                textTransform: "uppercase",
                                                letterSpacing: "0.1em",
                                            }}
                                        >
                                            Instant Quote
                                        </div>
                                        <div
                                            style={{
                                                color: "white",
                                                fontFamily: "'Georgia', serif",
                                                fontSize: 36,
                                                fontWeight: 900,
                                                lineHeight: 1.1,
                                            }}
                                        >
                                            {hasValidDimensions ? `₹${totalCost}` : "—"}
                                        </div>
                                        {hasValidDimensions && (
                                            <div
                                                style={{
                                                    color: "rgba(255,255,255,0.7)",
                                                    fontFamily: "sans-serif",
                                                    fontSize: 12,
                                                    marginTop: 4,
                                                }}
                                            >
                                                for {formData.quantity} piece{formData.quantity > 1 ? "s" : ""}
                                            </div>
                                        )}
                                    </div>
                                    <div style={{ padding: 20 }}>
                                        {hasValidDimensions ? (
                                            <>
                                                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
                                                    <PriceBreakdownRow
                                                        label="Material"
                                                        value={getMaterial().label}
                                                    />
                                                    <PriceBreakdownRow
                                                        label="Size"
                                                        value={`${calculation.widthFeet} × ${calculation.heightFeet} ft = ${calculation.area} sqft`}
                                                    />
                                                    <PriceBreakdownRow
                                                        label="Base Rate"
                                                        value={`₹${getMaterial().basePrice}/sqft`}
                                                    />
                                                    <PriceBreakdownRow
                                                        label="Finish"
                                                        value={getFinish().label}
                                                    />
                                                    {formData.eyelets && (
                                                        <PriceBreakdownRow label="Eyelets" value={`₹${calculation.eyeletCost}`} />
                                                    )}
                                                    {formData.hemming && (
                                                        <PriceBreakdownRow label="Hemming" value={`₹${calculation.hemmingCost}`} />
                                                    )}
                                                    {formData.urgency !== "standard" && (
                                                        <PriceBreakdownRow
                                                            label="Urgency"
                                                            value={getUrgency().multiplier === 1.5 ? "+50%" : "+100%"}
                                                        />
                                                    )}
                                                    <PriceBreakdownRow label="Qty" value={`× ${formData.quantity}`} />
                                                </div>

                                                {orderType === "dealer" && calculation.originalTotal && (
                                                    <div
                                                        style={{
                                                            background: "rgba(76, 175, 80, 0.1)",
                                                            borderRadius: 6,
                                                            padding: "10px 14px",
                                                            marginBottom: 16,
                                                        }}
                                                    >
                                                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                                                            <span style={{ color: "#888", fontSize: 12 }}>Original Price:</span>
                                                            <span style={{ color: "#888", fontSize: 12, textDecoration: "line-through" }}>
                                                                ₹{calculation.originalTotal}
                                                            </span>
                                                        </div>
                                                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                            <span style={{ color: "#4CAF50", fontSize: 12 }}>Dealer Discount ({calculation.discountPercentage}%):</span>
                                                            <span style={{ color: "#4CAF50", fontSize: 12 }}>- ₹{calculation.discountAmount}</span>
                                                        </div>
                                                    </div>
                                                )}

                                                <div style={{ borderTop: "1px solid #2a2a2a", paddingTop: 16, marginBottom: 20 }}>
                                                    <PriceBreakdownRow
                                                        label="Per piece"
                                                        value={`₹${calculation.perPieceCost}`}
                                                        labelStyle={{ color: "#888" }}
                                                        valueStyle={{ color: "white", fontSize: 18 }}
                                                    />
                                                    <PriceBreakdownRow
                                                        label="Total"
                                                        value={`₹${totalCost}`}
                                                        labelStyle={{ color: "#FF6B35", fontWeight: 700 }}
                                                        valueStyle={{ color: "#FF6B35", fontSize: 24, fontWeight: 900 }}
                                                        className="mt-2"
                                                    />
                                                </div>
                                                <div
                                                    style={{
                                                        background: "rgba(255,107,53,0.08)",
                                                        border: "1px solid rgba(255,107,53,0.2)",
                                                        borderRadius: 6,
                                                        padding: "10px 14px",
                                                        marginBottom: 20,
                                                    }}
                                                >
                                                    <div style={{ color: "#FF6B35", fontFamily: "sans-serif", fontSize: 12 }}>
                                                        ⚠️ This is an estimate. Final price may vary based on design complexity.
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <div
                                                style={{
                                                    color: "#555",
                                                    fontFamily: "sans-serif",
                                                    fontSize: 14,
                                                    textAlign: "center",
                                                    padding: "24px 0",
                                                }}
                                            >
                                                Enter dimensions to see your instant quote
                                            </div>
                                        )}
                                        <button
                                            onClick={handleSubmit}
                                            style={{
                                                width: "100%",
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
                                            {orderType === "dealer" ? "Submit Dealer Order" : "Submit Order Request"}
                                        </button>
                                        <p
                                            style={{
                                                color: "#555",
                                                fontFamily: "sans-serif",
                                                fontSize: 12,
                                                textAlign: "center",
                                                marginTop: 12,
                                            }}
                                        >
                                            {orderType === "dealer"
                                                ? "Our dealer support team will contact you within 30 minutes."
                                                : "We'll call you within 30 minutes to confirm."}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Helper component for price breakdown rows
const PriceBreakdownRow = ({ label, value, labelStyle, valueStyle, className = "" }) => (
    <div className={`flex justify-between items-baseline ${className}`}>
        <span style={{ color: "#777", fontFamily: "sans-serif", fontSize: 13, ...labelStyle }}>{label}</span>
        <span style={{ color: "#ccc", fontFamily: "sans-serif", fontSize: 13, fontWeight: 600, ...valueStyle }}>
            {value}
        </span>
    </div>
);
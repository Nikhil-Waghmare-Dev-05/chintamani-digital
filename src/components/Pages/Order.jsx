import React, { useState } from "react";
import { MATERIALS, FINISHES, URGENCY_OPTIONS, QUANTITIES } from "../../data/materials";
import { calculateTotalCost } from "../../utils/priceCalculator";

const GlossyStyles = () => (
    <style>{`
        .form-input {
            background: rgba(124,58,237,0.08) !important;
            border: 1px solid rgba(124,58,237,0.2) !important;
            border-radius: 6px;
            color: white !important;
            padding: 10px 14px;
            font-family: sans-serif;
            font-size: 14px;
            width: 100%;
            outline: none;
            transition: border-color 0.2s;
        }
        .form-input:focus {
            border-color: rgba(212,175,55,0.45) !important;
        }
        .form-input::placeholder { color: rgba(192,132,252,0.35); }
        .form-input option { background: #1a0f2e; color: white; }
        .toggle-btn-active {
            background: linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #6D28D9 100%) !important;
            color: white !important;
            box-shadow: 0 4px 16px rgba(124,58,237,0.4);
        }
        .toggle-btn {
            transition: all 0.3s;
        }
        .submit-btn:hover {
            background: linear-gradient(135deg, #6D28D9 0%, #9333EA 50%, #5B21B6 100%) !important;
            box-shadow: 0 6px 28px rgba(124,58,237,0.6) !important;
            transform: translateY(-1px);
        }
        .submit-btn { transition: all 0.2s ease; }
        .place-again-btn:hover {
            background: linear-gradient(135deg, #6D28D9 0%, #9333EA 50%, #5B21B6 100%) !important;
            transform: translateY(-1px);
        }
        .place-again-btn { transition: all 0.2s ease; }
    `}</style>
);

const inputStyle = {
    background: "rgba(124,58,237,0.08)",
    border: "1px solid rgba(124,58,237,0.2)",
    borderRadius: 6,
    color: "white",
    padding: "10px 14px",
    fontFamily: "sans-serif",
    fontSize: 14,
    width: "100%",
    outline: "none",
};

const labelStyle = {
    color: "rgba(192,132,252,0.6)",
    fontFamily: "sans-serif",
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: 8,
    display: "block",
};

const GlossCard = ({ children, style = {} }) => (
    <div style={{
        background: "rgba(124,58,237,0.08)",
        border: "1px solid rgba(124,58,237,0.2)",
        borderRadius: 10,
        padding: 24,
        position: "relative",
        overflow: "hidden",
        ...style,
    }}>
        {/* Glossy sheen */}
        <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "40%",
            background: "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)",
            borderRadius: "10px 10px 0 0",
            pointerEvents: "none",
        }} />
        {/* Gold corner accent */}
        <div style={{
            position: "absolute", top: 0, right: 0, width: 60, height: 60,
            background: "radial-gradient(circle at top right, rgba(212,175,55,0.14) 0%, transparent 70%)",
            pointerEvents: "none",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
);

export const Order = () => {
    const [orderType, setOrderType] = useState("retail");
    const [formData, setFormData] = useState({
        material: MATERIALS[0].id,
        width: "", height: "", unit: "feet", quantity: 1,
        finish: FINISHES[0].id, eyelets: false, hemming: false,
        urgency: URGENCY_OPTIONS[0].id,
        name: "", phone: "", notes: "",
        dealerName: "", dealerCode: "", companyName: "",
        gstNumber: "", dealerPhone: "", dealerEmail: "",
        dealerNotes: "", file: null, fileName: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [dealerDiscount] = useState(15);

    const getMaterial = () => MATERIALS.find((m) => m.id === formData.material);
    const getFinish = () => FINISHES.find((f) => f.id === formData.finish);
    const getUrgency = () => URGENCY_OPTIONS.find((u) => u.id === formData.urgency);

    const handleChange = (key, value) => setFormData((prev) => ({ ...prev, [key]: value }));
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) setFormData((prev) => ({ ...prev, file, fileName: file.name }));
    };

    const calculate = () => {
        const material = getMaterial();
        const finish = getFinish();
        const urgency = getUrgency();
        const base = calculateTotalCost({
            material, width: parseFloat(formData.width) || 0,
            height: parseFloat(formData.height) || 0,
            unit: formData.unit, quantity: formData.quantity,
            finish, eyelets: formData.eyelets,
            hemming: formData.hemming, urgency,
        });
        if (orderType === "dealer") {
            const total = parseFloat(base.totalCost);
            const discountedTotal = total - (total * dealerDiscount / 100);
            return {
                ...base,
                totalCost: discountedTotal.toFixed(0),
                originalTotal: base.totalCost,
                discountAmount: (total * dealerDiscount / 100).toFixed(0),
                discountPercentage: dealerDiscount,
            };
        }
        return base;
    };

    const handleSubmit = () => {
        if (orderType === "retail") {
            if (!formData.name || !formData.phone) { alert("Please fill in your name and phone number."); return; }
        } else {
            if (!formData.dealerName || !formData.dealerPhone || !formData.dealerCode) {
                alert("Please fill in dealer name, phone number, and dealer code."); return;
            }
            if (!formData.file) { alert("Please upload the design file."); return; }
        }
        if (!calculate().hasValidDimensions) { alert("Please enter valid dimensions."); return; }
        setSubmitted(true);
    };

    /* ── Success Screen ── */
    if (submitted) {
        const calculation = calculate();
        return (
            <div style={{ paddingTop: 80, minHeight: "100vh", background: "#0e0818" }}
                className="flex items-center justify-center">
                <GlossyStyles />
                <div style={{ textAlign: "center", maxWidth: 480, padding: 40 }}>
                    <div style={{ fontSize: 64, marginBottom: 24 }}>✅</div>
                    <h2 style={{
                        fontFamily: "'Georgia', serif", fontSize: 32,
                        fontWeight: 900, color: "white", marginBottom: 16,
                    }}>
                        Order Submitted!
                    </h2>
                    <p style={{ color: "rgba(200,170,255,0.55)", fontFamily: "sans-serif", lineHeight: 1.7, marginBottom: 32 }}>
                        Thank you! {orderType === "dealer" ? "Our dealer support team" : "We"} will contact you within
                        30 minutes to confirm details and payment.
                        {orderType === "dealer" && formData.file && " Your design file has been received."}
                    </p>
                    <GlossCard style={{ marginBottom: 32, border: "1px solid rgba(212,175,55,0.3)" }}>
                        <div style={{ color: "rgba(192,132,252,0.5)", fontSize: 13, fontFamily: "sans-serif", marginBottom: 4 }}>
                            Estimated Total
                        </div>
                        <div style={{ color: "#ffc400", fontSize: 36, fontFamily: "'Georgia', serif", fontWeight: 900 }}>
                            ₹{calculation.totalCost}
                        </div>
                        {orderType === "dealer" && calculation.discountAmount && (
                            <div style={{ color: "#4ade80", fontSize: 14, fontFamily: "sans-serif", marginTop: 8 }}>
                                You saved: ₹{calculation.discountAmount} ({calculation.discountPercentage}% dealer discount)
                            </div>
                        )}
                    </GlossCard>
                    <button
                        className="place-again-btn"
                        onClick={() => { setSubmitted(false); setOrderType("retail"); }}
                        style={{
                            background: "linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #6D28D9 100%)",
                            color: "white", border: "none", padding: "12px 32px",
                            borderRadius: 4, cursor: "pointer", fontFamily: "sans-serif",
                            fontWeight: 700, fontSize: 14,
                            boxShadow: "0 4px 20px rgba(124,58,237,0.4)",
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

    /* ── Main Form ── */
    return (
        <div style={{ paddingTop: 80, background: "#0e0818", minHeight: "100vh" }}>
            <GlossyStyles />

            {/* Header */}
            <section
                style={{
                    background: "linear-gradient(160deg, #0e0818 0%, #1a0f2e 45%, #0a0510 100%)",
                    position: "relative", overflow: "hidden",
                }}
                className="py-12 md:py-16"
            >
                <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: "50%",
                    background: "linear-gradient(180deg, rgba(160,100,255,0.07) 0%, transparent 100%)",
                    pointerEvents: "none",
                }} />
                <div style={{
                    position: "absolute", top: -100, right: -100, width: 350, height: 350, borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)",
                    pointerEvents: "none",
                }} />
                <div style={{
                    position: "absolute", bottom: -80, left: -80, width: 280, height: 280, borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 70%)",
                    pointerEvents: "none",
                }} />
                <div className="max-w-4xl mx-auto px-4 text-center" style={{ position: "relative", zIndex: 1 }}>
                    <div style={{
                        display: "inline-block",
                        background: "rgba(160,100,255,0.15)",
                        border: "1px solid rgba(160,100,255,0.35)",
                        color: "#C084FC", padding: "6px 16px", borderRadius: 100,
                        fontSize: 12, fontFamily: "sans-serif",
                        letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20,
                    }}>
                        Instant Price Calculator
                    </div>
                    <h1 style={{
                        fontFamily: "'Georgia', serif",
                        fontSize: "clamp(32px, 5vw, 42px)",
                        fontWeight: 900, color: "white", marginBottom: 12,
                    }}>
                        Order <span style={{ color: "#ffc400" }}>Flex Print</span>
                    </h1>
                    <p style={{ color: "rgba(200,170,255,0.55)", fontFamily: "sans-serif", fontSize: 15 }}>
                        Fill in your requirements below — get an instant price estimate.
                    </p>
                </div>
            </section>

            <section
                style={{
                    background: "linear-gradient(180deg, #0a0510 0%, #0e0818 100%)",
                    position: "relative", overflow: "hidden",
                }}
                className="py-12 md:py-20"
            >
                {/* Ambient glow */}
                <div style={{
                    position: "absolute", top: "40%", left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 800, height: 800, borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)",
                    pointerEvents: "none",
                }} />

                <div className="max-w-5xl mx-auto px-4" style={{ position: "relative", zIndex: 1 }}>

                    {/* Order Type Toggle */}
                    <div style={{ marginBottom: 32, display: "flex", justifyContent: "center" }}>
                        <div style={{
                            display: "inline-flex",
                            background: "rgba(124,58,237,0.1)",
                            border: "1px solid rgba(124,58,237,0.25)",
                            borderRadius: 50, padding: 4,
                        }}>
                            {["retail", "dealer"].map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setOrderType(type)}
                                    className={`toggle-btn ${orderType === type ? "toggle-btn-active" : ""}`}
                                    style={{
                                        padding: "10px 30px", borderRadius: 50, border: "none",
                                        cursor: "pointer", fontFamily: "sans-serif",
                                        fontWeight: 600, fontSize: 14,
                                        background: orderType === type ? undefined : "transparent",
                                        color: orderType === type ? "white" : "rgba(192,132,252,0.6)",
                                    }}
                                >
                                    {type === "retail" ? "Retail Customer" : "Dealer"}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* ── Form ── */}
                        <div className="md:col-span-2" style={{ display: "flex", flexDirection: "column", gap: 24 }}>

                            {/* 1. Material */}
                            <GlossCard>
                                <h3 style={{ color: "white", fontFamily: "'Georgia', serif", fontSize: 20, fontWeight: 700, marginBottom: 16 }}>
                                    1. Select Material
                                </h3>
                                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                    {MATERIALS.map((material) => (
                                        <label key={material.id} style={{ cursor: "pointer" }}>
                                            <div style={{
                                                display: "flex", alignItems: "center", gap: 12,
                                                background: formData.material === material.id
                                                    ? "rgba(212,175,55,0.1)" : "rgba(124,58,237,0.06)",
                                                border: `1px solid ${formData.material === material.id
                                                    ? "rgba(212,175,55,0.4)" : "rgba(124,58,237,0.18)"}`,
                                                borderRadius: 8, padding: "12px 16px",
                                                transition: "all 0.2s",
                                            }}>
                                                <input
                                                    type="radio" name="material" value={material.id}
                                                    checked={formData.material === material.id}
                                                    onChange={(e) => handleChange("material", e.target.value)}
                                                    style={{ accentColor: "#ffc400" }}
                                                />
                                                <div style={{ flex: 1 }}>
                                                    <div style={{ color: "white", fontFamily: "sans-serif", fontWeight: 600, fontSize: 14 }}>
                                                        {material.label}
                                                    </div>
                                                    <div style={{ color: "rgba(192,132,252,0.5)", fontFamily: "sans-serif", fontSize: 12 }}>
                                                        {material.description}
                                                    </div>
                                                </div>
                                                <div style={{ color: "#ffc400", fontFamily: "'Georgia', serif", fontWeight: 700, fontSize: 16 }}>
                                                    ₹{material.basePrice}/sqft
                                                </div>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </GlossCard>

                            {/* 2. Dimensions */}
                            <GlossCard>
                                <h3 style={{ color: "white", fontFamily: "'Georgia', serif", fontSize: 20, fontWeight: 700, marginBottom: 16 }}>
                                    2. Enter Dimensions
                                </h3>
                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        { key: "width", label: "Width", placeholder: "e.g. 4", type: "number" },
                                        { key: "height", label: "Height", placeholder: "e.g. 3", type: "number" },
                                    ].map(({ key, label, placeholder }) => (
                                        <div key={key}>
                                            <label style={labelStyle}>{label}</label>
                                            <input
                                                type="number" placeholder={placeholder}
                                                value={formData[key]}
                                                onChange={(e) => handleChange(key, e.target.value)}
                                                style={inputStyle} min="0" step="0.1"
                                                className="form-input"
                                            />
                                        </div>
                                    ))}
                                    <div>
                                        <label style={labelStyle}>Unit</label>
                                        <select
                                            value={formData.unit}
                                            onChange={(e) => handleChange("unit", e.target.value)}
                                            style={inputStyle} className="form-input"
                                        >
                                            <option value="feet">Feet</option>
                                            <option value="inches">Inches</option>
                                            <option value="meters">Meters</option>
                                        </select>
                                    </div>
                                </div>
                                {hasValidDimensions && (
                                    <div style={{
                                        marginTop: 12,
                                        background: "rgba(212,175,55,0.08)",
                                        border: "1px solid rgba(212,175,55,0.25)",
                                        borderRadius: 6, padding: "10px 16px",
                                        color: "#ffc400", fontFamily: "sans-serif", fontSize: 13,
                                    }}>
                                        Area: {calculation.area} sq.ft
                                    </div>
                                )}
                            </GlossCard>

                            {/* 3. Quantity & Finish */}
                            <GlossCard>
                                <h3 style={{ color: "white", fontFamily: "'Georgia', serif", fontSize: 20, fontWeight: 700, marginBottom: 16 }}>
                                    3. Quantity & Finish
                                </h3>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label style={labelStyle}>Quantity</label>
                                        <select
                                            value={formData.quantity}
                                            onChange={(e) => handleChange("quantity", parseInt(e.target.value))}
                                            style={inputStyle} className="form-input"
                                        >
                                            {QUANTITIES.map((q) => (
                                                <option key={q} value={q}>{q} {q === 1 ? "piece" : "pieces"}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Finish / Lamination</label>
                                        <select
                                            value={formData.finish}
                                            onChange={(e) => handleChange("finish", e.target.value)}
                                            style={inputStyle} className="form-input"
                                        >
                                            {FINISHES.map((f) => (
                                                <option key={f.id} value={f.id}>{f.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    {[
                                        { key: "eyelets", label: "Eyelets / Grommets", sub: "₹2 per eyelet" },
                                        { key: "hemming", label: "Hemming / Stitching", sub: "₹5 per running ft" },
                                    ].map(({ key, label, sub }) => (
                                        <label key={key} style={{
                                            cursor: "pointer", display: "flex", alignItems: "center", gap: 10,
                                            background: formData[key] ? "rgba(212,175,55,0.1)" : "rgba(124,58,237,0.06)",
                                            border: `1px solid ${formData[key] ? "rgba(212,175,55,0.4)" : "rgba(124,58,237,0.18)"}`,
                                            borderRadius: 8, padding: "12px 16px", transition: "all 0.2s",
                                        }}>
                                            <input
                                                type="checkbox" checked={formData[key]}
                                                onChange={(e) => handleChange(key, e.target.checked)}
                                                style={{ accentColor: "#ffc400", width: 16, height: 16 }}
                                            />
                                            <div>
                                                <div style={{ color: "white", fontFamily: "sans-serif", fontSize: 13, fontWeight: 600 }}>{label}</div>
                                                <div style={{ color: "rgba(192,132,252,0.5)", fontSize: 11, fontFamily: "sans-serif" }}>{sub}</div>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </GlossCard>

                            {/* 4. Delivery Speed */}
                            <GlossCard>
                                <h3 style={{ color: "white", fontFamily: "'Georgia', serif", fontSize: 20, fontWeight: 700, marginBottom: 16 }}>
                                    4. Delivery Speed
                                </h3>
                                <div className="grid grid-cols-3 gap-3">
                                    {URGENCY_OPTIONS.map((option) => (
                                        <label key={option.id} style={{ cursor: "pointer" }}>
                                            <div style={{
                                                background: formData.urgency === option.id ? "rgba(212,175,55,0.1)" : "rgba(124,58,237,0.06)",
                                                border: `1px solid ${formData.urgency === option.id ? "rgba(212,175,55,0.4)" : "rgba(124,58,237,0.18)"}`,
                                                borderRadius: 8, padding: "14px 12px", textAlign: "center",
                                                transition: "all 0.2s",
                                            }}>
                                                <input type="radio" name="urgency" value={option.id}
                                                    checked={formData.urgency === option.id}
                                                    onChange={(e) => handleChange("urgency", e.target.value)}
                                                    style={{ display: "none" }}
                                                />
                                                <div style={{ color: "white", fontFamily: "sans-serif", fontWeight: 700, fontSize: 14 }}>
                                                    {option.label}
                                                </div>
                                                <div style={{ color: "#ffc400", fontFamily: "sans-serif", fontSize: 12, margin: "4px 0" }}>
                                                    {option.time}
                                                </div>
                                                <div style={{ color: "rgba(192,132,252,0.45)", fontFamily: "sans-serif", fontSize: 11 }}>
                                                    {option.description}
                                                </div>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </GlossCard>

                            {/* 5. Customer / Dealer Details */}
                            {orderType === "retail" ? (
                                <GlossCard>
                                    <h3 style={{ color: "white", fontFamily: "'Georgia', serif", fontSize: 20, fontWeight: 700, marginBottom: 16 }}>
                                        5. Your Details
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label style={labelStyle}>Name *</label>
                                            <input type="text" placeholder="Your name" value={formData.name}
                                                onChange={(e) => handleChange("name", e.target.value)}
                                                style={inputStyle} className="form-input" />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Phone *</label>
                                            <input type="tel" placeholder="+91 XXXXX XXXXX" value={formData.phone}
                                                onChange={(e) => handleChange("phone", e.target.value)}
                                                style={inputStyle} className="form-input" />
                                        </div>
                                    </div>
                                    <div style={{ marginTop: 16 }}>
                                        <label style={labelStyle}>Special Notes (optional)</label>
                                        <textarea rows={3}
                                            placeholder="Design file format, specific color requirements, delivery address..."
                                            value={formData.notes}
                                            onChange={(e) => handleChange("notes", e.target.value)}
                                            style={{ ...inputStyle, resize: "vertical" }} className="form-input" />
                                    </div>
                                </GlossCard>
                            ) : (
                                <GlossCard>
                                    <h3 style={{ color: "white", fontFamily: "'Georgia', serif", fontSize: 20, fontWeight: 700, marginBottom: 16 }}>
                                        5. Dealer Information
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label style={labelStyle}>Dealer Code *</label>
                                            <input type="text" placeholder="Enter dealer code" value={formData.dealerCode}
                                                onChange={(e) => handleChange("dealerCode", e.target.value)}
                                                style={inputStyle} className="form-input" />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Dealer Name *</label>
                                            <input type="text" placeholder="Dealer name" value={formData.dealerName}
                                                onChange={(e) => handleChange("dealerName", e.target.value)}
                                                style={inputStyle} className="form-input" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label style={labelStyle}>Company Name</label>
                                            <input type="text" placeholder="Company name" value={formData.companyName}
                                                onChange={(e) => handleChange("companyName", e.target.value)}
                                                style={inputStyle} className="form-input" />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>GST Number</label>
                                            <input type="text" placeholder="22AAAAA0000A1Z5" value={formData.gstNumber}
                                                onChange={(e) => handleChange("gstNumber", e.target.value)}
                                                style={inputStyle} className="form-input" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label style={labelStyle}>Phone *</label>
                                            <input type="tel" placeholder="+91 XXXXX XXXXX" value={formData.dealerPhone}
                                                onChange={(e) => handleChange("dealerPhone", e.target.value)}
                                                style={inputStyle} className="form-input" />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Email</label>
                                            <input type="email" placeholder="dealer@company.com" value={formData.dealerEmail}
                                                onChange={(e) => handleChange("dealerEmail", e.target.value)}
                                                style={inputStyle} className="form-input" />
                                        </div>
                                    </div>

                                    {/* File Upload */}
                                    <div style={{ marginBottom: 16 }}>
                                        <label style={labelStyle}>Upload Design File *</label>
                                        <div
                                            style={{
                                                border: "2px dashed rgba(124,58,237,0.35)",
                                                borderRadius: 8, padding: 20, textAlign: "center",
                                                background: "rgba(124,58,237,0.06)", cursor: "pointer",
                                                transition: "border-color 0.2s",
                                            }}
                                            onClick={() => document.getElementById("file-upload").click()}
                                        >
                                            <input id="file-upload" type="file" onChange={handleFileChange}
                                                style={{ display: "none" }}
                                                accept=".pdf,.ai,.eps,.cdr,.jpg,.png,.psd" />
                                            <div style={{ fontSize: 32, marginBottom: 8 }}>📁</div>
                                            {formData.fileName ? (
                                                <div>
                                                    <div style={{ color: "#4ade80", fontFamily: "sans-serif", fontSize: 14 }}>
                                                        ✓ {formData.fileName}
                                                    </div>
                                                    <div style={{ color: "rgba(192,132,252,0.4)", fontSize: 12, marginTop: 4 }}>
                                                        Click to change file
                                                    </div>
                                                </div>
                                            ) : (
                                                <div>
                                                    <div style={{ color: "white", fontFamily: "sans-serif", fontSize: 14 }}>
                                                        Click to upload or drag and drop
                                                    </div>
                                                    <div style={{ color: "rgba(192,132,252,0.4)", fontSize: 12, marginTop: 4 }}>
                                                        PDF, AI, EPS, CDR, JPG, PNG, PSD (Max 25MB)
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label style={labelStyle}>Additional Instructions</label>
                                        <textarea rows={3}
                                            placeholder="Special requirements, printing instructions, etc..."
                                            value={formData.dealerNotes}
                                            onChange={(e) => handleChange("dealerNotes", e.target.value)}
                                            style={{ ...inputStyle, resize: "vertical" }} className="form-input" />
                                    </div>

                                    {/* Dealer Discount Badge */}
                                    <div style={{
                                        marginTop: 16, padding: 12,
                                        background: "rgba(74,222,128,0.08)",
                                        border: "1px solid rgba(74,222,128,0.3)",
                                        borderRadius: 6,
                                    }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <span style={{ color: "#4ade80", fontFamily: "sans-serif", fontSize: 13 }}>
                                                Dealer Discount Applied:
                                            </span>
                                            <span style={{ color: "#4ade80", fontFamily: "sans-serif", fontSize: 16, fontWeight: "bold" }}>
                                                {dealerDiscount}% OFF
                                            </span>
                                        </div>
                                    </div>
                                </GlossCard>
                            )}
                        </div>

                        {/* ── Price Summary ── */}
                        <div>
                            <div style={{ position: "sticky", top: 100 }}>
                                <div style={{
                                    background: "rgba(124,58,237,0.08)",
                                    border: "1px solid rgba(124,58,237,0.22)",
                                    borderRadius: 10, overflow: "hidden",
                                    position: "relative",
                                }}>
                                    {/* Glossy sheen on summary card */}
                                    <div style={{
                                        position: "absolute", top: 0, left: 0, right: 0, height: "35%",
                                        background: "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)",
                                        pointerEvents: "none", zIndex: 0,
                                    }} />

                                    {/* Quote Header */}
                                    <div style={{
                                        background: "linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #6D28D9 100%)",
                                        padding: "16px 20px", position: "relative",
                                    }}>
                                        <div style={{
                                            position: "absolute", top: 0, left: 0, right: 0, height: "50%",
                                            background: "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)",
                                            pointerEvents: "none",
                                        }} />
                                        <div style={{
                                            color: "rgba(255,255,255,0.75)", fontFamily: "sans-serif",
                                            fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em",
                                        }}>
                                            Instant Quote
                                        </div>
                                        <div style={{
                                            color: "white", fontFamily: "'Georgia', serif",
                                            fontSize: 36, fontWeight: 900, lineHeight: 1.1,
                                        }}>
                                            {hasValidDimensions ? `₹${totalCost}` : "—"}
                                        </div>
                                        {hasValidDimensions && (
                                            <div style={{ color: "rgba(255,255,255,0.65)", fontFamily: "sans-serif", fontSize: 12, marginTop: 4 }}>
                                                for {formData.quantity} piece{formData.quantity > 1 ? "s" : ""}
                                            </div>
                                        )}
                                    </div>

                                    <div style={{ padding: 20, position: "relative", zIndex: 1 }}>
                                        {hasValidDimensions ? (
                                            <>
                                                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
                                                    <PriceBreakdownRow label="Material" value={getMaterial().label} />
                                                    <PriceBreakdownRow label="Size" value={`${calculation.widthFeet} × ${calculation.heightFeet} ft`} />
                                                    <PriceBreakdownRow label="Area" value={`${calculation.area} sqft`} />
                                                    <PriceBreakdownRow label="Base Rate" value={`₹${getMaterial().basePrice}/sqft`} />
                                                    <PriceBreakdownRow label="Finish" value={getFinish().label} />
                                                    {formData.eyelets && <PriceBreakdownRow label="Eyelets" value={`₹${calculation.eyeletCost}`} />}
                                                    {formData.hemming && <PriceBreakdownRow label="Hemming" value={`₹${calculation.hemmingCost}`} />}
                                                    {formData.urgency !== "standard" && (
                                                        <PriceBreakdownRow label="Urgency"
                                                            value={getUrgency().multiplier === 1.5 ? "+50%" : "+100%"} />
                                                    )}
                                                    <PriceBreakdownRow label="Qty" value={`× ${formData.quantity}`} />
                                                </div>

                                                {orderType === "dealer" && calculation.originalTotal && (
                                                    <div style={{
                                                        background: "rgba(74,222,128,0.08)",
                                                        border: "1px solid rgba(74,222,128,0.25)",
                                                        borderRadius: 6, padding: "10px 14px", marginBottom: 16,
                                                    }}>
                                                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                                                            <span style={{ color: "rgba(192,132,252,0.5)", fontSize: 12 }}>Original:</span>
                                                            <span style={{ color: "rgba(192,132,252,0.5)", fontSize: 12, textDecoration: "line-through" }}>
                                                                ₹{calculation.originalTotal}
                                                            </span>
                                                        </div>
                                                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                            <span style={{ color: "#4ade80", fontSize: 12 }}>
                                                                Dealer Discount ({calculation.discountPercentage}%):
                                                            </span>
                                                            <span style={{ color: "#4ade80", fontSize: 12 }}>
                                                                - ₹{calculation.discountAmount}
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}

                                                <div style={{ borderTop: "1px solid rgba(124,58,237,0.2)", paddingTop: 16, marginBottom: 20 }}>
                                                    <PriceBreakdownRow
                                                        label="Per piece" value={`₹${calculation.perPieceCost}`}
                                                        labelStyle={{ color: "rgba(192,132,252,0.5)" }}
                                                        valueStyle={{ color: "white", fontSize: 18 }}
                                                    />
                                                    <PriceBreakdownRow
                                                        label="Total" value={`₹${totalCost}`}
                                                        labelStyle={{ color: "#ffc400", fontWeight: 700 }}
                                                        valueStyle={{ color: "#ffc400", fontSize: 24, fontWeight: 900 }}
                                                        className="mt-2"
                                                    />
                                                </div>

                                                <div style={{
                                                    background: "rgba(212,175,55,0.08)",
                                                    border: "1px solid rgba(212,175,55,0.2)",
                                                    borderRadius: 6, padding: "10px 14px", marginBottom: 20,
                                                }}>
                                                    <div style={{ color: "rgba(212,175,55,0.8)", fontFamily: "sans-serif", fontSize: 12 }}>
                                                        ⚠️ This is an estimate. Final price may vary based on design complexity.
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <div style={{
                                                color: "rgba(192,132,252,0.35)", fontFamily: "sans-serif",
                                                fontSize: 14, textAlign: "center", padding: "24px 0",
                                            }}>
                                                Enter dimensions to see your instant quote
                                            </div>
                                        )}

                                        <button
                                            onClick={handleSubmit}
                                            className="submit-btn"
                                            style={{
                                                width: "100%",
                                                background: "linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #6D28D9 100%)",
                                                color: "white", border: "none", padding: "14px",
                                                borderRadius: 6, cursor: "pointer",
                                                fontFamily: "sans-serif", fontWeight: 800,
                                                fontSize: 15, textTransform: "uppercase",
                                                letterSpacing: "0.08em",
                                                boxShadow: "0 4px 20px rgba(124,58,237,0.4)",
                                            }}
                                        >
                                            {orderType === "dealer" ? "Submit Dealer Order" : "Submit Order Request"}
                                        </button>
                                        <p style={{
                                            color: "rgba(192,132,252,0.4)", fontFamily: "sans-serif",
                                            fontSize: 12, textAlign: "center", marginTop: 12,
                                        }}>
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

const PriceBreakdownRow = ({ label, value, labelStyle, valueStyle, className = "" }) => (
    <div className={`flex justify-between items-baseline ${className}`}>
        <span style={{ color: "rgba(192,132,252,0.5)", fontFamily: "sans-serif", fontSize: 13, ...labelStyle }}>
            {label}
        </span>
        <span style={{ color: "rgba(235,220,255,0.85)", fontFamily: "sans-serif", fontSize: 13, fontWeight: 600, ...valueStyle }}>
            {value}
        </span>
    </div>
);
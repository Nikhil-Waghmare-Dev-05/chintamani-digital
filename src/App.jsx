import React, { useState, useEffect, useRef } from "react";
import { useRoute } from "./hooks/userRoutes";
import { Nav } from "./components/common/Nav";
import { Footer } from "./components/common/Footer";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Services } from "./components/Pages/Services";
import { Order } from "./components/Pages/Order";
import { Contact } from "./components/Pages/Contact";
import { ROUTES } from "./utils/constants";

/* ── Shimmer keyframes ── */
const GlobalStyles = () => (
    <style>{`
        @keyframes shimmer {
            0%   { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(12px); }
            to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes topBarSlide {
            0%   { width: 0%;   opacity: 1; }
            70%  { width: 85%;  opacity: 1; }
            100% { width: 100%; opacity: 0; }
        }
        @keyframes pagePulse {
            0%, 100% { opacity: 0.4; }
            50%       { opacity: 0.9; }
        }
        .page-enter {
            animation: fadeIn 0.35s ease forwards;
        }
    `}</style>
);

/* ── Reusable shimmer block ── */
const shimmerBg = {
    background: "linear-gradient(90deg,#1a1a1a 25%,#2a2a2a 50%,#1a1a1a 75%)",
    backgroundSize: "200% 100%",
    animation: "shimmer 1.5s infinite",
};
const SkeletonBlock = ({ width = "100%", height = "20px", borderRadius = "6px", style = {} }) => (
    <div style={{ width, height, borderRadius, ...shimmerBg, ...style }} />
);

/* ── Initial full-page skeleton ── */
function SkeletonScreen() {
    return (
        <>
            {/* Nav */}
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 40px", borderBottom:"1px solid #1f1f1f" }}>
                <SkeletonBlock width="120px" height="32px" />
                <div style={{ display:"flex", gap:"24px" }}>
                    {[1,2,3,4,5].map(i => <SkeletonBlock key={i} width="64px" height="16px" />)}
                </div>
            </div>

            {/* Hero */}
            <div style={{ padding:"80px 40px 40px", display:"flex", flexDirection:"column", alignItems:"center", gap:"20px" }}>
                <SkeletonBlock width="60%" height="48px" />
                <SkeletonBlock width="40%" height="48px" />
                <SkeletonBlock width="50%" height="20px" style={{ marginTop:"8px" }} />
                <SkeletonBlock width="35%" height="20px" />
                <div style={{ display:"flex", gap:"16px", marginTop:"16px" }}>
                    <SkeletonBlock width="140px" height="44px" borderRadius="8px" />
                    <SkeletonBlock width="140px" height="44px" borderRadius="8px" />
                </div>
            </div>

            {/* Cards */}
            <div style={{ padding:"40px", display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"24px" }}>
                {[1,2,3].map(i => (
                    <div key={i} style={{ padding:"28px", border:"1px solid #1f1f1f", borderRadius:"12px", display:"flex", flexDirection:"column", gap:"14px" }}>
                        <SkeletonBlock width="48px" height="48px" borderRadius="10px" />
                        <SkeletonBlock width="70%" height="20px" />
                        <SkeletonBlock width="100%" height="14px" />
                        <SkeletonBlock width="85%"  height="14px" />
                        <SkeletonBlock width="90%"  height="14px" />
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div style={{ padding:"32px 40px", borderTop:"1px solid #1f1f1f", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <SkeletonBlock width="150px" height="16px" />
                <div style={{ display:"flex", gap:"16px" }}>
                    {[1,2,3].map(i => <SkeletonBlock key={i} width="80px" height="14px" />)}
                </div>
            </div>
        </>
    );
}

/* ── Slim top progress bar (route change) ── */
function TopProgressBar({ active }) {
    return (
        <div style={{ position:"fixed", top:0, left:0, width:"100%", height:"3px", zIndex:9999, pointerEvents:"none" }}>
            {active && (
                <div style={{
                    height: "100%",
                    background: "linear-gradient(90deg, #6366f1, #a855f7, #ec4899)",
                    boxShadow: "0 0 12px #a855f7, 0 0 24px #6366f1",
                    animation: "topBarSlide 0.6s ease forwards",
                }} />
            )}
        </div>
    );
}

/* ── Stylish page-transition overlay ── */
function RouteOverlay({ visible }) {
    if (!visible) return null;
    return (
        <div style={{
            position: "fixed", inset: 0, zIndex: 9998,
            background: "radial-gradient(ellipse at center, #13111c 0%, #0a0a0a 100%)",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            gap: "28px",
        }}>
            {/* Animated logo-like rings */}
            <div style={{ position:"relative", width:"72px", height:"72px" }}>
                {[0,1,2].map(i => (
                    <div key={i} style={{
                        position: "absolute", inset: `${i * 10}px`,
                        borderRadius: "50%",
                        border: "2px solid transparent",
                        borderTopColor: ["#6366f1","#a855f7","#ec4899"][i],
                        animation: `spin ${0.9 + i * 0.3}s linear infinite`,
                    }} />
                ))}
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>

            {/* Shimmer content skeleton strips */}
            <div style={{ display:"flex", flexDirection:"column", gap:"10px", width:"220px" }}>
                {[80, 60, 70].map((w, i) => (
                    <div key={i} style={{ ...shimmerBg, width:`${w}%`, height:"10px", borderRadius:"6px" }} />
                ))}
            </div>
        </div>
    );
}

/* ════════════════════════════════ APP ════════════════════════════════ */
function App() {
    const route = useRoute();
    const isFirstLoad   = useRef(true);
    const prevRoute     = useRef(route);

    const [initialLoading, setInitialLoading] = useState(true);   // full skeleton
    const [routeLoading,   setRouteLoading]   = useState(false);  // overlay + top bar
    const [showPage,       setShowPage]       = useState(false);  // triggers fadeIn

    /* Initial load */
    useEffect(() => {
        const t = setTimeout(() => {
            setInitialLoading(false);
            setShowPage(true);
        }, 1800);
        return () => clearTimeout(t);
    }, []);

    /* Route change */
    useEffect(() => {
        if (isFirstLoad.current) { isFirstLoad.current = false; return; }
        if (prevRoute.current === route) return;
        prevRoute.current = route;

        setRouteLoading(true);
        setShowPage(false);

        const t = setTimeout(() => {
            setRouteLoading(false);
            setShowPage(true);
        }, 650);
        return () => clearTimeout(t);
    }, [route]);

    const pageMap = {
        [ROUTES.HOME]:     <Home />,
        [ROUTES.ABOUT]:    <About />,
        [ROUTES.SERVICES]: <Services />,
        [ROUTES.ORDER]:    <Order />,
        [ROUTES.CONTACT]:  <Contact />,
    };

    return (
        <div style={{ minHeight:"100vh", background:"#0a0a0a" }}>
            <GlobalStyles />

            {/* Slim progress bar always mounted, active only during route change */}
            <TopProgressBar active={routeLoading} />

            {/* Stylish overlay during route transitions */}
            <RouteOverlay visible={routeLoading} />

            {initialLoading ? (
                <SkeletonScreen />
            ) : (
                <>
                    <Nav />
                    <main className={showPage ? "page-enter" : ""} style={{ opacity: showPage ? 1 : 0 }}>
                        {pageMap[route] || <Home />}
                    </main>
                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;
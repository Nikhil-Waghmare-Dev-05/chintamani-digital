import { useState, useEffect } from "react";

export const useRoute = () => {
    const [hash, setHash] = useState(() => window.location.hash || "#home");

    useEffect(() => {
        const handleHashChange = () => {
            setHash(window.location.hash || "#home");
        };

        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return hash;
};
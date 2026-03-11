import React from "react";
import { useRoute } from "./hooks/userRoutes";
import { Nav } from "./components/common/Nav";
import { Footer } from "./components/common/Footer";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Services } from "./components/Pages/Services";
import { Order } from "./components/Pages/Order";
import { Contact } from "./components/Pages/Contact";
import { ROUTES } from "./utils/constants";

function App() {
    const route = useRoute();

    const pageMap = {
        [ROUTES.HOME]: <Home />,
        [ROUTES.ABOUT]: <About />,
        [ROUTES.SERVICES]: <Services />,
        [ROUTES.ORDER]: <Order />,
        [ROUTES.CONTACT]: <Contact />,
    };

    return (
        <div style={{ minHeight: "100vh", background: "#0a0a0a" }}>
            <Nav />
            <main className="animate-fade-in">{pageMap[route] || <Home />}</main>
            <Footer />
        </div>
    );
}

export default App;
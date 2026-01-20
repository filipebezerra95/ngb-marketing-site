import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import OurServices from "./pages/OurServices";
import SomeResults from "./pages/SomeResults";
import Portifolio from "./pages/Portifolio";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },

    {
        path: "/nossos-servicos",
        element: <OurServices />
    },

    {
        path: "/alguns-resultados",
        element: <SomeResults />
    },

    {
        path: "/portifolio",
        element: <Portifolio />
    },

    {
        path: "/sobre-nos",
        element: <AboutUs />
    },
    {
        path: "/contato",
        element: <Contact />
    }
], {
  // Isso resolve o erro do GitHub Pages
  basename: "/ngb-marketing-site" 
});

export default router;
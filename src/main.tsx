import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { FavoritosProvider } from "./context/FavoritosContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/index.scss";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <FavoritosProvider>
                <App />
            </FavoritosProvider>
        </BrowserRouter>
    </StrictMode>
);
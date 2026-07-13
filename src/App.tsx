import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/NavBar";
import Personagens from "./pages/Personagens";
import Episodios from "./pages/Episodios";
import Localizacoes from "./pages/Localizacoes";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Navigate to="/personagens" />}/>
                <Route path="/personagens" element={<Personagens />}/>
                <Route path="/episodios" element={<Episodios />}/>
                <Route path="/localizacoes" element={<Localizacoes />}/>
            </Routes>
        </>
    );
}
export default App;
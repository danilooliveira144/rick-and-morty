import { Routes, Route, Navigate } from "react-router-dom";

import Personagens from "./pages/Personagens";

function App() {

    return (

        <Routes>

            <Route
                path="/"
                element={<Navigate to="/personagens" />}
            />

            <Route
                path="/personagens"
                element={<Personagens />}
            />

        </Routes>

    );

}

export default App;
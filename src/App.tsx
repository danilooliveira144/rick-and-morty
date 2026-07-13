import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/NavBar";
import Personagens from "./pages/Personagens";

function App() {

    return (

        <>

            <Navbar />

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

        </>

    );

}

export default App;
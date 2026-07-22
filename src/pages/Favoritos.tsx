import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";
import PersonagemCard from "../components/PersonagemCard";

function Favoritos() {

    const { favoritos } = useContext(FavoritosContext);

    return (
        <div className="container py-4">
            <h1 className="display-4 fw-bold text-success">Favoritos</h1>

            <p className="lead text-secondary mb-5">Seus personagens favoritos do universo Rick and Morty.</p>

            {favoritos.length === 0 ? (
                <div className="alert alert-info text-center">
                    <i className="bi bi-heart me-2"></i>
                    Você ainda não possui personagens favoritos.
                </div>
            ) : (
                <div className="row g-4">
                    {favoritos.map((personagem) => (
                        <div key={personagem.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
                            <PersonagemCard personagem={personagem} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export default Favoritos;
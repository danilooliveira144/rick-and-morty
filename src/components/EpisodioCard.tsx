import { useState } from "react";

interface Personagem {
    id: number;
    name: string;
}

interface Episodio {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
}

interface Props {
    episodio: Episodio;
}

function EpisodioCard({ episodio }: Props) {

    const [personagens, setPersonagens] = useState<Personagem[]>([]);
    const [aberto, setAberto] = useState(false);
    const [carregado, setCarregado] = useState(false);
    const [carregando, setCarregando] = useState(false);

    async function togglePersonagens() {
        if (aberto) {
            setAberto(false);
            return;
        }

        setAberto(true);
        if (carregado) {
            return;
        }

        setCarregando(true);
        try {
            const requests = episodio.characters.map((url) =>
                fetch(url).then((res) => res.json())
            );

            const resultado = await Promise.all(requests);

            setPersonagens(resultado);

            setCarregado(true);
        } catch (erro) {
            console.log(erro);

        } finally {
            setCarregando(false);
        }
    }

    return (
        <div className="card h-100">
            <div className="card-body">
                <span className="badge bg-danger mb-3">{episodio.episode}</span>

                <h4 className="fw-bold mb-3">{episodio.name}</h4>

                <div className="mb-3 text-secondary">
                    <p>
                        <i className="bi bi-calendar-event me-2"></i>
                        {episodio.air_date}
                    </p>

                    <p>
                        <i className="bi bi-people-fill me-2"></i>
                        {episodio.characters.length} personagens
                    </p>
                </div>

                <button className="btn btn-link text-success p-0 text-decoration-none" onClick={togglePersonagens}>
                    {aberto
                        ? "Ocultar personagens"
                        : "Ver personagens"
                    }
                </button>

                {aberto && (
                    <div className="mt-3 border-top pt-3">
                        {carregando ? (
                            <div className="text-center">
                                <div
                                    className="spinner-border spinner-border-sm text-success"
                                    role="status"
                                >
                                    <span className="visually-hidden">Carregando...</span>
                                </div>
                                <p className="mt-2">Carregando...</p>
                            </div>

                        ) : (
                            <div className="d-flex flex-wrap gap-2">
                                {personagens.map((personagem) => (
                                    <span key={personagem.id} className="badge bg-secondary">
                                        {personagem.name}
                                    </span>
                                ))}
                            </div>
                        )
                        }
                    </div>
                )
                }
            </div>
        </div>
    );
}
export default EpisodioCard;
import { useEffect, useState } from "react";

import EpisodioCard from "../components/EpisodioCard";
import Paginacao from "../components/Paginacao";

interface Episodio {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
}

function Episodios() {
    const [episodios, setEpisodios] = useState<Episodio[]>([]);
    const [pagina, setPagina] = useState(1);
    const [temporada, setTemporada] = useState("");
    const [loading, setLoading] = useState(false);
    const [totalPaginas, setTotalPaginas] = useState(0);

    useEffect(() => {
        buscarEpisodios();
    }, [pagina, temporada]);

    async function buscarEpisodios() {
        setLoading(true);

        try {
            let url = `https://rickandmortyapi.com/api/episode?page=${pagina}`;

            if (temporada !== "") {
                url += `&episode=${temporada}`;
            }

            const response = await fetch(url);

            if (!response.ok) {
                setEpisodios([]);
                setTotalPaginas(0);
                return;
            }

            const data = await response.json();

            setEpisodios(data.results);
            setTotalPaginas(data.info.pages);

        } catch (erro) {
            console.log(erro);
            setEpisodios([]);
            setTotalPaginas(0);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="container py-4">
            <h1 className="display-5 fw-bold">Episódios</h1>

            <p className="text-secondary mb-4">Explore todos os episódios de Rick and Morty.</p>

            <div className="mb-4 col-md-2">
                <select
                    className="form-select"
                    value={temporada}
                    onChange={(e) => {
                        setTemporada(e.target.value);
                        setPagina(1);
                    }}
                >
                    <option value="">Todas as temporadas</option>
                    <option value="S01">Temporada 1</option>
                    <option value="S02">Temporada 2</option>
                    <option value="S03">Temporada 3</option>
                    <option value="S04">Temporada 4</option>
                    <option value="S05">Temporada 5</option>
                </select>
            </div>

            {loading && (
                <div className="text-center my-5">
                    <div className="spinner-border text-success" role="status"></div>
                    <p className="mt-3 text-light fw-semibold">Carregando...</p>
                </div>
            )
            }

            {!loading && (
                <div className="row g-4">
                    {episodios.map((episodio) => (
                        <div className="col-lg-4 col-md-6" key={episodio.id}>
                            <EpisodioCard episodio={episodio} />
                        </div>
                    ))
                    }
                </div>
            )
            }

            {!loading && totalPaginas > 0 && (
                <Paginacao
                    pagina={pagina}
                    totalPaginas={totalPaginas}
                    setPagina={setPagina}
                />
            )
            }
        </div>
    );
}
export default Episodios;
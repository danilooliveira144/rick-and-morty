import { useEffect, useState } from "react";

import LocalizacaoCard from "../components/LocalizacaoCard";
import Paginacao from "../components/Paginacao";

interface Localizacao {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
}

function Localizacoes() {
    const [localizacoes, setLocalizacoes] = useState<Localizacao[]>([]);
    const [pagina, setPagina] = useState(1);
    const [tipo, setTipo] = useState("");
    const [loading, setLoading] = useState(false);
    const [totalPaginas, setTotalPaginas] = useState(0);

    useEffect(() => {
        buscarLocalizacoes();
    }, [pagina, tipo]);

    async function buscarLocalizacoes() {
        setLoading(true);

        try {
            let url = `https://rickandmortyapi.com/api/location?page=${pagina}`;

            if (tipo !== "") {
                url += `&type=${tipo}`;
            }

            const response = await fetch(url);

            if (!response.ok) {
                setLocalizacoes([]);
                setTotalPaginas(0);
                return;
            }

            const data = await response.json();

            setLocalizacoes(data.results);
            setTotalPaginas(data.info.pages);
        } catch (erro) {
            console.log(erro);
            setLocalizacoes([]);
            setTotalPaginas(0);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="container py-4">
            <h1 className="display-5 fw-bold">Localizações</h1>

            <p className="text-secondary mb-4">Explore todas as localizações do universo Rick and Morty.</p>

            <div className="mb-4 col-md-2">
                <select
                    className="form-select"
                    value={tipo}
                    onChange={(e) => {
                        setTipo(e.target.value);
                        setPagina(1);
                    }}
                >
                    <option value="">Todos os tipos</option>
                    <option value="Planet">Planeta</option>
                    <option value="Cluster">Cluster</option>
                    <option value="Space station">Estação Espacial</option>
                    <option value="Microverse">Microverso</option>
                    <option value="TV">TV</option>
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
                    {localizacoes.map((localizacao) => (
                        <div className="col-lg-4 col-md-6" key={localizacao.id}>
                            <LocalizacaoCard localizacao={localizacao} />
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
export default Localizacoes;
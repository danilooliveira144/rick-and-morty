import { useEffect, useRef, useState } from "react";

import BuscaPersonagem from "../components/BuscaPersonagem";
import PersonagemCard from "../components/PersonagemCard";
import Paginacao from "../components/Paginacao";

interface Personagem {
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;
}

function Personagens() {

    const [personagens, setPersonagens] = useState<Personagem[]>([]);
    const [pagina, setPagina] = useState(1);
    const [busca, setBusca] = useState("");
    const [buscaAtual, setBuscaAtual] = useState("");
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);
    const [totalPaginas, setTotalPaginas] = useState(0);

    const inputBuscaRef = useRef<HTMLInputElement>(null);

    useEffect(() => {

        inputBuscaRef.current?.focus();

    }, []);

    useEffect(() => {

        buscarPersonagens();

    }, [pagina, buscaAtual, status]);

    async function buscarPersonagens() {

        setLoading(true);

        try {

            let url = `https://rickandmortyapi.com/api/character?page=${pagina}`;

            if (buscaAtual.trim() !== "") {
                url += `&name=${buscaAtual}`;
            }

            if (status !== "") {
                url += `&status=${status}`;
            }

            const response = await fetch(url);

            if (!response.ok) {

                setPersonagens([]);
                setTotalPaginas(0);

                return;

            }

            const data = await response.json();

            setPersonagens(data.results);
            setTotalPaginas(data.info.pages);

        } catch (erro) {

            console.log(erro);

            setPersonagens([]);
            setTotalPaginas(0);

        } finally {

            setLoading(false);

        }

    }

    function pesquisar() {

        setPagina(1);

        setBuscaAtual(busca);

    }

    return (

        <div className="container py-4">

            <h1 className="display-5 fw-bold">
                Personagens
            </h1>

            <p className="text-secondary mb-4">
                Explore todos os personagens do universo Rick and Morty.
            </p>

            <BuscaPersonagem
                busca={busca}
                setBusca={setBusca}
                pesquisar={pesquisar}
            />

            <div className="mb-4">

                <select
                    className="form-select"
                    value={status}
                    onChange={(e) => {

                        setStatus(e.target.value);
                        setPagina(1);

                    }}
                >

                    <option value="">Todos</option>
                    <option value="alive">Vivo</option>
                    <option value="dead">Morto</option>
                    <option value="unknown">Desconhecido</option>

                </select>

            </div>

            {

                loading && (

                    <div className="text-center my-5">

                        <div
                            className="spinner-border text-success"
                            role="status"
                        >
                            <span className="visually-hidden">
                                Carregando...
                            </span>
                        </div>

                    </div>

                )

            }

            {

                !loading && personagens.length > 0 && (

                    <div className="row g-4">

                        {

                            personagens.map((personagem) => (

                                <div
                                    key={personagem.id}
                                    className="col-12 col-md-6 col-lg-4 col-xl-3"
                                >

                                    <PersonagemCard
                                        personagem={personagem}
                                    />

                                </div>

                            ))

                        }

                    </div>

                )

            }

            {

                !loading &&
                personagens.length === 0 && (

                    <div className="alert alert-warning text-center">

                        Nenhum personagem encontrado.

                    </div>

                )

            }

            {

                !loading &&
                totalPaginas > 0 && (

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

export default Personagens;
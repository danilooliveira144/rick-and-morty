interface BuscaPersonagemProps {
    busca: string;
    setBusca: (valor: string) => void;
    pesquisar: () => void;
}

function BuscaPersonagem({
    busca,
    setBusca,
    pesquisar
}: BuscaPersonagemProps) {

    return (

        <div className="row mb-4">

            <div className="col-md-10">

                <input
                    type="text"
                    className="form-control"
                    placeholder="Digite o nome do personagem..."
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                />

            </div>

            <div className="col-md-2">

                <button
                    className="btn btn-success w-100"
                    onClick={pesquisar}
                >
                    Buscar
                </button>

            </div>

        </div>

    );

}

export default BuscaPersonagem;
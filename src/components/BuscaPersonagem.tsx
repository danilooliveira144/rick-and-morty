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
            <div className="col-md-5">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Digite o nome do personagem..."
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                />
            </div>

            <div className="col-md-1">
                <button className="btn-buscar" onClick={pesquisar}>Buscar</button>
            </div>
        </div>
    );
}
export default BuscaPersonagem;
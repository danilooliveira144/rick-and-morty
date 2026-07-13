interface Localizacao {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
}

interface Props {
    localizacao: Localizacao;
}

function LocalizacaoCard({ localizacao }: Props) {
    return (
        <div className="card h-100">
            <div className="card-body">
                <h4 className="fw-bold mb-3">{localizacao.name}</h4>

                <p>
                    <i className="bi bi-globe-americas me-2"></i>
                    <strong>Tipo:</strong> {localizacao.type}
                </p>

                <p>
                    <i className="bi bi-stars me-2"></i>
                    <strong>Dimensão:</strong> {localizacao.dimension}
                </p>

                <p>
                    <i className="bi bi-people-fill me-2"></i>
                    <strong>Residentes:</strong> {localizacao.residents.length}
                </p>
            </div>
        </div>
    );
}
export default LocalizacaoCard;
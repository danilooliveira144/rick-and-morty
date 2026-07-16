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

function traduzirTipo(tipo: string): string {
    switch (tipo) {
        case "Planet":
            return "Planeta";

        case "Cluster":
            return "Cluster";

        case "Space station":
            return "Estação Espacial";

        case "Microverse":
            return "Microverso";

        case "TV":
            return "TV";

        case "":
            return "Desconhecido";

        default:
            return tipo;
    }
}

function corTipo(tipo: string): string {
    switch (tipo) {
        case "Planet":
            return "bg-primary";

        case "Space station":
            return "bg-secondary";

        case "Microverse":
            return "bg-success";

        case "Cluster":
            return "bg-warning text-dark";

        case "Fantasy town":
            return "bg-danger";

        case "Dream":
            return "bg-info text-dark";

        default:
            return "bg-dark";
    }
}

function LocalizacaoCard({ localizacao }: Props) {
    return (
        <div className="card localizacao-card h-100">

            <div className="card-body">
                <h4 className="fw-bold text-success mb-4">
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    {localizacao.name}
                </h4>

                <span className={`badge ${corTipo(localizacao.type)} mb-3`}>{traduzirTipo(localizacao.type)}</span>

                <div className="mb-3">
                    <i className="bi bi-stars text-warning me-2"></i>

                    <span className="text-light">{localizacao.dimension === "unknown" ? "Dimensão desconhecida" : localizacao.dimension}</span>
                </div>

                <div className="text-secondary">
                    <i className="bi bi-people-fill text-info me-2"></i>
                    {localizacao.residents.length} residentes
                </div>
            </div>
        </div>
    );
}
export default LocalizacaoCard;
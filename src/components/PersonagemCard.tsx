import "bootstrap-icons/font/bootstrap-icons.css";

interface Personagem {
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;
}

interface Props {
    personagem: Personagem;
}

function PersonagemCard({ personagem }: Props) {

    function traduzirStatus(status: string): string {
        switch (status) {
            case "Alive":
                return "Vivo";

            case "Dead":
                return "Morto";

            default:
                return "Desconhecido";
        }
    }

    function traduzirEspecie(especie: string): string {
        switch (especie) {
            case "Human":
                return "Humano";

            case "Alien":
                return "Alienígena";

            case "Humanoid":
                return "Humanoide";

            case "Robot":
                return "Robô";

            case "Animal":
                return "Animal";

            default:
                return especie;
        }
    }

    function corStatus(status: string): string {
        switch (status) {
            case "Alive":
                return "text-success";

            case "Dead":
                return "text-danger";

            default:
                return "text-warning";
        }
    }

    return (
        <div className="card h-100 shadow">

            <img
                src={personagem.image}
                className="card-img-top"
                alt={personagem.name}
            />

            <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{personagem.name}</h5>

                <span className="badge bg-dark border border-secondary mb-3 align-self-start">
                    <i className={`bi bi-circle-fill me-2 ${corStatus(personagem.status)}`}style={{ fontSize: "10px" }}></i>
                    {traduzirStatus(personagem.status)}
                </span>

                <p className="card-text">
                    <strong>Espécie:</strong>{" "}
                    {traduzirEspecie(personagem.species)}
                </p>
            </div>
        </div>
    );
}
export default PersonagemCard;
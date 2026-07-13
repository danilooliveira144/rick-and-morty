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

    return (

        <div className="card h-100">

            <img
                src={personagem.image}
                alt={personagem.name}
                className="card-img-top"
            />

            <div className="card-body">

                <h5 className="card-title">
                    {personagem.name}
                </h5>

                <p>

                    <strong>Status:</strong> {personagem.status}

                </p>

                <p>

                    <strong>Espécie:</strong> {personagem.species}

                </p>

            </div>

        </div>

    );

}

export default PersonagemCard;
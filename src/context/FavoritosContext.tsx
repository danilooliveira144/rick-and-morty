import { createContext, useEffect, useState } from "react";

interface Personagem {
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;
}

interface FavoritosContextType {
    favoritos: Personagem[];
    adicionarFavorito: (personagem: Personagem) => void;
    removerFavorito: (id: number) => void;
    isFavorito: (id: number) => boolean;
}

export const FavoritosContext = createContext({} as FavoritosContextType);

export function FavoritosProvider({
    children,
}: {
    children: React.ReactNode;
}) {

    const [favoritos, setFavoritos] = useState<Personagem[]>(() => {

        const favoritosSalvos = localStorage.getItem("favoritos");

        return favoritosSalvos
            ? JSON.parse(favoritosSalvos)
            : [];

    });

    useEffect(() => {

        localStorage.setItem(
            "favoritos",
            JSON.stringify(favoritos)
        );

    }, [favoritos]);

    function adicionarFavorito(personagem: Personagem) {

        if (isFavorito(personagem.id)) return;

        setFavoritos([...favoritos, personagem]);

    }

    function removerFavorito(id: number) {

        setFavoritos(
            favoritos.filter((personagem) => personagem.id !== id)
        );

    }

    function isFavorito(id: number) {

        return favoritos.some(
            (personagem) => personagem.id === id
        );

    }

    return (

        <FavoritosContext.Provider
            value={{
                favoritos,
                adicionarFavorito,
                removerFavorito,
                isFavorito,
            }}
        >

            {children}

        </FavoritosContext.Provider>
    );
}
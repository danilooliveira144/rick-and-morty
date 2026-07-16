interface PaginacaoProps {
    pagina: number;
    totalPaginas: number;
    setPagina: (pagina: number) => void;
}

function Paginacao({
    pagina,
    totalPaginas,
    setPagina
}: PaginacaoProps) {

    const paginas: number[] = [];
    const inicio = Math.max(1, pagina - 2);
    const fim = Math.min(totalPaginas, pagina + 2);

    for (let i = inicio; i <= fim; i++) {
        paginas.push(i);
    }

    return (
        <nav className="mt-5">
            <ul className="pagination justify-content-center">
                <li className={`page-item ${pagina === 1 ? "disabled" : ""}`}>
                    <button className="page-link" onClick={() => setPagina(pagina - 1)}>
                        <i className="bi bi-chevron-left"></i>
                    </button>
                </li>

                {paginas.map((numero) => (
                    <li key={numero} className={`page-item ${numero === pagina ? "active" : ""}`}>
                        <button className="page-link" onClick={() => setPagina(numero)}>{numero}</button>
                    </li>
                ))
                }

                <li className={`page-item ${pagina === totalPaginas ? "disabled" : ""}`}>
                    <button className="page-link" onClick={() => setPagina(pagina + 1)}>
                        <i className="bi bi-chevron-right"></i>
                    </button>
                </li>
            </ul>
        </nav>
    );
}
export default Paginacao;
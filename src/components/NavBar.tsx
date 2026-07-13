import { NavLink } from "react-router-dom";

function Navbar() {

    return (

        <nav className="navbar navbar-expand-lg sticky-top">

            <div className="container">

                <NavLink
                    className="navbar-brand d-flex align-items-center"
                    to="/personagens"
                >

                    <span className="fw-bold">
                        Rick & Morty
                    </span>

                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarMenu"
                >

                    <span className="navbar-toggler-icon"></span>

                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarMenu"
                >

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">

                            <NavLink
                                className="nav-link"
                                to="/personagens"
                            >

                                <i className="bi bi-people-fill me-2"></i>

                                Personagens

                            </NavLink>

                        </li>

                        <li className="nav-item">

                            <NavLink
                                className="nav-link"
                                to="/episodios"
                            >

                                <i className="bi bi-film me-2"></i>

                                Episódios

                            </NavLink>

                        </li>

                        <li className="nav-item">

                            <NavLink
                                className="nav-link"
                                to="/localizacoes"
                            >

                                <i className="bi bi-geo-alt-fill me-2"></i>

                                Localizações

                            </NavLink>

                        </li>

                    </ul>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;
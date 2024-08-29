import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
export function Header() {
    return (
        <>
            <nav id="top" class="navbar navbar-expand-lg bg-white border-bottom">
                <div class="container-fluid d-flex justify-content-lg-center">
                    <Link class="navbar-brand px-lg-3" to={"/"}>Vaibhav Sonawane</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <HashLink class="nav-link active" aria-current="page" to={"/#top"}>Home</HashLink>
                            </li>
                            <li class="nav-item">
                                <HashLink class="nav-link" to={"/#about"}>About Me</HashLink>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={"/privacy-policy"}>Privacy Policy</Link>
                            </li>
                        </ul>
                        <span class="navbar-text px-lg-3">
                            vaibhav@gmail.com
                        </span>
                    </div>
                </div>
            </nav>
        </>
    )
}
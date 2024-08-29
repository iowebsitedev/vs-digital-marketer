import logo from "../images/mr__vaibhav_1.png"
export function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-white border-bottom">
                <div class="container-fluid d-flex justify-content-lg-center">
                    <a class="navbar-brand px-lg-3" href="#">Vaibhav Sonawane</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About Me</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Privacy Policy</a>
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
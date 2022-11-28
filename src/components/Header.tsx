import style from '../styles/index.module.css'

export default function Header() {
  return (
      <div>
          <header>
              <nav className="navbar navbar-expand-lg fixed-top navbar-dark px-5 bg-dark bg-light">
                  <div className="container-fluid ">
                      <a className={`navbar-brand  bold ${style.fonteTitulo} fs-2 ${style.corEspecial}`} href="#">Learn Plus</a>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
                          <ul className="navbar-nav">
                              <li className="nav-item">
                                <a className="nav-link active" href="#">Início<span className="sr-only"></span></a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#">Cursos</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#">Quem somos</a>
                              </li>
                              <li className="nav-item">
                                <a className={`nav-link bold ${style.cor}`}  href="#">Assine</a>
                              </li>
                              <div className="dropdown">
                                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-person-fill"></i>
                                  </button>
                                  <ul className="dropdown-menu">
                                      <li><a className="dropdown-item" href="#">Login</a></li>
                                      <li><a className="dropdown-item" href="#">Opções</a></li>
                                      <li><a className="dropdown-item" href="#">Contate-nos</a></li>
                                  </ul>
                              </div>
                              <li className="nav-item">
                                <a className="nav-link" href="#"></a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </nav>
          </header>
      </div>
  )
}
import style from '../styles/index.module.css'

export default function Header() {
  return (
      <div>
          <header>
              <nav className={`navbar navbar-expand-lg navbar-dark bg-dark px-4 navbar-light fixed-top bg-light`}>
                  <a className={`navbar-brand bold ${style.fonteTitulo} ${style.corEspecial}`} href="#">Learn Plus</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                      <ul className="navbar-nav">
                          <li className="nav-item active">
                              <a className="nav-link" href="#">Início<span className="sr-only"></span></a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">Cursos</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">Quem somos</a>
                          </li>
                          <li className="nav-item">
                              <a className={`nav-link bold ${style.cor}`} data-toggle="modal" data-target="#modal-contato" href="#">Assine</a>
                          </li>
                      </ul>
                  </div>
              </nav>
          </header>
      </div>
  )
}
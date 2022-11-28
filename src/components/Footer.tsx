import style from '../styles/index.module.css'

export default function Header() {
  return (
      <div>
          <footer className="bg-dark p-3 fs-4 text-light m-0 text-center">
              <a href="mailto:email@frutafruto.com.br" className="mx-4 text-light">
                  <i className="bi bi-envelope-at-fill"></i></a>
              <a href="mailto:email@frutafruto.com.br" className="text-light">
                  <i className="bi bi-instagram"></i></a>
              <a href="mailto:email@frutafruto.com.br" className="mx-4 text-light">
                  <i className="bi bi-twitter"></i></a>
          </footer>
      </div>
  )
}
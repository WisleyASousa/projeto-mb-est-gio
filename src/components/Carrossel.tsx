/* eslint-disable @next/next/no-img-element */

import style from '../styles/index.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'

interface CarrosselProps {
    className?: string;
}

export default function Carrossel(props: CarrosselProps) {
    return (
        <div>
            <div id="carouselExampleDark" className="carousel pt-5 carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="4000">
                        <img src="../../img/cursos-online.png" className={`d-block w-100 ${style.imagemCarrossel}`} alt="..." />
                            <div className="carousel-caption d-none d-md-block h-25">
                                <h1 className={`${style.fonteTitulo} display-4`} >Os melhores Cursos!</h1>
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src="../../img/Curso.jpg" className={`d-block w-100 ${style.imagemCarrossel}`} alt="..." />
                            <div className="carousel-caption d-none d-md-block h-20">
                                <h1 className={`${style.fonteTitulo} display-4`} >Os melhores Instrutores!</h1>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

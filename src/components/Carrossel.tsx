/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import style from '../styles/index.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Carrossel() {
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
                        <img src="../../img/curso.jpg" className={`d-block w-100 ${style.imagemCarrossel}`} alt="..." />
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



{/* <div id="carouselExampleCaptions" className="carousel slide" data-interval="3000" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval={10000}>
                            <img  
                                src='../../img/carrossel-img1.jpg'
                                className={`d-block w-100 ${style.imagemCarrossel}`}alt="..." 
                            />
                                <div className="carousel-caption d-none d-md-block h-50">
                                    <h1 className={`${style.fonteTitulo} display-4`} >Reaproveite melhor os alimentos!</h1>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img 
                                src='../../img/carrossel-img2.jpg' 
                                className={`d-block w-100 ${style.imagemCarrossel}`} 
                                alt="..." 
                            />
                                <div className="carousel-caption d-none d-md-block h-50">
                                    <h1 className={`${style.fonteTitulo} display-4`}>Economize e ganhe em saúde!</h1>
                                </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div> */}
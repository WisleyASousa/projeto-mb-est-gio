/* eslint-disable @next/next/no-img-element */
import style from '../styles/index.module.css'


export default function Cards() {
    return (
        <div>
            <main className="bg-light" >
                <section className="container ">
                    <div className="row  justify-content-center">
                        <article className={`card shadow ${style.bordarCorEspecial} ${style.cardTamanho} p-0 m-4 col-12 col-md-3`}>
                            <img src="../../img/html5.jpg" className={`shadow-sm rounded card-img-top ${style.cardPosicaoImagem}`} alt="tigela com salada de abacate, vista superior" />
                                <div className="card-body">
                                    <h5 className="card-title">HTML 5</h5>
                                    <p className="card-text">É uma linguagem de estruturação e apresentação de conteúdo para a World Wide Web. </p>
                                    <a href="#" className={`shadow-sm btn ${style.corBotaoEspecial} text-white`}>Iniciar Curso</a>
                                </div>
                        </article>
                        <article className={`card shadow ${style.bordarCorEspecial} ${style.cardTamanho} p-0 m-4 col-12 col-md-3`}>
                            <img src="../../img/css.webp" className={`shadow-sm  rounded card-img-top ${style.cardPosicaoImagem}`} alt="tigela com salada de abacate, vista superior" />
                                <div className="card-body">
                                    <h5 className="card-title">CSS</h5>
                                    <p className="card-text">Cascading Style Sheets (CSS) está se tornando mais do que apenas uma linguagem para estilizar a web. </p>
                                    <a href="#" className={`shadow-sm btn ${style.corBotaoEspecial} text-white`}>Iniciar Curso</a>
                                </div>
                        </article>
                        <article className={`card shadow ${style.bordarCorEspecial} ${style.cardTamanho} p-0 m-4 col-12 col-md-3`}>
                            <img src="../../img/js.jpeg" className={`shadow-sm rounded card-img-top ${style.cardPosicaoImagem}`} alt="tigela com salada de abacate, vista superior" />
                                <div className="card-body">
                                    <h5 className="card-title">JavaScript</h5>
                                    <p className="card-text">É uma linguagem de programação leve, orientada a objetos e interpretada. </p>
                                    <a href="#" className={`shadow-sm btn mt-4 ${style.corBotaoEspecial} text-white`}>Iniciar Curso</a>
                                </div>
                        </article>
                        <article className={`card shadow ${style.bordarCorEspecial} ${style.cardTamanho} p-0 m-4 col-12 col-md-3`}>
                            <img src="../../img/ts.png" className={`shadow-sm rounded card-img-top ${style.cardPosicaoImagem}`} alt="tigela com salada de abacate, vista superior" />
                                <div className="card-body">
                                    <h5 className="card-title">TypeScript</h5>
                                    <p className="card-text">É uma linguagem de programação de código aberto desenvolvida pela Microsoft.</p>
                                    <a href="#" className={`mt-4 shadow-sm btn ${style.corBotaoEspecial} text-white`}>Iniciar Curso</a>
                                </div>
                        </article>
                        <article className={`card shadow ${style.bordarCorEspecial} ${style.cardTamanho} p-0 m-4 col-12 col-md-3`}>
                            <img src="../../img/react.png" className={`shadow-sm rounded card-img-top ${style.cardPosicaoImagem}`} alt="tigela com salada de abacate, vista superior" />
                                <div className="card-body">
                                    <h5 className="card-title">React JS</h5>
                                    <p className="card-text">React Js oferece ferramentas, bibliotecas e painéis de métodos prontos para front-end.</p>
                                    <a href="#" className={`mt-4 shadow-sm btn ${style.corBotaoEspecial} text-white`}>Iniciar Curso</a>
                                </div>
                        </article>
                        <article className={`card shadow ${style.bordarCorEspecial} ${style.cardTamanho} p-0 m-4 col-12 col-md-3`}>
                            <img src="../../img/next.png" className={`shadow-sm rounded card-img-top ${style.cardPosicaoImagem}`} alt="tigela com salada de abacate, vista superior" />
                                <div className="card-body">
                                    <h5 className="card-title">Next.JS</h5>
                                    <p className="card-text"> é uma estrutura de desenvolvimento front-end que permite funcionalidades como e geração de sites estáticos. </p>
                                    <a href="#" className={`shadow-sm btn ${style.corBotaoEspecial} text-white`}>Iniciar Curso</a>
                                </div>
                        </article>
                    </div>
                </section>
            </main>
        </div>
    )
}
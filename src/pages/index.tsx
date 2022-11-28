import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Carrossel from '../components/Carrossel'
import Title from '../components/Title'
import Cards from '../components/Cards'
import style from '../styles/index.module.css'
import Footer from '../components/Footer'



export default function Home() {
  return (
    <div >
      <Head>
        <title>Learn Plus</title>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
      </Head>

      <main className={`${style.backgroundCor}`}>
        <Header />
        <Carrossel />
        <Title />
        <Cards />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

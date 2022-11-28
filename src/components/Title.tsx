import style from '../styles/index.module.css'

export default function Title() {
  return (
      <div >
          <section>
              <h1 className={`text-center ${style.fonteTitulo} ${style.corEspecial} pt-4`}>Faça Assinatura da Plataforma</h1>
              <p className="text-center text-secondary pt-1 pb-4">Com Assinatura você terá melhor proveito dos conteúdos com atualizações semanais nas formações, Assine já!</p>
          </section>
      </div>
  )
}
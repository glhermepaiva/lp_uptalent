import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../styles/index.module.css'
import * as yup from 'yup'
import emailjs from 'emailjs-com'
import ReactLoading from 'react-loading'

export default function LandingPage() {

  /***** EXTERNAL LINKS  *****/

  const openLinkedin = () => {
    window.open('https://www.linkedin.com/company/uptalentrh/');
  }

  const openMaps = () => {
    window.open('https://goo.gl/maps/m1zxnHaACgxrymi66/');
  }

/***** ANCHOR LINKS  *****/

const anchorHeader = () => {
  window.location.replace("/#header")
}

const anchorServicos = () => {
  window.location.replace("/#servicos")
}

const anchorDiferencial = () => {
  window.location.replace("/#diferencial")
}

const anchorClientes = () => {
  window.location.replace("/#clientes")
}

const anchorEquipe = () => {
  window.location.replace("/#equipe")
}

const anchorContratacao = () => {
  window.location.replace("/#contratacao")
}

const anchorContato = () => {
  window.location.replace("/#contato")
}

/***** EMAIL VALIDATIONS  *****/

const schema = yup.object().shape({
  name: yup.string().required('Nome não pode estar em branco'),
  email: yup.string().email('Endereço de email inválido').required('Email não pode estar em branco'),
  phone: yup.number().min(11, 'O telefone precisa ter no mínimo 11 números').required('Telefone não pode estar em branco'),
  message: yup.string().min(3, 'A mensagem deve ter no mínimo 3 caracteres').max(300, 'A mensagem pode ter no máximo 300 caracteres').required('Mensagem não pode estar em branco')
})

const [loading, setLoading] = useState(false)

const onSubmit = async (e) => {
  e.preventDefault()

  setLoading(true)

  let formData = {
    name: e.target[0].value,
    email: e.target[1].value,
    phone: e.target[2].value,
    message: e.target[3].value,
  }

  const isValid = await schema.isValid(formData);

  if (isValid) {
      emailjs.sendForm('service_ibuddku', 'template_uptalent', e.target, 'user_qksKqi9BtojdtprKYCtue')

      .then((result) => {
          console.log(result);
          alert("Sucesso! Logo entraremos em contato!")
          window.location.href = "/?uri=";
      }, (error) => {
          console.log(error);
          setLoading(false)
      });

  } else {
      alert("Por favor garanta que todos os campos foram preenchidos corretamente e tente novamente.")
      setLoading(false)
      console.log(formData)
    }
}

/***** RETURN  *****/

  return (
    <div className={styles.page}>
      <Head>
        <title>Up talent | Recursos humanos</title>
        <meta name='description' content='Talentos para sua empresa decolar' />
      </Head>


      <div className={styles.uptalentLogoG} id='header'/>


      <div className={styles.menuOpcoes}>
        <div onClick={anchorServicos}>Serviços</div>
          <div onClick={anchorDiferencial}>Nosso diferencial</div>
          <div onClick={anchorClientes}>Nossos clientes</div>
          <div onClick={anchorEquipe}>A equipe</div>
          <div onClick={anchorContratacao}>Modelo de contratação</div>
          <div onClick={anchorContato}>Contato</div>
      </div>

      <div className={styles.imgHero} />
      <div className={styles.tituloMain}>Talentos que voam, para sua empresa decolar.</div>
      <div className={styles.textoMain}>Recrutamos o que há de melhor no mercado digital para seu negócio voar alto.</div>
      <div className={styles.blackBar} />
      <div className={styles.redBall} />

      <div className={styles.tituloServicos} id='servicos'>Serviços</div>
      <div className={styles.bgServicos}></div>
      <div className={styles.imgAnalyst} />
      <div className={styles.textoServicos}>Uma consultoria em RH focada em recrutamento e seleção de profissionais da área digital.</div>
      <div className={styles.greenBar1} />
      <div className={styles.containerServicos}>
        <div className={styles.topicoServicos1}>
          <div className={styles.svc1} />
          <div className={styles.svcTexto1}>Recrutamento e seleção</div>
        </div>
        <div className={styles.topicoServicos2}>
          <div className={styles.svc2} />
          <div className={styles.svcTexto2}>Entrevista de desligamento</div>
        </div>
        <div className={styles.topicoServicos3}>
          <div className={styles.svc3} />
          <div className={styles.svcTexto3}>One a one após 3 meses do início do colaborador</div>
        </div>
        <div className={styles.topicoServicos4}>
          <div className={styles.svc4} />
          <div className={styles.svcTexto4}>Welcome kit personalizado (fazer diagnóstico)</div>
        </div>
        <div className={styles.topicoServicos5}>
          <div className={styles.svc5} />
          <div className={styles.svcTexto5}>Recrutamento Taylor Made</div>
        </div>
      </div>


      <div className={styles.bgDiferencial} id='diferencial'>
        <div className={styles.tituloDiferencial}>Nosso diferencial</div>
        <div className={styles.imgBall} />
        <div className={styles.imgBall4} />
        <div className={styles.purpleBar} />
        <div className={styles.textoDiferencial}>Uma consultoria de RH focada em recrutamento e seleção de profissionais da área digital. Prezamos pela qualidade da seleção, prazo e assertividade. Com passagens desde 2008, em grandes agências e consultorias sempre focada no digital como por exemplo: Predicta, Isobar e DBG. Com foco em R&S, estruturação do departamento de R.H, entrevistas de desligamentos, mapeamento de áreas, pesquisa de clima e qualidade de vida para os colaboradores.</div>
        <div className={styles.imgIdea} />
      </div>


      <div className={styles.tituloClientes} id='clientes'>Nossos clientes</div>
      <div className={styles.greenBar} />
      <div className={styles.bgClientes}>
        <div className={styles.yoLogo} />
        <div className={styles.tripLogo} />
        <div className={styles.pointLogo} />
      </div>


      <div className={styles.tituloEquipe} id='equipe'>Conheça nossa equipe</div>
      <div className={styles.yellowBar} />
      <div className={styles.yellowBall} />
      <div className={styles.containerEquipe}>
        <div className={styles.containerEquipe01}>
          <div className={styles.fotoEquipe01} />
          <div className={styles.tituloEquipe01}>Fabiana Secchis</div>
          <div className={styles.textoEquipe01}>Diretora Executiva</div>
        </div>
        <div className={styles.containerEquipe02}>
          <div className={styles.fotoEquipe02} />
          <div className={styles.tituloEquipe02}>Nayara Sousa</div>
          <div className={styles.textoEquipe02}>Consultora de Talentos</div>
        </div>
        <div className={styles.containerEquipe03}>
          <div className={styles.fotoEquipe03} />
          <div className={styles.tituloEquipe03}>Mariana Andrade</div>
          <div className={styles.textoEquipe03}>Consultora de Talentos</div>
        </div>
      </div>
      

      <div className={styles.bgContratacao} id='contratacao'/>
      <div className={styles.tituloContratacao}>Modelos de contratação</div>
      <div className={styles.whiteBar}></div>
      <div className={styles.imgGear}></div>
      <div className={styles.imgBall2}></div>
      <div>
        <div className={styles.containerContratacao}>
          <div className={styles.contratacaoPontual}>
            <div className={styles.fotoPontual} />
            <div className={styles.tituloPontual}>Job Pontual</div>
            <div className={styles.textoPontual}>Contrato por vaga</div>
          </div>
          <div className={styles.contratacaoFee}>
            <div className={styles.fotoFee} />
            <div className={styles.tituloFee}>Fee por período</div>
            <div className={styles.textoFee}>Com a quantidade de vagas a combinar</div>
          </div>
          <div className={styles.contratacaoHub}>
            <div className={styles.fotoHub} />
            <div className={styles.tituloHub}>Hub dedicado</div>
            <div className={styles.textoHub}>para atender o RH da empresa</div>
          </div>
        </div>
      </div>


      <div className={styles.bgContato} id='contato'>
        <div className={styles.tituloContato}>Contato</div>
        <div className={styles.aquaBar}></div>
        <div className={styles.containerContato}>
          <div className={styles.textoContato}>Vamos bater um papo? <b>Manda uma mensagem pra gente e diz como podemos te ajudar hoje.</b></div>
            {loading ? <div className={styles.formLoading}><ReactLoading type={"spinningBubbles"} color={"#EB6099"} height={"20%"} width={"20%"}/></div> :
          <form className={styles.contactForm} onSubmit={onSubmit}>
            <input className={styles.nomeContato} type="text" name="name" placeholder="Nome"></input>
            <input className={styles.emailContato} type="text" name="email" placeholder="Email"></input>
            <input className={styles.telefoneContato} type="text" name="phone" placeholder="Telefone"></input>
            <textarea className={styles.mensagemContato} type="textarea" name="message" placeholder="Deixe sua mensagem aqui..."></textarea>
            <button className={styles.botaoContato}>Enviar</button>
          </form>}
          <div className={styles.imgBall3}></div>
          <div className={styles.infosContato}>
            <div className={styles.emailtituloContato}>Email</div>
            <div className={styles.emailendContato}>contato@uptalentrh.com.br</div>
            <div className={styles.endtituloContato}>Endereço</div>
            <div className={styles.enderecoContato}>Vila Madalena - São Paulo, SP
            </div>
          </div>
          <div className={styles.mapaContato} onClick={openMaps}/>
        </div>
      </div>


      <div className={styles.footer}>
        <div className={styles.uptalentLogoP} onClick={anchorHeader}/>
        <div className={styles.menuOpcoes2}>
          <div onClick={anchorServicos}>Serviços</div>
          <div onClick={anchorDiferencial}>Nosso diferencial</div>
          <div onClick={anchorClientes}>Nossos clientes</div>
          <div onClick={anchorEquipe}>A equipe</div>
          <div onClick={anchorContratacao}>Modelo de contratação</div>
          <div onClick={anchorContato}>Contato</div>
        </div>
        <div className={styles.sociais}>
          <div className={styles.logoLinkedin} onClick={openLinkedin}/>
        </div>
        <div className={styles.copyright}>Copyright © 2022 Up Talent</div>
      </div>
      

    </div>
  )
}

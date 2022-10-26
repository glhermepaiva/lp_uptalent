import Head from 'next/head'
import styles from '../styles/index.module.css'

export default function LandingPage() {



  return (
    <div className={styles.page}>
      <Head>
        <title>Up talent | Recursos humanos</title>
        <meta name='description' content='Talentos para sua empresa decolar' />
      </Head>


      <div className={styles.uptalentLogoG} />


      <div className={styles.menuOpcoes}>
        <div>Serviços</div>
        <div>Nosso diferencial</div>
        <div>Nossos clientes</div>
        <div>A equipe</div>
        <div>Modelo de contratação</div>
        <div>Contato</div>
      </div>


      <div className={styles.tituloMain}>Talentos que voam, para sua empresa decolar.</div>
      <div className={styles.textoMain}>Recrutamos o que há de melhor no mercado digital para seu negócio voar alto.</div>
      

      <div className={styles.tituloServicos}>Serviços</div>
      <div className={styles.textoServicos}>Uma consultoria em RH focada em recrutamento e seleção de profissionais da área digital.</div>
      <div>
        <div className={styles.topicoServicos}>Recrutamento e seleção.</div>
        <div className={styles.topicoServicos}>Entrevista de desligamento.</div>
        <div className={styles.topicoServicos}>One a one após 3 meses do início do colaborador.</div>
        <div className={styles.topicoServicos}>Welcome kit personalizado (fazer diagnóstico)</div>
        <div className={styles.topicoServicos}>Recrutamento Taylor Made</div>
      </div>


      <div className={styles.bgDiferencial}>
        <div className={styles.tituloDiferencial}>Nosso diferencial</div>
        <div className={styles.textoDiferencial}>Uma consultoria de RH focada em recrutamento e seleção de profissionais da área digital. Prezamos pela qualidade da seleção, prazo e assertividade. Com passagens desde 2008, em grandes agências e consultorias sempre focada no digital como por exemplo: Predicta, Isobar e DBG. Com foco em R&S, estruturação do departamento de R.H, entrevistas de desligamentos, mapeamento de áreas, pesquisa de clima e qualidade de vida para os colaboradores.</div>
        <div className={styles.botaoDiferencial}>Conheça mais</div>
      </div>


      <div className={styles.tituloClientes}>Nossos clientes</div>
      <div className={styles.bgClientes}>
        <div className={styles.yoLogo} />
        <div className={styles.tripLogo} />
        <div className={styles.pointLogo} />
      </div>


      <div className={styles.tituloEquipe}>Conheça nossa equipe</div>
      <div>
        <div className={styles.fotoFabi} />
        <div className={styles.tituloFabi}>Fabiana Secchis</div>
        <div className={styles.textoFabi}>Sócia Diretora</div>
      </div>
      <div>
        <div className={styles.fotoCarol} />
        <div className={styles.tituloCarol}>Caroline Secchis</div>
        <div className={styles.textoCarol}>Consultora de Talentos</div>
      </div>
      


      <div className={styles.tituloContratacao}>Modelos de contratação</div>
      <div>
        <div className={styles.contratacaoPontual}>
          <div className={styles.fotoPontual} />
          <div className={styles.tituloPontual}>Job Pontual</div>
          <div className={styles.textoPontual}>Contrato pot vaga</div>
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


      <div className={styles.bgContato}>
        <div className={styles.tituloContato}>Contato</div>
        <div className={styles.textoContato}>Vamos bater um papo? <b>Manda uma mensagem pra gente e diz como podemos te ajudar hoje.</b></div>
        <div>
          <div className={styles.nomeContato}>Nome</div>
          <div className={styles.emailContato}>Email</div>
          <div className={styles.telefoneContato}>Telefone</div>
          <div className={styles.assuntoContato}>Assunto</div>
          <div className={styles.mensagemContato}>Mensagem</div>
          <div className={styles.botaoContato}>Enviar</div>
        </div>
        <div className={styles.emailtituloContato}>Email</div>
        <div className={styles.emailendContato}>fabi@uptalentrh.com.br</div>
        <div className={styles.endtituloContato}>Endereço</div>
        <div className={styles.enderecoContato}>Avenida Lorem Ipsum, 000
          00º andar - Vila Lorem Ipsum
          00000-000 - São Paulo, SP</div>
        <div className={styles.mapaContato} />
      </div>


      <div className={styles.uptalentLogoP} />

      <div className={styles.menuOpcoes2}>
        <div>Serviços</div>
        <div>Nosso diferencial</div>
        <div>Nossos clientes</div>
        <div>A equipe</div>
        <div>Modelo de contratação</div>
        <div>Contato</div>
      </div>

      <div className={styles.sociais}>
        <div className={styles.logoFacebook} />
        <div className={styles.logoInstagram} />
        <div className={styles.logoLinkedin} />
      </div>


      <div className={styles.copyright}>Copyright © 2022 Up Talent</div>

    </div>
  )
}

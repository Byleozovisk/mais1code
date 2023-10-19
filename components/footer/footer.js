import styles from './footer.module.scss';

export default function Navbar() {
    return <> 
        <div className={styles['principal']}>
          <section className={styles['sobre-nos']}>
            <h4>Sobre nós</h4>
            <a href='https://www.institutoalgar.org.br/sobre-o-instituto/' target='_blank'>Nossa História</a>
          </section>
          <section className={styles['redes-sociais']}>
            <h4>Nossa Redes</h4>
            <div className={styles['links']}>
              <a href='#' ><img src='./imgs/Icones/facebook.png' /></a>
              <a href='#' ><img src='./imgs/Icones/instagram.png' /></a>
              <a href='#' ><img src='./imgs/Icones/youtube.png' /></a>
              <a href='#' ><img src='./imgs/Icones/twitter.png' /></a>
              <a href='#' ><img src='./imgs/Icones/linkedin.png' /></a>
            </div>
          </section>
          <section className={styles['programas']}>
            <h4>Programas</h4>
            <a href='https://www.institutoalgar.org.br/programas-sociais/programa-transforma/' target='_blank'>Transforma</a><br/>
            <a href='https://www.institutoalgar.org.br/programas-sociais/programa-de-voluntariado/' target='_blank'>Voluntários</a><br/>
            <a href='https://www.institutoalgar.org.br/programas-sociais/programa-talentos-de-futuro/' target='_blank'>Talentos do Futuro</a><br/>
            <a href='https://www.institutoalgar.org.br/programas-sociais/programa-educador-do-amanha/' target='_blank'>Educador do amanhã</a><br/>
          </section>
          <section className={styles['ultima']}>
            <img src='./imgs/Icones/Instituto-Algar-1-removebg-preview.png'alt='logo algar'/>
            <h5>Copyright © 2023 | Instituto Algar - Todos os direitos reservados.</h5>
          </section>
        </div>
    </>
  }

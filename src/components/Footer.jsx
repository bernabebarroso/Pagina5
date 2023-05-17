import style from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={style.container}>
      <div className={style.footerContainer}>
        <div>
          <h6 className={style.footerTitle}>Compañia</h6>
          <ul>
            <li className={style.footerList}>Quienes somos</li>
            <li className={style.footerList}>Blog</li>
            <li className={style.footerList}>Trabajos</li>
            <li className={style.footerList}>Patrocinadores</li>
          </ul>
        </div>
        <div>
          <h6 className={style.footerTitle}>Soporte</h6>
          <ul>
            <li className={style.footerList}>Precios</li>
            <li className={style.footerList}>Navegacion</li>
            <li className={style.footerList}>Guias</li>
            <li className={style.footerList}>API</li>
          </ul>
        </div>
        <div>
          <h6 className={style.footerTitle}>Legal</h6>
          <ul>
            <li className={style.footerList}>Privacidad</li>
            <li className={style.footerList}>Terminos</li>
            <li className={style.footerList}>Políticas</li>
            <li className={style.footerList}>Condiciones</li>
          </ul>
        </div>
        <div>
          <h6 className={style.footerTitle}>Digital</h6>
          <ul>
            <li className={style.footerList}>Marketing</li>
            <li className={style.footerList}>Analytics</li>
            <li className={style.footerList}>Comercio</li>
            <li className={style.footerList}>Datos</li>
          </ul>
        </div>
        <div className={style.footerLetter}>
          <p className={style.firstLetterText}>
            Suscribite a nuestro boletin informativo
          </p>
          <p className={style.seecondLetterText}>
            Las últimas noticias, articulos e información, en tu email
          </p>
          <form className={style.footerForm}>
            <input
              className={style.formInput}
              type="email"
              placeholder="Ingresa tu email"
            />
            <button className={style.formButton}>Suscribirse</button>
          </form>
        </div>
      </div>
      <div className={style.footerCopyright}>
        <span className={style.copySpan}>
          2023 Lorem Pinturas, LLC. Todos los derechos reservados.
        </span>
      </div>
    </div>
  );
};

export default Footer;

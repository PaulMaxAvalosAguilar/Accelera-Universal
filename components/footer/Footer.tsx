import { Component, createSignal, onMount, onCleanup } from 'solid-js';
import styles from './Footer.module.scss';
import logo from './Web.png';
import { Envelope } from './Envelope';
import { ArrowRight } from './ArrowRight';

export const Footer: Component = (props) => {
  return (
    <footer class={``}>
      <div class={styles.row}>
        <div class={styles.col}>
          <img src={logo} class={styles.logo}>
            {' '}
          </img>
          <p>
            Suscríbete nuestro boletín electrónico y entérate de todas nuestras
            nuevas campañas y desarrollos, que puede haber algo que se adapte
            perfectamente a ti
          </p>
        </div>
        <div class={styles.col}>
          <h3>Oficina</h3>
          <p> Puebla Puebla</p>
          <p> Argelia 1421-3 Mundial 86</p>
          <p> Puebla, C.P 72070, México</p>
          <p class={styles.emailId}>04avalos3a@gmail.com</p>
          <h4> +51 222 230 59 72</h4>
        </div>
        <div class={styles.col}>
          <h3> Links</h3>
          <ul>
            <li>
              <a href="">Servicios</a>
            </li>
            <li>
              <a href="">Tienda</a>
            </li>
            <li>
              <a href="">App</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
        <div class={styles.col}>
          <h3>Boletín Electrónico</h3>
          <form>
            <Envelope
              height="30px"
              width="30px"
              viewBox="0 0 24 24"
              class={`${styles.envelope} ${styles.far}`}
            ></Envelope>
            <input type="email" placeholder="Enter your email-id"></input>
            <button type="submit">
              <ArrowRight
                height="20px"
                width="20px"
                viewBox="0 0 10 7"
                class={styles.arrowRight}
              ></ArrowRight>
            </button>
          </form>
        </div>
      </div>
      <hr></hr>
      <p class={styles.copyright}>
        S.D.T. Servicios de Alto Rendimiento S.A. de C.V. & Paul Max Avalos
        Aguilar ⓒ 2023 - All rights reserved
      </p>
    </footer>
  );
};

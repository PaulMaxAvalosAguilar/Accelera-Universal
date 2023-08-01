export { Page };
export { documentProps };

import { Component, createEffect, createSignal, onMount } from 'solid-js';
import { Navbar } from '#root/components';
import { Footer } from '#root/components';

import { navigate } from 'vite-plugin-ssr/client/router';

import { usePageContext } from '#root/renderer/pageContext';

const documentProps = {
  // This title and description will override the defaults
  title: 'Main',
  description: 'Maining',
};

const Page: Component = (props) => {
  const [button1Invisible, setButton1Invisible] = createSignal<boolean>(false);
  const [formInvisible, setformInvisible] = createSignal<boolean>(true);

  let button1: HTMLLabelElement | undefined;
  let button2: HTMLInputElement | undefined;

  function handleButton1Click() {
    setButton1Invisible(!button1Invisible());
    setformInvisible(!formInvisible());
    console.log('Clicked');
  }

  function handleButton2Click() {
    setButton1Invisible(!button1Invisible());
    setformInvisible(!formInvisible());
  }

  onMount(() => {
    button1?.addEventListener('click', handleButton1Click);
    button2?.addEventListener('click', handleButton2Click);
  });

  function formHandler() {}

  return (
    <>
      <div class={''}>
        <Navbar></Navbar>

        <section class={styles.home}>
          <div class={styles.suscribeSection}>
            <div class={styles.container1}>
              <div class={styles.discountContainer}>
                <img alt="discount" />
                <p class={styles.paragraph}>
                  <span class={styles.whiteText}>100%</span> de descuento por{' '}
                  <span class={styles.whiteText}>1 Mes</span> de entrenamiento
                </p>
              </div>
            </div>
            <div class={styles.container2}>
              <h1>
                <a href="/products/abc">
                  Entrenamiento personalizado en Puebla
                </a>
                <br />{' '}
                <span class={styles.firstGradient}>de última generación </span>
                <br />
                <span>para el gimnasio</span>
                <br />
                <span class={styles.secondGradient}>basado en Tecnología </span>
              </h1>
            </div>

            <div class={styles.container3}>
              <p>
                Creado para una gran variedad de atletas, por un equipo de
                expertos, que te ayudarán a plantearte objetivos realistas de
                acuerdo a tu perfil deportivo para progresar de manera paulatina
                y constante
              </p>

              <form class={styles.suscribeWrapper} onsubmit={formHandler}>
                <label
                  ref={button1}
                  class={`${styles.btn1} 
              ${button1Invisible() ? styles.invisible : ''}`}
                >
                  Iniciar
                </label>
                <div
                  class={`${styles.field} ${
                    formInvisible() ? styles.invisible : ''
                  }`}
                >
                  <input
                    type="email"
                    placeholder="tú email"
                    class={styles.email}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  ></input>
                  <input
                    ref={button2}
                    type="submit"
                    value={'Suscribir'}
                    class={styles.btn2}
                  >
                    {' '}
                  </input>
                </div>
              </form>
            </div>
          </div>

          <img class={styles.hookImage}></img>
        </section>
        <Footer></Footer>
      </div>
    </>
  );
};

/*
    gsap.registerPlugin(ScrollTrigger);
    const showAnimReverse = gsap
      .from(navbar ?? '', {
        yPercent: -200,
        paused: true,
        duration: 0.5,
      })
      .progress(1);

    ScrollTrigger.create({
      id: 'my-trigger',
      start: 'top top -=' + 50,
      end: 99999,
      onUpdate: (self) => {
        if (self.direction === -1) {
          showAnimReverse.duration(0.3);
          showAnimReverse.play();
        } else {
          showAnimReverse.duration(0.5);
          showAnimReverse.reverse();
        }
      },
    });

    if (window.matchMedia('(max-width: 800px)').matches) {
      console.log('resize');
      var trigger = ScrollTrigger.getById('my-trigger');
      if (trigger) {
        trigger.disable();
      }
    }

    window.addEventListener('resize', () => {
      if (window.matchMedia('(max-width: 800px)').matches) {
        var trigger = ScrollTrigger.getById('my-trigger');
        if (trigger) {
          trigger.disable();
          gsap
            .to(navbar ?? '', {
              yPercent: 0,
              duration: 0.5,
            })
            .progress(1);
        }
      } else {
        var trigger = ScrollTrigger.getById('my-trigger');
        if (trigger) {
          trigger.enable();
        }
      }
    });
    */

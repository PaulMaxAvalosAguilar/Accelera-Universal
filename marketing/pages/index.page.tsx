export { Page };
export { documentProps };

import { Component, createEffect, onMount } from 'solid-js';
import { Navbar } from '#root/components';
import { Footer } from '#root/components';
import styles from './index.module.scss';

const documentProps = {
  // This title and description will override the defaults
  title: 'Main',
  description: 'Main',
};

const Page: Component = (props) => {
  return (
    <>
      <div class={styles.container}>
        <Navbar></Navbar>
        <div class={styles.main}>
          <p class={styles.bottom}>Anchored to the bottom</p>
        </div>
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

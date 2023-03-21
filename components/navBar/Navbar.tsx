import { Component, createSignal, onMount, onCleanup } from 'solid-js';

import styles from './Navbar.module.scss';
import logo from './Web.png';
import { BurgerButton } from '../navBar/BurgerButton';
import { FolderLogo } from './FolderLogo';
import { TiendaLogo } from './TiendaLogo';
import { AppLogo } from './AppLogo';
import { BlogLogo } from './BlogLogo';

export const NavBar: Component = (props) => {
  const [menuOpened, setMenuOpened] = createSignal<boolean>(false);
  const [subMenu1Opened, setSubMenu1Opened] = createSignal<boolean>(false);
  const [subMenu2Opened, setSubMenu2Opened] = createSignal<boolean>(false);

  let subMenu1Header: HTMLAnchorElement | undefined;
  let subMenu2Header: HTMLAnchorElement | undefined;

  function handleMenuIconClick() {
    setMenuOpened(!menuOpened());
    if (menuOpened() === true) {
      setSubMenu1Opened(false);
      setSubMenu2Opened(false);
    }
  }

  function handleSubMenu1Click() {
    setSubMenu1Opened(!subMenu1Opened());
  }

  function handleSubMenu2Click() {
    setSubMenu2Opened(!subMenu2Opened());
  }

  onMount(() => {
    subMenu1Header?.addEventListener('click', handleSubMenu1Click);
    subMenu2Header?.addEventListener('click', handleSubMenu2Click);
  });

  onCleanup(() => {
    subMenu1Header?.removeEventListener('click', handleMenuIconClick);
    subMenu2Header?.removeEventListener('click', handleSubMenu2Click);
  });

  return (
    <nav class={``}>
      <div class={styles.navbar}>
        <div class={styles.logo}>
          <a href="#">
            <img src={logo} />
          </a>
        </div>
        <div class={styles.burgerButton}>
          <BurgerButton
            handleClick={handleMenuIconClick}
            opened={menuOpened()}
          ></BurgerButton>
        </div>
        <div
          class={`${styles.navlinksContainer} ${
            menuOpened() ? styles.active : ''
          } `}
        >
          <ul class={styles.menu}>
            <li class={styles.menuElement}>
              <a
                ref={subMenu1Header}
                class={`${styles.submenuHeader} ${
                  subMenu1Opened() ? styles.showSubMenu : ''
                }`}
                href="#"
              >
                <FolderLogo
                  height={'24px'}
                  width={'24px'}
                  viewBox={'0 0 502.672 502.672'}
                  class={styles.linkIcon}
                ></FolderLogo>
                Servicios
                <i class={styles.arrow}></i>
              </a>
              <ul class={styles.submenu}>
                <li class={styles.menuElement}>
                  <a href="/Web">Entrenamiento Personalizado</a>
                </li>
                <li class={styles.menuElement}>
                  <a href="#">Sistema de Nutrición</a>
                </li>
                <li class={styles.menuElement}>
                  <a href="#">Sistemas de Administración de Gimnasios</a>
                </li>
              </ul>
            </li>
            <li class={styles.menuElement}>
              <a
                href="#"
                ref={subMenu2Header}
                class={`${styles.submenuHeader} ${
                  subMenu2Opened() ? styles.showSubMenu : ''
                }`}
              >
                <TiendaLogo
                  height="24px"
                  width="22px"
                  viewBox="0 0 990 900"
                  class={styles.linkIcon}
                ></TiendaLogo>
                Tienda<i class={styles.arrow}></i>
              </a>
              <ul class={styles.submenu}>
                <li class={styles.menuElement}>
                  <a href="#">Encoder</a>
                </li>
                <li class={styles.menuElement}>
                  <a href="#">Tienda</a>
                </li>
              </ul>
            </li>
            <li class={styles.menuElement}>
              <a href="/aboutus">
                <AppLogo
                  height="24px"
                  width="24px"
                  viewBox="0 0 900 900"
                  class={styles.linkIcon}
                ></AppLogo>
                App
              </a>
            </li>
            <li class={styles.menuElement}>
              <a href="#">
                <BlogLogo
                  height="22px"
                  width="22px"
                  viewBox="0 0 550 550"
                  class={styles.linkIcon}
                ></BlogLogo>
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

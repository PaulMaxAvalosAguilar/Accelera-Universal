import { Component } from 'solid-js';
import { onPageTransitionEnd } from '../../renderer/_default.page.client';
import styles from './BurgerButton.module.scss';

export const BurgerButton: Component<{
  handleClick: () => void;
  opened: boolean;
}> = (props) => {
  return (
    <>
      <div
        onClick={props.handleClick}
        class={`${styles.navIcon}  ${props.opened ? styles.open : ''}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};

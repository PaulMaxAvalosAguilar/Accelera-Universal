export { Page };
export { documentProps };

import { Component, createEffect } from 'solid-js';
import { Counter } from './Counter';
import { usePageContext } from '../../renderer/pageContext';

const documentProps = {
  // This title and description will override the defaults
  title: 'Main',
  description: 'Main',
};

const Page: Component = (props) => {
  return (
    <>
      <h1 class="title">Welcome</h1>
      <div>
        This page is:
        <ul>
          <li>Rendered to HTML.</li>
          <li>
            Interactive. <Counter />
          </li>
        </ul>
      </div>
    </>
  );
};

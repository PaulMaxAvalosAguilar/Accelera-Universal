export { clientRouting };
export { render };
export { onPageTransitionStart };
export { onPageTransitionEnd };

import { createSignal } from 'solid-js';
import { render as solidRender, hydrate } from 'solid-js/web';
import { PageLayout } from './PageLayout';
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client/router';
import type { PageContextCustom } from './types';
import { getHeapSpaceStatistics } from 'v8';

const clientRouting = true; //To disable set of false & comment export
let layoutReady = false;

// Central signal to track the current active route.
const [context, setContext] = createSignal<PageContextCustom | null>(null);

function render(pageContext: PageContextBuiltInClient & PageContextCustom) {
  const container = document.getElementById('page-view');

  setContext(pageContext);

  // If haven't rendered the layout yet, do so now.
  if (!layoutReady) {
    // Render the page.
    // This is the first page rendering; the page has been rendered to HTML
    // and we now make it interactive.

    if (clientRouting) {
      const { documentProps } = pageContext.exports;
      document.title =
        (documentProps && documentProps.title) || 'Default Client Title';
    }

    //CSRendering
    if (container?.innerHTML === '' || !pageContext.isHydration) {
      solidRender(() => <PageLayout pageContext={context()} />, container!);
      //SSRendering
    } else {
      hydrate(() => <PageLayout pageContext={context()} />, container!);
    }

    layoutReady = true;
  }
}

function onPageTransitionStart(
  pageContext: PageContextBuiltInClient & PageContextCustom
) {
  //Only runs in CSR
}

function onPageTransitionEnd(
  pageContext: PageContextBuiltInClient & PageContextCustom
) {
  //Only runs in CSR
  const container = document.getElementById('page-view');
  const { documentProps } = pageContext.exports;

  document.title =
    (documentProps && documentProps.title) || 'Default Client Title';
}

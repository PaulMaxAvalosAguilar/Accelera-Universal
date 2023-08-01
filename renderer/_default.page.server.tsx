import { generateHydrationScript, renderToStream } from 'solid-js/web';
import {
  escapeInject,
  dangerouslySkipEscape,
  stampPipe,
} from 'vite-plugin-ssr/server';

import './Main.css';
import { PageContextCustom } from './types';
import logoUrl from './logo.svg';
import { PageLayout } from './PageLayout'; //Initial component

export { render };
export { passToClient };

// See https://vite-plugin-ssr.com/data-fetching
const passToClient = ['pageProps', 'documentProps', 'routeParams'];

function render(pageContext: PageContextCustom) {
  //Header definitions for first searched page in the URL---------------------
  //This definitions are taken from *.page.tsx
  //Then put into <head> </head> correponding tags
  //See below at documentHTML
  const { documentProps } = pageContext.exports;
  const title = (documentProps && documentProps.title) || 'Default SSR title';
  const description =
    (documentProps && documentProps.description) || 'Default SSR desc';
  const logo = (documentProps && documentProps.logo) || logoUrl;
  //Header definitions--------------------------------------------------------

  enum RenderMode {
    ssr = 0,
    spa = 1,
  }

  let pipeobj;
  let renderMode: RenderMode;

  if (!pageContext.Page) {
    renderMode = RenderMode.spa;
  } else {
    renderMode = RenderMode.ssr;
    pipeobj = renderToStream(() => <PageLayout pageContext={pageContext} />);
    stampPipe(pipeobj.pipe, 'node-stream');
  }

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logo}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${description}" />
        <title>${title}</title>
        ${renderMode ? '' : dangerouslySkipEscape(generateHydrationScript())}
      </head>
      <body>
        <div id="page-view">${
          renderMode ? '' : pipeobj ? pipeobj.pipe : 'empty'
        }</div>
      </body>
    </html>
  `;

  return {
    documentHtml,
    pageContext: {
      enableEagerStreaming: true,
    },
  };
}

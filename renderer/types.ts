import { Component } from 'solid-js';
import type { PageContextBuiltIn } from 'vite-plugin-ssr';
import type { Accessor } from 'solid-js';

export type PageProps = {};

type Page = Component<PageProps>;

//PageContext plus custom page context object we expect to receive
export type PageContextCustom = PageContextBuiltIn<Page> & {
  pageProps: PageProps;
  documentProps?: {
    title?: string;
    description?: string;
    logo?: string;
  };
  exports?: {
    documentProps?: {
      title?: string;
      description?: string;
      logo?: string;
    };
  };
};

export interface Props {
  pageContext: PageContextCustom | null;
}

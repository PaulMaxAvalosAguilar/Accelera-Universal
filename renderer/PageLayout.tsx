import type { JSX, Component } from 'solid-js';
import { Props } from './types';
import { PageContextProvider } from './pageContext';
import './PageLayout.css';

export { PageLayout };

const PageLayout: Component<Props> = (props) => {
  const renderedRoute = () => {
    if (props.pageContext) {
      const { Page, pageProps } = props.pageContext;
      return Page && <Page {...pageProps} />;
    }
  };

  return (
    <PageContextProvider pageContext={props.pageContext}>
      <div>{renderedRoute()}</div>
    </PageContextProvider>
  );
};

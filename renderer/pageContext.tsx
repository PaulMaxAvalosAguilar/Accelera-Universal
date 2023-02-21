import { createContext, useContext, JSX, Component } from 'solid-js';
import { Page } from '../Marketing/pages/index.page';
import { PageContextCustom } from './types';

const PageContext = createContext();

export const PageContextProvider: Component<{
  pageContext: PageContextCustom | null;
  children: JSX.Element;
}> = (props) => {
  return (
    <PageContext.Provider value={props.pageContext}>
      {props.children}
    </PageContext.Provider>
  );
};

export function usePageContext() {
  return useContext(PageContext);
}

export { Page };
export { documentProps };

import { Component, createEffect, createSignal, onMount } from 'solid-js';
import { usePageContext } from '#root/renderer/pageContext';
import { Navbar } from '#root/components/navBar/Navbar';

const documentProps = {
  // This title and description will override the defaults
  title: 'Product',
  description: 'products dynamic page',
};

const Page: Component = (props) => {
  var cont = usePageContext();

  console.log(cont);
  console.log(cont.routeParams);
  console.log(props);

  var [routeParams, setRouteParams] = createSignal(cont);

  return (
    <>
      <Navbar></Navbar>
      <p>{cont.routeParams.id}</p>
      <p>{props.movies}</p>
      <p class="text-5xl font-bold text-lime-500">Este es un texto</p>
      <p class="text-3xl text-emerald-500"> Hi mom!</p>
    </>
  );
};

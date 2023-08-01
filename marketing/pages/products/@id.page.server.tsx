export { onBeforeRender }

async function onBeforeRender(pageContext) {
  console.log("running in server");
  var  movies = 'supermoviesduper';
  // We make `movies` available as `pageContext.pageProps.movies`
  const pageProps = { movies }
  return {
    pageContext: {
      pageProps
    }
  }
}
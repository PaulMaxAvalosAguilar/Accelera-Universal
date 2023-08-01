// Note that this file isn't processed by Vite, see https://github.com/brillout/vite-plugin-ssr/issues/562

const express = require('express');
const compression = require('compression');
const { renderPage } = require('vite-plugin-ssr/server');

require('dotenv').config();

const routes = require('./routes');

const isProduction = process.env.NODE_ENV === 'production';
const root = `${__dirname}/..`;

startServer();

async function startServer() {
  const app = express();

  //Authentication

  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: false,
    })
  );

  //Authentication

  app.use(compression());

  if (isProduction) {
    const sirv = require('sirv');
    app.use(sirv(`${root}/dist/client`));
  } else {
    const vite = require('vite');
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true },
      })
    ).middlewares;
    app.use(viteDevMiddleware);
  }

  app.get('*', async (req, res, next) => {
    const userAgent = req.headers['user-agent'];
    const pageContextInit = {
      urlOriginal: req.originalUrl,
      userAgent,
    };
    const pageContext = await renderPage(pageContextInit);
    const { httpResponse } = pageContext;
    if (!httpResponse) return next();
    const { statusCode, contentType, earlyHints } = httpResponse;
    if (res.writeEarlyHints)
      res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) });
    res.status(statusCode).type(contentType);
    httpResponse.pipe(res);
  });

  app.route('/signin').get((req, res) => {
    res.send('hola');
  });

  app.use(routes);

  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
}

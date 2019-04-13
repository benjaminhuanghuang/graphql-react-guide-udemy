const app = require('./app');

const PORT = 4000

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const history = require('connect-history-api-fallback');
app.use(history());

app.use(webpackMiddleware(webpack(webpackConfig)));


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

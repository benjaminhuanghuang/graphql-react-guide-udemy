## Reference
- https://reacttraining.com/blog/react-router-v5/
- https://reacttraining.com/react-router/web/example/sidebar


##
- Install
```
npm install --save react-router-dom
```

- Codeing 
```
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";




```

## Fix express server
https://github.com/bripkens/connect-history-api-fallback
```
const history = require('connect-history-api-fallback');
app.use(history());

app.use(webpackMiddleware(webpack(webpackConfig)));
```
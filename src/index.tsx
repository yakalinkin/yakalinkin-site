import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';

import Root from './root';

render(
  <HashRouter>
    <Root />
  </HashRouter>,
  document.getElementById('root'),
);

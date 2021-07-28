import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';

import { HelloWorld } from './components/hello-world';

import { loadFontGroup } from './utils/load-fonts';

import styleJson from './styles/main.scss.json';

const Root = () => {
  useEffect(() => {
    document.title = 'Root';

    (async () => {
      await loadFontGroup(styleJson.font.typefaces['primary']);
    })();

  }, []);

  return <HelloWorld />;
};

export default hot(Root);

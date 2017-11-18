import React from 'react';

import Root from 'containers/Root/Root';
import { configureStore } from 'config';

const App = () => <Root {...configureStore()} />;

export default App;

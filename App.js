import React from 'react';

import Root from 'containers/Root/Root';
import { configureStore } from 'config';

const store = configureStore();

const App = () => <Root store={store} />;

export default App;

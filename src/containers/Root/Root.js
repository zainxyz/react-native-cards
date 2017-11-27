import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container } from 'native-base';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';

import Navigation from 'components/Navigation';
import Loading from 'components/Loading';
import { setLocalNotification } from 'utils';

class Root extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    const { persistor, store } = this.props;
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <Container>
            <Navigation />
          </Container>
        </PersistGate>
      </Provider>
    );
  }
}

Root.propTypes = {
  persistor: PropTypes.object.isRequired,
  store    : PropTypes.object.isRequired
};

export default Root;

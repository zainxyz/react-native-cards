import Entypo from 'react-native-vector-icons/Entypo';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container } from 'native-base';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';

import AddCard from 'containers/AddCard/AddCard';
import AddDeck from 'containers/AddDeck/AddDeck';
import Home from 'containers/Home/Home';
import Loading from 'components/Loading';
import PageHeader from 'components/PageHeader';
import Quiz from 'containers/Quiz/Quiz';
import ViewDeck from 'containers/ViewDeck/ViewDeck';
import { COLORS, setLocalNotification } from 'utils';

const Tabs = TabNavigator(
  {
    Home: {
      screen           : Home,
      navigationOptions: {
        tabBarLabel: 'View All Decks',
        tabBarIcon : ({ tintColor }) => <Entypo name="layers" size={25} color={tintColor} />
      }
    },
    AddDeck: {
      screen           : AddDeck,
      navigationOptions: {
        tabBarLabel: 'Add A Deck',
        tabBarIcon : ({ tintColor }) => <Entypo name="plus" size={25} color={tintColor} />
      }
    }
  },
  {
    navigationOptions: {
      header: PageHeader({ statusColor: 'white' })
    },
    tabBarOptions: {
      activeTintColor      : COLORS.WHITE,
      activeBackgroundColor: COLORS.DARK,
      style                : {
        height         : 56,
        backgroundColor: COLORS.WHITE
      },
      labelStyle: {
        fontSize: 14
      },
      tabStyle: {
        paddingBottom: 5
      }
    }
  }
);

const AppNavigator = StackNavigator({
  Home: {
    screen           : Tabs,
    navigationOptions: ({ navigation }) => ({
      header: PageHeader({
        headerColor: COLORS.DARK,
        title      : 'React Native Cards',
        titleColor : COLORS.WHITE
      })
    })
  },
  ViewDeck: {
    screen           : ViewDeck,
    navigationOptions: ({ navigation }) => ({
      header: PageHeader({
        headerColor  : COLORS.DARK,
        leftComponent: {
          onPress: navigation.goBack,
          icon   : <Entypo name="chevron-thin-left" size={25} color={COLORS.WHITE} />
        },
        subTitle     : 'Viewing Deck',
        subTitleColor: COLORS.WHITE,
        title        : navigation.state.params.deck.title,
        titleColor   : COLORS.WHITE
      })
    })
  },
  AddCard: {
    screen           : AddCard,
    navigationOptions: ({ navigation }) => ({
      header: PageHeader({
        headerColor  : COLORS.DARK,
        leftComponent: {
          onPress: navigation.goBack,
          icon   : <Entypo name="chevron-thin-left" size={25} color={COLORS.WHITE} />
        },
        title     : 'Adding New Card',
        titleColor: COLORS.WHITE
      })
    })
  },
  Quiz: {
    screen           : Quiz,
    navigationOptions: ({ navigation }) => ({
      header: PageHeader({
        headerColor  : COLORS.DARK,
        leftComponent: {
          onPress: navigation.goBack,
          icon   : <Entypo name="chevron-thin-left" size={25} color={COLORS.WHITE} />
        },
        title     : 'Quiz Time',
        titleColor: COLORS.WHITE
      })
    })
  }
});

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
            <AppNavigator />
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

import Entypo from 'react-native-vector-icons/Entypo';
import PropTypes from 'prop-types';
import React from 'react';
import { Container, Spinner } from 'native-base';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';

import AddCard from 'containers/AddCard/AddCard';
import AddDeck from 'containers/AddDeck/AddDeck';
import Home from 'containers/Home/Home';
import PageHeader from 'components/PageHeader';
import Quiz from 'containers/Quiz/Quiz';
import ViewDeck from 'containers/ViewDeck/ViewDeck';
import { COLORS } from 'utils';

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
    },
    StartQuiz: {
      screen           : AddDeck,
      navigationOptions: {
        tabBarLabel: 'Start A Quiz',
        tabBarIcon : ({ tintColor }) => <Entypo name="bell" size={25} color={tintColor} />
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

const Root = props => {
  const { persistor, store } = props;

  return (
    <Provider store={store}>
      <PersistGate
        loading={<Spinner color={COLORS.secondary} style={styles.container} />}
        persistor={persistor}
      >
        <Container>
          <AppNavigator />
        </Container>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: '#fff',
    alignItems     : 'center',
    justifyContent : 'center'
  },
  spacer: {
    marginTop   : 10,
    marginBottom: 10
  }
});

Root.propTypes = {
  persistor: PropTypes.object.isRequired,
  store    : PropTypes.object.isRequired
};

export default Root;

import React, { Component } from 'react';
import _isEmpty from 'lodash/isEmpty';
import { StyleSheet } from 'react-native';
import {
  Button,
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Root,
  Text,
  Title,
  Toast,
  View
} from 'native-base';
import { connect } from 'react-redux';

import PageHeader from 'components/PageHeader';
import { actions as decksActions } from 'modules/decks';

class AddDeck extends Component {
  state = {
    title: ''
  };

  handleSubmit = () => {
    const { title } = this.state;
    const { addDeck, navigation } = this.props;

    if (!_isEmpty(title)) {
      addDeck({ title });
      navigation.goBack();
    } else {
      Toast.show({
        text      : 'Please enter a valid title for the deck.',
        position  : 'bottom',
        buttonText: 'Okay',
        type      : 'danger'
      });
    }
  };

  render() {
    const { navigation } = this.props;
    const { title } = this.state;

    return (
      <Root>
        <Container>
          <PageHeader
            navigateTo={() => navigation.goBack()}
            title="Add A Deck"
            icon="ios-arrow-back"
          />
          <Content>
            <Form ref={f => (this._form = f)} style={styles.container}>
              <Title style={styles.title}>What is the title of your new deck?</Title>
              <Item floatingLabel>
                <Label>Deck Title</Label>
                <Input value={title} onChangeText={title => this.setState({ title })} />
              </Item>
              <View style={styles.spacer} />
              <View style={styles.container}>
                <Button onPress={this.handleSubmit}>
                  <Text>Add New Deck</Text>
                </Button>
              </View>
            </Form>
          </Content>
        </Container>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex          : 1,
    justifyContent: 'center',
    alignItems    : 'center'
  },
  spacer: {
    marginTop   : 10,
    marginBottom: 10
  },
  title: {
    fontSize    : 24,
    marginTop   : 10,
    marginBottom: 10
  }
});

export default connect(null, {
  addDeck: decksActions.addDeck
})(AddDeck);

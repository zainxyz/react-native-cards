import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _isEmpty from 'lodash/isEmpty';
import { Alert, Text, View } from 'react-native';
import { Button, Container, Content, Form, Item, Input, Label } from 'native-base';
import { connect } from 'react-redux';

import Spacer from 'components/Spacer';
import { actions as decksActions } from 'modules/decks';
import { addDeckStyles } from 'styles';

class AddDeck extends Component {
  state = {
    title: ''
  };

  _updateTitle = title => this.setState(() => ({ title }));

  handleSubmit = () => {
    const { title } = this.state;
    const { addDeck, navigation } = this.props;

    if (!_isEmpty(title)) {
      addDeck({ title });
      this._updateTitle('');
      navigation.goBack();
    } else {
      Alert.alert('Title for the deck is empty', "Please provide a valid 'title' for the deck.");
    }
  };

  render() {
    const { title } = this.state;

    return (
      <Container>
        <Content>
          <Form ref={f => (this._form = f)} style={addDeckStyles.container}>
            <Text style={addDeckStyles.title}>What is the title of your new deck?</Text>
            <Item floatingLabel last>
              <Label>Deck Title</Label>
              <Input value={title} onChangeText={this._updateTitle} />
            </Item>
            <Spacer space={20} />
            <View style={[addDeckStyles.container, { flexDirection: 'row' }]}>
              <Button full large style={addDeckStyles.button} onPress={this.handleSubmit}>
                <Text style={addDeckStyles.buttonText}>Add New Deck</Text>
              </Button>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}

AddDeck.propTypes = {
  addDeck   : PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};

export default connect(null, {
  addDeck: decksActions.addDeck
})(AddDeck);

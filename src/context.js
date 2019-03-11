import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Karen William',
        email: 'KW@gmail.com',
        phone: '555-555-5555',
      },
      {
        id: 2,
        name: 'Alan Thompson',
        email: 'alan@gmail.com',
        phone: '555-999-5555',
      },
      {
        id: 3,
        name: 'Fred Jordan',
        email: 'fred@gmail.com',
        phone: '555-333-5555',
      },
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    },
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

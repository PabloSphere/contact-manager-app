import React, { Component } from 'react';

const Context = React.createContext();

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

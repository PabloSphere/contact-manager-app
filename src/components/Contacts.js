import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
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
  }

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;

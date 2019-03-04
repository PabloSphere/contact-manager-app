import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Contact extends Component {
    render() {
        return (
            <div className="card card-body mb-3">
                <h4>Alan Thompson</h4>
                <ul className="list-group">
                    <li className="list-group-item">Email: jdoe@gmila.com</li>
                    <li className="list-group-item">Phone: 555-5555</li>
                </ul>
            </div>
        )
    }
}

Contact.prototypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
}

export default Contact

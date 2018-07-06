import React, { Component } from 'react';

export class CreateCustomer extends Component {
    displayName = CreateCustomer.name
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div><label>Tên khách hàng</label><input type='text' width='200px' height='50px' /></div>
            );
    }
}

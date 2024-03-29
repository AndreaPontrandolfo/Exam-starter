import React, { Component } from 'react';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: [],
    };
  }

  componentDidMount() {
    fetch(`/api/customers`)
      .then(res => res.json())
      .then(customers => this.setState({customers,}, () => console.log(`Customers fetched...`, customers)));
  }

  render() {
    const {customers,} = this.state; 
    
    return (
      <div>
        <h2>Customers</h2>
        <ul>
        {customers.map(customer => 
          <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Customers;

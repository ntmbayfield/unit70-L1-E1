import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import CartItems from './CartItems';

const cartItemsList = [
  { id: 1,
    product: {
      id: 40,
      name: 'Mediocre Iron Watch',
      priceInCents: 399
    },
    quantity: 1
  },
  { id: 2,
    product: {
      id: 41,
      name: 'Heavy Duty Concrete Plate',
      priceInCents: 499
    },
    quantity: 2
  },
  { id: 3,
    product:
      { id: 42,
        name: 'Intelligent Paper Knife',
        priceInCents: 1999
      },
    quantity: 1
  }
]


class App extends Component {
  render() {
    return (
      <div className="App">
        <CartHeader />
          <CartItems cartItemsList={cartItemsList}/>
        <CartFooter copyright="&copy;" year="2016"/>
      </div>
    );
  }
}

export default App;

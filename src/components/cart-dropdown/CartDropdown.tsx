import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import CustomButton from '../custom-button';
import CartItem from '../cart-item';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import './cart-dropdown.styles.scss';

interface CartItems {
  cartItems: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    quantity: number;
  }[];
}
interface CartDropdownProps extends RouteComponentProps {
  dispatch: any;
  cartItems: {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    quantity: number;
  }[];
}

const CartDropdown: React.FC<CartDropdownProps> = ({
  cartItems,
  history,
  dispatch,
}) => {
  console.log('CartDropdown: ', history);

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

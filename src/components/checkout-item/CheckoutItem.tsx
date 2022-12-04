import React from 'react';

import './checkout-item.styles.scss';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';

interface CartItemObj {
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}
interface CheckoutItemProps {
  cartItem: {
    name: string;
    imageUrl: string;
    price: number;
    quantity: number;
  };
  clearItem: (a: CartItemObj) => void;
  addItem: (a: CartItemObj) => void;
  removeItem: (a: CartItemObj) => void;
}
const CheckoutItem = ({
  cartItem,
  clearItem,
  addItem,
  removeItem,
}: CheckoutItemProps) => {

  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

interface DispatchProps {
  type: string;
  payload: CartItemObj;
}

  
const mapDispatchToProps = (dispatch: (a: DispatchProps) => void)=> ({
  clearItem: (item: CartItemObj) => dispatch(clearItemFromCart(item)),
  addItem: (item: CartItemObj) => dispatch(addItem(item)),
  removeItem: (item: CartItemObj) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

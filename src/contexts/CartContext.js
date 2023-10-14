import React, { createContext, useEffect, useState } from "react";

//create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  //cart state
  const [cart, setCart] = useState([]);

  //item amount state
  const [itemAmount, setItemAmount] = useState(0);

  //Total price state
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  //update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  //add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    //Check if the item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    //console.log(newItem);

    //if cart item is already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  //console.log(cart);

  //remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  //Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  //Increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);

    addToCart(cartItem, id);

    //console.log(item);
    //console.log(`item ${id}`);
  };

  //Decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    //console.log(item);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

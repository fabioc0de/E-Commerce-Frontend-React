import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  items: [] // { product, quantity }
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, quantity } = action.payload;
      const existing = state.items.find(item => item.product.id === product.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map(item =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        };
      }
      return {
        ...state,
        items: [...state.items, { product, quantity }]
      };
    }
    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        items: state.items.filter(item => item.product.id !== action.payload.id)
      };
    }
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      return {
        ...state,
        items: state.items.map(item =>
          item.product.id === id ? { ...item, quantity } : item
        )
      };
    }
    case 'CLEAR_CART':
      return initialState;
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ cart: state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

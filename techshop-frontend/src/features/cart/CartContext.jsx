import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext(null);

const initialState = {
  items: [] // { product, quantity }
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, quantity = 1} = action.payload;
      const qty = Number(quantity) > 0 ? Number(quantity) : 1;
      const existing = state.items.find(item => item.product.id === product.id);
      
      if (existing) {
        return {
          ...state,
          items: state.items.map(item =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + qty }
              : item
          )
        };
      }
      return {
        ...state,
        items: [...state.items, { product, quantity: qty }]
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
      const nextQty = Number(quantity);

      if(!Number.isInteger(nextQty) || nextQty < 1) {
        return {
          ...state,
          items: state.items.filter(item => item.product.id !== id)
        };
      }

      return {
        ...state,
        items: state.items.map(item =>
          item.product.id === id ? { ...item, quantity } : item
        )
      };
    }
    case 'CLEAR_CART':
      return {...initialState, items: []};

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
  const context = useContext(CartContext);
  
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

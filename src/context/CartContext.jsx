import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext(null);

const initialState = {
  items: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const jaEstaNoCarrinho = state.items.some(
        (item) => item.id === action.payload.id
      );
      if (jaEstaNoCarrinho) return state; // idempotente: clicar 2x não duplica
      return { items: [...state.items, action.payload] };
    }
    case 'REMOVE_ITEM':
      return { items: state.items.filter((item) => item.id !== action.payload) };
    case 'CLEAR_CART':
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (servico) => dispatch({ type: 'ADD_ITEM', payload: servico });
  const removeItem = (id) => dispatch({ type: 'REMOVE_ITEM', payload: id });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const total = state.items.reduce((soma, item) => soma + item.preco, 0);
  const duration = state.items.reduce((soma, item) => soma + item.duracaoMinutos, 0);

  const value = {
    items: state.items,
    count: state.items.length,
    total,
    duration,
    addItem,
    removeItem,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}


export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart precisa ser usado dentro de um <CartProvider>');
  }
  return context;
}
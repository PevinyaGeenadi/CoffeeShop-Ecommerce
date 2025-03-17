import React, { createContext, useState, ReactNode} from "react";
//@ts-ignore
import all_products from "../assets/all_products";

// Define a type for a product (modify based on your actual product structure)
type Product = {
  id: number;
  name: string;
  old_price: number;
  new_price: number;
  image: string;
};

type Cart = {
  [key: number]: number;
};


interface ShopContextValue {
  all_products: Product[];
  cartItems: Cart;
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  getTotalCartAmount: () => number;
  getTotalCartItems: () => number;
}


// Define the props for the provider
interface ShopContextProviderProps {
  children: ReactNode;
}

export const ShopContext = createContext<ShopContextValue | undefined>(undefined);

const getDefaultCart = (): Cart => {
  let cart: Cart = {};
  for (let index = 0; index < all_products.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider: React.FC<ShopContextProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Cart>(getDefaultCart());

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log("Added to cart:", itemId, cartItems);
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        //@ts-ignore
        let itemInfo = all_products.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if(cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }

  const contextValue: ShopContextValue = {
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
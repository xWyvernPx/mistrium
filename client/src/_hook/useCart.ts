import React, { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { cartAPI } from "../_api/cart.api";
import cartAtom from "../_atom/cartAtom";

const useCart = () => {
  const [cart, setCart] = useRecoilState(cartAtom);

  useEffect(() => {
    console.log(cart);
  }, [cart]);
  const toggleCart = useCallback(() => {
    setCart({
      ...cart,
      isOpen: !cart.isOpen,
    });
  }, [cart]);
  const addToCart = useCallback(
    (product_id: number, quantity: number) => {
      cartAPI.addToCart(product_id, quantity).then((cartFetched) =>
        setCart({
          ...cart,
          id: cartFetched.id,
          cartItems: cartFetched.details,
        })
      );
    },
    [cart]
  );
  const removeFromCart = useCallback(
    (cart_detail_id: number) => {
      cartAPI.removeFromCart(cart_detail_id).then((cartFetched) =>
        setCart({
          ...cart,
          id: cartFetched.id,
          cartItems: cartFetched.details,
        })
      );
    },
    [cart]
  );
  const updateCartItem = useCallback(
    (cart_detail_id: number, quantity: number) => {
      cartAPI.updateCartItem(cart_detail_id, quantity).then((cartFetched) =>
        setCart({
          ...cart,
          id: cartFetched.id,
          cartItems: cartFetched.details,
        })
      );
    },
    [cart]
  );
  const increaseQuantity = useCallback(
    (cart_detail_id: number, current_quantity: number) => {
      cartAPI
        .updateCartItem(cart_detail_id, current_quantity + 1)
        .then((cartFetched) =>
          setCart({
            ...cart,
            id: cartFetched.id,
            cartItems: cartFetched.details,
          })
        );
    },
    [cart]
  );
  const decreaseQuantity = useCallback(
    (cart_detail_id: number, current_quantity: number) => {
      cartAPI
        .updateCartItem(cart_detail_id, current_quantity - 1)
        .then((cartFetched) =>
          setCart({
            ...cart,
            id: cartFetched.id,
            cartItems: cartFetched.details,
          })
        );
    },
    [cart]
  );
  return {
    isActive: cart.isOpen,
    cartItems: cart.cartItems,
    cartTotal: cart.cartTotal,
    cartSize: cart.cartItems.length,
    toggleCart,
    addToCart,
    removeFromCart,
    updateCartItem,
    increaseQuantity,
    decreaseQuantity,
  };
};

export default useCart;

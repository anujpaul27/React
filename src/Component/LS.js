export const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

function SaveCart(cart) {
  const save = JSON.stringify(cart);
  localStorage.setItem("cart", save);
}

export function addToLS(id) {
  const cart = getStoredCart();
  cart.push(id);
  SaveCart(cart);
}

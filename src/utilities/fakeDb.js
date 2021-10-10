// use local storage as your db for now
const addToDb = (id) => {
  const exists = getDb();
  let scientists_cart = {};
  if (!exists) {
    scientists_cart[id] = 1;
  } else {
    scientists_cart = JSON.parse(exists);
    if (scientists_cart[id]) {
      const newCount = scientists_cart[id];
      scientists_cart[id] = newCount;
    } else {
      scientists_cart[id] = 1;
    }
  }
  updateDb(scientists_cart);
};

const getDb = () => localStorage.getItem("scientists_cart");
const updateDb = (cart) => {
  localStorage.setItem("scientists_cart", JSON.stringify(cart));
};

const removeFromDb = (id) => {
  const exists = getDb();
  if (exists) {
    const scientists_cart = JSON.parse(exists);
    delete scientists_cart[id];
    updateDb(scientists_cart);
  }
};

const getStoredCart = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
};

const clearTheCart = () => {
  localStorage.removeItem("scientists_cart");
};

export { addToDb, removeFromDb as deleteFromDb, clearTheCart, getStoredCart };

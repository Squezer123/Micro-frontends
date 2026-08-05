
const STORAGE_KEY = "kk-cart-items";
const listeners = new Set();

function loadItems() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

let items = loadItems();

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
  }
}

function notify() {
  persist();
  listeners.forEach((callback) => callback(items));
}

export function getItems() {
  return items;
}

export function addItem(product) {
  const existing = items.find((i) => i.id === product.id);
  if (existing) {
    items = items.map((i) =>
      i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
    );
  } else {
    items = [...items, { ...product, quantity: 1 }];
  }
  notify();
}

export function removeItem(id) {
  items = items.filter((i) => i.id !== id);
  notify();
}

export function clearCart() {
  items = [];
  notify();
}

export function subscribe(callback) {
  listeners.add(callback);
  callback(items); 
  return () => listeners.delete(callback);
}

window.addEventListener("storage", (event) => {
  if (event.key === STORAGE_KEY) {
    items = loadItems();
    listeners.forEach((callback) => callback(items));
  }
});
<template>
  <div class="container">
    <h1>🛒 Koszyk</h1>

    <p v-if="items.length === 0" class="empty">
      Koszyk jest pusty. Dodaj produkty na stronie
      <a href="/products">Products</a>.
    </p>

    <div v-else class="cart-list">
      <div v-for="item in items" :key="item.id" class="cart-item">
        <div class="cart-item-info">
          <h2>{{ item.name }}</h2>
          <p>Ilość: {{ item.quantity }}</p>
        </div>
        <button class="remove-btn" @click="remove(item.id)">Usuń</button>
      </div>

      <button class="clear-btn" @click="clear">Wyczyść koszyk</button>
    </div>
  </div>
</template>

<script>
import { subscribe, removeItem, clearCart } from "@KK/cart-store";

export default {
  name: "App",
  data() {
    return {
      items: [],
      unsubscribe: null,
    };
  },
  mounted() {
    this.unsubscribe = subscribe((items) => {
      this.items = items;
    });
  },
  beforeUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  },
  methods: {
    remove(id) {
      removeItem(id);
    },
    clear() {
      clearCart();
    },
  },
};
</script>

<style scoped>
.container {
  font-family: system-ui, sans-serif;
  max-width: 600px;
  margin: 40px auto;
  padding: 24px;
}

.empty {
  color: #777;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 8px;
}

.cart-item-info h2 {
  font-size: 15px;
  margin: 0 0 4px;
}

.cart-item-info p {
  font-size: 13px;
  color: #777;
  margin: 0;
}

.remove-btn {
  background: none;
  border: 1px solid #cf222e;
  color: #cf222e;
  border-radius: 6px;
  padding: 4px 10px;
  font-size: 12px;
  cursor: pointer;
}

.clear-btn {
  margin-top: 16px;
  padding: 8px 16px;
  background: #1a1a1a;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;
}
</style>
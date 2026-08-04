<template>
  <div class="container">
    <h1>🛒 Hello from Vue-mfe!</h1>
    <p>
      Ten mikrofrontend jest zarządzany przez <strong>single-spa</strong> i
      załadowany dynamicznie przez <code>root-config</code>.
    </p>
    <div class="card">
      <h2>Status</h2>
      <ul>
        <li>✅ Moduł załadowany poprawnie</li>
        <li>✅ Vue działa wewnątrz single-spa</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.container {
  font-family: system-ui, sans-serif;
  max-width: 600px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
.card {
  margin-top: 20px;
  padding: 16px;
  background: #f7f9fb;
  border-radius: 8px;
}
</style>
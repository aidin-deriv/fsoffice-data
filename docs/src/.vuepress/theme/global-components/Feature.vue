<template>
  <div class="grid-container">
    <div class="container">
      <div v-for="(feature, key) in items" :key="key" class="feature-item">
        <img :src="feature.image" :alt="feature.per_month" />
        <div class="action">
          <a :href="feature.link">
            {{ feature.title }} -
            <strong class="currency">{{ feature.per_month }} USD</strong>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      if (this.$root.$$frontmatter && this.$root.$frontmatter.features) {
        return this.$root.$frontmatter.features.filter((f) => !f.canceled);
      }
      return [];
    },
  },
};
</script>

<style lang="css" scoped>
:root {
  --usd-color: #7b0005;
  --padding-top: 1rem;
}

.action {
  padding-top: var(--padding-top);
}

.currency {
  color: var(--usd-color);
  font-weight: bold;
  text-decoration: none;
}

.feature-item {
  max-width: 300px;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 2px rgb(0 0 0 / 10%);
  padding: 1rem;
  margin: 1rem;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 17px;
  grid-row-gap: 17px;
}

@media screen and (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: row;
  }
}

.grid-container {
  padding-top: 5rem;
}
.feature-item img {
  max-width: 100%;
}
</style>

<template>
  <ul class="pagination">
    <li class="pagination__item">
      <button
        class="pagination__btn"
        :disabled="currentPage === 1"
        @click.prevent="prevPage(Number(currentPage))"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M14 16L10 12L14 8"
            stroke="#293148"
            stroke-opacity="0.45"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </li>
    <li class="pagination__item">
      <span class="pagination__page current-page">{{ currentPage }}</span>
    </li>
    <li class="pagination__item">
      <span class="pagination__divider">of</span>
    </li>
    <li class="pagination__item">
      <span class="pagination__page last-page">{{ lastPage }}</span>
    </li>
    <li class="pagination__item">
      <button
        class="pagination__btn"
        :disabled="currentPage === lastPage"
        @click.prevent="nextPage(Number(currentPage))"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M10 16L14 12L10 8"
            stroke="#293148"
            stroke-opacity="0.45"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  currentPage: Number;
  lastPage: Number;
}>();

const emits = defineEmits<{
  (e: "update:currentPage", currentPage: number): void;
}>();
const prevPage = (value: number) => {
  emits("update:currentPage", value - 1);
};
const nextPage = (value: number) => {
  emits("update:currentPage", value + 1);
};
</script>

<style scoped lang="scss">
@import "src/assets/styles/_variables.scss";

.pagination {
  display: flex;
  flex-direction: row;
  gap: 18px;
  align-items: center;

  &__page {
    border: 1px solid $text_line_gray;
    border-radius: 6px;
    font-size: 15px;
    font-weight: 400;
    line-height: 22px;
    color: $text_dark_grey;
    text-align: center;
    padding: 6px 9px;

    &.last-page {
      color: $text_light_grey;
    }
  }
}
</style>

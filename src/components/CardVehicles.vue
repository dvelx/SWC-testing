<template>
  <div class="card">
    <div class="card__image">
      <img :src="cars.preview" :alt="cars.vehicle_name" />
    </div>
    <div class="card__desc">
      <h3 class="card__title">{{ cars.vehicle_name }}</h3>
      <p class="card__info">{{ cars.vin }}</p>
      <div class="card__divider" @click="console.log(cars)"></div>
      <div class="card__bottom">
        <div class="card__badge">{{ cars.angles_count }}/30</div>
        <span class="card__last-date"
          >{{ date(cars.created_at) }} days left</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  item: {
    type: Object,
  },
});
const cars = computed(() => {
  return props.item;
});
const date = (itemDate: number) => {
  return new Date(itemDate).getDay();
};
</script>

<style scoped lang="scss">
@import "src/assets/styles/variables";
.card {
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: $primary_light_grey;
  border-radius: 10px;

  &__image {
    padding: 40px 47px 0 47px;
    margin-bottom: 24px;

    & img {
      border-radius: 10px;
      height: 135px;
    }
  }

  &__desc {
    display: flex;
    flex-direction: column;
    padding: 0 24px 24px 24px;
    margin-top: auto;
  }
  &__title {
    font-size: 20px;
    font-weight: 700;
    color: $text_black;
    margin-bottom: 12px;
  }
  &__info {
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.3px;
    color: $text-grey;
    margin-bottom: 18px;
  }
  &__divider {
    width: 100%;
    height: 1px;
    background-color: $text_line_gray;
    margin-bottom: 18px;
  }
  &__bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__last-date {
    font-size: 15px;
    font-weight: 500;
    text-align: right;
    color: $text_grey;
  }
}
</style>

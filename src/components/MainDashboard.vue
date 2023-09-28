<template>
  <div class="dashboard-container">
    <div class="dashboard-top">
      <div class="dashboard-top__left">
        <h1 class="dashboard-top__title">Vehicles</h1>
        <span class="count__items">{{ totalCars }}</span>
      </div>
      <div class="dashboard-top__right">
        <button class="dashboard-top__right-btn">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 4C12.5523 4 13 4.44772 13 5V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V5C11 4.44772 11.4477 4 12 4Z"
              fill="#E86E84"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
              fill="#E86E84"
            />
          </svg>
        </button>
        <div class="dashboard-top__right-avatar">
          <img src="../../src/assets/images/Ellipse%2013.png" alt="avatar" />
        </div>
        <p class="dashboard-top__right-user-name">John Doe</p>
        <div class="dashboard-top__right-lang">
          <img src="../../src/assets/images/svg/uk.svg" alt="language" />
        </div>
        <div class="dashboard-top__right-select">
          <select>
            <option value="1">En</option>
            <option value="2">Ru</option>
          </select>
        </div>
      </div>
    </div>
    <div class="card-container">
      <div class="dashboard-top__input-block">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C12.95 18 14.6819 17.2298 15.9483 15.9512C16.1356 15.7621 16.3905 15.6555 16.6566 15.6549C16.9228 15.6543 17.1781 15.7598 17.3662 15.9481L21.7074 20.2932C22.0978 20.6839 22.0975 21.3171 21.7068 21.7074C21.3161 22.0978 20.6829 22.0975 20.2926 21.7068L16.6222 18.0331C15.0815 19.2744 13.1344 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 12.2053 19.7625 13.3576 19.3309 14.4109C19.1215 14.9219 18.5374 15.1664 18.0264 14.957C17.5153 14.7476 17.2708 14.1635 17.4803 13.6525C17.815 12.8357 18 11.9407 18 11C18 7.13401 14.866 4 11 4Z"
            fill="#293148"
            fill-opacity="0.45"
          />
        </svg>
        <input
            v-model.number="vin"
            type="text"
            class="dashboard-top__input"
            placeholder="Search VIN"
        />
      </div>
      <div class="dashboard-top__select-block">
        <span class="dashboard-top__select-title"
          >Select vehicles per page:</span
        >
        <select class="dashboard-top__select" v-model.number="limit">
          <option value="9">9</option>
          <option value="15">15</option>
          <option value="21">21</option>
        </select>
      </div>
      <div class="dashboard-top__btn-add" @click="console.log(data)">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 4C12.5523 4 13 4.44772 13 5V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V5C11 4.44772 11.4477 4 12 4Z"
            fill="#E86E84"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
            fill="#E86E84"
          />
        </svg>
        ADD VECHICLE
      </div>
      <CardVehicles v-for="item of data.data" :key="item.id" :item="item" />
    </div>
    <div class="dashboard-bottom">
      <div class="dashboard-bottom__showing">Showing 9 out of {{ totalCars }}</div>
      <div class="dashboard-bottom-pagination">
        <BasePagination
          v-model:current-page="page"
          v-model:last-page="lastPage"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardVehicles from "@/components/CardVehicles.vue";
import ApiData from "../services/apiDataServices.ts";
import { ref } from "vue";
import { watch } from "vue";
import BasePagination from "@/components/BasePagination.vue";
import ApiTypes from "../types/ApiTypes.ts";
import ResponseData from "../types/ResponseData.ts";

const data = ref({} as ApiTypes);
const limit = ref(9);
const page = ref(1);
const lastPage = ref(0);
const totalCars = ref(0);
const vin = ref(0)

const loadData = () => {
  ApiData.getAllCars(limit.value, page.value, vin.value)
      .then((res: ResponseData) => data.value = res.data)
};

watch([page, limit, vin], () => {
  loadData();
});
watch([data], () => {
  lastPage.value = data.value.meta.last_page
  totalCars.value = data.value.meta.total
})

loadData();
</script>

<style scoped lang="scss">
@import "src/assets/styles/variables";
.dashboard-container {
  display: flex;
  flex-direction: column;
  max-height: 100%;
  padding: 30px;
}
.dashboard-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 28px;
  border-bottom: 1px solid $text_light_grey;

  &__left {
    display: flex;
    flex-direction: row;
    gap: 18px;
    align-items: center;
  }
  &__title {
    font-size: 32px;
    font-weight: 700;
  }

  &__right {
    display: flex;
    flex-direction: row;
    align-items: center;

    &-btn {
      padding: 7px 9px 5px 9px;
      border: 1px solid $secondary_light_red;
      border-radius: 6px;
      margin-right: 40px;
    }
    &-avatar {
      margin-right: 14px;
    }
    &-user-name {
      margin-right: 32px;
    }
    &-lang {
      margin-right: 14px;
    }
  }

  &__btn-add {
    background-color: $primary;
    color: $text_white;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 9px 18px;
    border-radius: 10px;
    gap: 16px;
    width: fit-content;
    margin-left: auto;
    cursor: pointer;

    & svg path {
      fill: $text_white;
    }
  }
  &__input-block {
    position: relative;

    & svg {
      position: absolute;
      top: 9px;
      right: 16px;
    }
  }
  &__input {
    padding: 9px 16px;
    border: 1px solid $text_line_gray;
    border-radius: 8px;
    width: 100%;

    &::placeholder {
      font-size: 16px;
      font-weight: 400;
      color: $text-dark_grey;
    }
  }
  &__select-block {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }
  &__select {
    color: $text-black;
    border: 1px solid $text_line_gray;
    border-radius: 8px;
    padding: 9px 16px 9px 16px;
    outline: none;
  }
}
.dashboard-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 40px;
  margin-top: 36px;
}
</style>

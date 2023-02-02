<script setup>
import { OptionList } from "@charrue/ep";
import { ref } from "vue";

const value = ref("");
const options = [
  {
    label: "Popular cities",
    value: "Popular",
    children: [
      {
        value: "Shanghai",
        label: "Shanghai",
      },
      {
        value: "Beijing",
        label: "Beijing",
      },
    ],
  },
  {
    label: "City name",
    value: "City",
    children: [
      {
        value: "Chengdu",
        label: "Chengdu",
      },
      {
        value: "Shenzhen",
        label: "Shenzhen",
      },
      {
        value: "Guangzhou",
        label: "Guangzhou",
      },
      {
        value: "Dalian",
        label: "Dalian",
      },
    ],
  },
];
</script>
<template>
  <OptionList
    v-model="value"
    :options="options"
  />
</template>

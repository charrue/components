<script lang="ts" setup>
import { createElDialog } from "@charrue/ep";
import AddressForm from "./AddressForm.vue";

const { DialogComponent, toggle } = createElDialog(AddressForm, {
  title: "Shipping address",
  appendToBody: true
});
</script>

<template>
  <el-button
    text
    @click="toggle"
  >
    open a Form nested Dialog
  </el-button>

  <DialogComponent />
</template>

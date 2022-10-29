# createElDialog

创建一个被`el-dialog`包裹的组件，并命令式调用。

## Usage

``` vue
<script lang="ts" setup>
import { createElDialog } from "@charrue/ep";
import AddressForm from "./AddressForm.vue";

const { DialogComponent, toggle } = createElDialog(AddressForm, {
  title: "Shipping address",
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
```
<script lang="ts" setup>
import { useFoundationForm } from "@charrue/ep";
import { ElNotification } from "element-plus";

const rules = {
  name: [
    {
      required: true,
      message: "please input name",
    },
  ],
};

const {
  formData,
  elFormRef,
  loading,
  disabled,
  onCancel,
  onSubmit,
} = useFoundationForm({
  initialValue: {
    name: "",
    region: "shanghai",
  },
  onSubmit(data) {
    return new Promise(() => {
      ElNotification({
        type: "success",
        message: `Your Promotion name is ${data.name}`,
        title: "Tip",
      });
    });
  },
});
</script>
<template>
  <el-form
    ref="elFormRef"
    :model="formData"
    :rules="rules"
    label-width="140px"
  >
    <el-form-item
      label="Promotion name"
      prop="name"
    >
      <el-input
        v-model="formData.name"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item
      label="Zones"
      prop="region"
    >
      <el-select
        v-model="formData.region"
        placeholder="Please select a zone"
      >
        <el-option
          label="Zone No.1"
          value="shanghai"
        />
        <el-option
          label="Zone No.2"
          value="beijing"
        />
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button @click="onCancel">
        取消
      </el-button>
      <el-button
        type="primary"
        :loading="loading"
        :disabled="loading ? true : disabled"
        @click="onSubmit"
      >
        确定
      </el-button>
    </el-form-item>
  </el-form>
</template>

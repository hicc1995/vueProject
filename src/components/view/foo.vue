<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // pickerOptions0: {
        //   disabledDate(time) {
        //   }
        // },
        value1: '',
      };
    }
  };
</script>
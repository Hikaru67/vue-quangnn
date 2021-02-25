<template>
  <div id="app" class="container">
    <test>
      <template slot="ava">Đây là tên con, your handsome son ✌🏼</template>
      <template slot="name">
        Đây là ảnh của con, your handsome son ✌🏼
        <img height="150" width="150" src="https://i.pravatar.cc/150?img=2" alt="Avatar">
      </template>
    </test>
  </div>
</template>

<script>
import Con from "./test";
import Test from "./test";

export default {
name: "son.vue",
  components: {Test}
}
</script>

<style scoped>

</style>
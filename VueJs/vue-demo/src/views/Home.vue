<template>
  <div class="home">
    <router-link to="/login">点击登录</router-link>
    <router-link to="/about">点击关于</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

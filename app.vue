<template>
  <div>
    <Navbar/>
    <router-view/>
  </div>
</template>

<script setup>
import Navbar from './components/layout/Navbar'
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&family=Manrope:wght@400;500;600;700&display=swap');
/* vendors */
@import "assets/styles/vendors/reset.scss";
/* base */
@import "assets/styles/base/base.scss";
@import "assets/styles/base/typography";

</style>
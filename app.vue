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
@import "@fontsource/manrope/400.css";
@import "@fontsource/manrope/500.css";
@import "@fontsource/manrope/600.css";
@import "@fontsource/manrope/700.css";
@import "@fontsource/dm-sans/700.css";
/* vendors */
@import "assets/styles/vendors/reset.scss";
/* base */
@import "assets/styles/base/base.scss";
@import "assets/styles/base/typography";

</style>
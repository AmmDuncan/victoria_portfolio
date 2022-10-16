<template>
  <Hero/>
  <Shortcuts/>
  <Benefit/>
</template>

<script>
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Shortcuts from "../components/home/Shortcuts";
import Benefit from "../components/home/Benefit";

export default {
  name: "index",
  components: {Benefit, Shortcuts, Hero, Navbar}
}
</script>

<style lang="scss" scoped>

</style>
<template>
  <Hero/>
  <Shortcuts/>
  <Benefit/>
  <Testimonials/>
</template>

<script>
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Shortcuts from "../components/home/Shortcuts";
import Benefit from "../components/home/Benefit";
import Testimonials from "../components/home/Testimonials";

export default {
  name: "index",
  components: {Testimonials, Benefit, Shortcuts, Hero, Navbar}
}
</script>

<style lang="scss" scoped>

</style>
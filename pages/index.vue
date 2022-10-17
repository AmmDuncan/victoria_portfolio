<template>
  <Hero/>
  <Shortcuts/>
  <Benefit/>
  <Testimonials/>
  <Contact/>
</template>

<script>
import Hero from "../components/home/Hero";
import Shortcuts from "../components/home/Shortcuts";
import Benefit from "../components/home/Benefit";
import Testimonials from "../components/home/Testimonials";
import Contact from "../components/home/Contact";

export default {
  name: "index",
  components: {Contact, Testimonials, Benefit, Shortcuts, Hero}
}
</script>

<style lang="scss" scoped>

</style>
<template>
  <header class="hero">
    <div class="container">
      <div class="content">
        <h1 class="heading">I help you educate and entertain your audience.</h1>
        <p>SEO optimized writing, content writing, newsletters, creative writing, student essays, powerpoint
          presentations.</p>
        <Button variant="primary">Get in touch</Button>
      </div>
      <div class="illustration">
        <img src="../../assets/images/text-illustration.svg" alt="">
      </div>
    </div>
  </header>
</template>

<script>
import Button from "../common/Button";

export default {
  name: "Hero",
  components: {Button}
}
</script>

<style lang="scss" scoped>
.hero {
  padding-block: 11rem;
  background-color: #F0EEF2;

  .container {
    display: grid;
    grid: auto-flow max-content / 1fr;
    gap: 6.4rem;

    @media (min-width: 768px) {
      grid: 1fr / max-content 1fr;
      justify-content: space-between;
    }
  }

  .content {
    @media (min-width: 480px) and (max-width: 767px) {
      width: 100%;
      max-width: 40ch;
      margin-inline: auto;
    }
  }

  .illustration {
    display: flex;
    justify-content: center;
  }

  h1 {
    font-size: 3.6rem;
    line-height: 1.1;
    letter-spacing: -0.03em;
    max-width: 16ch;
    margin-bottom: 1.6rem;

    @media (min-width: 840px) and (max-width: 991px) {
      font-size: 4.4rem;
    }

    @media (min-width: 992px) {
      font-size: 4.8rem;
    }
  }

  p {
    max-width: 32ch;
    line-height: 1.5;
    margin-bottom: 3.2rem;
  }
}
</style>
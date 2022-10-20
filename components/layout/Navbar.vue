<template>
  <nav class="navbar">
    <div class="container">
      <div class="name">Victoria</div>
      <ul class="nav-list">
        <li>
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
</script>

<style lang="scss">
.navbar {

  .container {
    height: 7.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .name {
    font-size: 1.6rem;
  }

  .nav-list {
    list-style: none;
    display: grid;
    grid: 1fr / auto-flow 1fr;
    gap: 2.4rem;
    align-items: center;
  }

  .nav-link {
    position: relative;
    color: black;
    font-size: 1.6rem;

    &.router-link-active {
      font-weight: 600;

      &:before {
        content: "";
        position: absolute;
        width: 5px;
        height: 5px;
        background-color: black;
        bottom: -0.8rem;
        left: 50%;
        translate: -50% 0;
        border-radius: 50%;
      }
    }
  }

  @media (min-width: 992px) {
    .container {
      height: 9rem;
    }

    .name {
      font-size: 1.8rem;
    }
  }
}
</style>
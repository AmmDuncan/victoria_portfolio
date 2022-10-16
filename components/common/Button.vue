<template>
  <button :class="['btn', {'full-w': full, primary: isPrimary,'outline--white': isOutline}]">
    <span class="txt">
    <slot/>
    </span>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: ['full', 'variant'],
  computed: {
    isOutline() {
      return this.variant === 'out-w'
    },
    isPrimary() {
      return this.variant === 'primary'
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  position: relative;
  width: max-content;
  height: 5.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 3.2rem;
  border: 1px solid transparent;
  border-radius: 4px;
  background: transparent;
  font-weight: 500;
  cursor: pointer;

  &.primary {
    color: white;
    background-color: var(--purple);
  }

  &.full-w {
    width: 100%;
    @media (min-width: 576px) {
      width: max-content;
    }
  }
}
</style>
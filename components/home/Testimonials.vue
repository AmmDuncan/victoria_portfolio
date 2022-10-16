<template>
  <div class="testimonials">
    <div class="container">
      <h1>Testimonials</h1>
      <p>Here’s what people I have worked with have to say about me.</p>
      <div class="testimonial">
        <div class="testimonial__details" v-for="(testimonial, index) in testimonials" :key="testimonial.text"
             v-show="index === active">
          <div class="testimonial__text">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M64 0.557167L62.4941 11.5841C58.5788 11.282 55.7176 12.0876 53.9106 14.001C52.1035 15.9144 50.9992 18.4823 50.5977 21.7048C50.1961 24.9273 50.0957 28.4015 50.2965 32.1275H64V64H38.2494V26.0853C38.2494 16.8207 40.5584 9.87219 45.1765 5.23986C49.8949 0.607522 56.1694 -0.953376 64 0.557167ZM25.7506 0.557167L24.2447 11.5841C20.3294 11.282 17.4682 12.0876 15.6612 14.001C13.8541 15.9144 12.7498 18.4823 12.3482 21.7048C11.9467 24.9273 11.8463 28.4015 12.0471 32.1275H25.7506V64H0V26.0853C0 16.8207 2.30902 9.87219 6.92706 5.23986C11.6455 0.607522 17.92 -0.953376 25.7506 0.557167Z"
                  fill="#695B72"/>
            </svg>

            <div v-html="testimonial.text"></div>
          </div>
          <div class="testimonial__profile">
            <div class="testimonial__profile-pic">
              <img :src="`https://avatars.dicebear.com/api/initials/${testimonial.profile?.name}.svg`" alt="">
            </div>
            <div class="testimonial__profile-details">
              <div class="testimonial__profile-name">{{ testimonial.profile?.name }}</div>
              <div class="testimonial__profile-company">{{ testimonial.profile?.company }}</div>
            </div>
          </div>
        </div>
        <div class="testimonial__nav">
          <div :class="['testimonial__nav-link', {active: active === i}]" v-for="(t, i) in testimonials" :key="t.text"
               @click="active = i">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Testimonials",
  data: () => ({
    active: 0,
    testimonials: [
      {
        text: `She has good ideas, great perspective and an engaging writing style.
               Work was turned in on time and well thought out, far more than anyone can hope for.`,
        profile: {
          name: 'Aarmah',
          company: 'Comfy Technologies'
        }
      },
      {
        text: `I took 5 accelerated class and had no time to finish up with my long essay for my English class.
                <div class="small-spacer"></div>Victoria was patient and presented herself professionally
                even though we're friends.
                She accepted feedback from my professor and made changes where necessary.
                I had grade A in the coursework.`,
        profile: {
          name: 'Lottie'
        }
      },
    ]
  })
}
</script>

<style lang="scss" scoped>

.testimonials {
  padding-block: 12rem;
  background-color: #f2f2f2;
}

.container > h1 {
  text-align: center;
  max-width: 100%;
}

.container > p {
  text-align: center;
  max-width: 28ch;
  margin-inline: auto;
}

.testimonial {
  margin-top: 4.8rem;
  background-color: #fcfcfc;
  box-shadow: 0 1.6rem 4rem rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    display: grid;
    grid: 1fr / 10.2rem 1fr;
    max-width: 76rem;
    margin-inline: auto;
    transform: translateX(-1rem);

    &__nav {
      grid-area: 1 / 1 / 2 / 2;
    }
  }

  &__text {
    position: relative;
    display: grid;
    place-content: center;
    padding-block: 7.2rem 4.8rem;
    width: 80%;
    max-width: 31ch;
    min-height: 40rem;
    margin-inline: auto;
    opacity: 0.7;
    line-height: 1.6;

    @media (min-width: 768px) {
      max-width: 44ch;
      min-height: 32rem;
    }

    svg {
      position: absolute;
      top: -2.4rem;
      left: -2rem;
    }
  }

  &__nav {
    display: grid;
    grid: 1fr / auto-flow max-content;
    justify-content: center;
    gap: 1.6rem;
    padding: 3rem 3.2rem;
    background-color: #fff;
    box-shadow: 0 0.8rem 4rem rgba(0, 0, 0, 0.075);

    @media (min-width: 768px) {
      grid: auto-flow max-content / 1fr;
      justify-items: center;
      align-content: center;
    }

    &-link {
      width: 2rem;
      height: 2rem;
      background: #d9d9d9;
      border-radius: 50%;
      cursor: pointer;

      &.active {
        background: var(--purple);
        box-shadow: 0.2rem 0.4rem 1px rgba(0, 0, 0, 0.6) inset;
      }
    }
  }

  &__profile {
    display: grid;
    grid: 1fr / auto-flow max-content;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 25rem;
    margin-inline: auto;
    padding: 1.6rem 2rem;
    border-radius: 1.6rem 1.6rem 0 0;
    background: #f3f3f3;
    font-size: 1.6rem;

    &-pic {
      --size: 4.8rem;
      width: var(--size);
      height: var(--size);
      border-radius: 50%;
      overflow: hidden;
      background: #d9d9d9;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &-company {
      font-size: 1.2rem;
      font-weight: 700;
      text-transform: uppercase;
      opacity: 0.6;
    }
  }
}
</style>
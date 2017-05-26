<template>
  <Transition name="swap" mode="out-in">
  <div class="tutorial-list" :key="tutorials">
    <Tutorial class="tutorial" v-for="tutorial in tutorials" :item="tutorial" :key="tutorial" />
  </div>
  </Transition>
</template>

<script>
import Tutorial from './Tutorial'

export default {
  name: 'tutorial-list',
  components: { Tutorial },
  props: ['tutorials']
}
</script>

<style scoped>
  .tutorial-list {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
  }

  .tutorial {
    padding: 20px;
  }

  @media only screen and (min-width: 600px) {
    .tutorial {
      width: 50%;
    }
  }

  /* VUE TRANSITION */
  .swap-enter-active, .swap-leave-active {
    transition: all .25s ease-in-out;
  }
  .swap-enter, .swap-leave-active {
    opacity: 0;
  }
  .swap-enter {
    transform: translateX(75px);
  }
  .swap-leave-to {
    transform: translateX(-75px);
  }
</style>

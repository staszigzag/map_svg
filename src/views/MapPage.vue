<template>
  <div>
    <svg-wrapper>
      <illinois />
      <wisconsin />
      <ohio />
    </svg-wrapper>
    <v-card>
      <v-btn @click="handlerClickHiddenTitle">
        hidden
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import { TweenMax, Sine } from 'gsap'
import { mapState, mapMutations } from 'vuex'

import wisconsin from '../components/states/wisconsin.vue'
import illinois from '../components/states/illinois.vue'
import ohio from '../components/states/ohio.vue'
import svgWrapper from '../components/svgWrapper'

export default {
  components: {
    svgWrapper,
    wisconsin,
    illinois,
    ohio
  },
  computed: {
    ...mapState(['isShowTitlesStates'])
  },
  methods: {
    ...mapMutations(['TOGGLE_SHOW_TITLES_STATES']),
    handlerClickHiddenTitle() {
      this.TOGGLE_SHOW_TITLES_STATES(!this.isShowTitlesStates)
    },
    startScissors() {
      console.log(this.$refs.rightscissor)
      this.scissorAnim(this.$refs.rightscissor.$el, 30)
      // this.scissorAnim(this.$refs.leftscissor, -30)
    },
    scissorAnim(el, rot) {
      TweenMax.to(el, 0.25, {
        rotation: rot,
        repeat: 3,
        yoyo: true,
        svgOrigin: '50 45',
        ease: Sine.easeInOut
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.bird:hover {
  border: 2px solid red;
  }
</style>

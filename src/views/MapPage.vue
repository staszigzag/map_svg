<template>
  <div>
    <svg-wrapper>
      <g v-show="isShow">
        <illinois ref="illinois"/>
        <wisconsin ref="wisconsin" />
        <ohio ref="ohio" />
      </g>
      <border />
    </svg-wrapper>
    <v-card>
      <v-btn @click="handlerClickHiddenTitle">
        hidden
      </v-btn>
      <v-btn @click="handlerClickStart">
        start
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import { TweenMax, Sine, TweenLite, Bounce } from 'gsap'
import { mapState, mapMutations } from 'vuex'

import border from '../components/border.vue'

import wisconsin from '../components/states/wisconsin.vue'
import illinois from '../components/states/illinois.vue'
import ohio from '../components/states/ohio.vue'
import svgWrapper from '../components/svgWrapper'

export default {
  data: () => ({
    isShow: false
  }),
  components: {
    border,
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
    handlerClickStart() {
      const wisconsin = this.$refs.wisconsin.$el
      const illinois = this.$refs.illinois.$el
      const ohio = this.$refs.ohio.$el
      this.isShow = true
      // Анимация происходит от заданного значения до текущего.
      TweenLite.staggerFrom([wisconsin, illinois, ohio], 1, { opacity: 0, scale: 10, x: 300, y: 100, ease: Bounce.easeOut }, 0.25)
      // TweenLite.from([ohio], 1.2, { opacity: 0, x: -300, y: -100, ease: Bounce.easeOut })
    },
    startScissors() {
      // TweenLite.from(logo, 2, {opacity:0, left:"300px"});
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

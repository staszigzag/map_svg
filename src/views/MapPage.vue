<template>
  <div>
    <svg-wrapper>
      <g v-show="isShow">
        <template v-for="state in states">
          <component
            :is="state"
            :ref="state"
            :key="state"
            @click.native="handlerClickState(state)"
            :class="{ active: selectState === state }"
          />
        </template>

<!--        <illinois ref="illinois" />-->
<!--        <wisconsin ref="wisconsin" />-->
<!--        <ohio ref="ohio" />-->
      </g>
      <border />
    </svg-wrapper>
    <v-card>
      <v-btn @click="handlerClickHiddenTitle">hidden</v-btn>
      <v-btn @click="handlerClickStart">start</v-btn>
      <v-btn @click="handlerClickStart2">start2</v-btn>
    </v-card>
  </div>
</template>

<script>
import { TweenMax, Sine, TweenLite, Bounce } from 'gsap'
import { mapState, mapMutations } from 'vuex'

import border from '../components/border.vue'

// import wisconsin  from '../components/states/wisconsin.vue'
// import illinois from '../components/states/illinois.vue'
// import ohio from '../components/states/ohio.vue'
import svgWrapper from '../components/svgWrapper'

export default {
  data: () => ({
    isShow: true,
    selectState: null,
    states: [
      'wisconsin',
      'illinois',
      'ohio',
      'maine',
      'montana',
      'alaska',
      'oregon',
      'florida',
      'hawaii',
      'vermont',
      'michigan',
      'utah',
      'kansas',
      'colorado',
      'washington',
      'virginia',

      'california',
      'texas'
    ]
  }),
  components: {
    border,
    svgWrapper,
    wisconsin: () => import('../components/states/wisconsin.vue'),
    illinois: () => import('../components/states/illinois.vue'),
    ohio: () => import('../components/states/ohio.vue'),
    maine: () => import('../components/states/maine.vue'),
    montana: () => import('../components/states/montana.vue'),
    alaska: () => import('../components/states/alaska.vue'),
    oregon: () => import('../components/states/oregon.vue'),
    florida: () => import('../components/states/florida.vue'),
    hawaii: () => import('../components/states/hawaii.vue'),
    vermont: () => import('../components/states/vermont.vue'),
    michigan: () => import('../components/states/michigan.vue'),
    colorado: () => import('../components/states/colorado.vue'),
    utah: () => import('../components/states/utah.vue'),
    washington: () => import('../components/states/washington.vue'),
    virginia: () => import('../components/states/virginia.vue'),
    kansas: () => import('../components/states/kansas.vue'),
    california: () => import('../components/states/california.vue'),
    texas: () => import('../components/states/texas.vue')
  },
  computed: {
    ...mapState(['isShowTitlesStates'])
  },
  methods: {
    ...mapMutations(['TOGGLE_SHOW_TITLES_STATES']),
    handlerClickState(st) {
      this.selectState = st
    },
    handlerClickHiddenTitle() {
      this.TOGGLE_SHOW_TITLES_STATES(!this.isShowTitlesStates)
    },
    handlerClickStart2() {
      // const wisconsin = this.$refs.wisconsin.$el
      // const illinois = this.$refs.illinois.$el
      // const ohio = this.$refs.ohio.$el
      const els = this.states.map(s => this.$refs[s][0].$el)
      this.isShow = true
      // Анимация происходит от заданного значения до текущего.
      TweenLite.staggerFrom(
        els,
        0.7,
        { opacity: 0, scale: 6, x: 300, y: 100, ease: Bounce.Circ },
        0.15
      )
      // TweenLite.from([ohio], 1.2, { opacity: 0, x: -300, y: -100, ease: Bounce.easeOut })
    },
    handlerClickStart() {
      const els = this.states.map(s => this.$refs[s][0].$el)
      this.isShow = true
      let delta = -300
      els.forEach(el => {
        // TweenLite.from(el, 1.2, { opacity: 0, x: -300, y: -100, ease: Bounce.Cubic })
        TweenLite.from(el, 2.2, { opacity: 0, x: delta, y: delta, ease: Bounce.Cubic })
        delta += 60
        console.log(delta)
      })
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
<style lang="scss" >
svg2:hover {
  -webkit-filter: drop-shadow(5px 5px 5px red);
  filter: drop-shadow(5px 5px 5px red);
  transform: translate(-1px, -1px);
  transition: transform 0.1s;
}
.path2 {
  fill: none;
  text-shadow: 1px 1px 2px #ca2b23;
  &:hover {
    -webkit-filter: drop-shadow(5px 5px 5px red);
    filter: drop-shadow(5px 5px 5px red);
    /*fill: rgba(111, 146, 117, 0.4);*/
    transform: translate(-1px, -1px);
    transition: transform 0.1s;
  }
}
.bird2:hover {
  border: 2px solid red;
}
.state{
  fill: none;
  stroke: #000
}
.state_title{
  stroke-width: .8
}
.state_border{
  fill: rgba(118, 203, 198, 0.01);
  stroke-width: .6;
  stroke: #ca2b23;
}
.state:hover {
  fill: rgba(218, 222, 221, 0.9);
  transform: translate(1px,-1px);
  filter: url(#dropShadow);
  transition: transform .1s;
}
.state:hover .state_border{
  fill: rgb(54, 141, 135);
}
.active .state_border,
.active .state_title {
  stroke-width: 2;
  stroke: #2d2d2d
}
#dropShadow{
  /*box-shadow:1px 1px 1px #000;*/
}
</style>

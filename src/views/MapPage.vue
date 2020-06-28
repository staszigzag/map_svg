<template>
  <div class="pa-2 pa-sm-10">
    <svg-wrapper class="m">
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
      </g>
      <border v-show="isShowBorder" />
    </svg-wrapper>
    <v-card class="mt-3">
      <v-card-title >
        Selected state <span class="text-uppercase">{{selectState ? ': ' + selectState : ''}}</span>
      </v-card-title>
      <v-card-text>
        <v-row dense align="center">
          <v-col cols="12" sm="4" md="6" xl="4">
            <v-select dense v-model="selectState" outlined :items="states" color="teal"/>
          </v-col>
          <v-col sm="4" md="3" xl="2">
            <v-switch v-model="isShowName" class="mt-n1" label="Show name states" color="teal" />
          </v-col>
          <v-col sm="4" md="3" xl="2">
            <v-switch v-model="isShowBorder" class="mt-n1" label="Show border" color="teal"/>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="pt-0">
        <v-row dense>
          <v-col cols="12" md="4">
            <v-btn @click="handlerClickStart" block color="teal  lighten-2" class="white--text">
              <v-icon>
                stars
              </v-icon>
              start first version
            </v-btn>
          </v-col>
          <v-col cols="12" md="4">
            <v-btn @click="handlerClickStart2" block color="teal  lighten-2" class="white--text">
              <v-icon>
                stars
              </v-icon>
              start second version</v-btn>
          </v-col>
          <v-col cols="12" md="4">
            <v-btn @click="handlerClickStart3" block color="teal  lighten-2" class="white--text">
              <v-icon>
                stars
              </v-icon>
              start other version</v-btn>
          </v-col>
        </v-row>
      </v-card-actions>

    </v-card>
  </div>
</template>

<script>
import { TweenLite, Bounce } from 'gsap'
import { mapState, mapMutations } from 'vuex'

import border from '../components/border.vue'
import svgWrapper from '../components/svgWrapper'

export default {
  data: () => ({
    isBlocker: false,
    isShow: false,
    isShowBorder: true,
    isShowName: true,
    selectState: null,
    states: [
      'alaska',
      'michigan',
      'wisconsin',
      'montana',
      'washington',

      'maine',
      'vermont',
      'ohio',
      'illinois',
      'kansas',
      'utah',
      'oregon',

      'virginia',
      'florida',
      'texas',
      'colorado',
      'california',

      'hawaii'
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
  watch: {
    isShowName(val) {
      this.TOGGLE_SHOW_TITLES_STATES(val)
    }
  },
  methods: {
    ...mapMutations(['TOGGLE_SHOW_TITLES_STATES']),
    handlerClickState(st) {
      this.selectState = st
    },
    handlerClickStart() {
      if (this.isBlocker) return
      this.isBlocker = true
      setTimeout(() => {
        this.isBlocker = false
      }, 3400)
      const els = this.states.map(s => this.$refs[s][0].$el)
      this.isShow = true
      TweenLite.staggerFrom(
        els,
        0.7,
        { opacity: 0, rotate: 60, scale: 7, x: 300, y: 100, ease: Bounce.Circ },
        0.15
      )
    },
    handlerClickStart2() {
      if (this.isBlocker) return
      this.isBlocker = true
      setTimeout(() => {
        this.isBlocker = false
      }, 2200)
      const els = this.states.map(s => this.$refs[s][0].$el)
      this.isShow = true
      let delta = -300
      els.forEach(el => {
        // TweenLite.from(el, 1.2, { opacity: 0, x: -300, y: -100, ease: Bounce.Cubic })
        TweenLite.from(el, 1.8, { opacity: 0, x: delta, y: delta, ease: Bounce.Cubic })
        delta += 60
      })
    },
    handlerClickStart3() {
      if (this.isBlocker) return
      this.isBlocker = true
      setTimeout(() => {
        this.isBlocker = false
      }, 2300)
      const els = this.states.map(s => this.$refs[s][0].$el).sort(() => Math.random() - 0.5)
      this.isShow = true
      TweenLite.staggerFrom(
        els,
        0.5,
        { opacity: 0, scale: 6, x: 0, y: 300, ease: Bounce.Cubic },
        0.1
      )
    }
  }
}
</script>
<style lang="scss" >
.state{
  fill: none;
  stroke: #000
}
.state_title {
  /*stroke-width: .8;*/
}
.state_border{
  fill: rgba(0, 0, 0, 0.01);
  /*stroke-width: .6;*/
  /*stroke: #ca2b23;*/
}

.state:hover {
  /*fill: rgba(218, 222, 221, 0.9);*/
  transform: translate(1px,-1px);
  filter: url(#dropShadow);
  transition: transform .3s;
}
.state:hover{
  fill: none;
}
.state:hover .state_border{
  fill: #E0E0E0;
}

.active .state_border{
  stroke-width: 2.3;
  stroke: #2d2d2d
}
.active .state_title {
  stroke-width: 1.6;
  stroke: #ffffff
}
.active .state_title--fill {
  stroke-width: 1.6;
  stroke: #000000
}
</style>

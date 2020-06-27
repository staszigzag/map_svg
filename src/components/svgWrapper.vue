<template>
  <svg xmlns="http://www.w3.org/2000/svg" id="svg8" version="1.1" viewBox="0 0 423.333 264.583" height="100%" width="100%">
<!--    <g id="77777" display="inline">-->
      <slot />
<!--    </g>-->
    <filter id="dropShadow">
      <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#000" />
<!--      <feGaussianBlur in="SourceAlpha" stdDeviation="5" />-->
<!--      <feOffset dx="5" dy="5" />-->
<!--      <feMerge>-->
<!--        <feMergeNode />-->
<!--        <feMergeNode in="SourceGraphic" />-->
<!--      </feMerge>-->
    </filter>
  </svg>
</template>

<script>

export default {
  name: 'svgWrapper',
  data: () => ({
  })
}
</script>
<style lang="scss" scoped>
</style>

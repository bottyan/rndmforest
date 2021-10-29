<template>
  <div class="container" id="scrollDist">
    <div id="trigger"></div>
    <div class="section section1">
      Live Chat
    </div>
    <div class="section section2">
      Live Chat 2
    </div>
    <div class="section section3">
      Live Chat 3
    </div>
    <div class="section section4">
      Live Chat 4
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dialogity',

  mounted() {
    this.animateOnScroll();
  },

  beforeDestroy() {
    this.$gsap.killTweensOf(".container");
    this.$gsap.killTweensOf(".section");
  },

  methods: {
    animateOnScroll() {
      const container = document.querySelector('.container');
      
      const tl = this.$gsap.timeline({defaults:{ease:'none'}, scrollTrigger:{trigger:'.section2', start:'top top', end:'bottom top', scrub:3}});
      tl
        .to(container, { duration: 1, backgroundColor: '#FF0000', ease: "none" })
      //   .to(container, { duration: 1, backgroundColor: '#0000FF', ease: "none" }, 2)
      //   .to(container, { duration: 1, backgroundColor: '#FFFFFF', ease: "none" }, 3)
      //   ;

    },
  },
}
</script>

<style scoped lang="scss">
  .container {
    width: 100%;
  }
  .section {
    width: 100%;
    height: 100vh;
    //border: 1px solid black;
  }
</style>
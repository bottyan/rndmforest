<template>
  <div class="container" id="scrollDist">
    <!--<div class="bg"></div>-->
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
      
      const tl = this.$gsap.timeline({defaults:{ease:'none'}, scrollTrigger:{trigger:'.section1', start:'top top', end:'bottom top', scrub: true}});
      tl
        //.to(container, { duration: 1, background: 'linear-gradient(141deg, rgba(0,160,176,0.3) 0%, rgba(207,92,120,0.3) 100%)', ease: "none" })
        .fromTo(container, 
            { background: 'linear-gradient(141deg, rgba(0,160,176,0.299918014012026) 0%, rgba(207,92,120,0.3027270027760709) 100%)' },
            { duration: 1, background: 'rgba(255, 0, 0, 0.0)', ease: "none" })
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

    background: linear-gradient(141deg, rgba(0,160,176,0.299918014012026) 0%, rgba(207,92,120,0.3027270027760709) 100%);
    background: red;
    background-attachment: fixed;

    // https://cssgradient.io/
    /*
    .bg {      
      z-index: 0;
      height: 100vh;
      widows: 100%;
      position: -webkit-sticky; // Safari
      position: sticky;
      top: 0;
      background: rgb(0,160,176);
    }
    */
  }
  .section {
    width: 100%;
    height: 100vh;
    z-index: 1;
    //border: 1px solid black;
  }
</style>
<template>
  <div class="container" id="scrollDist">
    <div id="trigger"></div>
    <div class="section">
      Live Chat
    </div>
    <div class="section">
      Live Chat 2
    </div>
    <div class="section">
      Live Chat 3
    </div>
    <div class="section">
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

  methods: {
    animateOnScroll() {
      const container = document.querySelector('.container');
      
      const tl = this.$gsap.timeline({defaults:{ease:'none'}, scrollTrigger:{trigger:'#scrollDist', start:'top top', end:'bottom bottom', scrub:1}});
      tl
        .to(container, { duration: 1, backgroundColor: '#FF0000', ease: "none" }, 1)
        .to(container, { duration: 1, backgroundColor: '#0000FF', ease: "none" }, 2)
        .to(container, { duration: 1, backgroundColor: '#FFFFFF', ease: "none" }, 3)
        ;

      // var tween = new TimelineMax()
      //         .add(TweenMax.to($word, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
      //         .add(TweenMax.to($dot, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
      //         .add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);			// change color during the whole thing
      
      const controller = new this.$scrollmagic.Controller();

      // // build scene
      var scene = this.$scrollmagic.Scene({triggerElement: "#trigger", duration: 200})
              //.setTween(tl)
              // .addIndicators() // add indicators (requires plugin)
              //.addTo(controller);
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
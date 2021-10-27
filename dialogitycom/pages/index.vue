<template>
  <div class="container">
    <div class="section">
      Home
    </div>
    <div class="section">
      Home 2
    </div>
    <div class="section">
      Home 3
    </div>
    <div class="section">
      Home 4
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dialogity',

  mounted() {
    this.animateOnScroll()
  },

  methods: {
    animateOnScroll() {
      // source: https://greensock.com/forums/topic/25648-change-backgroundcolor-on-scroll/
      const container = document.querySelector('.container');
      const sections = this.$gsap.utils.toArray(".section");

      const tl = this.$gsap.timeline({
          scrollTrigger: {
          trigger: ".container",
          pin: true,
          scrub: true,
          end: () => `+=${container.offsetWidth}`            
        }
      });
      tl
        .to(sections, { duration: sections.length*2, yPercent: -100 * (sections.length - 1), ease: "none" })
        .to(container, { duration: 2, backgroundColor: '#FF0000', ease: "none" }, 0)
        .to(container, { duration: 2, backgroundColor: '#0000FF', ease: "none" }, 2)
        .to(container, { duration: 2, backgroundColor: '#FFFFFF', ease: "none" }, 4);

      // this.$gsap.to(window, { duration: 2, scrollTo: 1000 })
      // this.$gsap.to('.container', {
      //   x: 500,
      //   ease: 'Power1.easeInOut',
      //   scrollTrigger: {
      //     trigger: '.content',
      //     pin: true,
      //     end: 'bottom',
      //     scrub: true
      //   }
      // })
    }
  }
}
</script>

<style scoped lang="scss">
  .container {
    width: 100%;
    height: 100vh;
    //display: flex;
    //flex-wrap: nowrap;
    //flex-direction: column;
  }
  .section {
    position: relative;
    width: 100%;
    height: 100vh;
    // border: 1px solid black;
  }
</style>
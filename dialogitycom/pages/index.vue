<template>
  <div class="container" id="scrollDist">
    <div class="bg"></div>
    <div id="trigger"></div>
    <div class="section section1">
      <div class="content-parent">
        <div class="header max-width">
          <div class="above-title"></div>
          <div class="title font-XXL">
            <h1>
              <div>MEANINGFUL CONVERSATION
              </div>
            </h1>
          </div>
          <div class="below-title font-XL">
            <h2>with your customers</h2>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom-container max-width">
          <div class="flex-space"></div>
          <div id="hide" class="next font-hand-L">
            what we do 👇
          </div>
        </div>
      </div>
    </div>
    <div class="section section2">
      <div class="content-parent">
        <div class="block max-width">
          <div class="l-image">
            <img src="~/assets/images/robot-hand.png"/>
          </div>
          <div class="r-text">
            <div class="block-title">Live Chat</div>
            <div class="block-content">Easy to use, free live chat for websites.</div>
          </div>
        </div>
      </div>
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
// TODO: mobile menu

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
      const header = document.querySelector('#menu-main');
      const footer = document.querySelector('.footer');
      const bg = document.querySelector('.bg');
      const tohide = document.querySelector('#hide');

      const _gsap = this.$gsap;
      const colorize = function(element) {
        //apply the colors to the element
        //console.log("element:", this);
        if (typeof this.ratio !== "undefined" && this.ratio !== 1) {
          const r = 0.3 * (1-this.ratio);
          //console.log("linear-gradient(141deg, " + "rgba(0,160,176," + r + ")" + " 0%, " + "rgba(207,92,120," + r + ")" + " 100%)");
          _gsap.set(bg, 
            { 
              //backgroundImage:"-webkit-linear-gradient(top," + this.vars.colorProps.top + ", " + this.vars.colorProps.bottom + ")",
              background: "linear-gradient(141deg, " + "rgba(0,160,176," + r + ")" + " 0%, " + "rgba(207,92,120," + r + ")" + " 100%)"
            });
        }
      }
      
      const tl = this.$gsap.timeline({defaults:{ease:'none'}, scrollTrigger:{trigger:'.section1', start:'top top', end:'bottom top', scrub: true}});
      tl.fromTo(bg, {}, {duration: 1, ease: "none", onUpdate:colorize})
        ;
        
      // tl.fromTo(container, 
      //       { background: 'linear-gradient(141deg, rgba(0,160,176,0.299918014012026) 0%, rgba(207,92,120,0.3027270027760709) 100%)' },
      //       { duration: 1, background: 'rgba(255, 255, 255, 0.0)', ease: "none" });

      const tlh = this.$gsap.timeline({defaults:{ease:'none'}, scrollTrigger:{trigger:'.section1', start:'top top', end:'bottom top', scrub: true}});
      tlh.fromTo(header, { background: 'rgba(255, 255, 255, 0.0)' }, { duration: 1, background: 'rgba(255, 255, 255, 1)', ease: "none" })
        .to(tohide, { duration: 1, opacity: 0, ease: "none" }, "<") ;

      const tlf = this.$gsap.timeline({defaults:{ease:'none'}, scrollTrigger:{trigger:'.footer', start:'top bottom', end:'bottom bottom', scrub: true}});
      tlf
        // .fromTo(container,  { background: 'rgba(255, 255, 255, 0.0)' }, { duration: 1, background: 'rgba(245,223,77,0.549918014012026)', ease: "none" })
        // .fromTo(footer,  { background: 'rgba(255, 255, 255, 0.0)' }, { duration: 1, background: 'rgba(245,223,77,0.549918014012026)', ease: "none" }, "<");
        .fromTo(container, {background: 'rgba(255,255,255,0)'}, { duration: 1, background: 'rgba(245,223,77,0.549918014012026)', ease: "none" })
        .to(footer, { duration: 1, background: 'rgba(245,223,77,0.549918014012026)', ease: "none" }, "<");

      

    },
  },
}
</script>

<style scoped lang="scss">
  .container {
    width: 100%;
    // background: linear-gradient(141deg, rgba(0,160,176,0.299918014012026) 0%, rgba(207,92,120,0.3027270027760709) 100%);
    background-attachment: fixed;

  }
  .bg {
    z-index: 1;
    height: 100vh;
    width: 100%;
    background: linear-gradient(141deg, rgba(0,160,176,0.3) 0%, rgba(207,92,120,0.3) 100%);
    position: fixed;
    top: 0px;
    left: 0px;
  }
  .section {
    position: relative;
    width: 100%;
    height: 100vh;
    z-index: 10;
  }
  .bottom {
    position: absolute;
    width: 100%;
    padding: 1rem 0 1rem 0;
    left: 0;
    bottom: 0;
    .bottom-container {
      display: flex;
      align-items: center;
      justify-content: center;
      .next {
        flex: 1 1 auto;
        margin-bottom: 1rem;
      }
    }
  }
  .content-parent {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    .block {
      display: flex;
      flex-direction: row;
      .block-title {
        font-size:4em;
        font-family: 'Gotham-Black', 'Roboto', sans-serif;
        margin-bottom: 1rem;
      }
      .l-image {
        position: relative;
        width: 40%;        
        img {
          max-width: 100%;
          max-height: 80vh;
        }
      }
      .r-text {
        width: 60%;
        padding-left: 10%;
      }
    }

    .header {

      .above-title {

      }
      .title {
        h1 {
          margin-block-start: 0.3em;
          margin-block-end: 0.3em;
        }
      }
      .below-title {
        h2 {
          margin-block-start: 0.3em;
          margin-block-end: 0.3em;
        }
      }
    }
  }
</style>
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
              <div>AI Sales Assisstant
              </div>
            </h1>
          </div>
          <div class="below-title font-XL">
            <h2>a chatbot who learns to deal with your customers</h2>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom-container max-width">
          <div class="flex-space"></div>
          <div id="hide" class="next font-hand-L">
            learn more 👇
          </div>
        </div>
      </div>
    </div>
    <div class="section section2">
      <div class="content-parent">
        <div class="block max-width">
          <div class="l-image">
            <img src="~/assets/images/ai_sa/same.png"/>
          </div>
          <div class="r-text">
            <div class="block-subtitle">Marketer's new challenge</div>
            <div class="block-title">Shrinking attention span</div>
            <div class="block-content">
              <div class="p">It is hard retain that attention for the length of time it takes to have an impact and to be unique.</div>
              <div class="p">Dialogity helps to engage and differentiate.</div>
              <div class="read-more"><div class="text">How?</div><div class="pointer">👇</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section3">
      <div class="content-parent">
        <div class="block max-width">
          <div class="l-image">
            <img src="~/assets/images/ai_sa/example2.png"/>
          </div>
          <div class="r-text">
            <div class="block-subtitle">Higher engagement through</div>
            <div class="block-title">Conversational experience</div>
            <div class="block-content">
              <div class="p">AI automatically finds the best content for the customers from the companies knowledge base.</div>
              <div class="p">Improves by constantly optimizing the conversation by learning from live customer interactions.</div>
              <div class="read-more"><div class="text">Why is it good?</div><div class="pointer">👇</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section4">
      <div class="content-parent">
        <div class="block max-width">
          <div class="l-image">
            <img src="~/assets/images/ai_sa/robot2.png"/>
          </div>
          <div class="r-text">
            <div class="block-subtitle">From a passive receiver</div>
            <div class="block-title">Customers turn into an active player</div>
            <div class="block-content">
              <div class="p">Dialogity transforms a complex knowledge base to conversations automatically using AI / ML.</div>
              <div class="p">Companies benefit from customers’ better understanding of their complex market offerings, thus they differentiate themselves from competitors and increase the probability of customer acquisition.</div>
              <div class="read-more"><div class="text">Subscribe for BETA</div><div class="pointer">👇</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section5">
      <div class="content-parent">
        <div class="max-width min-width">
          <SimpleForm :formId="'AI_sales_agent_registration'"/>
        </div>
      </div>
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
              background: "linear-gradient(75deg, " + "rgba(0,160,176," + r + ")" + " 0%, " + "rgba(245, 223, 77," + r + ")" + " 60%)"
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

      
      const mid = this.$gsap.timeline({defaults:{ease:'none'}, scrollTrigger:{trigger:'.section3', start:'top bottom', end:'bottom top', scrub: true}});
      mid
        .to(bg, { duration: 1, background: 'rgba(0,88,155,0.2)', ease: "none" })
        //.to(bg, { duration: 1, background: 'rgba(255,255,255,0)', ease: "none" });

      const mid2 = this.$gsap.timeline({defaults:{ease:'none'}, scrollTrigger:{trigger:'.section4', start:'top bottom', end:'top top', scrub: true}});
      mid2
        .to(bg, { duration: 1, background: 'rgba(207,92,120,0.1)', ease: "none" })
        //.to(bg, { duration: 1, background: 'rgba(255,255,255,0)', ease: "none" });


      const tlf = this.$gsap.timeline({defaults:{ease:'none'}, scrollTrigger:{trigger:'.footer', start:'top bottom', end:'bottom bottom', scrub: true}});
      tlf
        .to(bg, { duration: 1, background: 'rgba(245,223,77,0.549918014012026)', ease: "none" })
        // .fromTo(container, {background: 'rgba(255,255,255,0)'}, { duration: 1, background: 'rgba(245,223,77,0.549918014012026)', ease: "none" })
        // .to(footer, { duration: 1, background: 'rgba(245,223,77,0.549918014012026)', ease: "none" }, "<");

      

    },
  },
}
</script>

<style scoped lang="scss">
  .min-width {
    min-width: min(50rem, 80%);
  }
  .container {
    width: 100%;
    // background: linear-gradient(141deg, rgba(0,160,176,0.299918014012026) 0%, rgba(207,92,120,0.3027270027760709) 100%);
    background-attachment: fixed;

  }
  .bg {
    z-index: 1;
    height: 115vh;
    width: 100%;
    background: linear-gradient(75deg, rgba(0,160,176,0.3) 0%, rgba(245, 223, 77,0.3) 60%);
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
        //margin-bottom: 1rem;
        margin-bottom: 5rem;
      }
      @media only screen and (max-width: 768px) {
        .next {
          margin-bottom: 5rem;
        }
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
      @media only screen and (max-width: 768px) { 
        flex-direction: column; 
        align-items: center;
      }
      .p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
      }
      .s {
        display: inline;
        font-size: 1.3em;
        font-weight: 600;
      }
      .block-subtitle {
        font-family: 'hand3';
        font-size: calc(min(2rem,min(100vh/22,100vw/15)));
      }
      .block-title {
        font-size:calc(min(4rem,min(100vh/18,100vw/13)));
        font-family: 'Gotham-Black', 'Roboto', sans-serif;
        margin-bottom: 1rem;
      }
      .read-more {
        //cursor: pointer;
        display: flex;
        align-content: center;
        .text {
          //text-decoration: underline;
          display: inline-block;
          //font-family: 'Beyond-Infinity';
          font-family: 'hand3';
          font-size: calc(min(2rem,min(100vh/18,100vw/15)));
          color:  #000000;
        }
        .pointer {
          display: inline-block;
          margin-left: 0.5rem;
          font-size: calc(min(2rem,min(100vh/18,100vw/15)));
        }
      }
      .l-image {
        position: relative;
        width: 40%;
        @media only screen and (max-width: 768px) { 
          width: 60%;
          padding-bottom: 2rem;
        }
        display: flex;
        align-content: center;
        justify-content: center;  
        img {
          max-width: 100%;
          height: auto;
          margin: auto;
        }
      }
      .r-text {
        width: 60%;
        padding-left: 10%;
        @media only screen and (max-width: 768px) { 
          width: 80%;
          padding-left: 0;
        }
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
          font-size: 1em;
        }
      }
    }
  }
</style>
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
              <div>FRIENDLY LIVE CHAT
              </div>
            </h1>
            
          </div>
          <div class="below-title font-XL">
            <h2>with handy features</h2>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom-container max-width">
          <div class="flex-space"></div>
          <div id="hide" class="next font-hand-L">
            see features 🕶️👇
          </div>
        </div>
      </div>
    </div>
    <div class="section section2">
      
    </div>
    <div class="section section3">
      
    </div>
    <div class="section section4">
      
    </div>

    <div class="anim-holder">
      <div class="anim-frame">
        <div class="demo_holder max2-width">
          <div class="demo_frame">
            <div class="image_holder">
              <div class="text-holder">
                <div class="install1 text-def font-hand-M">
                  Just a few click to install 👆
                </div>
                <div class="install2 text-def font-hand-M">
                  Insert this code to your website.
                </div>
                <div class="install3 text-def font-hand-M">
                  For example, you can use a tag manager.
                </div>
              </div>
              <img class="img1" src="~/assets/images/demo_live_chat/s1 01 main screen.webp"/>
              <img class="img2 imgb" src="~/assets/images/demo_live_chat/s1 01 main screen b.webp"/>
              <img class="img3 imgb" src="~/assets/images/demo_live_chat/02 install.webp"/>
              <img class="img4 imgb" src="~/assets/images/demo_live_chat/02 install b.webp"/>
            </div>
          </div>
        </div>
      </div>
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
      const animHolder = document.querySelector('.anim-holder');

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
              background: "linear-gradient(141deg, " + "rgba(245,223,77," + r + ")" + " 0%, " + "rgba(207,92,120," + r + ")" + " 100%)"
            });
        }
      }
      
      const tl = this.$gsap.timeline({defaults:{ease:'none'}, scrollTrigger:{trigger:'.section1', start:'top top', end:'bottom top', scrub: true}});
      tl.fromTo(bg, {}, {duration: 1, ease: "none", onUpdate:colorize})
        ;

      const img1 = document.querySelector('.img1');
      const t1 = document.querySelector('.install1');
      const img2 = document.querySelector('.img2');
      const img3 = document.querySelector('.img3');
      const t2 = document.querySelector('.install2');
      const t3 = document.querySelector('.install3');
      const img4 = document.querySelector('.img4');
      const tl_anim = this.$gsap.timeline({defaults:{ease:'none'}, scrollTrigger:{trigger:'.section2', start:'top top', end:'bottom top', scrub: true}});
      tl_anim.fromTo(animHolder, { opacity: 0 }, { duration: 0.5, opacity: 1, ease: "none" })
        .to(img1, {opacity: 0, duration: 1, ease: "none"},"+=2")
        .to(t1, {opacity: 1, duration: 1, ease: "none"},"<")
        .to(img2, {opacity: 0, duration: 1, ease: "none"},"+=2")
        .to(t1, {opacity: 0, duration: 1, ease: "none"},"<")
        .to(img3, {opacity: 0, duration: 1, ease: "none"},"+=2")
        .to(t2, {opacity: 1, duration: 1, ease: "none"},"<")
        .to(t3, {opacity: 1, duration: 1, ease: "none"},"+=1")
        .from(t3, {x: "-100%", duration: 1, ease: "none"},"<")
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
        .to(bg, { duration: 1, background: 'rgba(255,255,255,0)', ease: "none" });


      const tlf = this.$gsap.timeline({defaults:{ease:'none'}, scrollTrigger:{trigger:'.footer', start:'top bottom', end:'bottom bottom', scrub: true}});
      tlf
        .to(bg, { duration: 1, background: 'rgba(245,223,77,0.549918014012026)', ease: "none" })
        .to(animHolder, { duration: 1, opacity: 0, ease: "none" })
        // .fromTo(container, {background: 'rgba(255,255,255,0)'}, { duration: 1, background: 'rgba(245,223,77,0.549918014012026)', ease: "none" })
        // .to(footer, { duration: 1, background: 'rgba(245,223,77,0.549918014012026)', ease: "none" }, "<");

      

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
    height: 115vh;
    width: 100%;
    background: linear-gradient(141deg, rgba(245,223,77,0.3) 0%, rgba(207,92,120,0.3) 100%);
    position: fixed;
    top: 0px;
    left: 0px;
  }
  .anim-holder {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 20;
    opacity: 0;
    .anim-frame {
      position: relative;
      width: 100%;
      height: 100%;
      background-color: rgba(245,223,77,0.1);
    }
  }

  .section2 {
    //background-color: burlywood;
    height: 400vh;
  }
  .demo_holder {
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .demo_frame {
      background: burlywood;
      position: relative;
      //border: 1px solid black;
      border-radius: 0.5rem;
      padding: 2rem 0.5rem 0.5rem 0.5rem;
      //background-color: #666;
      .image_holder {
        position: relative;
        overflow: hidden;
        // border-left: 0.1rem solid rgb(128, 107, 81);
        // border-top: 0.1rem solid rgb(128, 107, 81);
        //border: 1px solid black;
        img {
          position: relative;
          width: 100%;
          max-height: 100%;
        }
        .imgb {
          position: absolute;
          top: 0;
          left: 0;
        }
        .img1 { z-index: 10; }
        .img2 { z-index: 9; }
        .img3 { z-index: 8; }
        .img4 { z-index: 7; }
      
        .text-holder {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 100;
          .text-def {
            position: absolute;
            opacity: 0;
          }
          .install1 {
            width: 50%;
            top: 20%;
            left: 25%; 
          }  
          .install2 {
            width: 75%;
            top: 10%;
            left: 13%; 
          }
          .install3 {
            width: 75%;
            top: 70%;
            left: 13%; 
          }  
        }
      }
    }
    .demo_frame:after {
      content: "";
      width: 100%;
      height: 100%;
      background-color: red;
      position: absolute;
      top: 1rem;
      left: 1rem;
      z-index: -1;
      border-radius: 0.5rem;
    }
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
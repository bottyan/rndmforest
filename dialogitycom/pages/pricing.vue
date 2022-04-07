<template>
  <div class="container" id="scrollDist">
    <div class="bg"></div>
    <div id="trigger"></div>
    <div class="section section1">
      <div class="content-parent">
        <div class="header max-width">
          <div class="above-title"></div>
          <div class="title font-XXL">

              <div class="title-main">PRICING</div>

          </div>

        </div>
        <div class="plans max-width-wide">

          <div class="pricingPlans__planCard">
            <div class="margin--vertical-c4" >
              <div class="pricingGrid__rowItem">
                <a href="#">
                  <h2 class="h5 pricingPlans__header ">Live Chat</h2>
                  <p class="copy margin--top-c4">
                    Communicate with your customers for FREE.
                  </p>
                </a>
              </div>
            </div>

            <div class="margin--vertical-c4" >
              <div class="pricingGrid__rowItem" >
                <div class="copy-regular margin--bottom-c1 isVisible" >
                  <!--Starts at-->
                </div>

                <div class="pricingPlans__priceWrapper">
                  <div class="flex flex--bottom" aria-hidden="true">
                    <div class="formattedPrice flex flex--left" >
                      <div class="formattedPrice__price--symbol--left" >
                        $
                      </div>
                      <div class="formattedPrice__price--integer" >
                        0
                      </div>
                      <div class="formattedPrice__price--fraction" ></div>
                      <div class="formattedPrice__price--symbol--right" ></div>
                      <div class=" formattedPrice__disclaimerAsterisk formattedPrice__hide " >
                        <!-- * -->
                      </div>
                    </div>

                    <div class="copy-regular pricingPlans--compare__perMonth" >
                      /month
                    </div>
                  </div>
                </div>

                <div class="cta-button" @click="goToRegistration()">
                  
                    Sign Up Free
                  
                </div>
              </div>
            </div>

            <div class="margin--vertical-c4 features" >
                Everything a small business need for real-time communication:
                <ul class="pricingPlans__featuresRow__list">
                    <li class="feature-list-item">
                        <span class="tooltip" >
                            <span class="tooltip__originalText" tabindex="0" >No limitation in number of customers or agents</span >
                        </span>
                    </li>
                    <li class="feature-list-item">
                        <span class="tooltip" >
                            <span class="tooltip__originalText" tabindex="0" >Customization</span >
                        </span>
                    </li>
                    <li class="feature-list-item">
                        <span class="tooltip" >
                            <span class="tooltip__originalText" tabindex="0" >Gmail integration</span >
                        </span>
                    </li>
                    
                </ul>
            </div>

            <div>
              <NuxtLink class="cta" to="/live_chat" >
                About Live Chat
              </NuxtLink>
            </div>
          </div>

                    <div class="pricingPlans__planCard">
            <div class="margin--vertical-c4" >
              <div class="pricingGrid__rowItem">
                <a href="#">
                  <h2 class="h5 pricingPlans__header ">Chatbots</h2>
                  <p class="copy margin--top-c4">
                    Decrease response time and increase conversion rate by automation.
                  </p>
                </a>
              </div>
            </div>

            <div class="margin--vertical-c4" >
              <div class="pricingGrid__rowItem" >
                <div class="copy-regular margin--bottom-c1 isVisible" >
                  <!--Starts at-->
                </div>

                <div class="pricingPlans__priceWrapper">
                  <div class="flex flex--bottom" aria-hidden="true">
                    <div class="formattedPrice flex flex--left" >
                      <div class="formattedPrice__price--symbol--left" >
                        $
                      </div>
                      <div class="formattedPrice__price--integer" >
                        9
                      </div>
                      <div class="formattedPrice__price--fraction" >.99</div>
                      <div class="formattedPrice__price--symbol--right" ></div>
                      <div class=" formattedPrice__disclaimerAsterisk formattedPrice__hide " >
                        <!-- * -->
                      </div>
                    </div>

                    <div class="copy-regular pricingPlans--compare__perMonth" >
                      /month
                    </div>
                  </div>
                </div>

                <div class="cta-button" @click="formId = 'Chatbot_registration'; showModal = true">
                  
                    Register for FREE Beta Test

                </div>
              </div>
            </div>

            <div class="margin--vertical-c4 features" >
                Everything in Live Chat, plus:
                <ul class="pricingPlans__featuresRow__list">
                    <li class="feature-list-item">
                        <span class="tooltip" >
                            <span class="tooltip__originalText" tabindex="0" >Automated conversations</span >
                        </span>
                    </li>
                    <li class="feature-list-item">
                        <span class="tooltip" >
                            <span class="tooltip__originalText" tabindex="0" >Decreased response times</span >
                        </span>
                    </li>
                    <li class="feature-list-item">
                        <span class="tooltip" >
                            <span class="tooltip__originalText" tabindex="0" >Increased conversion rate</span >
                        </span>
                    </li>
                    
                </ul>
            </div>

            <div>
              <NuxtLink class="cta" to="/chat_automation/" >
                About Chatbots
              </NuxtLink>
            </div>
          </div>

        <div class="pricingPlans__planCard">
            <div class="margin--vertical-c4" >
              <div class="pricingGrid__rowItem">
                <a href="#">
                  <h2 class="h5 pricingPlans__header ">AI Sales Assistant</h2>
                  <p class="copy margin--top-c4">
                    Extend your team with AI
                  </p>
                </a>
              </div>
            </div>

            <div class="margin--vertical-c4" >
              <div class="pricingGrid__rowItem" >
                <div class="copy-regular margin--bottom-c1 isVisible" >
                  <!--Starts at-->
                </div>

                <div class="pricingPlans__priceWrapper">
                  <div class="flex flex--bottom" aria-hidden="true">
                    <div class="formattedPrice flex flex--left" >
                      <div class="formattedPrice__price--symbol--left" >
                        
                      </div>
                      <div class="formattedPrice__price--integer" >
                        Contact us
                      </div>
                      <div class="formattedPrice__price--fraction" ></div>
                      <div class="formattedPrice__price--symbol--right" ></div>
                      <div class=" formattedPrice__disclaimerAsterisk formattedPrice__hide " >
                        <!-- * -->
                      </div>
                    </div>

                    <div class="copy-regular pricingPlans--compare__perMonth transparent" >
                      .
                    </div>
                  </div>
                </div>

                <div class="cta-button" @click="formId = 'AI_sales_agent_registration'; showModal = true">
                  
                    Register for Beta Test

                </div>
              </div>
            </div>

            <div class="margin--vertical-c4 features" >
                Everything in Chatbots, plus:
                <ul class="pricingPlans__featuresRow__list">
                    <li class="feature-list-item">
                        <span class="tooltip" >
                            <span class="tooltip__originalText" tabindex="0" >Meaningful conversation automated</span >
                        </span>
                    </li>
                    <li class="feature-list-item">
                        <span class="tooltip" >
                            <span class="tooltip__originalText" tabindex="0" >Machine learning based dialog flow building</span >
                        </span>
                    </li>
                    <li class="feature-list-item">
                        <span class="tooltip" >
                            <span class="tooltip__originalText" tabindex="0" >Managing complex conversations automatically</span >
                        </span>
                    </li>
                    
                </ul>
            </div>

            <div>
              <NuxtLink class="cta" to="/ai_sales_assistant/" >
                About AI Sales Assistant
              </NuxtLink>
            </div>
          </div>


        </div>
      </div>
    </div>
    <FormModal v-show="showModal" @close-modal="showModal = false" :formId="this.formId"/>
  </div>
</template>

<script>
import NumberedParagraph from "../components/NumberedParagraph.vue";
import FormModal from "../components/FormModal.vue";
export default {
  components: { NumberedParagraph, FormModal },
  layout: "dialogity",
  
  data() {
    return {
      showModal: false,
      formId: "default",
    }
  },

  mounted() {
    this.animateOnScroll();
  },

  beforeDestroy() {
    this.$gsap.killTweensOf(".container");
    this.$gsap.killTweensOf(".section");
  },

  methods: {
    animateOnScroll() {
      const container = document.querySelector(".container");
      const header = document.querySelector("#menu-main");
      const footer = document.querySelector(".footer");
      const bg = document.querySelector(".bg");
      const tohide = document.querySelector("#hide");
    },
    goToRegistration() {
      window.location.href = "https://app.dialogity.com/registration";
    }
  },
};
</script>

<style scoped lang="scss">
.plans {
    display: flex;
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
    }
    gap: 1rem;
    .pricingPlans__planCard {
        flex: 1;
        background: rgba(255, 255, 255, 0.2);
        padding: 2.5rem;
        border: 1px solid black;
        .margin--vertical-c4 {
            .pricingGrid__rowItem {
                a {
                    text-decoration: none;
                    color: black;
                }
                h2 {
                    font-family: 'Gotham-Black', 'Roboto', sans-serif;
                    font-size: 2rem;//calc(min(3rem,min(100vh/15,100vw/22)));
                }
                .copy {
                    min-height: 2.7em;
                }
                .pricingPlans__priceWrapper {
                    .formattedPrice {
                        display: flex;
                        flex-direction: row;
                        align-items: flex-start;
                        .formattedPrice__price--symbol--left {
                            font-size: 0.75rem;
                            margin-top: 0.2rem;
                            margin-right: 0.1rem;
                        }
                        .formattedPrice__price--integer {
                            font-family: 'Gotham-Black', 'Roboto', sans-serif;
                            font-size: 2rem;
                        }
                        .formattedPrice__price--fraction {
                            font-size: 0.75rem;
                            margin-top: 0.2rem;
                            margin-left: 0.1rem;
                        }
                    }
                    .pricingPlans--compare__perMonth {
                        font-size: 0.75rem; 
                        margin-left: 0.75rem;
                    }
                    .transparent {
                        color: rgba(0, 0, 0, 0.0);
                    }
                }
                .cta-button {
                    margin-top: 2rem;
                    margin-bottom: 2rem;
                    width: calc(100%);
                    position: relative;
                    
                    padding: 0.5rem;
                    border: 1px solid black;
                    text-align: center;

                    cursor: pointer;

                    background-color: rgba(0, 0, 0, 0.7);
                    color: white;
                }    
                .cta-button:hover {
                    background-color: transparent;
                    color: black;
                }
            }
            .pricingPlans__featuresRow__list {
                list-style: none;
                li:before {
                    content: '✓';
                    margin-left: -1.2rem;
                    margin-right: 0.4rem;
                }
                .feature-list-item {
                    margin-bottom: 0.3rem;
                }
            }
        }
        .cta {
            color: black;
        }
        .features {
            min-height: 11em;
            @media only screen and (max-width: 1100px) {
                min-height: 0em;
            }
        }
    }
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
  background: linear-gradient(
    141deg,
    rgba(245, 223, 77, 0.55) 0%,
    rgba(207, 92, 120, 0.3) 100%
  );
  position: fixed;
  top: 0px;
  left: 0px;
}
.section {
  position: relative;
  width: 100%;
  //height: 100vh;
  z-index: 10;
}
.content-parent {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 6rem;
  flex-direction: column;
  //height: 100%;
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
      font-family: "Beyond-Infinity"; //'hand2';
      font-size: calc(min(2rem, min(100vh/22, 100vw/15)));
    }
    .block-title {
      font-size: calc(min(4rem, min(100vh/18, 100vw/13)));
      font-family: "Gotham-Black", "Roboto", sans-serif;
      margin-bottom: 1rem;
    }
    .read-more {
      cursor: pointer;
      display: flex;
      align-content: center;
      .text {
        text-decoration: underline;
        display: inline-block;
        font-family: "Beyond-Infinity";
        font-size: calc(min(2rem, min(100vh/18, 100vw/15)));
        color: #000000;
      }
      .pointer {
        display: inline-block;
        margin-left: 0.5rem;
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
      .title-main {
          margin: 1rem 0 2rem 0;
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

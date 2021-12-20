<template>
  <div>
    <div id="menu-main" class="header">
      <div class="navbar">
        
        <div class="menu">
          <div class="link-holder">
            <!--div class="nav-item"><NuxtLink to="/">Home</NuxtLink></div-->
            <div class="nav-item" @mouseover="mouseOver"><NuxtLink to="/">Products</NuxtLink></div>
            <div class="nav-item"><NuxtLink to="/pricing">Pricing</NuxtLink></div>
            <!--div class="nav-item"><NuxtLink to="/ai_sales_assistant">AI Sales Assistant</NuxtLink></div-->
          </div>
        </div>

        <div class="logo">
          <NuxtLink to="/">
            <img class="img" src="~/assets/images/logo_w_text_bw.png"/>
          </NuxtLink>
        </div>

        <div class="buttons">
          <div class="button"><a href="https://app.dialogity.com/login">Log In</a></div>
          <div class="button"><a href="https://app.dialogity.com/registration">Sign Up Free</a></div>
        </div>


        <div class="hamburger" v-on:click="toggleMenu()">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
      <div class="navpanel" @mouseleave="mouseLeave">
        <div class="product-panel">
          <div class="menu-block">
            <h2>Features</h2>
            <div class="panel-item"><NuxtLink to="/live_chat" >Live chat</NuxtLink></div>
            <div class="panel-item"><NuxtLink to="/chat_automation">Chatbots</NuxtLink></div>
            <div class="panel-item"><NuxtLink to="/ai_sales_assistant">AI sales assistant</NuxtLink></div>
          </div>
          <div class="menu-block">
            <h2>Documentation</h2>
            <div class="panel-item"><NuxtLink to="/live_chat" >Integrations</NuxtLink></div>
            <div class="panel-item"><NuxtLink to="/chat_automation">Documentation</NuxtLink></div>
          </div>
          <div class="menu-block mobile-menu-block">
            <h2><NuxtLink to="/pricing" >Pricing</NuxtLink></h2>
            <div class="buttons">
              <div class="button"><a href="https://app.dialogity.com/login">Log In</a></div>
              <div class="button"><a href="https://app.dialogity.com/registration">Sign Up Free</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Nuxt />
    <div class="footer">
      <div class="container">
        <div class="col col1"></div>
        <div class="col col2">
          <div class="footer-block">
            <div class="footer-item"><NuxtLink to="/pricing" v-on:click="menuClick()">Pricing</NuxtLink></div>
            <div class="footer-item"><NuxtLink to="/terms_of_service">Terms of Service</NuxtLink></div>
            <div class="footer-item"><NuxtLink to="/privacy_policy">Privacy Policy</NuxtLink></div>
          </div>
          <div class="footer-block">
            <div class="footer-item"><NuxtLink to="/live_chat">Live chat</NuxtLink></div>
            <div class="footer-item"><NuxtLink to="/chat_automation">Chatbots</NuxtLink></div>
            <div class="footer-item"><NuxtLink to="/ai_sales_assistant">AI sales assistant</NuxtLink></div>
          </div>
        </div>
        <div class="col col3">
          <div class="footer-block">
            <div class="footer-item"><a href="https://app.dialogity.com/login">Login</a></div>
            <div class="footer-item"><a href="https://app.dialogity.com/registration">Registration</a></div>
            <div class="footer-item"><a href="https://doc.dialogity.com/">Documentation</a></div>
          </div>
          <div class="footer-block">
            <div class="footer-item">Contact</div>
            <div class="footer-item"><a href="mailto:info@dialogity.com">info@dialogity.com</a></div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .header {
    z-index: 100;
    position: fixed;
    width: 100%;
    padding-bottom: 1rem;
    background: 'rgba(0, 0, 0, 0.0)';
    transition: background-color 600ms linear;

    .navbar {
      //max-width: calc(min(50rem,80%));
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 1.5rem;
      position: relative;
      z-index: 20;
      .logo {
        //flex: 1 1 auto;
        .img {
          width: 8em;
          height: auto;
        }
      }
      .menu {
        //flex: 2 1 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .link-holder {
          display: flex;
          .nav-item a {
            padding-left: 1rem;
            color: black;
          }
        }
      }
      .buttons {
        .button {
          display: inline-block;
          
          a {
            color: black;
            text-decoration: none;
            padding: 0.5rem;
            border: 1px solid black;
            //background-color: rgba(0, 0, 0, 0.2);
            margin-right: 1rem;
          }
          a:hover {
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
          }
        }
        
      }
      .hamburger {
        display: none;
        .bar {
          display: block;
          width: 25px;
          height: 3px;
          margin: 5px auto;
          -webkit-transition: all 0.3s ease-in-out;
          transition: all 0.3s ease-in-out;
          background-color: #101010;
        }
      }     
      @media only screen and (max-width: 768px) {
        .buttons {
          display: none;
        }

        .menu {
          display: none;
            /*position: fixed;
            left: -100%;
            top: 5rem;
            flex-direction: column;
            background-color: #fff;
            width: 100%;
            border-radius: 10px;
            text-align: center;
            transition: 0.3s;
            box-shadow:
                0 10px 27px rgba(0, 0, 0, 0.05);*/
        }

        .menu.active {
          // left: 0;
        }

        .hamburger {
          display: block;
          cursor: pointer;
        }

        .mobile-block {
          display: block;
        }
      }
    }
    .navpanel {
      position: fixed;
      top: 0;
      left: -100%;
      height: 100vh;
      width: calc(min(20rem, 100%));
      background: #ffffff;
      transition: 0.3s;
      z-index: 10;
      .product-panel {
        margin-top: 6rem;
        .panel-item {
          padding: 0.5rem 0 0.5rem 1rem;
          a {
            color: black;
          }
        }
        .menu-block {
          h2 {
            margin-left: 1rem;
            a {
              color: black;
            }
          }
        }
        .mobile-menu-block {
          display: none;
        }
        @media only screen and (max-width: 768px) {
          .mobile-menu-block {
            display: block;
          }
          .buttons {
            margin-top: 4rem;
            .button {
              margin: 2rem 0 2rem 1rem;
              a {
                color: black;
                text-decoration: none;
                padding: 0.5rem;
                border: 1px solid black;
                //background-color: rgba(0, 0, 0, 0.2);
                margin-right: 1rem;
              }
              a:hover {
                background-color: rgba(0, 0, 0, 0.7);
                color: white;
              }
            }
          }
        }
      }
    }
    .navpanel.active {
      left: 0;
    }
    @media only screen and (max-width: 768px) {
      .navbar {
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }
  }
  .header.scrolled {
    background-color: #fff !important;
    transition: background-color 600ms linear;
  }
  .footer {
    padding: 3rem;
    padding-top: 33vh;
    min-height: 20rem;
    background: rgba(255,255,255,0);
    position: relative;
    z-index: 10;
    //background-color: #333;
    .container {
      //color: #eee;
      max-width: 60rem;
      margin: auto;
      display: flex;
      .col {
        align-self: stretch;
        flex: 1 1 auto;
        .footer-block {
          margin-bottom: 1rem;
          padding-right: 1rem;
          .footer-item {
            margin-bottom: 0.2rem;
            a {
              color: #000;
            }
          }
        }
      }
      .col1 {
        flex: 3 0.5 auto;
      }
    }
  }
</style>


<script>
// TODO: mobile menu

export default {
  methods: {

    menuClick: function() {
      console.log("CLICK");
    },

    toggleMenu: function () {
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".menu");
      const navPanel = document.querySelector(".navpanel");
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      navPanel.classList.toggle("active");
      //console.log("toggle");
    },

    handleScroll: function() {
      var header = document.querySelector(".header");
      if (window.scrollY > header.offsetHeight) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    },

    mouseOver: function() {
      const navPanel = document.querySelector(".navpanel");
      navPanel.classList.add("active");
      console.log("over");
    },

    mouseLeave: function() {
      const navPanel = document.querySelector(".navpanel");
      navPanel.classList.remove("active");
    },

  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>
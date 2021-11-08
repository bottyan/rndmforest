<template>
  <div>
    <div id="menu-main" class="header">
      <div class="navbar">
        <div class="logo">
          <NuxtLink to="/">
            <img class="img" src="~/assets/images/logo_w_text_bw.png"/>
          </NuxtLink>
        </div>
        <div class="menu">
          <div class="link-holder">
            <!--div class="nav-item"><NuxtLink to="/">Home</NuxtLink></div-->
            <div class="nav-item"><NuxtLink to="/live_chat">Live Chat</NuxtLink></div>
            <div class="nav-item"><NuxtLink to="/chat_automation">Chatbots</NuxtLink></div>
            <div class="nav-item"><NuxtLink to="/ai_sales_assistant">AI Sales Assistant</NuxtLink></div>
          </div>
        </div>
        <div class="hamburger" v-on:click="toggleMenu()">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </div>
    <Nuxt />
    <div class="footer">
      <div class="container">
        <div class="col col1"></div>
        <div class="col col2">
          <div class="footer-block">
            <div class="footer-item"><NuxtLink to="/terms_of_service">Pricing</NuxtLink></div>
            <div class="footer-item"><NuxtLink to="/terms_of_service">Terms of Service</NuxtLink></div>
            <div class="footer-item"><NuxtLink to="/terms_of_service">Privacy Policy</NuxtLink></div>
          </div>
          <div class="footer-block">
            <div class="footer-item"><NuxtLink to="/terms_of_service">Live chat</NuxtLink></div>
            <div class="footer-item"><NuxtLink to="/terms_of_service">Chatbots</NuxtLink></div>
            <div class="footer-item"><NuxtLink to="/terms_of_service">AI sales assistant</NuxtLink></div>
          </div>
        </div>
        <div class="col col3">
          <div class="footer-block">
            <div class="footer-item"><a href="https://app.dialogity.com/login">Login</a></div>
            <div class="footer-item"><a href="https://app.dialogity.com/registration">Registration</a></div>
            <div class="footer-item"><NuxtLink to="/terms_of_service">Documentation</NuxtLink></div>
          </div>
          <div class="footer-block">
            <div class="footer-item">Contact</div>
            <div class="footer-item"><NuxtLink to="/terms_of_service">info@dialogity.com</NuxtLink></div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .header {
    z-index: 100;
    position: absolute;
    width: 100%;
    padding-bottom: 1rem;
    background: 'rgba(0, 0, 0, 0.0)';

    .navbar {
      max-width: calc(min(50rem,80%));
      margin: auto;
      display: flex;
      justify-content: space-between;
      padding-top: 1.5rem;
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
        .menu {
            position: fixed;
            left: -100%;
            top: 5rem;
            flex-direction: column;
            background-color: #fff;
            width: 100%;
            border-radius: 10px;
            text-align: center;
            transition: 0.3s;
            box-shadow:
                0 10px 27px rgba(0, 0, 0, 0.05);
        }

        .menu.active {
          left: 0;
        }

        .hamburger {
          display: block;
          cursor: pointer;
        }
      }
    }
  }
  .footer {
    padding: 3rem;
    padding-top: 6rem;
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

    toggleMenu: function () {
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".menu");
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      console.log("toggle");
    }
  }
}
</script>
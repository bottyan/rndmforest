<template>
  <div>
    <div id="menu-main" class="header">
      <div class="nav-desktop">
        <div class="logo">
          <img class="img" src="~/assets/images/logo_only_new_tr.png"/>
        </div>
        <div class="spacer">
        </div>
        <div class="menu">
          <div class="link-holder">
            <div class="nav-item"><NuxtLink to="/">Home</NuxtLink></div>
            <div class="nav-item"><NuxtLink to="/live_chat">Live Chat</NuxtLink></div>
            <div class="nav-item"><NuxtLink to="/chat_automation">Chatbots</NuxtLink></div>
            <div class="nav-item"><NuxtLink to="/ai_sales_assistant">AI Sales Assistant</NuxtLink></div>
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
            <div class="footer-item"><NuxtLink to="/terms_of_service">Login</NuxtLink></div>
            <div class="footer-item"><NuxtLink to="/terms_of_service">Registration</NuxtLink></div>
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

    .nav-desktop {
      max-width: calc(min(50rem,80%));
      margin: auto;
      display: flex;
      padding-top: 1.5rem;
      .logo {
        flex: 1 1 auto;
        .img {
          width: 2.5rem;
          height: 2.5rem;
        }
      }
      .spacer {
        flex: 50 0.1 auto;
      }
      .menu {
        flex: 2 1 auto;
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

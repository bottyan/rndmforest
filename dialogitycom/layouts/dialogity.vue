<template>
  <div>
    <div class="header">
      <div class="menu">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/live_chat">Live Chat</NuxtLink>
        <NuxtLink to="/chat_automation">Chatbots</NuxtLink>
        <NuxtLink to="/ai_sales_assistant">AI Sales Assistant</NuxtLink>
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
        </div>
        <div class="col col3"></div>
        
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .footer {
    padding: 3rem;
    min-height: 20rem;
    background-color: #333;
    .container {
      color: #eee;
      max-width: 60rem;
      margin: auto;
      display: flex;
      .col {
        align-self: stretch;
        flex: 1 1 auto;
        .footer-block {
          margin-bottom: 1rem;
          .footer-item {
            margin-bottom: 0.2rem;
            a {
              color: #eee;
            }
          }
        }
      }
      .col1 {
        flex: 2 0.5 auto;
      }
    }
  }
</style>

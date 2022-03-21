<template>
  <div>

    <div class="chat-block max-width headspace" ref="containerToScroll">
      <div id="content" class="content messages" ref="containerContent">
        <div class="messages-content" >
          <div class="msg-line" v-for="msg in messagesToShow" :key="msg.id">
            <div v-if="!msg.floating">
              <div class="msg-user-resp message message-personal" v-if="msg.type == 2 && msg.body.option">
                {{getSelectedMessage(msg.body.options, msg.body.option)}}
              </div>
              <div class="msg-user message message-personal" v-if="msg.type == 1 && msg.system_message == 0">
                {{msg.body_str}}
              </div>
              <div class="msg-user message message-personal" v-if="msg.type == 1 && msg.system_message == 2 && msg.body.value">
                {{msg.body.value}}
              </div>
              <div class="msg-bot message" v-if="msg.type == 0 || (msg.type == 2 && msg.system_message == 0)">
                <div v-if="msg.is_html == 0">
                  {{msg.body}}
                </div>
                <div v-if="msg.is_html == 1">
                  <span v-html="msg.body"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>

    <div id="inputHolder" class="input-holder sticky" ref="inputHolder">
      <div class="max-width">
        <div class="input-box">
          <div v-if="floatingMessage">
            <div class='choice-form' v-if="floatingMessage['body']['type']=='form'">
              <div class='option-title'>{{floatingMessage['body']['text']}}</div>
              <input id="freeTextInput" type="text" v-on:keyup.enter="onEnterAnswer" autocomplete="off"/>
            </div>
            <div class='choice-form' v-if="floatingMessage['body']['type']=='choice'">
              <div class='option-title'>Select an option 👇</div>
              <div class='option' v-for="option in floatingMessage['body']['options']" :key="option.id">
                <div class='option-body' @click="clickOption(floatingMessage.id, option.id)">{{option.text}}</div>
              </div>
            </div>
          </div>
          <div v-if="!floatingMessage || (floatingMessage['body']['type'] !== 'choice' && floatingMessage['body']['type'] !== 'form')">
            <input id="freeTextInput" type="text" v-on:keyup.enter="onEnter" autocomplete="off"/>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
    </div>

    <div v-on:click="reset()">
      Reset
    </div>

  </div>
</template>



<script>
/*
{"command": "messages", "messages": 
[
  {"id": "9417", "body": "Hi!", "body_str": "Hi!", "timestamp": 1636299750, "type": 1, "system_message": 0, "floating": false, "lang": "ENG", "is_html": 0, "avatar_image": "https://api2.dialogity.com//static/animals/stagbeetle.w.png", "author": "Green N. Stagbeetle"}, 
  {"id": "9418", "body": "Hi, how can I help you?", "body_str": "Hi, how can I help you?", "timestamp": 1636300053, "type": 0, "system_message": 0, "floating": false, "lang": "", "is_html": 0, "avatar_image": "https://api2.dialogity.com/static/media/avatars/company_avatar_2_zA6QVix", "author": "Dialogity"}
]}
*/

import Cookie from 'js-cookie'
export default {
  layout: 'dialogity',

  data() {
    return {
      connection: null,
      floatingMessage: null,
      uuid: null,
      cid: null,
      messages: [],
      messagesToShow: [],
      adding: false,
    }
  },

  mounted() {
    this.gsapInit();
    // TODO: implement recommenct in case of error
    console.log("Starting connection to WebSocket Server");
    const uuid = "d09fbd61d20c42de9023c7a8f2b0154e"; // prod
    //const uuid = "aa8a9a6a66bb76976a9876"; // local
    let cid = Cookie.get("wtid");
    if (!cid || cid === "") {
      cid = this.dlgty_chb_guidGenerator();
      Cookie.set("wtid", cid);
    }
    this.cid = cid;
    this.uuid = uuid;
    this.initDialog();
  },

  beforeDestroy() {
    // TODO: disconnect
  },

  methods: {
    initDialog: function() {
      let cid = this.cid;
      let uuid = this.uuid;
      this.connection = new WebSocket("wss://api2.dialogity.com/ws/chat"); // prod
      //this.connection = new WebSocket("ws://localhost:8000/ws/chat"); // local
      const _conn = this.connection;
      const _this = this;

      this.connection.onmessage = function(event) {
        console.log("Message received:", event);
        const data = JSON.parse(event.data);
        if (data.command === "messages") {
          console.log("Messages fetched:", data.messages);
          _this.setMessages(data.messages);
        } else if (data.command === "new_message") {
          _this.addMessage(data.message);
        } else if (data.command === "new_answer") {
          _this.addMessage(data.message);
        } else if (data.command === "update_message") {
          _this.updateMessage(data.message);
        }
      }

      this.connection.onopen = function(event) {
        console.log(event);
        console.log("Successfully connected to the websocket server...");
        // TODO: fetch messages
        _conn.send(JSON.stringify({
          command: 'fetch_messages', uuid: uuid, cid: cid, url: "chatbot"
        }));
      }

      //const _connection = this.connection;
      this.connection.onclose = function(event) {
        console.log('Socket is closed. Reconnect will be attempted in 1 ms.', event.reason);
        setTimeout(function() { console.log("TRY TO RECONNECT?"); }, 1);
      };

      this.constantCheck();
    }, 
    constantCheck: function() {
      const _this = this;
      _this.addMessageIfExists();
      setTimeout(() => _this.constantCheck(), 200);
    },
    reset: function() {
      this.messages = [];
      this.floatingMessage = null;
      this.connection.close();
      let cid = this.dlgty_chb_guidGenerator();
      Cookie.set("wtid", cid);
      this.cid = cid;
    },
    sendMsg: function(message) {
      // TODO: sending a message
    },
    clickOption: function(msgId, optionId) {
      const message = {
        command: 'new_answer', message: {option: optionId}, system_message: 2, type: 1, cid: this.cid, uuid: this.uuid, qid: msgId, lang: this.lang, url: "chatbot"
      };
      this.connection.send(JSON.stringify(message));
    },
    onEnter: function(e) {
      let msg = e.target.value;
      console.log("On Enter:", msg);
      e.target.value = "";
      this.connection.send(JSON.stringify({
        command: 'new_message', message: msg, type: 1, cid: this.cid, uuid: this.uuid, lang: 'ENG', is_html: 0, url: "chatbot"
      }));
    },
    onEnterAnswer: function(e) {
      let msg =  {};
      msg['value'] = e.target.value;
      console.log("On Enter:", msg);
      e.target.value = "";
      let qid = parseInt(this.floatingMessage.id);
      this.connection.send(JSON.stringify({
        command: 'new_answer', message: msg, type: 1, 'system_message': 2, cid: this.cid, uuid: this.uuid, 'qid': qid, lang: 'ENG', is_html: 0, url: "chatbot"
      }));
    },
    setMessages: function(msgs) {
      console.log("MESSAGES");
      this.messages = msgs;
      this.messagesToShow = this.messages.map((x) => x);;
      this.getFloatingMessage();
      this.scrollToTheEnd();
    },
    addMessage: function(msg) {
      this.messages.push(msg);
      this.getFloatingMessage();
      this.scrollToTheEnd();
    },
    addMessageIfExists: function() {
      if (!this.adding) {
        if (this.messages.length > this.messagesToShow.length) {
          this.adding = true;
          var newMessage = this.messages[this.messagesToShow.length];
          var waitTime = 10;
          if (newMessage.body_str) {
            waitTime = 40 * newMessage.body_str.length;
            console.log("Wait for: ", waitTime);
          }
          const _this = this;
          setTimeout(() => {
            _this.messagesToShow.push(newMessage);
            _this.adding = false;
            _this.scrollToTheEnd();
          }, waitTime);
        }
      }
    },
    updateMessage: function(msg) {
      if (this.messages) {
        for (let i = 0; i < this.messages.length; i++) {
          if (msg['id'] === this.messages[i]['id']) {
            this.messages[i]['body'] = msg['body'];
            this.messages[i]['system_message'] = msg['system_message'];
            this.messages[i]['floating'] = msg['floating'];
          }
        }
        this.scrollToTheEnd();
      } else {
        console.log("WARN: updateMessage failed because messages is empty");
      }
    },
    getFloatingMessage: function() {
      this.floatingMessage = null;
      for (let msg of this.messages) {
        if (msg.floating) {
          this.floatingMessage = msg;
        }
      }
    },
    getSelectedMessage: function(options, selectedOptionId) {
      let msg = "";
      for (let option of options) {
        //console.log("TEST", optio)
        if (option.id == selectedOptionId) {
          msg = option.text;
        }
      }
      console.log("OPTION SELECTED:", msg);
      return msg;
    },
    dlgty_chb_guidGenerator: function () {
      var S4 = function() {
      return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
      };
      return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    },
    scrollToTheEnd: function() {
      // TODO fix scroll out first messages
      this.$nextTick(() => {
        const content = this.$refs.containerToScroll;
        const innerContent = this.$refs.containerContent;
        const contentHeight = innerContent.clientHeight;
        //const contentHeight = content.clientHeight;
        //const windowHeight = window.innerHeight;
        const bottomPos = this.$refs.inputHolder.getBoundingClientRect().top;
        const headSpace = this.convertRemToPixels(6);
        console.log("SCROLL", contentHeight, bottomPos)
        if (contentHeight + headSpace > bottomPos) {
          const scrollTo = Math.max(0, contentHeight + headSpace - bottomPos);
          console.log("scroll to:", scrollTo);
          window.scrollTo(0, scrollTo);
        } 
      });
    },
    convertRemToPixels: function(rem) {    
      return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    },
    gsapInit: function() {
      // https://greensock.com/forums/topic/24446-scrolltrigger-possible-to-stick-to-bottom-of-viewport-untill-its-ghost-appears-like-simulating-position-sticky/
      // gsap.set(".sticky", {yPercent: -100});
      // let main = document.querySelector(".chat-block");

      // const tl_anim = this.$gsap.timeline({defaults:{ease:'none'}, scrollTrigger:{
      //     trigger:'.sticky', start: "bottom bottom", endTrigger: ".footer", end: "top bottom", pin: true,
      //     onRefreshInit: self => {main.style.paddingBottom = self.trigger.offsetHeight + "px"; console.log("eee");},
      //     pinSpacing: false
      //   }
      // });

    },
  }
}
</script>

<style scoped lang="scss">
  .chat-block {
    min-height: 100vh;
    position: relative;
    
    .content {
      .msg-line {
        .msg-bot {

        }
        .msg-user {
          text-align: right;
        }
        .msg-user-resp {
          text-align: right;
        }
      }
    }
  }
  .input-holder {
    min-height: 5rem;
    padding-bottom: 2rem;

    // margin-bottom: 150px;
    // position: absolute;
    // bottom: 0px;
    // transform: translateY(-100%);
    // width: 100%;

    position: sticky;
    bottom: 0;

    .input-box {
      padding: 2rem;
      border-radius: 1rem;
      background: #ffffff;
      border: 2px solid #000000;
      box-shadow: 1rem 1rem 4px 0px rgba(0,0,0,0.72);

      input {
        width: calc(100% - 8px);
        border: 0px solid black;
        border-bottom: 1px solid black;
        font-size: 1rem;
        margin-top: 0.6rem;
      }

      .choice-form {
        .option-title {
          margin-bottom: 0rem;
        }
        .option {
          display: inline-block;
          margin-right: 1rem;
          margin-top: 1rem;
          border-radius: 0.5rem;
          overflow: hidden;
          .option-body {
            background: lightblue;
            font-size: 1.5rem;
            line-height: 1.2em;
            padding: 1rem;
            cursor: pointer;
          }
        }
        .option:hover {
          box-shadow: 0.2rem 0.2rem 2px 0px rgba(0,0,0,0.32);
        }
      }
    }
  }


/*--------------------
Messages
--------------------*/
.messages {
  flex: 1 1 auto;
  //color: rgba(255, 255, 255, .5);
  overflow: hidden;
  position: relative;
  width: 100%;
  
  & .messages-content {
    position: relative;
    top: 0;
    left: 0;
    height: 101%;
    width: 100%;
  }

  
  .message {
    clear: both;
    float: left;
    padding: 1rem;
    border-radius: 10px 10px 10px 0;
    // background: rgba(0, 0, 0, .3);
    background: linear-gradient(120deg, rgba(0,160,176,0.3) 0%, rgba(245,223,77,0.3) 100%);
    margin: 8px 0;
    font-size: 1rem;
    line-height: 1em;
    margin-right: 1.5rem;
    position: relative;
    //text-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    
    .timestamp {
      position: absolute;
      bottom: -15px;
      font-size: 9px;
      color: rgba(255, 255, 255, .3);
    }
    
    &::before {
      content: '';
      position: absolute;
      bottom: -6px;
      border-top: 6px solid rgba(0,160,176,0.3);
      //background: linear-gradient(141deg, rgba(0,160,176,0.3) 0%, rgba(207,92,120,0.3) 100%);
      left: 0;
      border-right: 7px solid transparent;
    }
    
    .avatar {
      position: absolute;
      z-index: 1;
      bottom: -15px;
      left: -35px;
      border-radius: 30px;
      width: 30px;
      height: 30px;
      overflow: hidden;
      margin: 0;
      padding: 0;
      border: 2px solid rgba(255, 255, 255, 0.24);

      img {
        width: 100%;
        height: auto;
      }
    }
    
    &.message-personal {
      float: right;
      color: #fff;
      text-align: right;
      background: linear-gradient(120deg, #248A52, #257287);
      border-radius: 10px 10px 0 10px;
      margin-right: 0rem;
      margin-left: 1.5rem;
      
      &::before {
        left: auto;
        right: 0;
        border-right: none;
        border-left: 5px solid transparent;
        border-top: 4px solid #257287;
        bottom: -4px;
      }
    }
    
    &:last-child {
      margin-bottom: 30px;
    }
    
    &.new {
      transform: scale(0);
      transform-origin: 0 0;
      animation: bounce 500ms linear both;
    }
    
    // &.loading {

    //   &::before {
    //     @include ball;
    //     border: none;
    //     animation-delay: .15s;
    //   }

    //   & span {
    //     display: block;
    //     font-size: 0;
    //     width: 20px;
    //     height: 10px;
    //     position: relative;

    //     &::before {
    //       @include ball;
    //       margin-left: -7px;
    //     }

    //     &::after {
    //       @include ball;
    //       margin-left: 7px;
    //       animation-delay: .3s;
    //     }
    //   }
    // }
    
  }
}
</style>
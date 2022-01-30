<template>
  <div class="modal-overlay">
    <div class="modal">

        <!--div class="close" @click="handleClose()">
            <img class="close-img" src="~/assets/close-button.svg" alt="" />
        </div-->

      <!--img class="check" src="~/assets/check-icon.png" alt="" /-->
        <div v-if="!isSubmitted">
            <h6>Register for beta</h6>
            <form @submit.prevent="handleSubmit">
                <p>
                    Please fill all fields below
                </p>
                <div class="field">
                    <div class="label">First name</div>
                    <input type="text" name="firstname" v-model="form.firstname"/>
                </div>
                <div class="field">
                    <div class="label">Last name</div>
                    <input type="text" name="lastname" v-model="form.lastname"/>
                </div>
                <div class="field">
                    <div class="label">Email</div>
                    <input type="email" name="email" v-model="form.email"/>
                </div>
                <div class="field">
                    <div class="label">Company URL</div>
                    <input type="text" name="url" v-model="form.url"/>
                </div>
                <input class="submit" type="submit"/>
            </form>
        </div>
        <div v-if="isSubmitted" class="frame">
            <div class="content">
                <h6>Thank you for contacting us. We will reach out to you in a couple of days.</h6>
                <div class="submit" @click="handleClose()">Close</div>
            </div>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
    props: ['formId'],
    data() {
      return {
        isSubmitted: false,
        form: {
          firstname: "",
          lastname: "",
          email: "",
          url: "",
        },
      };
    },
    methods: {
      handleSubmit: async function() {
        const uuid = "d09fbd61d20c42de9023c7a8f2b0154e";
        let form_id = "default_form";
        if (this.formId && this.formId !== "") {
            form_id = this.formId;
        }
        const callback = this.handleSubmitEnd;
        this.$dialogityFormsSubmit(uuid, form_id, this.form, function(){ 
            /* do cleanup, show message, hide form */ 
            callback();
            //this.$emit('close-modal');
        });
      },
      handleSubmitEnd: function() {
        this.isSubmitted = true;
      },
      handleClose: function() {
        this.isSubmitted = false;
        this.$emit('close-modal');
      }
    }
    
}
</script>

<style scoped lang="scss">

.modal {
  
    background-color: white;
    //min-height: 25vh;
    max-height: 90vh;
    width: 100%;
    padding: 2rem;
    position: relative;
    border-radius: 2rem;
    border: 2px solid #000000;
    box-shadow: 1rem 1rem 4px 0px rgba(0,0,0,0.72);

    // display: flex;
    // justify-content: center;
    // align-items: center;

    form {
        position: relative;
        .field {
            margin-top: 0.5rem;
            width: 100%;
            .label {
                width: 100%;
                margin-bottom: 0.2rem;
            }
            input {
                width: calc(100% - 8px);
                line-height: 1.5em;
            }
        }
        
    }

    .submit {
        margin-top: 2rem;
        margin-bottom: 0.5rem;
        width: calc(100%);
        position: relative;
        
        padding: 0.5rem;
        border: 1px solid black;
        text-align: center;

        cursor: pointer;

        background-color: rgba(0, 0, 0, 0.7);
        color: white;
    }    

    .submit:hover {
        background-color: transparent;
        color: black;
    }

    .frame {
        // display: flex;
        // justify-content: center;
        // align-items: center;
    }
}
.close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
}

.close-img {
  width: 25px;
}


h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

// button {
//   background-color: #ac003e;
//   width: 150px;
//   height: 40px;
//   color: white;
//   font-size: 14px;
//   border-radius: 16px;
//   margin-top: 50px;
// }

</style>
<template>
  <div>
    <div>
      <v-alert color="#36bd90" dark v-if="errorMsg">
        {{ errorMsg }}
      </v-alert>
      <h2>
        <center>
          <v-col cols="12" sm="6" md="6">
            <v-text-field height="10px" outlined v-model="emailEntered">
            </v-text-field>
          </v-col>
        </center>
      </h2>
      <div>
        <v-btn
          color="#36bd90"
          v-if="!this.adminValidation"
          class="ma-2"
          @click="checkEmail()"
        >
          Check Email
        </v-btn>
      </div>
      <GoogleLoginButton
        v-if="this.adminValidation"
        class="ma-2"
        :email="emailEntered"
        buttonLabel="Admin Google Sign Up"
      />
    </div>
  </div>
</template>

<script>
import store from "@/store";
import GoogleLoginButton from "@/components/Login/GoogleLoginButton";
export default {
  name: "AdminLoginForm",
  components: {
    GoogleLoginButton
  },
  data() {
    return {
      errorMsg: null,
      emailEntered: null
    };
  },
  computed: {
    adminValidation() {
      return store.state.adminValidation;
    },
    user() {
      return store.state.user;
    }
  },
  methods: {
    async checkEmail() {
      await store.dispatch("validateAdmin", this.emailEntered);
      if (this.emailEntered != null && this.emailEntered != "") {
        if (!this.adminValidation) {
          this.errorMsg =
            "You can only proceed with admin account creation when it is approved!";
        }
      } else {
        this.errorMsg = "Please enter an email";
      }
    }
  }
};
</script>

<style scoped>
button {
  margin-top: 10px;
}
v-text-field {
  width: 100;
  margin-bottom: 30px;
}
</style>

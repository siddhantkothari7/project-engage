<template>
  <v-layout justify-center pa-5>
    <v-flex xs12 sm12 md12>
      <v-card>
        <v-card-text>
          <v-form ref="form" v-model="valid">
            <v-combobox
              v-model="to"
              :rules="emailRules"
              :return-object="false"
              label="To"
              chips
              deletable-chips
              item-value="email"
              multiple
              required
            >
            </v-combobox>
            <v-combobox
              v-model="cc"
              :rules="ccRules"
              :return-object="false"
              label="Cc"
              chips
              deletable-chips
              item-value="email"
              multiple
            >
            </v-combobox>
            <v-combobox
              v-model="bcc"
              :rules="ccRules"
              :return-object="false"
              label="Bcc"
              chips
              item-value="email"
              multiple
            >
            </v-combobox>
            <v-text-field
              v-model="subject"
              :rules="notEmptyRules"
              label="Subject"
              required
            ></v-text-field>
            <v-textarea
              v-model="message"
              :rules="notEmptyRules"
              label="Message"
              auto-grow
              required
            ></v-textarea>
            <v-btn :disabled="!valid" @click="send">Send</v-btn>
            <v-overlay v-if="dialog" absolute color="#036358">
              <v-text v-if="success">Email Sent Successfully!</v-text>
              <v-text v-else-if="fail">Unable To Send Email</v-text>
              <div v-else class="text-center">
                Sending Email ...
                <v-progress-circular
                  indeterminate
                  color="primary"
                ></v-progress-circular>
              </div>
            </v-overlay>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { functions } from "../firebase/init";
import "@firebase/functions";
export default {
  name: "EmailUI",
  data() {
    return {
      ccRules: [
        v => {
          if (v == null) {
            return true;
          } else {
            return (
              /^[\W]*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,4}[\W]*,{1}[\W]*)*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,4})[\W]*$/.test(
                v
              ) || "E-mail must be valid"
            );
          }
        }
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v =>
          /^[\W]*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,4}[\W]*,{1}[\W]*)*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,4})[\W]*$/.test(
            v
          ) || "E-mail must be valid"
      ],
      notEmptyRules: [v => !!v || "Field is required"],
      success: false,
      toEmail: [],
      fail: false,
      dialog: false,
      valid: false,
      to: null,
      cc: null,
      bcc: null,
      subject: null,
      message: null
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    async send() {
      if (this.$refs.form.validate()) {
        let toList = [];
        let ccList = [];
        let bccList = [];
        this.formatList(this.to, toList);
        this.formatList(this.cc, ccList);
        this.formatList(this.bcc, bccList);

        let message = {
          to: toList,
          subject: this.subject,
          message: this.message,
          cc: ccList,
          bcc: bccList
        };

        this.dialog = true;

        await functions
          .httpsCallable("sendEmail")(message)
          .then(result => {
            console.log(result);
            this.clear();
            this.success = true;
          })
          .catch(error => {
            console.log(error);
            this.fail = true;
          });
        setTimeout(() => {
          this.dialog = false;
        }, 1000);
      }
    },
    formatList(recipient, recipientList) {
      if (recipient) {
        for (let i = 0; i < recipient.length; i++) {
          recipientList.push("<" + this.to[i] + ">");
        }
      }
    },
    clear() {
      this.to = null;
      this.cc = null;
      this.bcc = null;
      this.message = null;
      this.subject = null;
    }
  }
};
</script>

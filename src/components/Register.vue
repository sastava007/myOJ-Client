<template>
  <v-dialog
    v-model="dialog"
    max-width="1000px"
    overlay-color="#707070"
    overlay-opacity="0.8"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        class="ma-4"
        elevation="0"
        large
        color="rgb(44, 75, 255)"
        v-on="on"
        ><span class="white--text">Register</span></v-btn
      >
    </template>
    <v-card>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="5" class="register" style="max-height:642px;">
              <v-container>
                <span class="headline">Register</span>
                <div class="register-details">
                  <span class="sub-headline">Name</span>
                  <v-text-field
                    placeholder="Your Name"
                    prepend-inner-icon="mdi-account-outline"
                    outlined
                    required
                  >
                  </v-text-field>

                  <span class="sub-headline">Email</span>
                  <v-text-field
                    placeholder="Your Email"
                    prepend-inner-icon="mdi-account-outline"
                    outlined
                    required
                  >
                  </v-text-field>

                  <span class="sub-headline">Password</span>
                  <v-text-field
                    placeholder="Your Password"
                    type="password"
                    prepend-inner-icon="mdi-lock-outline"
                    outlined
                    required
                  ></v-text-field>

                  <span class="sub-headline">Role</span>
                  <v-row align="center">
                    <v-col class="">
                        <v-select
                        :items="items"
                        label="Select"
                        outlined
                        ></v-select>
                    </v-col>
                  </v-row>
                </div>

                <v-btn
                  block
                  color="rgb(44, 75, 255)"
                  class="reg-button"
                  @click="registerViaEmail"
                  >Register</v-btn
                >
              </v-container>
              <center>
                <span class="reg-footer"
                  >Have an account?
                  <span style="color:#de373a; font-weight:bold;"
                    >Sign In</span
                  ></span
                >
              </center>
            </v-col>

            <v-col cols="7" class="image" style="margin-top: 0vw;">
              <v-img src="../assets/side-bg-1.jpg" height = 85%></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Register",
  data: () => ({
      items: ['Instructor', 'Student'],
      dialog: ''
    }),
  methods: {
    registerViaEmail() {},
  },
};
</script>

<style scoped>
.headline {
  font-size: 40px;
  color: black;
  line-height: 48px;
}
.sub-headline {
  font-size: 16px;
  line-height: 19px;
  color: black;
}
.register-details {
  margin-top: 2vw;
}
.reg-button {
  color: #ffffff !important;
}
.reg-footer {
  color: black;
  padding-top: 5vw;
}
</style>

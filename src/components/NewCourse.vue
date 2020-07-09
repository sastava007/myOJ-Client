<template>
    <v-dialog
    v-model="dialog"
    max-width="650px"
    overlay-color="#707070"
    overlay-opacity="0.8"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        elevation="0"
        large
        color="white"
        v-on="on"
        ><span class="black--text">New Course</span></v-btn
      >
    </template>
    <v-card>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="7" class="register" style="max-height:642px;">
              <v-container>
                <span class="headline">New Course</span>
                <div class="register-details">
                  <v-text-field
                    placeholder="Course Name"
                    prepend-inner-icon="mdi-account-outline"
                    outlined
                    required
                  >
                  </v-text-field>

                  <span class="sub-headline">Batch</span>
                  <v-text-field
                    placeholder="Batch Name"
                    prepend-inner-icon="mdi-account-outline"
                    outlined
                    required
                  >
                  </v-text-field>

                </div>

                <v-btn
                  block
                  color="rgb(44, 75, 255)"
                  class="reg-button"
                  @click="createNewCourse"
                  >Create</v-btn
                >
              </v-container>
            </v-col>

            <v-col cols="5" class="image">
              <v-img src="../assets/new-course2.png"></v-img>
              <span class="justify-center" style="font-family: Lato, sans-serif; font-weight: bold; margin-top: 1vw;">
               Create a new course to get started. Your students will be able to enroll into this course using the invite code.
              </span>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
    name: 'NewCourse',
    data: () => ({
      dialog: ''
    }),
  methods: {
    createNewCourse() {},
  },
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap");
.reg-button{
  color: white;
}
</style>
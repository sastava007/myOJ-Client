<template>
  <v-container>
    <v-row>
      <v-col cols="7" style="margin-top: 5vw;">
        <div class="text-justify-center" style="position: fixed; left: 7vw;">
          <h1
            style="font-family: 'Poppins', sans-serif; font-size: 3.2rem; line-height: 1.1;"
          >
            Simplifying Teaching <br />
            Experience
          </h1>
          <p
            style="font-family: 'Roboto'; font-weight: bold; font-size: 1.5rem;"
          >
            The future of automated grading is here. Offer autograded<br />
            programming assignments to your students.
          </p>
          <p style="font-size: 1rem;">
            Give your students instant feedback on their code by using our
            in-browser rich IDE.
          </p>

          <v-row>
            <v-btn rounded class="ma-4" elevation="0" x-large color="rgb(44, 75, 255)"
              ><span class="white--text">Read Docs</span></v-btn
            >
            <v-btn rounded class="ma-4" outlined x-large color="rgb(44, 75, 255)"
              >Sign Up</v-btn
            >
          </v-row>
        </div>
      </v-col>

      <v-col cols="5" style="margin-top: 5vw;">
        <v-img
          src="../assets/bg.png"
          style="width: 24vw; position: absolute; right: 7vw;"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@800;900&display=swap");
</style>

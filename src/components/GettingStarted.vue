<template>
  <v-container>
    <h1 class="mb-7" style="font-family: Lato,sans-serif;">Getting Started</h1>

    <v-row class="mb-3">
      <v-avatar class="pa-4 mb-1 mr-2" color="#d6daff" size="10">
        <span style="font-weight: bold;">1</span>
      </v-avatar>
      <v-col>
        <span class="heading">See how questions work</span>
        <br />
        <span class="sub_heading">
          Take a look at the questions under the Sample Materials section. These
          questions demonstrate how our various grading types can be used.
        </span>
      </v-col>
    </v-row>
    <v-divider inset="75px"> </v-divider>

    <v-row class="mb-3">
      <v-avatar class="pa-4 mb-1 mr-2" color="#d6daff" size="10">
        <span style="font-weight: bold;">2</span>
      </v-avatar>
      <v-col>
        <span class="heading">Try out the student submission view</span>
        <br />
        <span class="sub_heading">
          Students make submissions through our fully-loaded IDE. Try out the
          View as Student for the question below to see how students make their
          submissions.
        </span>
      </v-col>
    </v-row>
    <v-divider inset="75px"> </v-divider>

    <v-row class="mb-3">
      <v-avatar class="pa-4 mb-1 mr-2" color="#d6daff" size="10">
        <span style="font-weight: bold;">3</span>
      </v-avatar>
      <v-col>
        <span class="heading">Create a question</span>
        <br />
        <span class="sub_heading">
          Migrate your existing questions and set them up to be graded
          automatically, or create new material under Questions.
        </span>
      </v-col>
    </v-row>
    <v-divider inset="75px"> </v-divider>

    <v-row class="mb-3">
      <v-avatar class="pa-4 mb-1 mr-2" color="#d6daff" size="10">
        <span style="font-weight: bold;">4</span>
      </v-avatar>
      <v-col>
        <span class="heading">Create a course</span>
        <br />
        <span class="sub_heading">
          Start setting up your course in AutoGradr by creating your course. You
          can share an invite code with students, and add instructors to your
          course.
        </span>
      </v-col>
    </v-row>
    <v-divider inset="75px"> </v-divider>

    <v-row class="mb-3">
      <v-avatar class="pa-4 mb-1 mr-2" color="#d6daff" size="10">
        <span style="font-weight: bold;">5</span>
      </v-avatar>
      <v-col>
        <span class="heading">Create an assignment</span>
        <br />
        <span class="sub_heading">
          Create an assignment for your students so they can view and make
          attempts. You will be able to view and download their submissions'
          results.
        </span>
      </v-col>
    </v-row>
    <v-divider inset="75px"> </v-divider>

    <v-row class="mb-3">
      <v-avatar class="pa-4 mb-1 mr-2" color="#d6daff" size="10">
        <span style="font-weight: bold;">6</span>
      </v-avatar>
      <v-col>
        <span class="heading">Invite your students</span>
        <br />
        <span class="sub_heading">
          Visit the course manage page and share the invite code with your
          students. Once they signup on myOJ, they will be able to use the
          invite to enroll in your course.
        </span>
      </v-col>
    </v-row>
    <v-divider inset="75px"> </v-divider>

    <v-row class="mb-3">
      <v-avatar class="pa-4 mb-1 mr-2" color="#d6daff" size="10">
        <span style="font-weight: bold;">7</span>
      </v-avatar>
      <v-col>
        <span class="heading">Plagiarism Detection</span>
        <br />
        <span class="sub_heading">
          Maintain academic integrity by comparing assessments with each other
          and with past submissions. Uses Stanford's Moss Cheat Detector.
        </span>
      </v-col>
    </v-row>
    <v-divider inset="75px"> </v-divider>
  </v-container>
</template>

<script>
export default {
  name: "GettingStarted",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap");
.heading {
  font-family: Lato, sans-serif;
  color: black;
  font-size: 1.2rem;
}
.sub_heading {
  font-family: Lato, sans-serif;
  color: #58616b;
  font-size: 1.3rem;
}
</style>

<template>
  <v-row>
    <v-col cols="8">
      <h1 class="mb-7" style="font-family: Lato,sans-serif;">
        Data Structrures
      </h1>
      <span
        class="mt-2"
        style="font-family: Lato,sans-serif; font-size: 1.2rem; font-weight: bold;"
      >
        Assignments
      </span>
      <v-item-group v-for="(asgn, i) in assignments" :key="i">
        <v-card dense class="mt-4 mb-7" max-width="100%" outlined elevation="1">
          <v-icon class="ml-2 mt-2" color="#0e1352"
            >mdi-chevron-double-right</v-icon
          >
          <v-card-title> {{ asgn }} </v-card-title>
          <v-row class="mx-auto">
            <span
              ><v-icon class="mx-4">mdi-calendar-clock</v-icon> 12th July, 11:59
              PM</span
            >
            <v-spacer></v-spacer>
            <v-btn class="mb-4 mr-4" outlined color="#0631ca">Gradecard</v-btn>
          </v-row>
          <v-row>
            <span class="mx-2 mb-3" v-for="(ques, i) in questions" :key="i">
              <v-chip class="mx-3" color="#12196d" text-color="white" link>
                <v-avatar left>
                  <v-icon>mdi-checkbox-marked-circle-outline</v-icon>
                </v-avatar>
                {{ ques }}
              </v-chip>
            </span>
          </v-row>
        </v-card>
      </v-item-group>
    </v-col>

    <v-col cols="4">
      <h1
        class="text-center my-12 mb-0"
        style="font-family: Lato,sans-serif; font-weight: 700;"
      >
        Create Assignment
      </h1>
      <div class="mx-auto" style="max-width: 85%;">
        <v-img src="../assets/new-course1.png"></v-img>
        <span
          class="text-justify"
          style="font-family: Lato, sans-serif; line-height: 22px;"
        >
          Assign questions from the existing library to this course and manage
          due dates, plan ahead to make assignments available.
        </span>
        <center>
          <v-btn rounded class="my-8" elevation="0" large color="#12196d">
            <span class="mx-auto py-auto white--text">Create Assignment</span>
          </v-btn>
        </center>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "NewAssignment",
  data() {
    return {
      assignments: ["DS101", "DS242", "DS612"],
      questions: [
        "2 Sum",
        "Binary Tree Vertical Order",
        "Hamming Distance",
        "Ugly Numbers",
      ],
    };
  },
};
</script>

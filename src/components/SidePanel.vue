<template>
  <v-container>
    <v-navigation-drawer v-model="drawer" color="#0e1352" absolute dark>
      <v-list nav class="py-0">
        <v-list-item two-line :class="miniVariant && 'px-0'">
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ name }}</v-list-item-title>
            <v-list-item-subtitle>{{ role }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
        link
        >
          <v-list-item-content>
            <v-list-item-title>Getting Started</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-group value="true">
          <template v-slot:activator>
            <v-list-item-title>My Courses</v-list-item-title>
          </template>
          <v-list-group
            no-action
            sub-group
            value="true"
            v-for="(course, i) in courses"
            :key="i"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ course.key }}</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="(asgn, j) in assignments(course.key)"
              :key="j"
              link
            >
              <v-list-item-title v-text="asgn"></v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list-group>

        <v-divider></v-divider>
        <v-list-item
        link
        >
          <v-list-item-content>
            <v-list-item-title> Resources</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>mdi-database-edit</v-icon>
          </v-list-item-icon>
        </v-list-item>

      </v-list>

      <template v-slot:append>
        <div class="pa-2 pb-4">
          <v-btn block color="white"
            ><span class="black--text">Logout</span></v-btn
          >
        </div>
      </template>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      courses: [
        { key: "Data Structure", values: ["DS101", "DS242"] },
        { key: "Algorithm", values: ["DA175"] },
      ],
      name: "Shivansh Srivastava",
      role: "Instructor",
    };
  },
  methods: {
    assignments: function(key) {
      let assignments = this.courses.filter((course) => {
        return course.key === key;
      });
      console.log(key, assignments);
      return assignments[0].values;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap");
</style>

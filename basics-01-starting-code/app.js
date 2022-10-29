const app = Vue.createApp({
  data() {
    return {
      goalA: "Finish de course anf learn Vue!",
      goalB: "Master Vue and build amazing apps!",
      link: "https://www.vuejs.org"
    };
  },
  methods: {
    myGoal() {
      if (Math.random() < 0.5) {
        return this.goalA;
      } else {
        return this.goalB;
      }
    },
  },
});

app.mount("#user-goal");

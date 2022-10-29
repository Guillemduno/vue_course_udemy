const app = Vue.createApp({
  data() {
    return {
      myName: "Nadja",
      age: 12,
      imgSrc:
        "https://images.unsplash.com/photo-1606814893907-c2e42943c91f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    };
  },
  methods: {
    ageInFiveYears() {
      return this.age + 5;
    },
    favouriteNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");

Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
    },
  },
}).mount("#app");

// Vanilla Javascript
// const inputElement  = document.getElementById('goal');
// const button        = document.querySelector("button");
// const ulElement     = document.querySelector('ul');

// function addGoal()
// {
//    let inputValue       = inputElement.value;

//    if (inputValue !== "") {
//     const listElement    = document.createElement('li');
//     listElement.textContent = inputValue;
//     ulElement.append(listElement);
//     inputElement.value = "";
//    }
// }
// button.addEventListener('click', addGoal);s

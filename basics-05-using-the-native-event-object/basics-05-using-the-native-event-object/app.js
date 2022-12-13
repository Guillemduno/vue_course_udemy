const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName:'',
      fullName:''
    };
  },
  watch:{
    // name(value){
    //   if (value === "") {
    //     this.fullName = ""
    //   } else {
    //     this.fullName = value + " "+this.fullName;
    //   }
    // },
    // fullName(value){
    //   if (value === "") {
    //     this.fullName = ""
    //   } else {
    //     this.fullName = this.name + " "+ value;
    //   }
    // }
  },
  computed:{
    fullName(){
      console.log("Running again");
      if (this.name === "" || this.lastName === "") {
        return "";
      }else{
        return this.name + " "+this.lastName;
      }
    }
  },
  methods: {
    add(num) {
      console.log("button add pressed!")
      this.counter = this.counter + num;
    },
    reduce(num) {
      console.log("button reduce pressed!")
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      return this.name = "";
    }
  }
});

app.mount('#events');

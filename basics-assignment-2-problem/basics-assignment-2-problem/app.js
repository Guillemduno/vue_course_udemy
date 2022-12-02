
const app = Vue.createApp({
    data(){
        return{
            msg: "This is a message",
            name: "",
            inputName: "",
            inputFinalName: ""
        }
    },
    methods:{
        showAlert(){
            alert(this.msg);
        },
        getName(){
            return this.name = event.target.value;
        },
        getInputName(){
            return this.inputName = event.target.value;
        },
        getFinalName(){
            return this.inputFinalName = this.inputName;
        }
    }
});

app.mount('#assignment');
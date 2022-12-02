
const app = Vue.createApp({

    data(){
        return{
            msg: "This is a message",
        }
        
    },
    method:{
        showAlert(){
            alert(this.msg)
        },
    }

});

app.mount('#assignment');
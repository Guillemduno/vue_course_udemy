const app = Vue.createApp({
    data(){
        return{
            goalA: "Learn Vue 2!",
            goalB: "Master Vue 3!"
        }
    },
    methods: {
        myGoal(){
            if (Math.random() < 0.5) {
                return this.goalA; 
            }else{
                return this.goalB;
            }
            
        }
    }
        
});


app.mount('#user-goal');
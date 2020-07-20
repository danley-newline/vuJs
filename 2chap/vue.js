new Vue({
    el: "#app",
    data:{
        counter: 0,
        x:0,
        y: 0,
        name: 'Max'
    },
    methods:{
        increase: function(step, event){
            this.counter += step;
        },
        updateCor: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe: function(){
            alert("Alert !");
        }
}
});
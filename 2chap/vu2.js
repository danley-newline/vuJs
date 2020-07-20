new Vue ({
    el: "#app",
    data:{
        counter: 0,
        secondCounter: 0
    },
    computed:{
        output: function(){
            console.log('computed');
            return this.counter >= 5 ? "Greather 5" : "Smaller 5";
        }
    },
    watch:{
        counter: function(value){
            var vm = this;
            setTimeout(function() {
                vm.counter = 0;
            }, 5000);
        }
    },
    methods:{
        result(){
            console.log('methods');
            return this.counter >= 5 ? "Greather 5" : "Smaller 5";
        }

    }
});
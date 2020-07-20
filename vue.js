new Vue({
    el: "#app",
    data:{
        title: "bonjour les blues",
        link: "http://google.com",
    },
    methods:{

        changeTitle: function(event) {
            this.title = event.target.value;
        }, 
        
        
    }
}
);
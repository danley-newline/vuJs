new Vue({
    el: "#app", 
    data:{
        attachRed: false,
        poseyel: false,
        bluejam: false,
        color: 'green',
        width: 100,
        height: 100
    },
    computed:{
        myStyle: function(){
            return {
                backgroundColor: this.color,
                width: this.width + 'px',
                height: this.height + 'px',

            }
        }

    }
});
new Vue({
    el: "#app",
    data:{
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [],
        counter: 0,
        countHeal: 0,
        hideSpecial: false,
        hideSoin: false,
        reste: 3,
        soin: 3,

    },
    methods:{
        startGame: function(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function(){
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: "Player hits monster for" + damage,
            });
            if (this.checkWin()) {
                return;
            }

           this.monsterAttack();
        },
        specialAttack: function(){
            var damage =  this.calculateDamage(7, 18);
            this.monsterHealth -=damage;
            this.turns.unshift({
                isPlayer: true,
                text: "Player hits hard monster for" + damage,
            });
            if (this.checkWin()) {
                return;
            }

            this.reste = 2 - this.counter;
            if (this.counter == 1) {
                swal("1 attack special restante  !","", "info");
            }
            if (this.counter >= 2) {
                swal("Attention!", "Vous n'avez plus d'attack special!", "warning");
                this.hideSpecial = true;
            }

           this.monsterAttack(5, 12);
        },
        monsterAttack: function(min, max){
            var damage =  this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: "Monster hits player for" + damage,
            });
            this.checkWin();
        },
        heal: function(){
            if (this.playerHealth <= 90) {
                this.playerHealth += 12;
            }else{
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: "Player heals for 10"
            });

            this.soin = 2 - this.countHeal;
            if (this.countHeal >= 1) {
                swal("1 trousse de secour restante !","", "info");
            }
            if (this.countHeal >= 2) {
                swal("Attention!", "Vous n'avez plus de trousse!", "warning");
                this.hideSoin = true;
            }
            this.monsterAttack(3, 10);
        },
        giveUp: function(){
            this.gameIsRunning = false;
            this.playerHealth = playerHealth;
            this.monsterHealth = monsterHealth;
        },
        calculateDamage: function(min, max){
            return Math.max(Math.floor(Math.random() * max) +1,min);
        },
        checkWin: function(){
            if (this.monsterHealth <= 0) {
                
                if (confirm("Vous avez gagner recommencer ?"))
                 {
                    swal("Vous avez gagner ","", "success");
                    this.startGame();
                }else{
                    swal("Vous avez gagner ","", "success");
                    this.gameIsRunning = false;
                }
                return true;
            }else if (this.playerHealth <= 0) {
                
                if (confirm("Vous avez perdu recommencer !?")) {
                    swal("Vous avez Perdu !","", "error");
                    this.startGame();
                }else{
                    swal("Vous avez Perdu !","", "error");
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});
const user = {
    userName: "Sankalp",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName} welcome to the website`);
    }

}

user.welcomeMessage()
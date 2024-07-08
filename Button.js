function checkPswd() {
        var confirmWord = "Fart";
        var word = document.getElementById("pswd").value;
        if (word == confirmPassword) {
             window.location.assign("Home.html")
        }
        else{
            alert("Passwords do not match.");
        }
    }

function validate(){
    var x = document.getElementById("name").value;
    var y = document.getElementById("age").value;
    var z = document.getElementById("email").value;
    if (x == ""){
    alert("Name must be filled")
    };
    if(x.length < 5){
        alert("Name must be at least 5 letters")
    };
    if(y < 18){
        alert("You must be 18 years old")
    };
    
};
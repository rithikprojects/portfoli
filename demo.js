function sends(){
    var x = document.getElementById("wrt").value
    var y = document.getElementById("msg").value

    if (x == ""){
        alert("Enter Your Name and Mobile number ");
        return false;
    }

    if (y == ""){
        alert("Enter any text message")
    }

    else{
        alert("message sent successfully")
    }
}

function goproject1(){
    window.location.href="http://127.0.0.1:5500/e-com%20ss.html";
}

function goproject2(){
    window.location.href="http://127.0.0.1:5500/net-flix.html";
}
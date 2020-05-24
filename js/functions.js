var password = "12345";
var userName = "admin";

function OpenHomePage(){
    if(document.getElementById("password").value == password && document.getElementById("userName").value==userName)
    {
        window.location = "./HomePage.html";
		
    }
}


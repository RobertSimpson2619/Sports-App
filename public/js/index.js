// Get the modal
var myUser = "";



var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myOtherModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myOtherBtn");

// Get the <span> element that closes the modal
var span = document.getElementById("firstClose");
var span2 = document.getElementById("secondClose");

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
   
    modal.style.display = "none";
}
span2.onclick = function() {
  console.log("Stuff"); 
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        modal2.style.display = "none";
    }
}





// need to grab the users data when they try to log in or when they sign-up and push / check that via the database. 
//If it returns a result, take the user to the homepage. Otherwise tell the user there password or username was invalid
$("#loginSubmit").on("click",function(){

	event.preventDefault();
	
	console.log("User attemping to sign-in");
	var userEmail = $("#email").val().trim();
	var userPassword = $("#pwd").val().trim();
	

	checkUser(userEmail,userPassword);

	
});

$("#signSubmit").on("click",function(){

	event.preventDefault();
	
	console.log("New User signing up");
	var userEmail = $("#newEmail").val().trim();
	var userPassword = $("#newPwd").val().trim();
	var confirmedPassword = $("#confirmedPwd").val().trim();
	var userFirstname = $("#firstName").val().trim();
	var userLastname = $("#lastName").val().trim();

	

	insertUser(userEmail,userPassword,confirmedPassword,userFirstname,userLastname);

})

 function insertUser(userEmail,userPwd,confirmedPwd,userFirstname,userLastname) {
    
    var user = {
      userEmail: userEmail,
      userPwd: userPwd,
      userFirstname: userFirstname,
      userLastname: userLastname

    };



    if(user.userPwd === confirmedPwd){

    $.post("/api/users/", user, loadNewPage(user.userEmail));

	}else{
		//let the user know the passwords don't match
    $("p").text("Error: Passwords did not match!");
    console.log("did this happen");
	}
   
  }
  function checkUser(userEmail,userPwd){
    $.get("/api/users", function(data) {
      
      for(var i = 0; i < data.length ; i++){
      	if(userEmail === data[i].userEmail){
      		if(userPwd === data[i].userPwd){
            myUser = userEmail;
      			loadNewPage(userEmail);

      		}else{
      			//let the user know the password was invalid
            $("p").text("Error: Invalid Password");
      		}
      	}else{
      		$("p").text("Error: No username matching this email was found!");
      	}
      }
    });

  }

  function loadNewPage(user){

    $.get("api/users/" + user, function(data){

      console.log(data);

      localStorage.setItem('myUser', data.id);
      localStorage.setItem('myName', data.userFirstname);

    });

    

    // $.get("/api/users/"+ user)
  	// this would load chatroom.html
     window.location = "http://localhost:8080/chatroom";
    
    
  	console.log("new page loaded!");
  };
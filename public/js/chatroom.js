var navigation = "none";



var cat = localStorage.getItem("myUser");
var username = localStorage.getItem("myName");
$("#username").text(username);
console.log(cat);
console.log(username);

//navigation button functions
$(function () {
  $('#bikes').on('click', function () {
    navigation = "biking";
    checkSpecificPosts(navigation);
    $('#navigation>p').remove()

    $('<p>Biking</p>').appendTo('#navigation');

    $('<p style = "color:white;">Biking</p>').appendTo('#navigation');

  });
});

$(function () {
  $('#runs').on('click', function () {
    navigation = "running";
    checkSpecificPosts(navigation);
    $('#navigation>p').remove()

    $('<p>Running</p>').appendTo('#navigation');
  });
});


 
$("#homeBtn").on("click",function(){
  $('#navigation>p').remove()
  console.log("Test");
  CheckPosts();
  
})


$("#username").val(username);



//Page direction buttons

$("#infoBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#information").offset().top},
        'slow');
});
$("#chatBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#chatroom").offset().top},
        'slow');
});
$("#mapBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#map").offset().top},
        'slow');
});

//===============
 $.get("/api/routes", function(data) {
     console.log(data);
     if (data != null){
         for(var i = 0; i< data.length; i++){
             var well = $("<div>");
              well.addClass("well");
              well.append("<div class='row'>"+
                          "<div class='col-xs-3' style = 'text-align:center;'>"+
                          "<p><strong>"+ data[i].routeName+"</strong>"+
                          "<p><strong>"+ data[i].routeDistance+"</strong>"+
                          "<p><strong>"+ data[i].userLocation+"</strong></div>"+
                          "<div class='col-xs-6' style = 'text-align:center;'>IMAGE</div></div>"
                         );
             
            $("#theRoutes").append(well);
         }
     }
  });
//==================

//chatroom submit clicked


$("#chatSubmit").on("click",function(){

  event.preventDefault();
  console.log("New Chat message");

  username = $("#username").val().trim();
  var userMessage = $("#message").val().trim();
  var groupName = $("#group").val().trim();

  insertPost(username,userMessage,groupName);
});

$("#chatSubmit").on("click",function(){

  event.preventDefault();
  console.log("New Chat message");

  var userName = $("#username").val().trim();
  var userMessage = $("#message").val().trim();
  var groupName = $("#group").val().trim();

  insertPost(userName,userMessage,groupName);
});

function insertPost(userName, userMessage, groupName) {
    //working
    var chat = {
      title: userName,
      body: userMessage,
      group: groupName
	};
    $.post("/api/posts/", chat, checkPosts);
}


function checkPosts(){

	$.get("/api/posts", function(data) {
      
      appendData(data);
    });
}

function checkSpecificPosts(nav){
  $.get("/api/posts/group/" + nav, function(data){
    appendData(data);
  })

}

function appendData(data){
	$("#chatroomData").empty();

	if (data.length !== 0) {
        var roof =0;
        if(data.length<10){
            roof = data.length;
    }else{
        roof = 10;
    }
    for (var i = 0; i < roof; i++) {



      var row = $("<div>");
      row.addClass("panel panel-default");

      var heading = $("<div>");
      heading.addClass("panel-heading");
      heading.append("<h2>" + data[i].title + " sent " + moment(data[i].created_at).format("h:mma on dddd") + " to " + data[i].group + "<h2>")
      row.append(heading);

      var body = $("<div>");
      body.addClass("panel-body");
      body.append("<p>" + data[i].body + "</p>")
      row.append(body);


      $("#chatroomData").prepend(row);

    }

  }
}




checkPosts();

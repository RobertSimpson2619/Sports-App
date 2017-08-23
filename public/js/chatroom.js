var navigation = "none";


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
//     console.log(data);
     if (data != null){
         for(var i = 0; i< data.length; i++){
             var well = $("<div>");
              well.addClass("well");
              well.append("<div class='row'>"+
                          "<div class='col-xs-3' style = 'text-align:center;'>"+
                          "<p><strong>"+ data[i].routeName+"</strong>"+
                          "<p><strong>"+ data[i].routeDistance+"</strong>"+
                          "<p><strong>"+ data[i].routeLocation+"</strong></div>"+
                          "<div class='col-xs-6' style = 'text-align:center;'><img class='images' data-toggle='modal' data-target='#exampleModalLong' id='"+data[i].routeImageLg+"' src="+data[i].routeImageSm+" style='height: 70%; width: 70%; object-fit: contain'></div>"+
                          "<div class='col-xs-3' style = 'text-align:center;'><button type='submit' class='btn btn-default' id ='routeSubmit'>Add this route</button></div></div>"
                         );
             
            $("#theRoutes").append(well);
         }
     }
  });

var cat = localStorage.getItem("myUser");
console.log("CAT: " + cat); 

function checkUserRoutes(cat){

	$.get("/api/userRoutes/"+ cat , function(data) {
      console.log("hello");
      userRoutes(data);
    });
}

function userRoutes(data){
    if (data != null){
         for(var i = 0; i< data.length; i++){
             console.log(data[i]);
             var well = $("<div>");
              well.addClass("well");
              well.append("<div class='row'>"+
                          "<div class='col-xs-3' style = 'text-align:center;'>"+
                          "<p><strong>"+ data[i].routeName+"</strong>"+
                          "<p><strong>"+ data[i].routeDistance+"</strong>"+
                          "<p><strong>"+ data[i].routeLocation+"</strong></div>"+
                          "<div class='col-xs-6' style = 'text-align:center;'><img class='images' data-toggle='modal' data-target='#exampleModalLong' id='"+data[i].routeImageLg+"' src="+data[i].routeImageSm+" style='height: 50%; width: 50%; object-fit: contain'></div>"+
                          "<div class='col-xs-3' style = 'text-align:center;'><button type='submit' class='btn btn-default' id ='routeSubmit'>Delete route</button></div></div>"
                         );
             
            $(".myRouteBody").append(well);
         }
     }else{
         $(".myRouteBody").append("<p>You have not chosen any route</p>");
     }
}

$(document).on("click", ".images", function(event){
    var img = $("<div>");
    img.append("<img src='"+this.id+"'style='height: 100%; width: 100%; object-fit: contain'>");
    $(".modal-body").append(img);
});
$(document).on("click", ".close", function(event){
    $(".modal-body").empty();
});


//==================

$("#chatSubmit").on("click",function(){

  event.preventDefault();
  console.log("New Chat message");

  var userName = $("#username").val().trim();
  var userMessage = $("#message").val().trim();
  var groupName = $("#group").val().trim();

  insertPost(userName,userMessage,groupName);
//    clearFields();
});

//function clearFields(){
//    $("#username").val()="";
//    $("#message").val()="";
//    
//}

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
      heading.append("<h4><strong>" + data[i].title + "</strong> sent " + moment(data[i].created_at).format("h:mma on dddd") + " to <strong>" + data[i].group + "</strong></h4>")
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
checkUserRoutes(cat);
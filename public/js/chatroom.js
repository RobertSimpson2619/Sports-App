
//navigation button functions
$(function () {
  $('#bikes').on('click', function () {
    $('#navigation>p').remove()
    $('<p>Biking</p>').appendTo('#navigation');
  });
});

$(function () {
  $('#runs').on('click', function () {
    $('#navigation>p').remove()
    $('<p>Running</p>').appendTo('#navigation');
  });
});


$("#bikes").click(function() {
    $('html,body').animate({
        scrollTop: $("#map").offset().top},
        'slow');
});


$("#runs").click(function() {
    $('html,body').animate({
        scrollTop: $("#map").offset().top},
        'slow');
});




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



//chatroom submit clicked
$("#chatSubmit").on("click",function(){

	event.preventDefault();
	console.log("New Chat message");

	var userName = $("#username").val().trim();
	var userMessage = $("#message").val().trim();
	var groupName = $("#group").val().trim();

	insertPost(userName,userMessage,groupName);
})


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

function appendData(data){
	$("#chatroomData").empty();

	if (data.length !== 0) {

    for (var i = 0; i < 10; i++) {

      var row = $("<div>");
      row.addClass("message");

      row.append("<p>" + data[i].title + " sent.. </p>");
      row.append("<p> to.. " +data[i].group + "</p>");
      row.append("<p>" + data[i].body + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $("#chatroomData").prepend(row);

    }

  }
}


checkPosts();

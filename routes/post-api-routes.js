// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Chatroom model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts for a sport
  app.get("/api/posts/", function(req, res) {
    db.Chatrooms.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });



  // Get route for returning posts of a specific group
  app.get("/api/posts/group/:group", function(req, res) {
    db.Chatrooms.findAll({
      where: {
        group: req.params.group
      }
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });


  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Chatrooms.create({
      title: req.body.title,
      body: req.body.body,
      group: req.body.group
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });


  // DELETE route for deleting posts   * ADD IN USER VALIDATION
  app.delete("/api/posts/:id", function(req, res) {
    db.Chatrooms.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // PUT route for updating/changing posts   * ADD IN USER VALIDATION
  app.put("/api/posts", function(req, res) {
    db.Chatrooms.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });
};

var db = require("../models");

module.exports = function(app) {
    
    
app.get("/api/users/", function(req,res){
    db.Users.findAll({})
    .then(function(dbPost){
      res.json(dbPost);
    })
  })
    
app.get("/api/users/:email", function(req, res) {
    db.Users.findOne({
      where: {
        userEmail: req.params.email
      }
    })
    .then(function(dbPost) {
      
      res.json(dbPost)
    });
  });  
    
app.post("/api/users",function(req,res){
    console.log(req.body);
    db.Users.create({
      userEmail: req.body.userEmail,
      userPwd: req.body.userPwd,
      userFirstname: req.body.userFirstname,
      userLastname: req.body.userLastname 
    })
    .then(function(dbPost){
      res.json(dbPost);
    })
  })
    

app.get("/api/routes", function(req, res) {
    db.Routes.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  }); 
  
app.post("/api/addRoute", function(req, res) {
    console.log(req.body);
   // console.log("USER ROUTE: " + db.UserRoutes); 
    db.UserRoutes.create({
        RouteId: req.body.routeId,
        UserId: req.body.userId
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
   
app.get("/api/userRoutes/:id", function(req, res) {
    
    console.log(req.params.id);
db.Routes.findAll({
  include: [{
    model: db.Users,
    through: {
      where: {UserId: req.params.id}
    }
  }]
}).then(function(dbPost) {
    console.log("yes");
      res.json(dbPost);
    });
    
}); 
    
};
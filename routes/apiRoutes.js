const router = require("express").Router();
const db = require("../connection/connection.js");
const mongojs = require("mongojs");

router.get("/api/all", function(req, res) {
  db.todos.find({}, function(error, docs) {
    if (error) {
      console.log(error);
    } else {
      // Otherwise, send json of the notes back to user
      // This will fire off the success function of the ajax request
      res.json(docs);
    }
  });
});

router.post("/api/todo", function(req, res) {
  console.log(req.body);
  db.todos.insert(req.body, function(error, docs) {
    if (error) {
      console.log(error);
    } else {
      console.log(docs);
      res.json(docs);
    }
  });
});

router.delete("/api/todo/delete/:id", function(req, res) {
  // Remove a note using the objectID
  db.todos.remove(
    {
      _id: mongojs.ObjectID(req.params.id)
    },
    function(error, docs) {
      if (error) {
        console.log(error);
      } else {
        res.json(docs);
      }
    }
  );
});

module.exports = router;

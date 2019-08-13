const router = require("express").Router();
// const booksController = require("../../controllers/booksController");
const db = require("../models");

// Matches with "/api/books"
router.route("/books")
//   .get(booksController.findAll)
  .post(function(req, res){
       db.Book.create({
           id: req.body.id,
           title: req.body.volumeInfo.title,
           item: req.body
      
       }).then(function(data){
           res.json(data)
       })
       
  })
  
  .get(function(req,res){
     db.Book.find({}).then(function(data){
         res.json(data);
     })
  })

router.route("/books/:id")
  .delete(function(req,res) {
      db.Book.remove({id:req.params.id}).then(function(data){
          res.json(data)
      })
  })
  

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;

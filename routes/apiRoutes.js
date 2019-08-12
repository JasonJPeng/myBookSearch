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
        //    subtitle: req.body.volumeInfo.subtitle,
        //    description: req.body.volumeInfo.description,
        //    thumbnail: req.body.volumeInfo.imageLinks.thumbnail,
        //    preview: req.body.volumeInfo.previewLink,
       }).then(function(data){
           console.log("Done===>", data)
       })
       
  })
  
  .get(function(req,res){
     db.Book.find({}).then(function(data){
         res.json(data);
     })
  }) 

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;

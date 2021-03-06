import axios from "axios";

// https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes

var gBookUrl = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  // Gets all books
  getBooks: function(title, author) {
    title = title.trim().replace(" ", "%20");
    author = author.trim().replace(" ", "%20");  
    let apiUrl = gBookUrl+title+ (author? "+inauthor:"+author: "" ) + "&maxResults=40"; 
    console.log(apiUrl);
    return axios.get(apiUrl);
  },
  saveBook: function(bookData) {
      return axios.post("/api/books", bookData);
  },
  getSavedBooks: function() {
      return axios.get("/api/books")
  },
  removeBook: function(id) {
    return axios.delete("/api/books/" + id)
  }
};  
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
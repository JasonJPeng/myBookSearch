import React, { Component } from "react";
import logo from "./logo.svg";
import Search from "./components/search.js";
import Results from "./components/results.js";
import Details from "./components/details.js";
import Footer from "./components/footer.js";
import API from "./API.js";
import "./App.css";
import { SSL_OP_ALL } from "constants";

class App extends Component {
  
  state = {
    savedBooks: [],
    books: [],
    bookInfo: {},
    onBookShelf: true
  }

  componentDidMount() {
    API.getSavedBooks().then(res=>{
      let savedBooks = res.data.map(x=>x.item);
      this.setState( {savedBooks: savedBooks, books: savedBooks})    
    })
  }

  fixBookData = (books) => {
    let fixedBooks = [];
    books.forEach(function(e){
// 1. some have no description property      
      if (!e.volumeInfo.hasOwnProperty("description")) {
        e.volumeInfo.description = " " 
      }
      
      if (!e.volumeInfo.hasOwnProperty("imageLinks")) {
        e.volumeInfo.imageLinks = {smallThumbnail: ""}
      } else {
          if (!e.volumeInfo.imageLinks.hasOwnProperty("smallThumbnail")) {
           e.volumeInfo.imageLinks.smallThumbnail = " " 
          }
      }


      fixedBooks.push(e);
      
    })
    return fixedBooks;
  }

  updateBooks = (books) => {
    console.log(books)
    let fixedBooks = this.fixBookData(books)
    this.setState({books: fixedBooks})
    
  }

  updateDetails = (ind) => {
    console.log("=====Index=====",  ind)
    this.setState({bookInfo: this.state.books[ind]});
  }

  updateStatus = (bookshelf) => {
    this.setState({onBookShelf: bookshelf})
  }

  removeBookInfo = () => {
    console.log("//////////// > ", this.state.bookInfo)
    let newBooks = this.state.books.filter(x=> x.id !== this.state.bookInfo.id) 
    if (this.state.onBookShelf) {
       this.setState({bookInfo: {}})
    }
    this.setState({books: newBooks})
  }

  updateSavedBooks = (newArray) => {
    this.setState({savedBooks: newArray})
  }

  render() {
    return (
      <div className="App">
    
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Welcome to Google Book Search</h2>
        </div>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
       
        <Search 
            updateBooks =  {this.updateBooks} 
            updateStatus = {this.updateStatus}
            updateSavedBooks = {this.updateSavedBooks}

        />
        <Results 
            bookList = {this.state.books} 
            updateDetails = {this.updateDetails} 
            onBookShelf = {this.state.onBookShelf}  
        />
        <Details 
            bookInfo = {this.state.bookInfo} 
            onBookShelf = {this.state.onBookShelf}
            savedBooks = {this.state.savedBooks}
            updateSavedBooks = {this.updateSavedBooks}
            removeBookInfo =  {this.removeBookInfo}     
        />
        <Footer updateApp={this.setState} stateApp = {this.state} />
      </div>
    );
  }
}

export default App;

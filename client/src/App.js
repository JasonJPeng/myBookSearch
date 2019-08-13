import React, { Component } from "react";
import logo from "./logo.svg";
import Search from "./components/search.js";
import Results from "./components/results.js";
import Details from "./components/details.js";
import Footer from "./components/footer.js";
import "./App.css";

class App extends Component {
  state = {
    books: [],
    bookInfo: {},
    onBookShelf: false
  }

  updateBooks = (books) => {
    console.log(books)
    this.setState({books: books})
    console.log("=======+++++ ", this.state.books)
  }

  updateDetails = (ind) => {
    console.log("=====Index=====",  ind)
    this.setState({bookInfo: this.state.books[ind]});
  }

  updateStatus = (bookshelf) => {
    this.setState({onBookShelf: bookshelf})
  }

  removeBookInfo = () => {
    let newBooks = this.state.books.filter(x=> x.id !== this.state.bookInfo.id) 
    this.setState({bookInfo: {}})
    this.setState({books: newBooks})
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
       
        <Search updateBooks =  {this.updateBooks} updateStatus = {this.updateStatus}/>
        <Results 
            bookList = {this.state.books} 
            updateDetails = {this.updateDetails} 
            onBookShelf = {this.state.onBookShelf}  
        />
        <Details 
            bookInfo = {this.state.bookInfo} 
            onBookShelf = {this.state.onBookShelf}
            removeBookInfo =  {this.removeBookInfo}     
        />
        <Footer updateApp={this.setState} stateApp = {this.state} />
      </div>
    );
  }
}

export default App;

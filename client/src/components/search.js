import React, { Component } from "react";
import API from "../API.js";

class Search extends Component {
    state = {
        title: "",
        author: "",
      };
    
    handleInput = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }  

    handleSearch = (event) => {
        // let self = this;
        event.preventDefault();
        API.getBooks(this.state.title, this.state.author).then(res=>{
            console.log(res.data.items)        
            // self.setState({books: res.data.items, saved_mode: false})
            this.props.updateBooks(res.data.items)
            this.props.updateSavedBooks(res.data.item)
            this.props.updateStatus(false)
        })
    }


// should handle search here
    handleMyBooks = (event) => {
        event.preventDefault();
        API.getSavedBooks().then(res=>{
            let items = res.data.map(x=>x.item)
            console.log(items)
            this.props.updateBooks(items)
            this.props.updateStatus(true)
        })

    }

    render() {
        return(
            <div id="search">
                <div id="searchGoogle">
                <button type="button" onClick={this.handleSearch}>Google Books</button>
                <input name = "title" type="text" placeholder = "title"
                   onChange={this.handleInput}
                />
                
                <input name="author" type="text" placeholder = "author"
                   onChange={this.handleInput}
                />
                
                </div>
                <div id="bookShelf">
                <button type="button" onClick={this.handleMyBooks}>My Bookshelf</button>
                </div>
            </div>
        )
    }
}  

export default Search;
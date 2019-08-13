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
            this.props.updateStatus(false)
        })
    }



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
            <div>
                <p>Title:</p>
                <input name = "title" type="text" onChange={this.handleInput}></input>
                <p>Author:</p>
                <input name="author" type="text" onChange={this.handleInput}></input>
                <button type="button" onClick={this.handleSearch}>Search Google</button>
                <button type="button" onClick={this.handleMyBooks}>Search My Bookshelf</button>
            </div>
        )
    }
}  

export default Search;
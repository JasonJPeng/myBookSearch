import React, { Component } from "react";
import API from "../API.js";

class Search extends Component {
    state = {
        books: [],
        title: "",
        author: ""
      };
    
    handleInput = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }  

    handleSubmit = (event) => {
        event.preventDefault();
        API.getBooks(this.state.title, this.state.author).then(res=>{
            console.log(res.data.items)
            this.setState({books: res.data.items})

        })
    }

    handleSave = (event) => {
        event.preventDefault();
        let value = event.target.getAttribute("name")
       alert("hhhh=> " + value )
       console.log(this.state.books[value])
    }

    render() {
        return(
            <div>
                <p>Title:</p>
                <input name = "title" type="text" onChange={this.handleInput}></input>
                <p>Author:</p>
                <input name="author" type="text" onChange={this.handleInput}></input>
                <button type="button" onClick={this.handleSubmit}>submit</button>

                <div id="display">
                    {this.state.books.map((x, ind)=> (<div>
                        <button name={ind} onClick={this.handleSave}>Save</button>
                        <img src={
                            x.volumeInfo.imageLinks? x.volumeInfo.imageLinks.smallThumbnail: ""
                            }/>
                        {x.volumeInfo.title} {x.volumeInfo.subtitle}
                        author: {x.volumeInfo.authors.map(y=>(
                            <div> {y} </div>
                        ))} 
                            <hr></hr>
                        </div>                        
                    ))}
                </div>
            </div>
        )
    }
}  

export default Search;
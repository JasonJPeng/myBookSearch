import React, { Component } from "react";
import API from "../API.js";

class xxx extends Component {
    state = {
    }

    handleSave = (event) => {
        event.preventDefault();
       API.saveBook(this.props.bookInfo)
    }

    render() {
        return(
        <div>
            {!this.props.bookInfo.id ? <span>No Data</span> : 
            <div>
                <h2>{this.props.bookInfo.volumeInfo.title}</h2>
                <h3>{this.props.bookInfo.volumeInfo.subTitle}</h3> 
              
                {this.props.onBookShelf?
                <button onClick={this.handleRemove}>Remove from my bookshelf</button> :
                <button onClick={this.handleSave}>Save to my bookshelf</button>
                }

                ({this.props.bookInfo.id})
                <p>{this.props.bookInfo.volumeInfo.description}</p>
                <img src = {this.props.bookInfo.volumeInfo.imageLinks.thumbnail} />              
            </div>
            }     
         </div>
        )    
      }

}   

export default xxx;
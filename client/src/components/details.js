import React, { Component } from "react";
import API from "../API.js";

class xxx extends Component {
    state = {
    }

    handleSave = (event) => {
        event.preventDefault();
       API.saveBook(this.props.bookInfo)
    }

    handleRemove = (event) => {
        event.preventDefault();
        let self = this;
       API.removeBook(this.props.bookInfo.id).then(function(res){
        
              self.props.removeBookInfo();
        
           console.log(res.data);
       })
    }

    render() {
        return(
        <div id="details">
            {!this.props.bookInfo.id ? <span>No Data</span> : 
            <div>
                <h2>{this.props.bookInfo.volumeInfo.title}</h2>
                <h3>{this.props.bookInfo.volumeInfo.subTitle}</h3> 
              
                {this.props.onBookShelf?
                <button onClick={this.handleRemove}>Remove from Bookshelf</button> :
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
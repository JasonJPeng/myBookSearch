import React, { Component } from "react";
import API from "../API.js";

class xxx extends Component {

    isSaved (book) {
       
       if (!this.props.savedBooks) {
           return false;
       } else {    
           return (this.props.savedBooks.reduce( (a,b)=> (a.id===book.id) || (b.id===book.id))) 
    
        }
    }
    
    
    handleSave = (event) => {
        event.preventDefault();
        let self = this;
        if ( this.isSaved(this.props.bookInfo)) {
        //    alert("NO SAEV")             
        }  else {
            API.saveBook(this.props.bookInfo).then(function(res){
                self.props.removeBookInfo();
                // self.props.savedBooks.push(self.props.bookInfo)
                self.props.updateSavedBooks(self.props.savedBooks)
               })
        }
    }

    handleRemove = (event) => {
        event.preventDefault();
        let self = this;
       API.removeBook(this.props.bookInfo.id).then(function(res){
              self.props.removeBookInfo();
              let newArray = self.props.savedBooks.filter(x=> x.id !== self.props.bookInfo.id )
              self.props.updateSavedBooks(newArray)
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
                <h3>{this.isSaved(this.props.bookInfo)? <span>Already in my bookshelf</span> : <span></span> }</h3>
              
                {this.props.onBookShelf?
                <button onClick={this.handleRemove}>Remove from my bookshelf</button> :
                <button onClick={this.handleSave}>Save to my bookshelf</button>
                }

                ({this.props.bookInfo.id})
                <p>{this.props.bookInfo.volumeInfo.description}</p>
                <img src = {this.props.bookInfo.volumeInfo.imageLinks.thumbnail} alt=""/>              
            </div>
            }     
         </div>
        )    
      }

}   

export default xxx;
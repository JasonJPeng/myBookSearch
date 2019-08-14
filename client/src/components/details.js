import React, { Component } from "react";
import API from "../API.js";

class xxx extends Component {
   // is book in savedBook ?  
    isSaved (book) {  
       if (this.props.onBookShelf) return true;
       else return false;

    // Heroku problem -----    
        // if (this.props.savedBooks.length>=1) {
        //     return (this.props.savedBooks.map(x=>x.id===book.id)).reduce((a,b)=>a||b);
        // } else {
        //     return false;
        // }
    }
    
    
    handleSave = (event) => {
        event.preventDefault();
        let self = this;
        if ( this.isSaved(this.props.bookInfo)) {
           alert("NO SAEV")             
        }  else {
            API.saveBook(this.props.bookInfo).then(function(res){
                self.props.removeBookInfo();
                self.props.savedBooks.push(self.props.bookInfo)
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
            {!this.props.bookInfo.id ? <span className="sub">No Book Data</span> : 
            <div>
                <h2 className="sub">{this.props.bookInfo.volumeInfo.title}</h2>
                <h4 className="sub">{this.props.bookInfo.volumeInfo.subtitle}</h4> 
                <span className="BookAuthor"> ~ {this.props.bookInfo.volumeInfo.authors}</span>
                <div>{ 
                this.isSaved(this.props.bookInfo)? 
                <div><h4 className="warning">Already in my bookshelf </h4>
                    <button onClick={this.handleRemove}>Remove from my bookshelf</button>
                </div> : 
                <div><h4 className="warning">New </h4>
                    <button onClick={this.handleSave}>Save to my bookshelf</button>
                </div> 
                }</div>

               <img className="SearchImg" src = {this.props.bookInfo.volumeInfo.imageLinks.thumbnail} alt=""/> 


                <p>{this.props.bookInfo.volumeInfo.description}</p>
                <a href={this.props.bookInfo.volumeInfo.previewLink} target ="_blank"> Preview</a>
                             
            </div>
            }     
         </div>
        )    
      }

}   

export default xxx;
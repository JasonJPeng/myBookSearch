import React, { Component } from "react";
import API from "../API.js";

class xxx extends Component {

    handleDetails = (event) => {
        event.preventDefault();
        // const {name, ind} = event.target;
        let ind = event.target.getAttribute("name")
        console.log("========", ind)
        this.props.updateDetails(ind);
    }

    render() {
        return(
            // <div>===== {this.props.bookList.length} =======</div>
            <div id="results">
                {this.props.onBookShelf?
                   <h2 className="sub"> {this.props.bookList.length} books in my bookshelf</h2> :
                   <h2 className="sub">> {this.props.bookList.length} books found in Google Books Search  </h2>
                } 
            
                    {this.props.bookList.map((x, ind)=> (<div key={ind.toString()}>
                            
                            <div class="SearchSummary"> 
                            <img class="SearchImg" src= {x.volumeInfo.imageLinks.smallThumbnail} height="100"/>
                                <span class="BookTitle">{x.volumeInfo.title}</span>
                                <span className="BookAuthor"> ~ {x.volumeInfo.authors}</span>
                                <span>{x.volumeInfo.description.substring(0,300)}</span>
                                <span>
                                <a href={x.volumeInfo.previewLink} target ="_blank"> Preview</a>
                                <button name={ind.toString()} onClick={this.handleDetails}>details</button>
                                </span>
                            </div>
                        
                        </div>                        
                    ))}
           </div>
        )    
   }
}

export default xxx;
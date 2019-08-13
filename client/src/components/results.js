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
                   <h2> {this.props.bookList.length} books in my bookshelf</h2> :
                   <h2> {this.props.bookList.length} books found in Google Books Search  </h2>
                } 
            
                    {this.props.bookList.map((x, ind)=> (<div key={ind.toString()}>
                        <button name={ind.toString()} onClick={this.handleDetails}>details</button>

                        {/* <img src=
                            {x.volumeInfo.imageLinks.smallThumbnail? x.volumeInfo.imageLinks.smallThumbnail: ""}
                             alt=""/> */}

  
                        {x.volumeInfo.title} 
                        {/* {x.volumeInfo.subtitle} */}
                        {/* author: {x.volumeInfo.authors.map((y, indY)=>(
                            <div key={indY.toString() + x.id}> {y} </div>
                        ))}  */}
                            <hr></hr>
                        </div>                        
                    ))}
           </div>
        )    
   }
}

export default xxx;
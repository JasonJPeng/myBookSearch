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
                <h2>Search Results</h2>
                    {this.props.bookList.map((x, ind)=> (<div>
                        <button name={ind} onClick={this.handleDetails}>More ..</button>

                        {/* <img src={
                            x.volumeInfo.imageLinks.smallThumbnail? x.volumeInfo.imageLinks.smallThumbnail: ""
                            }/> */}

  
                        {x.volumeInfo.title} {x.volumeInfo.subtitle}
                        author: {x.volumeInfo.authors.map(y=>(
                            <div> {y} </div>
                        ))} 
                            <hr></hr>
                        </div>                        
                    ))}
           </div>
        )    
   }
}

export default xxx;
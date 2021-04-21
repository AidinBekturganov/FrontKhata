import React, {Component} from 'react';




class Name extends Component{
    constructor(){
        super()
        this.state = {
            name:"Parwiz Bork"
        }
    }

    clickedMe = () =>{
        this.setState({
            //name:'Changed Text'
            name:this.state.name === "Parwiz Bork" ? "John Doe" : "Parwiz Bork"
        })
    }


    render(){
        return(
            <div>
                <h1 className="bg-primary text-white text-center">{this.state.name}</h1>
                <button onClick = {this.clickedMe} className="btn btn-success"> Change text</button>
            </div>
        )
    }
}


export default Name;
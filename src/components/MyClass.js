import React, {Component} from 'react';


class MyClass extends Component{

     ClickMe() {
        alert("BUtton fucked");
    }
    render(){
        
        return(
            <div>
            <h1>Nice cock {this.props.email}</h1>
            <button className = "btn btn-success" onClick={this.ClickMe}> Click me </button>
            </div>
        )
    }
}

export default MyClass;
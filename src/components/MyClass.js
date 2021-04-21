import React, {Component} from 'react';


class MyClass extends Component{

     ClickMe() {
        alert("BUtton fucked");
    }
    render(){
        
        return(
            <div>

            <h1 className='bg-primary text-white text-center '>Nice cock {this.props.email}</h1>
            <button className = "btn btn-primaryz" onClick={this.ClickMe}> Click me </button>
            </div>
        )
    }
}

export default MyClass;
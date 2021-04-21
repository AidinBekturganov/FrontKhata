import React from 'react';



function Hello(props) {

    function ClickMe() {
        alert("BUtton fucked");
    }

    return(
        <div>
        <h1>My email : {props.name} </h1> 
        <button onClick={ClickMe}> fork me </button>

        </div>
      
    )
}

export default Hello;
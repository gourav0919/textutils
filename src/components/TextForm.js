import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');

    // setText("I am gourav Khurana");


    const handleUppercaseText = ()=>{
        // console.log("Uppercase is Clicked.");
        let newText = text.toUpperCase();
        setText(newText);

        // console.log(text, newText);
    }

    const handleOnchange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
        
        // console.log(event.target.value);
        // console.log(text);
    }


    return (
        <div className="container my-3">
            <div className="mb-3">
                <label htmlFor="textInput" className="form-label"><h1>{props.heading}</h1></label>
                <textarea className="form-control" id="textInput" rows="8" value={text} onChange={handleOnchange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUppercaseText}>Text to Uppercase</button>
        </div>
    );
}

TextForm.propTypes = {
    heading : PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading : "Enter Text here to Analyze : "
}



// There are two errors in the code 
// 1.) is of showing of previous text 
// 2.) not changing the text when using settext directly after declaring states 
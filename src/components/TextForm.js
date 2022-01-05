import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUppercaseText = ()=>{
        // console.log("Uppercase is Clicked.");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("success", "Text has been converted to Uppercase.");
    }
    const handleLowercaseText = ()=>{
        // console.log("Lowercase is Clicked.");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("success", "Text has been converted to Lowercase.");
    }
    const handleClearText = ()=>{
        // console.log("Cleartext is Clicked.");
        let newText = '';
        setText(newText);
        props.showAlert("success", "Text has been cleared.");
    }
    
    const handleCopyText = (event)=>{
        // console.log("Copy Text is Clicked.");
        let textAreaElm = document.getElementById('textInput');
        textAreaElm.select();
        // navigator.clipboard.writeText(text);
        navigator.clipboard.writeText(textAreaElm.value);
        props.showAlert("success", "Text has been Copied.");
    }
    
    const handleOnchange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const gettingWordsCount = ()=>{
        let count = text.split(/\s+/).filter((element)=>{return element.length!==0}).length;
        return count;   
    }

  
    return (
        <>
            <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
                <div className="mb-3">
                    <label htmlFor="textInput" className="form-label"><h1>{props.heading}</h1></label>
                    <textarea className="form-control" id="textInput" rows="8" value={text} onChange={handleOnchange} placeholder='Enter text here' style={props.mode==='light'?{backgroundColor: "white", color: "black"}:{backgroundColor: "#244a68", color: "white"}}></textarea>
                    <p>{gettingWordsCount()} Words, {text.length} Characters and {(gettingWordsCount() * 0.008).toFixed(2)} Minutes Read</p>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUppercaseText}>Text to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowercaseText}>Text to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
                <hr />
            </div>
            <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
                <h2>Preview</h2>
                <p>{text.length===0?"Nothing to Preview.":text}</p>
            </div>
        </>
    );
}

TextForm.propTypes = {
    heading : PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading : "Enter Text here to Analyze : "
}

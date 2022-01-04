import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text, setText] = useState('');
    const [myStyle, setMyStyle] = useState({
        backgroundColor: "white",
        color: "black"
    });
    const [darkModeBtnText, setDarkModeBtnText] = useState('Enable Dark Mode');
    

    const handleUppercaseText = ()=>{
        // console.log("Uppercase is Clicked.");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowercaseText = ()=>{
        // console.log("Lowercase is Clicked.");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearText = ()=>{
        // console.log("Cleartext is Clicked.");
        let newText = '';
        setText(newText);
    }

    const handleCopyText = (event)=>{
        // console.log("Copy Text is Clicked.");
        let textAreaElm = document.getElementById('textInput');
        textAreaElm.select();
        // navigator.clipboard.writeText(text);
        navigator.clipboard.writeText(textAreaElm.value);
    }

    // Function which toggle between dark mode and white mode by seeing the color of the text
    const toggleDarkMode = ()=>{
        // console.log("Dark Mode Button is Clicked");
        // Change to Dark mode 
        if(myStyle.color === "black"){
            setMyStyle({
                backgroundColor: "#141414",
                color: "white"
            });
            setDarkModeBtnText("Enable White Mode");
        }
        // Change to white mode 
        else{
            setMyStyle({
                backgroundColor: "white",
                color: "black"
            });
            setDarkModeBtnText("Enable Dark Mode");
        }
    }

    const handleOnchange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const gettingWordsCount = ()=>{
        let count = text.split(" ").length;
        if(text.slice(-1) === ' ' || text === ''){
            count-=1;
        }
        return count;
    }

  

    return (
        <>
            <div className="container my-3" style={myStyle}>
                <div className="mb-3">
                    <label htmlFor="textInput" className="form-label"><h1>{props.heading}</h1></label>
                    <textarea className="form-control" id="textInput" rows="8" value={text} onChange={handleOnchange} placeholder='Enter text here'></textarea>
                    <p>{gettingWordsCount()} Words, {text.length} Characters and {(gettingWordsCount() * 0.008).toFixed(2)} Minutes Read</p>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUppercaseText}>Text to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowercaseText}>Text to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={toggleDarkMode}>{darkModeBtnText}</button>
                <hr />
            </div>
            <div className="container my-3" style={myStyle}>
                <h2>Preview</h2>
                <p>{text}</p>
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

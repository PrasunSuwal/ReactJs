 import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");

    }
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text has been cleared","success");
    }
    const handleCopy = ()=>{
        
        navigator.clipboard.writeText(text);
        
        props.showAlert("Text has been copied!!!", "success");
    }
    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space has been removed!!", "success");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        
      }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    // const wordCount = (text)=>{
    //     let regex = /\s+\S+/;
    //     let numOfWords = text.split(regex);
    //     return numOfWords.length;
    //   }
    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1 className='mb-3'>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white', color: props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            <button disabled={text.length === 0} className="btn btn-warning mx-2 my-2" type="submit" onClick={speak} >Speak</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
            {/* <p>{text===""? 0 : wordCount(text)} words and {text.length} characters</p>
            
            <p>Takes {0.008 * text.split(" ").filter((element)=>{return element.lenght!==0}).length} minutes to read</p> */}
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}

import React, { useState }  from 'react'

export default function Textform(props) {
    const handleUpclick = ()=> {
        // console.log("Upercase was click" +text)
        let newText =text.toUpperCase();
        setText(newText)
    }
    const handleLoclick = ()=> {
        // console.log("Upercase was click" +text)
        let newText =text.toLowerCase();
        setText(newText)
    }

    const handleclearclick = ()=> {
        // console.log("Upercase was click" +text)
        let newText =('');
        setText(newText)
    }
   

    const handleonchange = (Event)=> {
        // console.log("click on change")
        setText(Event.target.value)
    }
    const [text, setText] = useState('');
    return (
  <>
<div className= "my-3 container">
<h1>{props.heading}</h1>

<textarea className="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea><br />
<button className="btn btn-primary mx-2"onClick={handleUpclick}>Convert to uppercase</button>   
<button className="btn btn-secondary mx-2"onClick={ handleLoclick }>Convert to Lowercase</button>  
<button className="btn btn-success mx-2" onClick={handleclearclick}>Clear to text</button>
</div>
<div className="container my-3" ></div>
<h1>Your text summary</h1>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008* text.split(" ").length} Minutes to Read</p>
<h2>Preview</h2>
<p>{text}</p>

</>
    );
}

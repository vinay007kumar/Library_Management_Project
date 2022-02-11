import React, { useState }  from 'react'

export default function Textform(props) {
    const handleUpclick = ()=> {                    //arrow Function
        // console.log("Upercase was click" +text)
        let newText =text.toUpperCase();
        setText(newText)
        props.shoAlertsss("Converted to uppercase","success")
    }
    const handleLoclick = ()=> {
        // console.log("Upercase was click" +text)
        let newText =text.toLowerCase();
        setText(newText)
        props.shoAlertsss("Converted to Lowercase","success")
    }

    const handleclearclick = ()=> {
        // console.log("Upercase was click" +text)
        let newText =('');
        setText(newText)
        props.shoAlertsss(" ClearText","success")
    }

    
   

    const handleonchange = (Event)=> {     //Arrow function
        // console.log("click on change")
        setText(Event.target.value)
    }

    const handlecopy =()=>{          //==>Arrow function
       
        var text = document.getElementById("mytext");
        text.select();
        
        navigator.clipboard.writeText(text.value);
        props.shoAlertsss("CopyText","success")
    }
const handleExtraspace =()=>{       //==>Arrow function
let newText = text.split(/[ ]+/ );
setText(newText.join(" "));
props.shoAlertsss("ExtraSpace ","success")
}


    const [text, setText] = useState('');
    return (
  <>
<div className= "my-3 container" style={{color:props.mode==='light'?'gray':'white'}}>
<h1>{props.heading}</h1>

<textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='light'?'white':'gray', color:props.mode==='dark'?'white':'black'}} id="mytext" rows="8"></textarea><br />
<button className="btn btn-primary mx-2"onClick={handleUpclick}>Convert to uppercase</button>   
<button className="btn btn-secondary mx-2"onClick={ handleLoclick }>Convert to Lowercase</button>  
<button className="btn btn-success mx-2" onClick={handleclearclick}>Clear to text</button>
<button className="btn btn-success mx-2" onClick={handlecopy}>Copy text</button>
<button className="btn btn-success mx-2" onClick={handleExtraspace}>Extra text</button>
</div>
<div className="container my-3" style={{color:props.mode==='light'?'gray':'white'}} >
<h1>Your text summary</h1>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008* text.split(" ").length} Minutes to Read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
</div>
</>
    );
}

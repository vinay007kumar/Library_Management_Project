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
       
        
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
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
<div className= "my-3 container" style={{color:props.mode==='light'?'gray':'gray'}}>
<h1 className='mb-2'>{props.heading}</h1>

<textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'white':'#5cada6', color:props.mode==='white'?'dark':'black'}} id="mytext" rows="8"></textarea><br />
<button disabled={text.length===0}className="btn btn-primary mx-1 my-1"onClick={handleUpclick}>Convert to uppercase</button>   
<button disabled={text.length===0}className="btn btn-secondary mx-1 my-1"onClick={ handleLoclick }>Convert to Lowercase</button>  
<button disabled={text.length===0}className="btn btn-success mx-1 my-1" onClick={handleclearclick}>Clear to text</button>
<button disabled={text.length===0}className="btn btn-success mx-1 my-1" onClick={handlecopy}>Copy text</button>
<button disabled={text.length===0}className="btn btn-success mx-1 my-1" onClick={handleExtraspace}>Extra text</button>
</div>
<div className="container my-3" style={{color:props.mode==='light'?'gray':'gray'}} >
<h1>Your text summary</h1>
<p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
<p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
</div>
</>
    );
}

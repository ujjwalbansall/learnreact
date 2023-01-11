import React , {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to uppercase",'success');
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lowercase",'success');
    }

    const handleChange = (event) =>{
        setText(event.target.value);
    }

    const handleReSpace = ()=>{
        let newText = "";
        newText = text.split(/[ ]+/ );
        setText(newText.join(" "));
        props.showAlert("Extra Spcaes Removed",'success');
    }

    const handleClearSpace = () =>{
        setText("");
        props.showAlert("Space Clear",'success');
    }

    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied",'success');
    }

    const [text,setText] = useState('');
  return (
    <>
    <div className='container' style={{color : props.mode==='light'?'black':'white'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange={handleChange} id="myBox" rows="12" style={{backgroundColor: props.mode==='light'?'white':'#34383b' , color : props.mode==='light'?'black':'white'}}></textarea>
        </div>
        <button className={`btn btn-${props.buttoncolour} mx-1 my-2`}  onClick={handleUpClick}>Convert to Uppercase</button>
        <button className={`btn btn-${props.buttoncolour} mx-1 my-2`}  onClick={handleLoClick}>Convert to Lowercase</button>
        <button className={`btn btn-${props.buttoncolour} mx-1 my-2`}  onClick={handleReSpace}>Remove Extra Spaces</button>
        <button className={`btn btn-${props.buttoncolour} mx-1 my-2`}  onClick={handleClearSpace}>Clear Text</button>
        <button className={`btn btn-${props.buttoncolour}  mx-1 my-2`}  onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='light'?'black':'white'}}>
        <h1 style={{color: props.mode==='light'?'black':'white'}}>Text Summary</h1>
        <p>{text.split(" ").filter((element)=>{ return element.length!==0}).length} words and {text.length} charachters</p>
        <p> {.008 * text.split(" ").length} minutes to read</p>
        <h2 > Preview Text</h2>
        <p>{text.length>0?text:'Enter text to preview'}</p>
    </div>
    </>
    
  )
}

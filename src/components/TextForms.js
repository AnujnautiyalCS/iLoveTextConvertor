import React, {useState} from 'react';

export default function TextForms(props){
    const [extractedEmails, setExtractedEmails] = useState([]);
    const [extractedUrls, setExtractedUrls] = useState([]);
    const [numberOfEmailsCount, setNumberOfEmailsCount] = useState(0);
    const [numberOfUrlsCount, setNumberOfUrlsCount] = useState(0);
    const [transformedText, setTransformedText] = useState('');
   
 
    const handleUpClick = ()=>{
        // console.log("UPppercase was click "+ text);
        let newText = text.toUpperCase();
        // setText(newText);
        setTransformedText(newText);

    }
    const handleUpClick2 = ()=>{
        // console.log("UPppercase was click "+ text);
        let newText = text.toLowerCase();
        // setText(newText);
        setTransformedText(newText);
    }
    const handleUpNumber = ()=>{
        const removenumber = /\d+/g;
        const cleanedTextValue = text.replace(removenumber, '');
        setCleanedText(cleanedTextValue);
    }

    const handleUpRemoveText= ()=>{
        const removeText = /[^0-9]/g;
        const cleanedTextValue = text.replace(removeText, ' ');
        setCleanedText(cleanedTextValue);
    }
    
      const handleExtractUrls = () => {
        const urlRegex = /\bhttps?:\/\/[^\s]+/g;
        const extractedEmailsArray = text.match(urlRegex) || [];
        setExtractedUrls(extractedEmailsArray);
        const numberOfUrls = extractedEmailsArray.length;
        setNumberOfUrlsCount(numberOfUrls);
        setTransformedText(text);
      };
    const handleUpCapitalize = () => {
        let newText = capitalizeFirstLetterOfWords(text);
        setTransformedText(newText);
      };
    function capitalizeFirstLetterOfWords(text) {
        return text
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      }
      
      const handleUpToggle = () => {
        let newText = ToggleFirstLetterOfWords(text);
        // setText(newText);
        setTransformedText(newText);
      }
        function ToggleFirstLetterOfWords(text) {
            return text
              .split(' ')
              .map((word) => word.charAt(0).toLowerCase() + word.slice(1))
              .join(' ');
          }
    const handleExtractClick = () => {
          const emailRegex = /\S+@\S+\.\S+/g;
          const extractedEmailsArray = text.match(emailRegex) || [];
          setExtractedEmails(extractedEmailsArray);
          const numberOfEmails = extractedEmailsArray.length;
          setNumberOfEmailsCount(numberOfEmails);
          setTransformedText(text);
        };

    const handleOnChange = (event)=>{ 
        console.log("On Change");
        setText(event.target.value);
    }
    const [cleanedText, setCleanedText] = useState('');

    const handleRemoveClick = () => {
        // Regular expression to remove HTML tags
        const htmlTagRegex = /<\/?[^>]+(>|$)/g;
        const cleanedTextValue = text.replace(htmlTagRegex, '');
        setCleanedText(cleanedTextValue);
        setTransformedText(text);
  };
  const handleCleanWhitespace = () => {
    const cleanedWhitespaceText = cleanWhitespace(text);
    setTransformedText(cleanedWhitespaceText);
  };

  function cleanWhitespace(text) {
    // Replace multiple consecutive spaces with a single space
    const cleanedText = text.replace(/\s+/g, ' ');
    const trimmedText = cleanedText.trim();
    return trimmedText;
  };
    const handleCopy = () => {
      var text = document.getElementById("asmyBox2");
      text.select();
      navigator.clipboard.writeText(text.value);
    }


  const [text, setText] = useState("enter your text here for the reference");
    return (
   <>
   
   <div className='container my-5'>
    
    <form>
        <div className="mb-3"> 
        <div className="row" style={{color: props.mode=== 'dark'?'white':'black'}}>
          <div className="col-sm-6">
           <h2>{props.heading}</h2>
          <textarea style={{backgroundColor: props.mode === 'dark'? 'grey':'white'}} rows="8" value={text} className="form-control" onChange={handleOnChange} id="myBox"></textarea>
          </div>
          <div className="col-sm-6">
          <div className='bongo'><h2>Output</h2><span className='testt' onClick={handleCopy}><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M0 3.75A.75.75 0 0 1 .75 3h7.497c1.566 0 2.945.8 3.751 2.014A4.495 4.495 0 0 1 15.75 3h7.5a.75.75 0 0 1 .75.75v15.063a.752.752 0 0 1-.755.75l-7.682-.052a3 3 0 0 0-2.142.878l-.89.891a.75.75 0 0 1-1.061 0l-.902-.901a2.996 2.996 0 0 0-2.121-.879H.75a.75.75 0 0 1-.75-.75Zm12.75 15.232a4.503 4.503 0 0 1 2.823-.971l6.927.047V4.5h-6.75a3 3 0 0 0-3 3ZM11.247 7.497a3 3 0 0 0-3-2.997H1.5V18h6.947c1.018 0 2.006.346 2.803.98Z"></path></svg></span></div>
          <div className='bongo'></div>
          <textarea rows="8" value={transformedText} readOnly className="form-control" id="asmyBox2"></textarea>
          </div>
          <span>{text.trim().split(/\s+/).filter(Boolean).length} words || {text.length} characters <span> ||  { 0.008 * text.split("").length} Minutes to Read</span></span>
        </div>

        </div>
        <button type='button' onClick={handleUpClick} className="btn btn-primary mx-2">Convert to Upper Case</button>
        <button type='button' onClick={handleUpClick2} className="btn btn-primary">Convert to Lower Case</button>
        <button type='button' onClick={handleUpCapitalize} className="btn btn-primary mx-2 my-2">Convert to Capitalize</button>
        <button type='button' onClick={handleExtractClick} className="btn btn-primary mx-2 my-2">Extract Email from the text</button>
        <button type='button' onClick={handleRemoveClick} className="btn btn-primary mx-2 ">Remove HTML TAGS </button>
        <button type='button' onClick={handleUpToggle} className="btn btn-primary mx-2 my-2 ">Convert to Toggle Case </button>
        <button type='button' onClick={handleUpNumber} className="btn btn-primary mx-2 my-2 ">Remove Numbers </button>
        <button type='button' onClick={handleUpRemoveText} className="btn btn-primary mx-2 my-2 ">Remove Alphabets and show Numbers </button>
        <button type='button' onClick={handleExtractUrls} className="btn btn-primary mx-2 my-2 ">Extract URls</button>
        <button type='button' onClick={handleCleanWhitespace} className="btn btn-primary mx-2 my-2 ">Clean White Space</button> 

       
    </form>
    </div>
        <div className="container"  >
            {/* <h4> Preview your Text</h4>
            <p>{text}</p> */}
            <ul>
          {extractedEmails.map((email, index) => (
            <li key={index}>{email}</li>
          ))}
        </ul>
        <p>Number of emails extracted: {numberOfEmailsCount}</p>
        <div>
          <div className="container">
          <ul>
          {extractedUrls.map((url, index) => (
            <li key={index}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {url}
              </a>
            </li>
          ))}
        </ul>
        <p>Number of URLs extracted: {numberOfUrlsCount}</p>
          </div>
        <h2>Cleaned Text:</h2>
        <textarea rows="8" className="form-control"value={cleanedText}></textarea>
      </div>
        </div>
    </> 

  )
}
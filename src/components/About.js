import React, {useState} from 'react'

export default function About() {
    const [mystyle, setMyStyle] = useState({
      color: 'black',
      backgroundColor: 'white'  
    })
    const [btnText, setBtnText] = useState('Enable Dark Mode')

   const toggleStyle = () => {
      if(mystyle.color === 'white'){
        setMyStyle ({
          color: 'black',
          backgroundColor: 'white'
      })
      setBtnText("Enable Dark Mode")
    }
      else{
        setMyStyle({
          color: 'white',
          backgroundColor: '#202021'
        
        })
        setBtnText('Enable light Mode')
      }
    }
  return (
    
    <div className="container my-5" style={mystyle}>
        <h2>About us</h2>
        <div className="accordion" id="accordionExample" style={mystyle}>
          <div className="accordion-item" style={mystyle} >
            <h2 className="accordion-header" style={mystyle}>
              <button style={mystyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div style={mystyle} id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header" style={mystyle}>
              <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div style={mystyle} id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div style={mystyle} className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header" style={mystyle}>
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={mystyle} data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" style={mystyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div style={mystyle} className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
        <button onClick={toggleStyle} className="btn btn-primary my-3">{btnText}</button>
    </div>
  )
}
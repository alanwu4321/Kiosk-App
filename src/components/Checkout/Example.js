import React from 'react';
import ReactDOM from 'react-dom';


// gray background
const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 30,
}

const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 10,
    maxWidth: 770,
    minHeight: 700,
    margin: '0 auto',
    padding: 30,
    position: "relative"
};

const footerStyle = {
    position: "absolute",
    bottom: 5
};

const modalRoot = document.getElementById("modal-root");

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement("div");
    }
    onClose = (e) => {
        console.log("BUTTON CLICKED");
        e.stopPropagation ();
        this.props.onClose && this.props.onClose(e);
    }

    onKeyUp = (e) => {
        // Lookout for ESC key (27)
        if (e.which === 27 && this.props.show) {
            this.onClose(e);
        }
    }

    componentDidMount() {
        document.addEventListener("keyup", this.onKeyUp);
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        document.removeEventListener("keyup", this.onKeyUp);
        modalRoot.removeChild(this.el);
    }

    render() {
         if (!this.props.show) {
            return null;
        }

        return(
            <div className = 'card-button' style={backdropStyle}>

                <div className = 'card-button dib br3 pa3 ma2 bw2 shawdow-5 grow' style={modalStyle}>
                <div> 
                <h1 className='fl mt-3 mb-2 display-3'>Fill me Out ... </h1> 
                </div>
               <div> 
                 <small className='fl mb-3 question-test' >   We will get in touch with you soon     </small>  
            </div> 
             <div> 
                <u className='fl mt-2 mb-2 lead  text-uppercase '> {this.props.currentKit}</u> 
            </div> 
                    {this.props.children}
                    <div style={footerStyle}>
                        <button className = ' tc f6 link dim br1 ba bw1 ph3 pv2 mb-3 dib btn btn-outline-secondary btn-m card-button'onClick={(e) => { this.onClose(e)}}>
                            Back
                        </button>
                    </div>
                </div>
            </div>
        );
     
   
    }
}

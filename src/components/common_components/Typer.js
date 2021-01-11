/* -------------------------------------------------------------------------- */
/*                        A note on the Typer component                       */
/* 
I don't typically use class components, but I did in this case because when 
trying to create the Typer component with a function there was an unavoidable 'flicker'
on the page. It was a styling bug I couldn't resolve without a class component. 🐛🐜
*/
/* -------------------------------------------------------------------------- */

import React from 'react'; 

class Typer extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            text: '', 
            isDeleting: false, 
            loopCount: 0, 
            typingSpeed: 200
        }
    }

    componentDidMount() {
        this.handleType();
    }

    handleType = () => {
        const { dataText } = this.props; 
        const { isDeleting, loopCount, text, typingSpeed } = this.state;
        const i = loopCount % dataText.length; 
        const fullText = dataText[i]; 

        //* set the state 
        this.setState({
            text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1), 
            typingSpeed: isDeleting ? 90 : 150
        }); 

        if (!isDeleting && text === fullText) {
            setTimeout(() => this.setState({ isDeleting: true }), 500);
            } else if (isDeleting && text === "") {
                this.setState({
                    isDeleting: false, 
                    loopCount: loopCount + 1
                }); 
            } 
        
            //* write statement checking for last word, set isDeleting to false in that case *// 
            setTimeout(this.handleType, typingSpeed);
        }; 
    
    render() {
        return (
            <h3 className="typer-text">{this.props.head} 
                <span className="animated-text">{this.state.text}</span>
                <span id="cursor"></span>
                {this.props.tail}
            </h3>
        ); 
    }
}

export default Typer; 
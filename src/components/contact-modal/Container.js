import React, { Component } from 'react'; 
import Modal from './Modal'; 
import TriggerButton from './TriggerButton'; 

export class Container extends Component {
    state = { isShown: false }; 

    //* start modal helper methods 
    showModal = () => {
        this.setState({ isShown: true }, () => {
            this.closeButton.focus(); 
        }); 
        // a method we'll define below 
        this.toggleScrollLock(); 
    }

    closeModal = () => {
        this.setState({ isShown: false }); 
        this.TriggerButton.focus(); 
        this.toggleScrollLock(); 
    }

    // close on 'esc' press 
    //! for more info on keycodes: https://blogs.longwin.com.tw/lifetype/key_codes.html 
    onKeyDown = (event) => {
        if (event.keyCode === 27) {
            this.closeModal(); 
        }; 
    }

    onClickOutside = (event) => {
        // if the modal is rendered, and the click's target is inside the MODAL, return and do nothing
        if (this.modal && this.modal.contains(event.target)) return; 
        // otherwise, close the modal 
        this.closeModal(); 
    }

    toggleScrollLock = () => {
        document.querySelector('html').classList.toggle('scroll-lock'); 
    }
    render() {
        return(
            <React.Fragment>
                <TriggerButton 
                    showModal={this.showModal}
                    buttonRef={(n) => (this.TriggerButton = n)}
                    triggerText={this.props.triggerText}
                /> 
                { this.state.isShown ? (
                    <Modal 
                        modalRef={(n) => (this.modal = n)}
                        buttonRef={(n) => (this.closeButton = n)}
                        closeModal={this.closeModal}
                        onKeyDown={this.onKeyDown}
                        onClickOutside={this.onClickOutside}
                    />
                ) : null }
                
            </React.Fragment>
        )
    }
}


/* -------------------------------------------------------------------------- */
/*                        About the Container component                       */
//* This component is used to support a Modal component
// Usually a modal appears in the center of the screen, with the original content still visible behind it 
// This component will dim the area of the DOM surrounding a modal

//* Features: 
//! Closes when user clicks outside the modal area 
//! Dims background to highlight modal 
//! Support conditional render 
//! Pressing esc closes the form 
//* All these will be supported by methods provided here in the Container 
/* -------------------------------------------------------------------------- */
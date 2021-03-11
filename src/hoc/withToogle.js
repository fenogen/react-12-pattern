import React, { Component, useState } from 'react'


// -----------------------------------------> Пример через класс (проще):

const withToogle = (NewComponent) => {
return class extends Component {

    state = {
        isOpen: false,
    }

    toggle = () => {
        this.setState (prev => ({
            isOpen: !prev.isOpen,
        }))
    }
    render() {
        return <NewComponent {...this.props} open={this.state.isOpen} toggle={this.toggle}/>
    }
    }
}

export default withToogle;


// -----------------------------------------> Пример через ф-ю (сложнее для понимания):
    // const withToogle = (NewComponent) => {
    //     return (props) => {
    //     const [isOpen, setIsOpen] = useState(false);
    //     const toggle = () => {
    //         setIsOpen(!isOpen)
    //     }
    //     return <NewComponent {...props} open={isOpen} toggle={toggle} />
    //     }
    // }
    
    // export default withToogle;
